import LegalPage, { type LegalPageSection } from "@/apputils/LegalPage";

const sections: LegalPageSection[] = [
  {
    title: "When Refunds Are Considered",
    body: (
      <ul className="list-disc pl-5">
        <li>Damaged jars or visibly leaked packaging on arrival.</li>
        <li>Wrong product sent against the confirmed order.</li>
        <li>Quality issues reported quickly with clear proof.</li>
      </ul>
    ),
  },
  {
    title: "Reporting Window",
    body: (
      <>
        <p>
          Claims should be raised within 24 to 48 hours of delivery. Please
          keep the packaging and share clear photos or an unboxing video when
          reporting the issue.
        </p>
      </>
    ),
  },
  {
    title: "What Is Usually Not Eligible",
    body: (
      <ul className="list-disc pl-5">
        <li>Opened or tampered products after successful delivery.</li>
        <li>Address mistakes entered by the customer.</li>
        <li>Requests raised too late to verify the issue properly.</li>
      </ul>
    ),
  },
  {
    title: "How Refunds Are Processed",
    body: (
      <>
        <p>
          Once the issue is verified, we may offer a replacement, store support,
          or a refund to the original payment method depending on the case.
        </p>
        <p>
          Approved refunds are typically processed within 5 to 7 business days.
        </p>
      </>
    ),
  },
  {
    title: "Need Help",
    body: (
      <>
        <p>
          For refund support, contact `afridayan01@gmail.com` with your order
          details, photos, and a short explanation of the issue.
        </p>
      </>
    ),
  },
];

function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Refund Policy"
      title="Food orders need a clear review process, not vague promises."
      intro="Because these are food products, refund requests are handled carefully and quickly. This policy explains what qualifies, how to report an issue, and how verified cases are resolved."
      effectiveDate="March 11, 2026"
      stats={[
        { label: "Claim window", value: "24 to 48 hours" },
        { label: "Proof needed", value: "Photos or unboxing" },
        { label: "Resolution", value: "Refund or replacement" },
      ]}
      sections={sections}
      primaryAction={{ label: "Contact Support", path: "/contact" }}
      secondaryAction={{ label: "Terms", path: "/terms" }}
    />
  );
}

export default RefundPolicyPage;
