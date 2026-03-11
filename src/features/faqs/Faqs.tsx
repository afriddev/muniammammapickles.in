import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Open the collection, choose a jar, select the pack size, add it to the cart, and continue to checkout after saving your delivery address.",
  },
  {
    question: "Do I need an account before placing an order?",
    answer:
      "You can browse freely, but login is required before checkout so the store can save your address and complete payment safely.",
  },
  {
    question: "What sizes are available?",
    answer:
      "Most jars are shown in 250g, 500g, and 1kg price ladders so customers can compare quickly before opening the product page.",
  },
  {
    question: "How should I store the pickle after delivery?",
    answer:
      "Keep the jar sealed, use a dry spoon, and store it in a cool place. Refrigeration helps once the jar is in regular use.",
  },
  {
    question: "What if the order arrives damaged or incorrect?",
    answer:
      "Contact support quickly with photos or an unboxing video so the issue can be reviewed under the refund policy.",
  },
  {
    question: "Do you ship outside India?",
    answer:
      "This storefront currently focuses on Indian delivery fulfilment.",
  },
];

function Faqs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5efe4] text-[#201610]">
      <NavBar />
      <main>
        <section className="border-b border-[#5a4332] bg-[#201610] text-[#f5efe4]">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-[#5a4332] lg:grid-cols-[1fr_340px]">
            <div className="bg-[#201610] px-6 py-14 lg:px-10 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#d79b45]">FAQ</p>
              <h1 className="mt-5 max-w-[860px] font-fraunces text-[3.2rem] leading-[1.02] tracking-[-0.04em] text-[#fffaf2] lg:text-[5.2rem]">
                Common questions should help people buy faster, not slow them down.
              </h1>
              <p className="mt-6 max-w-[720px] text-base leading-8 text-[#dcc9b4] lg:text-lg">
                These answers cover ordering, account setup, storage, delivery, and support.
              </p>
            </div>
            <div className="grid gap-px bg-[#5a4332]">
              <div className="bg-[#2e1710] p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#d79b45]">Order path</p>
                <p className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#fffaf2]">Browse to checkout</p>
              </div>
              <div className="bg-[#2e1710] p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#d79b45]">Support</p>
                <p className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#fffaf2]">Direct by contact page</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#b7a189] bg-[#eee1cf]">
          <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-10 lg:py-20">
            <Accordion type="single" collapsible className="grid gap-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="border border-[#b7a189] bg-[#f7f1e8] px-5 lg:px-6"
                >
                  <AccordionTrigger className="py-5 text-left font-fraunces text-[1.6rem] leading-[1.06] tracking-[-0.03em] text-[#201610] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-7 text-[#5f4633]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-10 flex justify-center">
              <Button
                onClick={() => navigate("/contact")}
                className="h-12 border-[#201610] bg-[#201610] px-8 text-xs uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-[#3d1d10]"
              >
                Need more help
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Faqs;
