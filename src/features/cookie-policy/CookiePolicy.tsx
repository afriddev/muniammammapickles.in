import LegalPage, { type LegalPageSection } from "@/apputils/LegalPage";

const sections: LegalPageSection[] = [
  {
    title: "Why Cookies Are Used",
    body: (
      <>
        <p>
          This storefront uses basic browser storage and cookies to keep the
          experience usable. That includes cart persistence, login state, and
          simple browsing continuity between pages.
        </p>
        <p>
          Without these basics, customers may lose cart contents or be asked to
          repeat actions unnecessarily.
        </p>
      </>
    ),
  },
  {
    title: "Types of Cookies",
    body: (
      <ul className="list-disc pl-5">
        <li>Essential cookies for login, cart, checkout, and security.</li>
        <li>Functional cookies for remembering storefront preferences.</li>
        <li>Performance tools to understand site reliability and speed.</li>
      </ul>
    ),
  },
  {
    title: "How Cookie Data Is Used",
    body: (
      <>
        <p>
          Cookie data is used to maintain your shopping session, keep track of
          cart items, and improve basic usability.
        </p>
        <p>
          We do not use cookie data to sell personal profiles to advertisers.
        </p>
      </>
    ),
  },
  {
    title: "Managing Cookies",
    body: (
      <>
        <p>
          You can clear or block cookies in your browser settings at any time.
          If you do, some storefront features such as login or cart persistence
          may stop working properly.
        </p>
      </>
    ),
  },
  {
    title: "Third-Party Services",
    body: (
      <>
        <p>
          Some payment, analytics, or platform tools may also use their own
          cookies to provide essential service behaviour. Their policies are
          controlled by those providers.
        </p>
      </>
    ),
  },
  {
    title: "Contact for Cookie Questions",
    body: (
      <>
        <p>
          For cookie or browser-storage questions, contact us at
          `afridayan01@gmail.com`.
        </p>
      </>
    ),
  },
];

function CookiePolicy() {
  return (
    <LegalPage
      eyebrow="Cookie Policy"
      title="Cookies here are meant to keep the store usable, not noisy."
      intro="This page explains how browser cookies and local storage are used across cart, login, checkout continuity, and basic storefront performance."
      effectiveDate="March 11, 2026"
      stats={[
        { label: "Cart memory", value: "Enabled" },
        { label: "Login state", value: "Remembered" },
        { label: "Customer control", value: "Browser settings" },
      ]}
      sections={sections}
      primaryAction={{ label: "Contact Us", path: "/contact" }}
      secondaryAction={{ label: "Privacy Policy", path: "/privacy-policy" }}
    />
  );
}

export default CookiePolicy;
