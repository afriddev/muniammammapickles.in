import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ClipboardList,
  CheckCircle,
  UserCheck,
  Shield,
  Users,
  Briefcase,
  FileText,
  DollarSign,
  Calendar,
  AlertTriangle,
  FileLock,
  Zap,
  Globe,
  CreditCard,
  MessageCircle,
  Phone,
} from "lucide-react";
import PageWrapper from "@/apputils/PageWrapper";
import NavBar from "@/apputils/NavBar";
import Footer from "@/apputils/Footer";

const sections = [
  {
    id: "summary",
    title: "Summary",
    icon: <Briefcase className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          <strong className="text-md">Role Definitions & Eligibility:</strong>{" "}
          This platform distinguishes clearly between Freelancers, Employees,
          Clients, and Employers. Freelancers engage on a project-by-project
          basis, submitting competitive proposals for defined scopes and
          budgets. Employees enter into formal employment agreements, enjoying
          benefits, structured work hours, and performance reviews. Clients and
          Employers utilize our tools to post requirements, manage submissions,
          and oversee progress through a secure and transparent dashboard.
        </p>
        <p className="mb-4 text-sm">
          <strong className="text-md">
            Account Responsibilities & Security:
          </strong>{" "}
          All users must maintain up-to-date profiles, verify identity
          documents, and adopt strong authentication practices. Our platform
          enforces two-factor authentication, end-to-end encryption of sensitive
          messages, and regular security audits. Users are responsible for
          monitoring their account activity and reporting any unauthorized
          access immediately to maintain community trust.
        </p>
        <p className="mb-4 text-sm">
          <strong className="text-md">Contracts & Engagement Models:</strong>{" "}
          FreeGrow offers tailored contract templates for both gig-based and
          employment engagements. Gig contracts feature milestone-based payments
          released from escrow upon approval. Employment contracts cover fixed
          salaries, tax withholdings, and defined probationary periods. Each
          contract includes confidentiality clauses, intellectual property
          assignments, and termination conditions to ensure clarity and legal
          compliance.
        </p>
        <p className="mb-4 text-sm">
          <strong className="text-md">
            Job Posting, Applications & Onboarding:
          </strong>{" "}
          Clients and Employers can craft detailed job descriptions, specifying
          responsibilities, required qualifications, and compensation.
          Applicants submit structured proposals, attach resumes and portfolios,
          and answer role-specific questions. Onboarding workflows include
          document verification, NDA signing, and a platform orientation module,
          ensuring a smooth and professional start.
        </p>
        <p className="mb-4 text-sm">
          <strong className="text-md">Payments, Taxes & Compliance:</strong> Our
          integrated payment gateway supports seamless escrow funding for
          freelancers and timely payroll processing for employees. Automated
          invoices and tax documents are generated upon transaction completion,
          aiding both parties in meeting local regulatory requirements.
          Employers handle statutory withholdings, while freelancers manage
          self-employment tax obligations with our advisory resources.
        </p>
        <p className="mb-4 text-sm">
          <strong className="text-md">
            Service Fees, Refunds & Dispute Resolution:
          </strong>{" "}
          FreeGrow applies a transparent service fee on each transaction, with
          rates adjusted based on contract type and volume. In the event of
          disagreements, our tiered resolution process begins with direct
          negotiation. If unresolved, parties may request mediation through
          FreeGrow support, potentially resulting in partial or full refunds
          based on the case review.
        </p>
        <p className="mb-4 text-sm">
          <strong className="text-md">
            Communication, Confidentiality & IP:
          </strong>{" "}
          All project-related discussions must occur within our encrypted
          messaging system, preserving records for accountability. Harassment,
          spam, or off-topic communication is strictly prohibited.
          Confidentiality and intellectual property provisions safeguard work
          products, source code, and strategic documents, remaining in effect
          even after contract completion.
        </p>
        <p className="mb-4 text-sm">
          <strong className="text-md">Legal Framework & Termination:</strong>{" "}
          These Terms are governed by the laws of [Insert Jurisdiction],
          defining grounds for suspension, termination, liability limitations,
          and indemnification. Users may submit appeals through our support
          portal or escalate via formal legal channels as specified.
        </p>
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    icon: <ClipboardList className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        <p className="mb-4">
          This section clarifies the terminology used throughout these Terms.
          "Platform" refers to the FreeGrow website, applications, and services.
          A "Client" is any individual or entity posting work, while an
          "Employer" hires users under employment agreements. "Freelancers" are
          independent contractors bidding on project-based engagements, and
          "Employees" work under formal payroll—not to be confused with gig
          workers. "Service Fee" denotes the commission FreeGrow retains on each
          transaction.
        </p>
      </>
    ),
  },
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    content: (
      <>
        <p className="mb-4">
          By accessing or using the FreeGrow platform, you acknowledge that you
          have read, understood, and agree to be bound by these Terms &
          Conditions, including any future amendments. If you do not agree with
          any provision, you must discontinue use immediately. Continued use
          after updates constitutes acceptance of the modified terms.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility & Roles",
    icon: <UserCheck className="w-6 h-6 text-teal-500" />,
    content: (
      <>
        <p className="mb-4">
          To maintain a professional community, all users must be at least 18
          years of age and possess the legal capacity to enter binding
          contracts. Upon registration, you must select the role that best
          matches your intent—Client, Employer, Freelancer, or Employee—and
          provide accurate personal and business information, including proof of
          identity when requested.
        </p>
      </>
    ),
  },
  {
    id: "account",
    title: "Account Security & Profile Management",
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p className="mb-4">
          Users are responsible for maintaining up-to-date profile details,
          including role-specific qualifications, portfolios, and contact
          information. Implement strong, unique passwords, and enable two-factor
          authentication. If you suspect unauthorized access, change your
          password immediately and notify FreeGrow support to prevent misuse and
          protect your reputation.
        </p>
      </>
    ),
  },
  {
    id: "contract-types",
    title: "Engagement Models & Contracts",
    icon: <Calendar className="w-6 h-6 text-pink-500" />,
    content: (
      <>
        <p className="mb-4">
          FreeGrow supports both gig-based and traditional employment
          agreements. Gig contracts are structured around clearly defined
          deliverables, budgets, and milestone releases. Employment contracts
          outline regular wages, work hours, benefits, and statutory
          withholdings. Each contract template includes detailed expectations,
          confidentiality terms, intellectual property assignments, and
          termination procedures to protect all parties.
        </p>
      </>
    ),
  },
  {
    id: "job-posting",
    title: "Job & Project Posting Requirements",
    icon: <FileText className="w-6 h-6 text-purple-500" />,
    content: (
      <>
        <p className="mb-4">
          Clients and Employers must provide comprehensive job or project
          descriptions, including scope of work, required skills, expected
          outcomes, timelines, and compensation structures. Transparency at the
          posting stage helps attract qualified candidates and reduces
          misunderstandings, leading to higher satisfaction rates on both ends.
        </p>
      </>
    ),
  },
  {
    id: "application",
    title: "Application & Proposal Guidelines",
    icon: <Users className="w-6 h-6 text-blue-300" />,
    content: (
      <>
        <p className="mb-4">
          Prospective Freelancers and Employees should submit structured
          proposals or formal applications that highlight relevant experience,
          attach portfolios or CVs, and provide clear availability and
          compensation requirements. Tailoring each submission to the specific
          role increases your chances of selection and demonstrates
          professionalism.
        </p>
      </>
    ),
  },
  {
    id: "payment-terms",
    title: "Payment Terms & Escrow Services",
    icon: <CreditCard className="w-6 h-6 text-green-600" />,
    content: (
      <>
        <p className="mb-4">
          For gig engagements, Clients fund an escrow account at project
          initiation. Funds are held securely until deliverables are approved,
          ensuring fair compensation and protection against non-payment.
          Employment payouts are processed via automated payroll cycles, with
          detailed pay stubs provided. Users can track all transactions in their
          financial dashboard.
        </p>
      </>
    ),
  },
  {
    id: "fees-and-invoices",
    title: "Service Fees, Invoicing & Tax Documentation",
    icon: <DollarSign className="w-6 h-6 text-green-700" />,
    content: (
      <>
        <p className="mb-4">
          FreeGrow applies a transparent service fee on each transaction,
          displayed before confirmation. Monthly invoices summarize all debits
          and credits. Year-end tax documents, such as 1099 forms for
          contractors or W-2 equivalents for employees, can be downloaded
          directly from your account to simplify your financial reporting.
        </p>
      </>
    ),
  },
  {
    id: "dispute-resolution",
    title: "Dispute Resolution & Refund Policy",
    icon: <AlertTriangle className="w-6 h-6 text-red-700" />,
    content: (
      <>
        <p className="mb-4">
          In case of disagreements, parties should first attempt direct
          resolution through our messaging system. If unresolved, either party
          may escalate to FreeGrow support for mediation. Decisions are based on
          contract terms and message logs. Depending on the outcome, partial or
          full refunds may be issued, or funds released to the freelancer.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality-ip",
    title: "Confidentiality, Data Protection & IP Ownership",
    icon: <FileLock className="w-6 h-6 text-black" />,
    content: (
      <>
        <p className="mb-4">
          All confidential materials exchanged remain the property of the
          disclosing party. Participants agree not to share sensitive
          information outside project scope. Intellectual property rights for
          deliverables transfer to Clients or Employers upon full payment,
          except where pre-licensed or third-party components require retention
          of specific rights.
        </p>
      </>
    ),
  },
  {
    id: "professional-conduct",
    title: "Professional Conduct & Community Standards",
    icon: <MessageCircle className="w-6 h-6 text-indigo-600" />,
    content: (
      <>
        <p className="mb-4">
          FreeGrow maintains a respectful community. Harassment, hate speech, or
          discriminatory behavior is prohibited. Users must communicate with
          courtesy, adhere to deadlines, and honor agreed scopes. Breach of
          community standards may result in content removal, suspension, or
          permanent bans.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Liability Limitations & Indemnification",
    icon: <Zap className="w-6 h-6 text-yellow-300" />,
    content: (
      <>
        <p className="mb-4">
          FreeGrow provides the platform “as-is” and is not liable for indirect
          or consequential damages. Users indemnify FreeGrow against claims
          arising from their content or use of services. This protects the
          platform from legal actions resulting from third-party allegations
          related to user engagements.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law & Jurisdiction",
    icon: <Globe className="w-6 h-6 text-teal-600" />,
    content: (
      <>
        <p className="mb-4">
          These Terms are governed by the laws of [Insert Jurisdiction]. Any
          disputes must be filed in the competent courts of that jurisdiction.
          Users waive the right to participate in class actions unless local
          laws prohibit such waivers.
        </p>
      </>
    ),
  },
  {
    id: "modifications",
    title: "Modifications to Terms",
    icon: <FileText className="w-6 h-6 text-orange-500" />,
    content: (
      <>
        <p className="mb-4">
          FreeGrow reserves the right to modify these Terms. Substantial changes
          will be communicated via email and in-platform notices, providing a
          30-day review period. Continued use after that period implies consent
          to the updated Terms.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Information & Support",
    icon: <Phone className="w-6 h-6 text-green-400" />,
    content: (
      <>
        <p className="mb-4">For questions or issues, reach our support team:</p>
        <p className="mb-2">
          <strong>Email:</strong> support@freegrow.com
        </p>
        <p>
          <strong>Address:</strong> 123 Growth Avenue, Tech City
        </p>
      </>
    ),
  },
];

const TermsAndConditions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex flex-col">
        <NavBar />
        <div className=" w-full justify-center flex  min-h-screen">
          <div className="lg:w-[80vw] py-12 px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              className="mb-6 text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => navigate(-1)}
            >
              ← Back
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4 font-montserrat">
                FreeGrow Terms & Conditions
              </h1>
              <p className="text-lg text-gray-700 mb-8 font-roboto">
                Effective Date: April 21, 2025
              </p>

              <Card className="mb-8 shadow-lg bg-white">
                <CardHeader className=" border-b border-gray-200">
                  <h2 className="text-2xl font-semibold text-indigo-700 flex items-center space-x-2 font-montserrat">
                    {sections[0].icon}
                    <span className="">{sections[0].title}</span>
                  </h2>
                </CardHeader>
                <CardContent className="p-6 text-gray-700 font-roboto leading-relaxed">
                  {sections[0].content}
                </CardContent>
              </Card>

              <Accordion type="single" collapsible className="space-y-4">
                {sections.slice(1).map((section) => (
                  <AccordionItem
                    key={section.id}
                    value={section.id}
                    className="border border-gray-200 rounded-md bg-white shadow-sm"
                  >
                    <AccordionTrigger className="p-4 text-gray-800 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-montserrat">
                      <div className="flex items-center space-x-2">
                        {section.icon}
                        <span className="font-medium">{section.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-gray-600 font-roboto leading-relaxed">
                      {section.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <motion.div
                className="mt-12 text-center"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => navigate("/signup")}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
};

export default TermsAndConditions;
