import { NextResponse, type NextRequest } from "next/server";

/* English lives at the root (/services) and Spanish under /es (/es/services).
   Internally every page is app/[lang]/…, so unprefixed paths are rewritten to /en/…,
   and /en/… is redirected back to the clean URL to avoid duplicate pages. */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/es" || pathname.startsWith("/es/")) return NextResponse.next();

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  /* skip API routes, Next internals and any file with an extension (images, videos, fonts…) */
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
