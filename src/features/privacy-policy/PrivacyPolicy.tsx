import LegalPage, { type LegalPageSection } from "@/apputils/LegalPage";

const sections: LegalPageSection[] = [
  {
    title: "What We Collect",
    body: (
      <>
        <p>
          We collect the details needed to run the store properly: your name,
          phone number, delivery address, email address, and order history.
        </p>
        <p>
          Payment processing is handled through our payment partners. We do not
          store full card details on this storefront.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    body: (
      <ul className="list-disc pl-5">
        <li>To confirm, pack, and deliver your pickle orders.</li>
        <li>To contact you about dispatch, delivery, or order issues.</li>
        <li>To maintain your account, address book, and order history.</li>
        <li>To improve products, support, and storefront performance.</li>
      </ul>
    ),
  },
  {
    title: "Sharing and Delivery Partners",
    body: (
      <>
        <p>
          We do not sell customer data. We share only the minimum required
          details with courier and payment partners so your order can be paid
          for, shipped, and delivered.
        </p>
        <p>
          Those service providers are expected to handle customer information
          securely and only for order fulfilment.
        </p>
      </>
    ),
  },
  {
    title: "Retention and Security",
    body: (
      <>
        <p>
          Order and account details are retained only for service, support,
          record-keeping, and legal compliance. Access is limited to the people
          and systems needed to operate the store.
        </p>
        <p>
          If you want your data corrected or removed, contact us and we will
          review the request.
        </p>
      </>
    ),
  },
  {
    title: "Cookies and Site Usage",
    body: (
      <>
        <p>
          We may use basic cookies or local storage to remember cart items,
          account state, and simple storefront preferences.
        </p>
        <p>
          Disabling browser storage may affect cart and login behaviour.
        </p>
      </>
    ),
  },
  {
    title: "Contact for Privacy Requests",
    body: (
      <>
        <p>
          For privacy questions, correction requests, or deletion requests,
          email us at `afridayan01@gmail.com`.
        </p>
        <p>
          We review policy changes periodically and publish updates on this
          page.
        </p>
      </>
    ),
  },
];

function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Customer data is used to fulfil orders, not to clutter the relationship."
      intro="This policy explains what Muni Ammamma Pickles collects, why we collect it, and how customer information is used across ordering, delivery, account management, and support."
      effectiveDate="March 11, 2026"
      stats={[
        { label: "Order data", value: "Used for fulfilment" },
        { label: "Customer data", value: "Not sold" },
        { label: "Support contact", value: "Direct by email" },
      ]}
      sections={sections}
      primaryAction={{ label: "Contact Us", path: "/contact" }}
      secondaryAction={{ label: "Shop Collection", path: "/collection" }}
    />
  );
}

export default PrivacyPolicy;
