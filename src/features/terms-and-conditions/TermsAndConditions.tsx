import LegalPage, { type LegalPageSection } from "@/apputils/LegalPage";

const sections: LegalPageSection[] = [
  {
    title: "Orders and Product Information",
    body: (
      <>
        <p>
          All jars listed on the storefront are sold subject to availability.
          Product descriptions, sizes, ingredient lists, and pricing are shown
          so customers can make a clear purchase decision before checkout.
        </p>
      </>
    ),
  },
  {
    title: "Pricing and Payment",
    body: (
      <>
        <p>
          Prices are displayed on the website at the time of order. Payment is
          processed through the configured payment gateway, and successful
          payment is required before dispatch.
        </p>
      </>
    ),
  },
  {
    title: "Shipping and Delivery",
    body: (
      <>
        <p>
          Delivery timelines depend on location and courier operations. We pack
          and dispatch orders as quickly as possible, but transit timing may
          vary after handoff to the delivery partner.
        </p>
      </>
    ),
  },
  {
    title: "Returns, Refunds, and Claims",
    body: (
      <>
        <p>
          Since these are food products, returns are limited. Verified issues
          such as damage, leakage, or incorrect fulfilment are handled under the
          refund policy published on this site.
        </p>
      </>
    ),
  },
  {
    title: "Customer Responsibility",
    body: (
      <ul className="list-disc pl-5">
        <li>Provide accurate delivery details during checkout.</li>
        <li>Store the product as instructed after delivery.</li>
        <li>Raise support issues promptly with proof when needed.</li>
      </ul>
    ),
  },
  {
    title: "Support and Contact",
    body: (
      <>
        <p>
          If you have questions about an order, email us at
          `afridayan01@gmail.com`. Continued use of the storefront means you
          accept these terms and any updates published here.
        </p>
      </>
    ),
  },
];

function TermsAndConditions() {
  return (
    <LegalPage
      eyebrow="Terms and Conditions"
      title="The storefront should make ordering clear, not legally confusing."
      intro="These terms govern product browsing, checkout, payment, delivery, and customer responsibilities while using the Muni Ammamma Pickles storefront."
      effectiveDate="March 11, 2026"
      stats={[
        { label: "Storefront use", value: "Order-driven" },
        { label: "Payments", value: "Gateway secured" },
        { label: "Support", value: "Handled by email" },
      ]}
      sections={sections}
      primaryAction={{ label: "Shop Collection", path: "/collection" }}
      secondaryAction={{ label: "Refund Policy", path: "/refund-policy" }}
    />
  );
}

export default TermsAndConditions;
