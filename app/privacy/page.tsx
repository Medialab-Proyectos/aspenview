import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection, LegalIntro, Toc, Address } from "@/components/legal/Legal";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Privacy Policy | AspenView",
  description: "How AspenView Technology Partners, Inc. collects, uses and protects your personal information.",
};

const SECTIONS = [
  { id: "types", label: "Types of Personal Information" },
  { id: "collection", label: "Collection of your Personal Information" },
  { id: "use", label: "Use of your Personal Information" },
  { id: "protection", label: "Protection of your Personal Information" },
  { id: "third-parties", label: "Third Party Data Transfers; Links to Other Websites" },
  { id: "cookies", label: "Cookies" },
  { id: "rights", label: "Rights of Users" },
  { id: "retention", label: "Data Retention" },
  { id: "misc", label: "Miscellaneous" },
];

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <LegalIntro>
        <p>Last Updated: July 7, 2025</p>
        <p>
          This Privacy Policy outlines AspenView Technology Partners, Inc.’s (“AspenView”, “we” “our”) collection and use
          of your personal information while visiting our website (the “Services”). Please review both this Privacy
          Policy and the <Link href={ROUTES.terms}>Terms and Conditions</Link>, as they govern your use of the Services.
        </p>
      </LegalIntro>

      <Toc items={SECTIONS.map((s) => ({ label: s.label, href: `#${s.id}` }))} />

      <LegalSection id="types" heading="1. Types of Personal Information">
        <p>We collect several types of data related to your use of our Services (your “Personal Information”):</p>
        <ul>
          <li>
            <strong>Shared Contact Information</strong>: such as your name, email address, and phone number
          </li>
          <li>
            <strong>Usage Information</strong>
            <ul>
              <li>
                Technical Information, including domain and host name, IP address, browser information, time zone and
                country settings, operating system and platform
              </li>
              <li>
                Site Visit Information, including the full Uniform Resource Locators (URL), clickstream to, through and
                from the Services (including date and time), length of visits to webpages, website and page interaction
                information (such as scrolling, clicks, and mouse-overs)
              </li>
            </ul>
          </li>
          <li>
            <strong>Third Party Information</strong>: third parties (for example, marketing services and recruitment
            agencies) may provide additional Personal Information about you.
          </li>
        </ul>
        <p>
          Unless otherwise indicated, all Personal Information is required to provide you with some Services and failure to
          provide the requested Personal Information may lead to the inability to access such Services.
        </p>
      </LegalSection>

      <LegalSection id="collection" heading="2. Collection of Your Personal Information">
        <p>
          You may voluntarily provide Personal Information when you fill out forms on our website to request additional
          information or by corresponding with us by phone, email, or otherwise. We collect certain information, such as
          Usage Information, automatically through your use of the Services. We collect Third Party Information from third
          parties we may be working with, including marketing services and recruitment agencies. By continuing to use our
          Services, you are providing consent for us to collect Usage Information and Third Party Information. With your
          consent, we may collect additional Personal Information through your use of the Services.
        </p>
      </LegalSection>

      <LegalSection id="use" heading="3. Use of Your Personal Information">
        <p>Your Personal Information is collected to allow us to provide you with the Services, including but not limited to:</p>
        <ul>
          <li>
            <strong>To Provide the Services:</strong> Your Personal Information may be required to provide the Services,
            including allowing us to effectively respond to your requests made through the website for information or
            assistance.
          </li>
          <li>
            <strong>Improve and Develop Services:</strong> Your Personal Information may be used to monitor and maintain the
            performance of the websites and to analyze trends, usage and activities in connection with the Services and to
            ensure timely delivery of the Services to you. We may also use your Personal Information to discover
            improvements within the existing Services and detect potential complementing offerings to our Services.
          </li>
          <li>
            <strong>Advertising:</strong> Your Personal Information may be used to measure the effectiveness of
            advertisements served to you while using the Services and to deliver relevant advertising from AspenView to you.
          </li>
          <li>
            <strong>Marketing Communications:</strong> We may send promotional emails containing information about
            additional Services or affiliate offerings when we have consent to do so.
          </li>
          <li>
            <strong>Complying with legal obligations:</strong> We may collect and store your Personal Information if legally
            required for compliance.
          </li>
        </ul>
        <h3>Application to Person (A2P) 10DLC Messaging (SMS) and Data Privacy</h3>
        <ul>
          <li>
            <strong>Collection and Use of Phone Numbers:</strong> By providing your phone number to us, through your use of
            the Services or otherwise, you consent to receive automated and manual application-to-person (A2P) messages.
            These messages may include transactional updates, account notifications, and marketing information. We collect
            and process phone numbers in compliance with A2P 10DLC regulations and ensure that the use of phone numbers
            adheres to relevant privacy and telecommunication laws.
          </li>
          <li>
            <strong>Opt-In and Opt-Out Policies:</strong> Upon messaging opt-in, you agree to receive messages from
            AspenView regarding your outreach to connect with our sales team. You can opt out by replying STOP or by
            contacting us at: Email: <a href="mailto:marketing@aspenview.com">marketing@aspenview.com</a>. You may request
            more information by replying HELP. Message frequency varies. Message and data rates may apply. Upon opting out,
            you will no longer receive A2P messages from us, except for a single confirmation message acknowledging your
            opt-out request.
          </li>
          <li>
            <strong>Data Sharing and Security:</strong> No mobile information will be shared with third parties/affiliates
            for marketing/promotional purposes. We implement appropriate security measures to protect against unauthorized
            access, alteration, disclosure, or destruction of your phone number and related data. All data is processed in
            compliance with the Telephone Consumer Protection Act (TCPA) and other applicable laws.
          </li>
          <li>
            <strong>User Responsibility:</strong> It is your responsibility to provide accurate and current phone numbers
            when using our services. If you change or deactivate your phone number, you must inform us to prevent further
            messaging to the incorrect number.
          </li>
          <li>
            <strong>Policy Updates:</strong> We may update this A2P section from time to time to reflect changes in our
            practices and services. Any changes will be effective immediately upon posting the revised policy on our
            website. You will be notified of any significant changes via email or text message. Your continued use of the
            Services indicates your consent to any policy updates.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="protection" heading="4. Protection of Your Personal Information">
        <p>
          We do not sell your Personal Information to third parties. We use industry best practices, technology and
          encryption (for in transit as well as for at rest data) to keep your Personal Information secure.
        </p>
      </LegalSection>

      <LegalSection id="third-parties" heading="5. Third Party Data Transfers; Links to Other Websites">
        <p>
          We may use third parties to store or process Personal Information on our behalf. All services providers are bound
          to the terms of this Privacy Policy.
        </p>
        <p>
          Our Services may contain links to third party websites. We are not affiliated with nor responsible for any
          external websites’ privacy policies, practices, or actions. We encourage you to be aware when leaving our
          Services and to read and review any third party websites’ privacy policy.
        </p>
      </LegalSection>

      <LegalSection id="cookies" heading="6. Cookies">
        <p>We use cookies for the following reasons:</p>
        <ul>
          <li>Website(s) functionality;</li>
          <li>Remembering your preferences, such as log-in information;</li>
          <li>Identifying issues with our Services; and</li>
          <li>Adding a layer of security to the Services.</li>
        </ul>
        <h3>Types of Cookies</h3>
        <ul>
          <li>
            Strictly necessary cookies are required for fundamental website functionality. Strictly necessary cookies are
            deleted following each browsing session.
          </li>
          <li>
            Performance Cookies allow us to collect analysis about usage of our Services, including website traffic,
            allowing us to continually improve our Services. Performance Cookies are anonymous.
          </li>
          <li>
            Functional cookies are used to personalize the Services to you and must be enabled by you (for example,
            selecting “Remember my username”). Functional cookies are saved until you clear your cookies, disable cookies on
            your browser settings, or the cookie is discovered to be invalid.
          </li>
          <li>Targeting Cookies are used to provide relevant advertisements to you based on your browsing interests.</li>
          <li>
            You may amend or withdraw your consent for the use of cookies at any time. Please follow the instructions in
            your browser to do so. If you choose to reject all cookies, you may not be able to fully utilize all aspects of
            the Services.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="rights" heading="7. Rights of Users">
        <p>
          You have the right to access and correct your Personal Information. You have the right to learn what Personal
          Information is being shared with which third parties. You may also choose to delete any Personal Information or
          revoke consent of the use of your Personal Information. You may do so by using the{" "}
          <Link href={ROUTES.contact}>contact form</Link> on our website. Please note, some Services require the use of your
          Personal Information and/or maintaining an active account in order to utilize such Services.
        </p>
        <p>
          You have the right to opt-out of previously opted-in communications from us. You may do so through the contact
          form on our website or within the email itself. Please note that some communications may be necessary for the
          functionality of our Services.
        </p>
        <p>
          You have the right to not be retaliated against for exercising your rights to your Personal Information. We will
          not deny our Services to you following the exercise of your rights.
        </p>
      </LegalSection>

      <LegalSection id="retention" heading="8. Data Retention">
        <p>
          Unless otherwise specified, Personal Information will be stored and used for as long as it is required for the
          purposes of which they have been collected and may be retained longer due to any applicable legal obligations.
          Once the data retention period expires, Personal Information will be securely deleted.
        </p>
      </LegalSection>

      <LegalSection id="misc" heading="9. Miscellaneous">
        <h3>Rights of Children</h3>
        <p>
          Our Services are not directed to and do not knowingly collect Personal Information from children under the age
          of 13. Our website is not intended for a general audience, rather our Services are for a business purpose.
        </p>
        <h3>Disclosures Required by Law</h3>
        <p>
          We may be required by law to share your personal information. Examples of legal requests include search
          warrants, court orders, or subpoenas. We may also utilize your personal information in all stages of possible
          legal proceedings related to your improper use of the Services.
        </p>
        <h3>Future Amendments</h3>
        <p>
          We reserve the right to make changes or updates to this Privacy Policy at any time, so we encourage you to
          periodically return to review this Privacy Policy. Your continued use of the Services following any updates
          shall mean that you agree and accept such changes.
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
