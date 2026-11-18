import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 * Set CONTACT_WEBHOOK_URL in Vercel (e.g. a HubSpot / Zapier / Make / Slack webhook) to forward submissions.
 * Without it, submissions are written to the Vercel function logs so nothing is lost.
 */
type Payload = {
  inquiry?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  topic?: string;
  details?: string;
  updates?: boolean;
  consent?: boolean;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const data = {
    inquiry: clean(body.inquiry, 80),
    firstName: clean(body.firstName, 120),
    lastName: clean(body.lastName, 120),
    email: clean(body.email, 200),
    company: clean(body.company, 200),
    topic: clean(body.topic, 200),
    details: clean(body.details, 5000),
    updates: Boolean(body.updates),
    consent: Boolean(body.consent),
    submittedAt: new Date().toISOString(),
  };

  if (!data.firstName || !data.lastName || !EMAIL.test(data.email) || !data.company || !data.topic || !data.consent) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    console.info("[contact] new submission (CONTACT_WEBHOOK_URL not set):", JSON.stringify(data));
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    console.error("[contact] webhook failed:", err, JSON.stringify(data));
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  }
}
