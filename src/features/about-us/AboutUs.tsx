import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const valueCards = [
  {
    eyebrow: "Recipe base",
    title: "Family-led flavour",
    copy: "The taste direction starts from the kind of Telugu pickle memory people trust at home, not from generic packaged-food trends.",
  },
  {
    eyebrow: "Ingredient approach",
    title: "Pantry truth first",
    copy: "Mango, chilli, mustard, garlic, meat, oil, and spice texture are treated like the main story instead of background information.",
  },
  {
    eyebrow: "Store intent",
    title: "Sell with clarity",
    copy: "The storefront is being rebuilt so people can understand the jar, price, size, and meal fit quickly enough to buy with confidence.",
  },
];

const craftSteps = [
  {
    label: "Step 01",
    title: "Choose the right raw material",
    copy: "Each jar starts with the ingredient that defines it, whether that is raw mango, ripe chilli, chicken, or mutton.",
  },
  {
    label: "Step 02",
    title: "Build spice depth properly",
    copy: "Mustard, chilli, garlic, fenugreek, salt, and oil have to land with appetite, not just heat.",
  },
  {
    label: "Step 03",
    title: "Pack for real meal use",
    copy: "The jars need to fit the way customers actually eat: with rice, dosa, idli, paratha, and repeat lunches.",
  },
  {
    label: "Step 04",
    title: "Support after the order",
    copy: "Address, cart, contact, and policy pages should feel part of one strong storefront, not disconnected screens.",
  },
];

const trustRows = [
  "Mapped product photography instead of random stock styling.",
  "Clear size ladder from 250g to 1kg where relevant.",
  "Policy, contact, and product pages aligned to the same shell.",
  "Premium feel driven by food mood, not gimmicks.",
];

const brandStats = [
  { label: "Core jars", value: "5" },
  { label: "Visual direction", value: "Food-led" },
  { label: "Store goal", value: "Buy faster" },
];

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5efe4] text-[#201610]">
      <NavBar />
      <main>
        <section className="border-b border-[#5a4332] bg-[#201610] text-[#f5efe4]">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-[#5a4332] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="bg-[#201610] px-6 py-14 lg:px-10 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#d79b45]">
                About Muni Ammamma
              </p>
              <h1 className="mt-5 max-w-[860px] font-fraunces text-[3.2rem] leading-[1.02] tracking-[-0.04em] text-[#fffaf2] lg:text-[5.4rem]">
                This brand should feel like a kitchen legacy with a sharper modern storefront.
              </h1>
              <p className="mt-6 max-w-[700px] text-base leading-8 text-[#dcc9b4] lg:text-lg">
                Muni Ammamma Pickles is positioned around jars people want to open immediately,
                serve proudly, and reorder without friction. The aim is simple: better flavour
                storytelling, better product clarity, and better buying flow from start to end.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  className="h-12 border-[#d79b45] bg-[#d79b45] px-8 text-sm uppercase tracking-[0.18em] text-[#201610] hover:bg-[#e5aa55]"
                  onClick={() => navigate("/collection")}
                >
                  Shop Collection
                </Button>
                <Button
                  variant="outline"
                  className="h-12 border-[#f5efe4] bg-[#f5efe4] px-8 text-sm uppercase tracking-[0.18em] text-[#201610] hover:bg-[#ead8bc]"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </Button>
              </div>
              <div className="mt-10 grid gap-px bg-[#5a4332] sm:grid-cols-3">
                {brandStats.map((stat) => (
                  <div key={stat.label} className="bg-[#2e1710] p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#d79b45]">
                      {stat.label}
                    </p>
                    <p className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#fffaf2]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-px bg-[#5a4332] md:grid-cols-2">
              <div className="overflow-hidden bg-[#e7d6c3] md:col-span-2">
                <img
                  src="/spices_detail.png"
                  alt="Pickle spices and masala"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden bg-[#e7d6c3]">
                <img
                  src="/final.png"
                  alt="Muni Ammamma Pickles brand mark"
                  className="h-full w-full object-contain p-8"
                />
              </div>
              <div className="bg-[#2e1710] p-6 lg:p-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#d79b45]">
                  Brand note
                </p>
                <h2 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#fffaf2]">
                  Appetite should carry the premium feel.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#dcc9b4]">
                  The visual direction is being rebuilt around edible texture, shelf confidence,
                  warm materials, and product-first hierarchy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#b7a189] bg-[#eee1cf]">
          <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
                What This Brand Needs To Do
              </p>
              <h2 className="mt-4 font-fraunces text-[3rem] leading-[1.04] tracking-[-0.035em] text-[#201610] lg:text-[4.4rem]">
                Trust has to be built before the lid is opened.
              </h2>
            </div>

            <div className="mt-10 grid gap-px bg-[#b7a189] lg:grid-cols-3">
              {valueCards.map((card) => (
                <article key={card.title} className="bg-[#f7f1e8] p-6 lg:p-8">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f4633]">
                    {card.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#b7a189] bg-[#f7f1e8]">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-[#b7a189] lg:grid-cols-[0.94fr_1.06fr]">
            <div className="bg-[#f7f1e8] px-6 py-14 lg:px-10 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
                Craft Direction
              </p>
              <h2 className="mt-4 max-w-[740px] font-fraunces text-[3rem] leading-[1.04] tracking-[-0.035em] text-[#201610] lg:text-[4.4rem]">
                The jar should read clearly from ingredient to delivery.
              </h2>
              <div className="mt-8 grid gap-px bg-[#b7a189]">
                {craftSteps.map((step) => (
                  <article key={step.title} className="bg-[#eee1cf] px-5 py-5 lg:px-6">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                      {step.label}
                    </p>
                    <h3 className="mt-3 font-fraunces text-[1.9rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5f4633]">
                      {step.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-px bg-[#b7a189] md:grid-cols-2">
              <div className="overflow-hidden bg-[#e7d6c3] md:col-span-2">
                <img
                  src="/mango/mango_pickle.webp"
                  alt="Mango pickle jar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-[#f5efe4] p-6 lg:p-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                  Meal fit
                </p>
                <h3 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                  Built for repeat use
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f4633]">
                  The products are positioned for lunch plates, breakfast pairings,
                  and repeat family orders, not novelty browsing.
                </p>
              </div>
              <div className="bg-[#f5efe4] p-6 lg:p-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                  Visual rhythm
                </p>
                <h3 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                  Less filler, more food
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f4633]">
                  Product images, flavour cues, and direct hierarchy now do the work that old decorative sections failed to do.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#b7a189] bg-[#eee1cf]">
          <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[760px]">
                <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
                  Trust Markers
                </p>
                <h2 className="mt-4 font-fraunces text-[3rem] leading-[1.04] tracking-[-0.035em] text-[#201610] lg:text-[4.4rem]">
                  The whole storefront has to support the jar, not distract from it.
                </h2>
              </div>
              <Button
                variant="outline"
                className="h-12 border-[#201610] bg-transparent px-8 text-sm uppercase tracking-[0.18em] text-[#201610] hover:bg-[#201610] hover:text-[#f5efe4]"
                onClick={() => navigate("/collection")}
              >
                Browse Jars
              </Button>
            </div>

            <div className="mt-10 grid gap-px bg-[#b7a189] lg:grid-cols-2">
              {trustRows.map((row) => (
                <div key={row} className="bg-[#f7f1e8] px-6 py-5 text-sm leading-7 text-[#5f4633] lg:px-8">
                  {row}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
