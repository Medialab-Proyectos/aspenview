import type { Metadata } from "next";
import Link from "@/components/i18n/LocaleLink";
import { LegalPage, LegalSection, LegalIntro, Toc, Address } from "@/components/legal/Legal";
import { ROUTES } from "@/lib/routes";

import { T } from "@/components/i18n/T";
import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/terms", {
    title: "Terms of Service | AspenView",
    description: "Terms of Service for the AspenView Technology Partners, Inc. website and related services.",
  });
}

/* The Figma frame reuses the Privacy Policy table of contents here; this one points to the Terms' own sections. */
const SECTIONS = [
  { id: "restrictions", label: "Restrictions/Prohibited Behavior" },
  { id: "your-data", label: "Your Data" },
  { id: "sms", label: "Application to Person (SMS) Messaging Compliance" },
  { id: "indemnification", label: "Indemnification" },
  { id: "warranties", label: "Disclaimer of Warranties" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "termination", label: "Termination of Services" },
  { id: "ip", label: "Intellectual Property" },
  { id: "amendments", label: "Future Amendments" },
  { id: "law", label: "Governing Law and Venue" },
  { id: "disputes", label: "Dispute Resolution" },
];

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <LegalIntro>
        <p><T>{"Last Updated: July 7, 2025"}</T></p>
        <p><T>{"You are viewing the Terms of Service (the “Terms”) of AspenView Technology Partners, Inc. (“AspenView”, “we” or “our”). By accessing our website and using the services offered related to the website (the “Services”), you are communicating that you have reviewed, agreed to, and will adhere to the following terms and conditions for use. We also encourage you to review our "}</T><Link href={ROUTES.privacy}><T>{"Privacy Policy"}</T></Link><T>{", which is incorporated by reference within these Terms."}</T></p>
      </LegalIntro>

      <Toc items={SECTIONS.map((s) => ({ label: s.label, href: `#${s.id}` }))} />

      <LegalSection id="restrictions" heading={<T>{"Restrictions/Prohibited Behavior"}</T>}>
        <p><T>{"You may only use our website and Services for lawful purposes and in accordance with these Terms. You must not use the website or our Services in any way that:"}</T></p>
        <ul>
          <li><T>{"Violates any applicable federal, state, local, or international law, regulation or other governmental decree."}</T></li>
          <li><T>{"Logs into a server or account that you do not have permission to access."}</T></li>
          <li><T>{"Accesses data or takes any action to obtain Services not intended for you or your use;"}</T></li>
          <li><T>{"Attempts to probe, scan, or test the vulnerability of any system, subsystem, or network related to the website or Services or to any of our computers or computer systems;"}</T></li>
          <li><T>{"Tampers, hacks, modifies, or otherwise corrupts or breaches security or authentication measures;"}</T></li>
          <li><T>{"Introduces or transmits material that contains viruses, Trojan horses, worms, time bombs, logic bombs, cancelbots, or other technologically malicious or harmful computer programming routines or engines with the intent or effect of damaging, destroying, disrupting, or otherwise impairing, a computer’s functionality or the operation of our website;"}</T></li>
          <li><T>{"Interferes with, intercepts, or expropriates any system, data, or information;"}</T></li>
          <li><T>{"Interferes with service to any user, host, or network including, but not limited to, by means of overloading, “flooding,” “mailbombing,” or “crashing” any system, subsystem, or network related to our website or otherwise; and"}</T></li>
          <li><T>{"Attacks our website via a denial-of-service attack or a distributed denial-of service attack."}</T></li>
        </ul>
        <p><T>{"We reserve the right to report any activity that violates or may violate these Terms, any law or regulation to the appropriate law enforcement officials, regulators, or other third parties without prior notice to you, and we will cooperate with such authorities as necessary, including disclosing your identity (see our"}</T>{" "}
          <Link href={ROUTES.privacy}><T>{"Privacy Policy"}</T></Link><T>{" for more information)."}</T></p>
      </LegalSection>

      <LegalSection id="your-data" heading={<T>{"Your Data"}</T>}>
        <p><T>{"We abide by all applicable privacy and data protection laws. Our Privacy Policy provides additional details about how we treat and protect your personal information."}</T></p>
      </LegalSection>

      <LegalSection id="sms" heading={<T>{"Application to Person (SMS) Messaging Compliance"}</T>}>
        <ul>
          <li>
            <strong><T>{"Program Description:"}</T></strong><T>{" AspenView Technology Partners, Inc. (“AspenView”) may send SMS communications to individuals who voluntarily opt in through our website forms or other communication channels. Messages may include responses to inquiries, appointment reminders, recruiting and hiring communications, service-related updates, event communications, and other relevant business communications."}</T></li>
          <li>
            <strong><T>{"Opt-Out Instructions:"}</T></strong><T>{" You can cancel the SMS service at any time by replying STOP to any message received from AspenView. After sending STOP, you will receive a confirmation message that you have been unsubscribed. After this, you will no longer receive SMS messages from AspenView unless you opt in again."}</T></li>
          <li>
            <strong><T>{"Support:"}</T></strong><T>{" If you are experiencing issues with the messaging program, reply HELP for assistance or contact us directly at "}</T><a href="mailto:marketing@aspenview.com"><T>{"marketing@aspenview.com"}</T></a>.
          </li>
          <li>
            <strong><T>{"Carrier Disclaimer:"}</T></strong><T>{" Carriers are not liable for delayed or undelivered messages."}</T></li>
          <li>
            <strong><T>{"Costs and Message Frequency:"}</T></strong><T>{" Message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies based on your interactions with AspenView Technology Partners. Users may receive up to four (4) messages per month related to inquiries, recruiting processes, appointments, service communications, or other business-related matters. For questions regarding your text plan or data plan, please contact your wireless provider."}</T></li>
          <li>
            <strong><T>{"Privacy and Consent:"}</T></strong><T>{" By providing your mobile phone number and opting in, you expressly consent to receive SMS communications from AspenView Technology Partners, Inc. at the number provided. Consent is not a condition of purchasing any goods or services. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data, consent records, and related personal information will not be sold or shared with third parties for marketing purposes."}</T></li>
        </ul>
        <p><T>{"For additional information regarding how we collect, use, and protect personal information, please review our"}</T>{" "}
          <Link href={ROUTES.privacy}>
            <strong><T>{"Privacy Policy."}</T></strong>
          </Link>
        </p>
      </LegalSection>

      <LegalSection id="indemnification" heading={<T>{"Indemnification"}</T>}>
        <p><T>{"You agree to indemnify and hold harmless AspenView, its contractors, and its licensors and their respective directors, officers, employees and agents from and against any and all claims and expenses, including attorney’s fees, arising out of your use of our Services, including but not limited to any violation of the Privacy Policy and/or these Terms."}</T></p>
      </LegalSection>

      <LegalSection id="warranties" heading={<T>{"Disclaimer of Warranties"}</T>}>
        <p><T>{"Our Services are provided on an “as-is” basis and we make no guarantees the Services or platform will be free of errors, interruptions in service or technical issues. We make no warranties, express or implied, and hereby disclaim all implied warranties, including any warranty of merchantability and warranty of fitness for a particular purpose."}</T></p>
      </LegalSection>

      <LegalSection id="liability" heading={<T>{"Limitation of Liability"}</T>}>
        <p><T>{"WHERE ALLOWED UNDER APPLICABLE LAW, IN NO EVENT WILL ASPENVIEW, ITS DIRECTORS, OFFICERS, EMPLOYEES, THIRD-PARTY AFFILIATES, OR AGENTS BE LIABLE, WHETHER IN CONTRACT OR TORT (INCLUDING NEGLIGENCE), BREACH OF STATUTORY DUTY, OR OTHERWISE, EVEN IF LOSS OR DAMAGE MAY BE FORESEEABLE, FOR (I) ANY SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES RELATED TO YOUR USE, MISUSE, OR INABILITY TO USE OUR SERVICES; (II) ANY INTERRUPTION OF USE OF OUR SERVICES OR LOSS OR CORRUPTION OF DATA; OR (III) ANY RELATED LOST PROFITS. OUR LIABILITY ARISING FROM THE PRIVACY POLICY, THESE TERMS AND THE USE OF OUR SERVICES WILL NOT EXCEED THE GREATER OF $100 OR THE TOTAL AMOUNT YOU HAVE PAID US FOR THE SERVICES IN THE PAST 12 MONTHS."}</T></p>
      </LegalSection>

      <LegalSection id="termination" heading={<T>{"Termination of Services"}</T>}>
        <p><T>{"We may, in our sole discretion, restrict your access to all or part of the Services, deny providing Services or permanently delete your account, at any time, with or without reason, and with or without providing notice."}</T></p>
      </LegalSection>

      <LegalSection id="ip" heading={<T>{"Intellectual Property"}</T>}>
        <p><T>{"The trademarks, service marks, and logos on our website are all the registered and unregistered intellectual property of AspenView. We do not allow any use of our intellectual property without our express written permission."}</T></p>
        <p><T>{"Unless otherwise indicated, you grant us a worldwide, non-exclusive, royalty free, perpetual, transferable license to use, reproduce, distribute and create derivative works of any submissions, documents, materials, ideas, suggestions, or other information provided to or communicated to us through the contact form, email, phone, or other means of communication with us."}</T></p>
      </LegalSection>

      <LegalSection id="amendments" heading={<T>{"Future Amendments"}</T>}>
        <p><T>{"We reserve the right to make changes or updates to these Terms at any time. Because of that, we encourage to you periodically return to review these Terms. Your continued use of the Services following any updates shall mean that you agree and accept such changes."}</T></p>
      </LegalSection>

      <LegalSection id="law" heading={<T>{"Governing Law and Venue"}</T>}>
        <p><T>{"Our Services are protected by applicable copyright, trademark, and other US and foreign laws. All claims arising out of or relating to the Privacy Policy, these Terms or the use of the Services will be governed by Delaware law."}</T></p>
      </LegalSection>

      <LegalSection id="disputes" heading={<T>{"Dispute Resolution"}</T>}>
        <p><T>{"A good faith attempt to resolve any issue with us must be made before the escalation of any claim or dispute. Please include a description of your issue, any other pertinent information, and the resolution you seek. You may contact us by emailing us at "}</T><strong><T>{"privacy@aspenviewtechnology.com"}</T></strong><T>{" or writing to us at the mailing address below."}</T></p>
        <p><T>{"YOU AGREE THAT ALL CLAIMS, WITH THE EXCEPTION OF CLAIMS RELATED TO INTELLECTUAL PROPERTY, WILL BE RESOLVED BY BINDING ARBITRATION ADMINISTERED BY THE AMERICAN ARBITRATION ASSOCIATION. IF YOUR CLAIM QUALIFIES UNDER SMALL CLAIMS COURT, YOU MAY ALSO BRING YOUR CLAIM THERE. FOR ANY CLAIM THAT IS NOT ARBITRATED OR RESOLVED IN SMALL CLAIMS COURT, YOU AGREE THAT IT WILL BE RESOLVED EXCLUSIVELY IN THE STATE COURTS LOCATED IN DELAWARE OR THE U.S. DISTRICT COURTS IN DELAWARE. YOU AND ASPENVIEW EXPRESSLY WAIVE A TRIAL BY JURY."}</T></p>
        <h3><T>{"How to Contact Us"}</T></h3>
        <p><T>{"Please contact us at the mailing address below or by emailing us at"}</T>{" "}
          <a href="mailto:privacy@aspenview.com">
            <strong><T>{"privacy@aspenview.com"}</T></strong>
          </a>{" "}<T>{"if you have any questions, comments or concerns regarding this Privacy Policy."}</T></p>
        <Address />
      </LegalSection>
    </LegalPage>
  );
}
