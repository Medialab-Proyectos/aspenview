import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection, LegalIntro, Toc, Address } from "@/components/legal/Legal";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Terms of Service | AspenView",
  description: "Terms of Service for the AspenView Technology Partners, Inc. website and related services.",
};

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
        <p>Last Updated: July 7, 2025</p>
        <p>
          You are viewing the Terms of Service (the “Terms”) of AspenView Technology Partners, Inc. (“AspenView”, “we” or
          “our”). By accessing our website and using the services offered related to the website (the “Services”), you are
          communicating that you have reviewed, agreed to, and will adhere to the following terms and conditions for use.
          We also encourage you to review our <Link href={ROUTES.privacy}>Privacy Policy</Link>, which is incorporated by
          reference within these Terms.
        </p>
      </LegalIntro>

      <Toc items={SECTIONS.map((s) => ({ label: s.label, href: `#${s.id}` }))} />

      <LegalSection id="restrictions" heading="Restrictions/Prohibited Behavior">
        <p>
          You may only use our website and Services for lawful purposes and in accordance with these Terms. You must not
          use the website or our Services in any way that:
        </p>
        <ul>
          <li>Violates any applicable federal, state, local, or international law, regulation or other governmental decree.</li>
          <li>Logs into a server or account that you do not have permission to access.</li>
          <li>Accesses data or takes any action to obtain Services not intended for you or your use;</li>
          <li>
            Attempts to probe, scan, or test the vulnerability of any system, subsystem, or network related to the website
            or Services or to any of our computers or computer systems;
          </li>
          <li>Tampers, hacks, modifies, or otherwise corrupts or breaches security or authentication measures;</li>
          <li>
            Introduces or transmits material that contains viruses, Trojan horses, worms, time bombs, logic bombs,
            cancelbots, or other technologically malicious or harmful computer programming routines or engines with the
            intent or effect of damaging, destroying, disrupting, or otherwise impairing, a computer’s functionality or the
            operation of our website;
          </li>
          <li>Interferes with, intercepts, or expropriates any system, data, or information;</li>
          <li>
            Interferes with service to any user, host, or network including, but not limited to, by means of overloading,
            “flooding,” “mailbombing,” or “crashing” any system, subsystem, or network related to our website or otherwise;
            and
          </li>
          <li>Attacks our website via a denial-of-service attack or a distributed denial-of service attack.</li>
        </ul>
        <p>
          We reserve the right to report any activity that violates or may violate these Terms, any law or regulation to
          the appropriate law enforcement officials, regulators, or other third parties without prior notice to you, and
          we will cooperate with such authorities as necessary, including disclosing your identity (see our{" "}
          <Link href={ROUTES.privacy}>Privacy Policy</Link> for more information).
        </p>
      </LegalSection>

      <LegalSection id="your-data" heading="Your Data">
        <p>
          We abide by all applicable privacy and data protection laws. Our Privacy Policy provides additional details about
          how we treat and protect your personal information.
        </p>
      </LegalSection>

      <LegalSection id="sms" heading="Application to Person (SMS) Messaging Compliance">
        <ul>
          <li>
            <strong>Program Description:</strong> AspenView Technology Partners, Inc. (“AspenView”) may send SMS
            communications to individuals who voluntarily opt in through our website forms or other communication channels.
            Messages may include responses to inquiries, appointment reminders, recruiting and hiring communications,
            service-related updates, event communications, and other relevant business communications.
          </li>
          <li>
            <strong>Opt-Out Instructions:</strong> You can cancel the SMS service at any time by replying STOP to any
            message received from AspenView. After sending STOP, you will receive a confirmation message that you have been
            unsubscribed. After this, you will no longer receive SMS messages from AspenView unless you opt in again.
          </li>
          <li>
            <strong>Support:</strong> If you are experiencing issues with the messaging program, reply HELP for assistance
            or contact us directly at <a href="mailto:marketing@aspenview.com">marketing@aspenview.com</a>.
          </li>
          <li>
            <strong>Carrier Disclaimer:</strong> Carriers are not liable for delayed or undelivered messages.
          </li>
          <li>
            <strong>Costs and Message Frequency:</strong> Message and data rates may apply for any messages sent to you from
            us and to us from you. Message frequency varies based on your interactions with AspenView Technology Partners.
            Users may receive up to four (4) messages per month related to inquiries, recruiting processes, appointments,
            service communications, or other business-related matters. For questions regarding your text plan or data plan,
            please contact your wireless provider.
          </li>
          <li>
            <strong>Privacy and Consent:</strong> By providing your mobile phone number and opting in, you expressly consent
            to receive SMS communications from AspenView Technology Partners, Inc. at the number provided. Consent is not a
            condition of purchasing any goods or services. No mobile information will be shared with third parties or
            affiliates for marketing or promotional purposes. Text messaging opt-in data, consent records, and related
            personal information will not be sold or shared with third parties for marketing purposes.
          </li>
        </ul>
        <p>
          For additional information regarding how we collect, use, and protect personal information, please review our{" "}
          <Link href={ROUTES.privacy}>
            <strong>Privacy Policy.</strong>
          </Link>
        </p>
      </LegalSection>

      <LegalSection id="indemnification" heading="Indemnification">
        <p>
          You agree to indemnify and hold harmless AspenView, its contractors, and its licensors and their respective
          directors, officers, employees and agents from and against any and all claims and expenses, including attorney’s
          fees, arising out of your use of our Services, including but not limited to any violation of the Privacy Policy
          and/or these Terms.
        </p>
      </LegalSection>

      <LegalSection id="warranties" heading="Disclaimer of Warranties">
        <p>
          Our Services are provided on an “as-is” basis and we make no guarantees the Services or platform will be free of
          errors, interruptions in service or technical issues. We make no warranties, express or implied, and hereby
          disclaim all implied warranties, including any warranty of merchantability and warranty of fitness for a
          particular purpose.
        </p>
      </LegalSection>

      <LegalSection id="liability" heading="Limitation of Liability">
        <p>
          WHERE ALLOWED UNDER APPLICABLE LAW, IN NO EVENT WILL ASPENVIEW, ITS DIRECTORS, OFFICERS, EMPLOYEES, THIRD-PARTY
          AFFILIATES, OR AGENTS BE LIABLE, WHETHER IN CONTRACT OR TORT (INCLUDING NEGLIGENCE), BREACH OF STATUTORY DUTY, OR
          OTHERWISE, EVEN IF LOSS OR DAMAGE MAY BE FORESEEABLE, FOR (I) ANY SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES
          RELATED TO YOUR USE, MISUSE, OR INABILITY TO USE OUR SERVICES; (II) ANY INTERRUPTION OF USE OF OUR SERVICES OR LOSS
          OR CORRUPTION OF DATA; OR (III) ANY RELATED LOST PROFITS. OUR LIABILITY ARISING FROM THE PRIVACY POLICY, THESE
          TERMS AND THE USE OF OUR SERVICES WILL NOT EXCEED THE GREATER OF $100 OR THE TOTAL AMOUNT YOU HAVE PAID US FOR THE
          SERVICES IN THE PAST 12 MONTHS.
        </p>
      </LegalSection>

      <LegalSection id="termination" heading="Termination of Services">
        <p>
          We may, in our sole discretion, restrict your access to all or part of the Services, deny providing Services or
          permanently delete your account, at any time, with or without reason, and with or without providing notice.
        </p>
      </LegalSection>

      <LegalSection id="ip" heading="Intellectual Property">
        <p>
          The trademarks, service marks, and logos on our website are all the registered and unregistered intellectual
          property of AspenView. We do not allow any use of our intellectual property without our express written
          permission.
        </p>
        <p>
          Unless otherwise indicated, you grant us a worldwide, non-exclusive, royalty free, perpetual, transferable license
          to use, reproduce, distribute and create derivative works of any submissions, documents, materials, ideas,
          suggestions, or other information provided to or communicated to us through the contact form, email, phone, or
          other means of communication with us.
        </p>
      </LegalSection>

      <LegalSection id="amendments" heading="Future Amendments">
        <p>
          We reserve the right to make changes or updates to these Terms at any time. Because of that, we encourage to you
          periodically return to review these Terms. Your continued use of the Services following any updates shall mean
          that you agree and accept such changes.
        </p>
      </LegalSection>

      <LegalSection id="law" heading="Governing Law and Venue">
        <p>
          Our Services are protected by applicable copyright, trademark, and other US and foreign laws. All claims arising
          out of or relating to the Privacy Policy, these Terms or the use of the Services will be governed by Delaware law.
        </p>
      </LegalSection>

      <LegalSection id="disputes" heading="Dispute Resolution">
        <p>
          A good faith attempt to resolve any issue with us must be made before the escalation of any claim or dispute.
          Please include a description of your issue, any other pertinent information, and the resolution you seek. You
          may contact us by emailing us at <strong>privacy@aspenviewtechnology.com</strong> or writing to us at the mailing
          address below.
        </p>
        <p>
          YOU AGREE THAT ALL CLAIMS, WITH THE EXCEPTION OF CLAIMS RELATED TO INTELLECTUAL PROPERTY, WILL BE RESOLVED BY
          BINDING ARBITRATION ADMINISTERED BY THE AMERICAN ARBITRATION ASSOCIATION. IF YOUR CLAIM QUALIFIES UNDER SMALL CLAIMS
          COURT, YOU MAY ALSO BRING YOUR CLAIM THERE. FOR ANY CLAIM THAT IS NOT ARBITRATED OR RESOLVED IN SMALL CLAIMS COURT,
          YOU AGREE THAT IT WILL BE RESOLVED EXCLUSIVELY IN THE STATE COURTS LOCATED IN DELAWARE OR THE U.S. DISTRICT COURTS
          IN DELAWARE. YOU AND ASPENVIEW EXPRESSLY WAIVE A TRIAL BY JURY.
        </p>
        <h3>How to Contact Us</h3>
        <p>
          Please contact us at the mailing address below or by emailing us at{" "}
          <a href="mailto:privacy@aspenview.com">
            <strong>privacy@aspenview.com</strong>
          </a>{" "}
          if you have any questions, comments or concerns regarding this Privacy Policy.
        </p>
        <Address />
      </LegalSection>
    </LegalPage>
  );
}
