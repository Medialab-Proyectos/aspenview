import type { Metadata } from "next";
import Link from "@/components/i18n/LocaleLink";
import { LegalPage, LegalSection, LegalIntro, Toc, Address } from "@/components/legal/Legal";
import { ROUTES } from "@/lib/routes";

import { T } from "@/components/i18n/T";
import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/privacy", {
    title: "Privacy Policy | AspenView",
    description: "How AspenView Technology Partners, Inc. collects, uses and protects your personal information.",
  });
}

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
        <p><T>{"Last Updated: July 7, 2025"}</T></p>
        <p><T>{"This Privacy Policy outlines AspenView Technology Partners, Inc.’s (“AspenView”, “we” “our”) collection and use of your personal information while visiting our website (the “Services”). Please review both this Privacy Policy and the "}</T><Link href={ROUTES.terms}><T>{"Terms and Conditions"}</T></Link><T>{", as they govern your use of the Services."}</T></p>
      </LegalIntro>

      <Toc items={SECTIONS.map((s) => ({ label: s.label, href: `#${s.id}` }))} />

      <LegalSection id="types" heading={<T>{"1. Types of Personal Information"}</T>}>
        <p><T>{"We collect several types of data related to your use of our Services (your “Personal Information”):"}</T></p>
        <ul>
          <li>
            <strong><T>{"Shared Contact Information"}</T></strong><T>{": such as your name, email address, and phone number"}</T></li>
          <li>
            <strong><T>{"Usage Information"}</T></strong>
            <ul>
              <li><T>{"Technical Information, including domain and host name, IP address, browser information, time zone and country settings, operating system and platform"}</T></li>
              <li><T>{"Site Visit Information, including the full Uniform Resource Locators (URL), clickstream to, through and from the Services (including date and time), length of visits to webpages, website and page interaction information (such as scrolling, clicks, and mouse-overs)"}</T></li>
            </ul>
          </li>
          <li>
            <strong><T>{"Third Party Information"}</T></strong><T>{": third parties (for example, marketing services and recruitment agencies) may provide additional Personal Information about you."}</T></li>
        </ul>
        <p><T>{"Unless otherwise indicated, all Personal Information is required to provide you with some Services and failure to provide the requested Personal Information may lead to the inability to access such Services."}</T></p>
      </LegalSection>

      <LegalSection id="collection" heading={<T>{"2. Collection of Your Personal Information"}</T>}>
        <p><T>{"You may voluntarily provide Personal Information when you fill out forms on our website to request additional information or by corresponding with us by phone, email, or otherwise. We collect certain information, such as Usage Information, automatically through your use of the Services. We collect Third Party Information from third parties we may be working with, including marketing services and recruitment agencies. By continuing to use our Services, you are providing consent for us to collect Usage Information and Third Party Information. With your consent, we may collect additional Personal Information through your use of the Services."}</T></p>
      </LegalSection>

      <LegalSection id="use" heading={<T>{"3. Use of Your Personal Information"}</T>}>
        <p><T>{"Your Personal Information is collected to allow us to provide you with the Services, including but not limited to:"}</T></p>
        <ul>
          <li>
            <strong><T>{"To Provide the Services:"}</T></strong><T>{" Your Personal Information may be required to provide the Services, including allowing us to effectively respond to your requests made through the website for information or assistance."}</T></li>
          <li>
            <strong><T>{"Improve and Develop Services:"}</T></strong><T>{" Your Personal Information may be used to monitor and maintain the performance of the websites and to analyze trends, usage and activities in connection with the Services and to ensure timely delivery of the Services to you. We may also use your Personal Information to discover improvements within the existing Services and detect potential complementing offerings to our Services."}</T></li>
          <li>
            <strong><T>{"Advertising:"}</T></strong><T>{" Your Personal Information may be used to measure the effectiveness of advertisements served to you while using the Services and to deliver relevant advertising from AspenView to you."}</T></li>
          <li>
            <strong><T>{"Marketing Communications:"}</T></strong><T>{" We may send promotional emails containing information about additional Services or affiliate offerings when we have consent to do so."}</T></li>
          <li>
            <strong><T>{"Complying with legal obligations:"}</T></strong><T>{" We may collect and store your Personal Information if legally required for compliance."}</T></li>
        </ul>
        <h3><T>{"Application to Person (A2P) 10DLC Messaging (SMS) and Data Privacy"}</T></h3>
        <ul>
          <li>
            <strong><T>{"Collection and Use of Phone Numbers:"}</T></strong><T>{" By providing your phone number to us, through your use of the Services or otherwise, you consent to receive automated and manual application-to-person (A2P) messages. These messages may include transactional updates, account notifications, and marketing information. We collect and process phone numbers in compliance with A2P 10DLC regulations and ensure that the use of phone numbers adheres to relevant privacy and telecommunication laws."}</T></li>
          <li>
            <strong><T>{"Opt-In and Opt-Out Policies:"}</T></strong><T>{" Upon messaging opt-in, you agree to receive messages from AspenView regarding your outreach to connect with our sales team. You can opt out by replying STOP or by contacting us at: Email: "}</T><a href="mailto:marketing@aspenview.com"><T>{"marketing@aspenview.com"}</T></a><T>{". You may request more information by replying HELP. Message frequency varies. Message and data rates may apply. Upon opting out, you will no longer receive A2P messages from us, except for a single confirmation message acknowledging your opt-out request."}</T></li>
          <li>
            <strong><T>{"Data Sharing and Security:"}</T></strong><T>{" No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your phone number and related data. All data is processed in compliance with the Telephone Consumer Protection Act (TCPA) and other applicable laws."}</T></li>
          <li>
            <strong><T>{"User Responsibility:"}</T></strong><T>{" It is your responsibility to provide accurate and current phone numbers when using our services. If you change or deactivate your phone number, you must inform us to prevent further messaging to the incorrect number."}</T></li>
          <li>
            <strong><T>{"Policy Updates:"}</T></strong><T>{" We may update this A2P section from time to time to reflect changes in our practices and services. Any changes will be effective immediately upon posting the revised policy on our website. You will be notified of any significant changes via email or text message. Your continued use of the Services indicates your consent to any policy updates."}</T></li>
        </ul>
      </LegalSection>

      <LegalSection id="protection" heading={<T>{"4. Protection of Your Personal Information"}</T>}>
        <p><T>{"We do not sell your Personal Information to third parties. We use industry best practices, technology and encryption (for in transit as well as for at rest data) to keep your Personal Information secure."}</T></p>
      </LegalSection>

      <LegalSection id="third-parties" heading={<T>{"5. Third Party Data Transfers; Links to Other Websites"}</T>}>
        <p><T>{"We may use third parties to store or process Personal Information on our behalf. All services providers are bound to the terms of this Privacy Policy."}</T></p>
        <p><T>{"Our Services may contain links to third party websites. We are not affiliated with nor responsible for any external websites’ privacy policies, practices, or actions. We encourage you to be aware when leaving our Services and to read and review any third party websites’ privacy policy."}</T></p>
      </LegalSection>

      <LegalSection id="cookies" heading={<T>{"6. Cookies"}</T>}>
        <p><T>{"We use cookies for the following reasons:"}</T></p>
        <ul>
          <li><T>{"Website(s) functionality;"}</T></li>
          <li><T>{"Remembering your preferences, such as log-in information;"}</T></li>
          <li><T>{"Identifying issues with our Services; and"}</T></li>
          <li><T>{"Adding a layer of security to the Services."}</T></li>
        </ul>
        <h3><T>{"Types of Cookies"}</T></h3>
        <ul>
          <li><T>{"Strictly necessary cookies are required for fundamental website functionality. Strictly necessary cookies are deleted following each browsing session."}</T></li>
          <li><T>{"Performance Cookies allow us to collect analysis about usage of our Services, including website traffic, allowing us to continually improve our Services. Performance Cookies are anonymous."}</T></li>
          <li><T>{"Functional cookies are used to personalize the Services to you and must be enabled by you (for example, selecting “Remember my username”). Functional cookies are saved until you clear your cookies, disable cookies on your browser settings, or the cookie is discovered to be invalid."}</T></li>
          <li><T>{"Targeting Cookies are used to provide relevant advertisements to you based on your browsing interests."}</T></li>
          <li><T>{"You may amend or withdraw your consent for the use of cookies at any time. Please follow the instructions in your browser to do so. If you choose to reject all cookies, you may not be able to fully utilize all aspects of the Services."}</T></li>
        </ul>
      </LegalSection>

      <LegalSection id="rights" heading={<T>{"7. Rights of Users"}</T>}>
        <p><T>{"You have the right to access and correct your Personal Information. You have the right to learn what Personal Information is being shared with which third parties. You may also choose to delete any Personal Information or revoke consent of the use of your Personal Information. You may do so by using the"}</T>{" "}
          <Link href={ROUTES.contact}><T>{"contact form"}</T></Link><T>{" on our website. Please note, some Services require the use of your Personal Information and/or maintaining an active account in order to utilize such Services."}</T></p>
        <p><T>{"You have the right to opt-out of previously opted-in communications from us. You may do so through the contact form on our website or within the email itself. Please note that some communications may be necessary for the functionality of our Services."}</T></p>
        <p><T>{"You have the right to not be retaliated against for exercising your rights to your Personal Information. We will not deny our Services to you following the exercise of your rights."}</T></p>
      </LegalSection>

      <LegalSection id="retention" heading={<T>{"8. Data Retention"}</T>}>
        <p><T>{"Unless otherwise specified, Personal Information will be stored and used for as long as it is required for the purposes of which they have been collected and may be retained longer due to any applicable legal obligations. Once the data retention period expires, Personal Information will be securely deleted."}</T></p>
      </LegalSection>

      <LegalSection id="misc" heading={<T>{"9. Miscellaneous"}</T>}>
        <h3><T>{"Rights of Children"}</T></h3>
        <p><T>{"Our Services are not directed to and do not knowingly collect Personal Information from children under the age of 13. Our website is not intended for a general audience, rather our Services are for a business purpose."}</T></p>
        <h3><T>{"Disclosures Required by Law"}</T></h3>
        <p><T>{"We may be required by law to share your personal information. Examples of legal requests include search warrants, court orders, or subpoenas. We may also utilize your personal information in all stages of possible legal proceedings related to your improper use of the Services."}</T></p>
        <h3><T>{"Future Amendments"}</T></h3>
        <p><T>{"We reserve the right to make changes or updates to this Privacy Policy at any time, so we encourage you to periodically return to review this Privacy Policy. Your continued use of the Services following any updates shall mean that you agree and accept such changes."}</T></p>
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
