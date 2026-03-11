import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import { useAppContext } from "@/apputils/AppContext";
import {
  getPickleLeadImage,
  getPicklePricePoints,
  getPickleProfile,
} from "@/apputils/pickleUi";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const tableMoments = [
  {
    title: "Lunch heat",
    copy: "The jar that makes plain rice and ghee feel complete.",
    image: "/chicken/chicken_bone_less.jpeg",
  },
  {
    title: "Breakfast side",
    copy: "Dosa, idli, and upma get a sharper finish with one spoon.",
    image: "/mango/mango_pickle.webp",
  },
  {
    title: "Family gifting",
    copy: "A shelf-worthy jar that still feels homemade when it arrives.",
    image: "/final.png",
  },
  {
    title: "Repeat orders",
    copy: "Rich enough to crave again before the lid goes back on.",
    image: "/spices_detail.png",
  },
];

const firstFoldHighlights = [
  {
    eyebrow: "Food-first frame",
    title: "No generic look",
    copy: "Dark wood, chilli red, mustard gold, and oil warmth set the tone from the first fold.",
  },
  {
    eyebrow: "Built to convert",
    title: "Faster decisions",
    copy: "Sizes, pairings, and flavour notes are visible before the user opens the jar page.",
  },
  {
    eyebrow: "Shelf presence",
    title: "Richer mood",
    copy: "The jars feel closer to real pantry luxury and less like a generic food listing.",
  },
  {
    eyebrow: "Rich finish",
    title: "Glossy masala",
    copy: "Thick masala and bright oil become the visual luxury detail of the jar.",
  },
  {
    eyebrow: "Everyday use",
    title: "Meal-ready jars",
    copy: "Built for rice, dosa, idli, paratha, and the repeat meals people actually eat.",
  },
  {
    eyebrow: "Product focus",
    title: "Real images",
    copy: "The mapped product photography carries the premium feel instead of empty graphics.",
  },
];

function HomeMain() {
  const navigate = useNavigate();
  const { pickelsData } = useAppContext();

  const featuredPickles = [...pickelsData]
    .sort((first, second) => second.orders - first.orders)
    .slice(0, 4);

  const heroPickle = featuredPickles[0] ?? pickelsData[0];
  const heroProfile = heroPickle ? getPickleProfile(heroPickle) : null;

  return (
    <div className="min-h-screen bg-[#f5efe4] text-[#201610]">
      <NavBar />
      <main>
        <section className="border-b border-[#b7a189] bg-[#eee1cf]">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-px bg-[#b7a189] lg:grid-cols-[0.92fr_1.08fr]">
              <div className="bg-[#eee1cf] px-6 py-10 lg:px-10 lg:py-14">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
                Premium Telugu Pickles
              </p>
              <h1 className="mt-6 max-w-[780px] font-fraunces text-[3.2rem] leading-[1.02] tracking-[-0.04em] text-[#201610] sm:text-[4.4rem] lg:text-[6rem]">
                Pickles that look rich, taste bold, and feel worth buying fast.
              </h1>
              <p className="mt-6 max-w-[640px] text-base leading-8 text-[#5f4633] lg:text-lg">
                Rich Telugu-style pickles for homes that want deep spice, glossy
                masala, and jars that feel worth opening the moment they arrive.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  className="h-12 border-[#201610] bg-[#201610] px-8 text-sm uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-[#3d1d10]"
                  onClick={() => navigate("/collection")}
                >
                  Shop Best Sellers
                </Button>
                <Button
                  variant="outline"
                  className="h-12 border-[#8a4027] bg-transparent px-8 text-sm uppercase tracking-[0.18em] text-[#8a4027] hover:bg-[#8a4027] hover:text-[#f5efe4]"
                  onClick={() => navigate("/about")}
                >
                  Brand Story
                </Button>
              </div>
              </div>

              <div className="bg-[#eee1cf]">
                <div className="relative h-[520px] overflow-hidden bg-[#2a140d] lg:h-[620px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
                    style={{ backgroundImage: "url('/banner_mobile.png')" }}
                  />
                  <div
                    className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
                    style={{ backgroundImage: "url('/banner_image.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201610]/42 via-[#201610]/10 to-transparent" />
                  <div className="absolute left-0 top-0 max-w-[320px] border-b border-r border-[#b7a189] bg-[#efe4d2] p-5 lg:max-w-[360px] lg:p-6">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#8a4027]">
                      Signature Hero
                    </p>
                    <h2 className="mt-4 font-fraunces text-[2.2rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                      Dark wood, glossy masala, whole-spice appetite.
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[#5f4633]">
                      The page now opens with the texture and colour that people
                      actually expect from a strong pickle brand.
                    </p>
                  </div>
                  {heroPickle && heroProfile ? (
                    <div className="absolute bottom-6 right-6 max-w-[380px] border border-[#b7a189] bg-[#201610]/88 p-5 text-[#f5efe4] backdrop-blur-sm lg:p-6">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[#b07a3a]">
                        {heroProfile.tag}
                      </p>
                      <h3 className="mt-3 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.025em] text-[#fffaf2]">
                        {heroPickle.productName}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[#e4d2c0]">
                        {heroProfile.notes.join(" • ")}
                      </p>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-[#b07a3a]">
                        Best with {heroProfile.pairWith}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="grid gap-px bg-[#b7a189] md:grid-cols-2 xl:grid-cols-6">
              {firstFoldHighlights.map((item) => (
                <article key={item.title} className="flex min-h-[190px] flex-col bg-[#f7f1e8] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                    {item.eyebrow}
                  </p>
                  <h2 className="mt-4 font-fraunces text-[1.8rem] leading-[1.06] tracking-[-0.025em] text-[#201610]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#5f4633]">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#b7a189] bg-[#f7f1e8]">
          <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[760px]">
                <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
                  Signature Jars
                </p>
                <h2 className="mt-4 font-fraunces text-[3rem] leading-[1.04] tracking-[-0.035em] text-[#201610] lg:text-[4.6rem]">
                  Use the real jar images and let the products do the premium work.
                </h2>
              </div>
              <Button
                variant="outline"
                className="h-12 border-[#201610] bg-transparent px-8 text-sm uppercase tracking-[0.18em] text-[#201610] hover:bg-[#201610] hover:text-[#f5efe4]"
                onClick={() => navigate("/collection")}
              >
                View Collection
              </Button>
            </div>

            <div className="mt-10 grid auto-rows-fr gap-6 xl:grid-cols-4 md:grid-cols-2">
              {featuredPickles.map((pickle) => {
                const profile = getPickleProfile(pickle);
                const pricePoints = getPicklePricePoints(pickle.price);
                const leadImage = getPickleLeadImage(pickle.productId, pickle.imageUrl);

                return (
                  <article key={pickle.productId} className="h-full border border-[#b7a189] bg-[#f5efe4]">
                    <div className="grid h-full">
                      <div className="h-[300px] border-b border-[#b7a189] bg-[#e7d6c3] lg:h-[340px]">
                        <img
                          src={leadImage}
                          alt={pickle.productName}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex h-full flex-col p-5 lg:p-6">
                        <div
                          className="flex min-h-[44px] items-center border px-4 py-2"
                          style={{
                            backgroundColor: profile.accent,
                            borderColor: profile.accent,
                          }}
                        >
                          <p className="text-[11px] uppercase tracking-[0.22em] text-[#fffaf2]">
                            {profile.tag}
                          </p>
                        </div>
                        <div className="mt-4 min-h-[104px]">
                          <h3 className="font-fraunces text-[2rem] leading-[1.06] tracking-[-0.025em] text-[#201610]">
                            {pickle.productName}
                          </h3>
                        </div>
                        <p className="min-h-[126px] text-sm leading-7 text-[#5f4633]">
                          {pickle.description}
                        </p>
                        <div className="mt-4 grid min-h-[120px] gap-px bg-[#b7a189]">
                          {pricePoints.map((point) => (
                            <div
                              key={point.label}
                              className="flex items-center justify-between bg-[#f7f1e8] px-3 py-2 text-sm text-[#201610]"
                            >
                              <span className="uppercase tracking-[0.18em] text-[#8a4027]">
                                {point.label}
                              </span>
                              <span className="font-fraunces text-[1.4rem] leading-none">
                                Rs. {point.value}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex min-h-[96px] flex-wrap content-start gap-3 pb-4">
                          {profile.notes.map((note) => (
                            <span
                              key={note}
                              className="border border-[#b7a189] px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-[#6a4c37]"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                        <div className="mt-auto border-t border-[#b7a189] pt-5">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                            Best with {profile.pairWith}
                          </p>
                          <Button
                            onClick={() => navigate(`/product/${pickle.productId}`)}
                            className="mt-4 h-11 w-full border-[#201610] bg-[#201610] text-xs uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-[#3d1d10]"
                          >
                            View Jar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-[#b7a189] bg-[#eee1cf]">
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[#b7a189] px-6 py-14 lg:border-b-0 lg:border-r lg:px-10 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
                Kitchen Presence
              </p>
              <h2 className="mt-4 max-w-[720px] font-fraunces text-[3rem] leading-[1.04] tracking-[-0.035em] text-[#201610] lg:text-[4.4rem]">
                From spice board to jar shelf, every image should feel edible.
              </h2>
              <p className="mt-6 max-w-[640px] text-base leading-8 text-[#5f4633]">
                The spice collage, the brand mark, and the actual jar photography
                now sit in one warmer visual system that feels more like food and
                less like filler.
              </p>
              <div className="mt-10 grid gap-px bg-[#b7a189] sm:grid-cols-2">
                <div className="bg-[#f7f1e8] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                    Brand trust
                  </p>
                  <h3 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.025em] text-[#201610]">
                    Ammamma feel
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f4633]">
                    The brand mark reads like packaging art, not a decorative extra.
                  </p>
                </div>
                <div className="bg-[#f7f1e8] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                    Spice depth
                  </p>
                  <h3 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.025em] text-[#201610]">
                    Proper palette
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f4633]">
                    Chilli red, mustard gold, dark wood brown, and oil warmth do the heavy lifting.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-px bg-[#b7a189] md:grid-cols-2">
              <div className="overflow-hidden bg-[#e7d6c3]">
                <img
                  src="/spices_detail.png"
                  alt="Pickle spice collage"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden bg-[#d9c177]">
                <img
                  src="/final.png"
                  alt="Muni Ammamma Pickles brand illustration"
                  className="h-full w-full object-contain p-8"
                />
              </div>
              <div className="overflow-hidden bg-[#201610]">
                <img
                  src="/banner_mobile.png"
                  alt="Chicken pickle served on a warm surface"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden bg-[#e7d6c3]">
                <img
                  src="/chicken/chicken_bone_less.jpeg"
                  alt="Boneless chicken pickle closeup"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#b7a189] bg-[#f7f1e8]">
          <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
                Everyday Plates
              </p>
              <h2 className="mt-4 font-fraunces text-[3rem] leading-[1.04] tracking-[-0.035em] text-[#201610] lg:text-[4.4rem]">
                For rice, dosa, gifting, and the meals people repeat most.
              </h2>
            </div>

            <div className="mt-10 grid gap-px bg-[#b7a189] lg:grid-cols-4">
              {tableMoments.map((moment) => (
                <article key={moment.title} className="bg-[#f5efe4]">
                  <div className="border-b border-[#b7a189] bg-[#e7d6c3]">
                    <img src={moment.image} alt={moment.title} className="aspect-[4/3] h-full w-full object-cover" />
                  </div>
                  <div className="p-5 lg:p-6">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                      Meal moment
                    </p>
                    <h3 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.025em] text-[#201610]">
                      {moment.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#5f4633]">
                      {moment.copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#b7a189] bg-[#201610] text-[#f5efe4]">
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.04fr_0.96fr]">
            <div className="border-b border-[#5a4332] px-6 py-14 lg:border-b-0 lg:border-r lg:px-10 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#b07a3a]">
                Final Push
              </p>
              <h2 className="mt-4 max-w-[760px] font-fraunces text-[3rem] leading-[1.04] tracking-[-0.035em] text-[#fffaf2] lg:text-[4.6rem]">
                Stronger jars, cleaner cards, better images, and a sharper final push to buy.
              </h2>
              <p className="mt-6 max-w-[620px] text-base leading-8 text-[#d7c2ac]">
                The last fold keeps the same promise: rich jars, warmer colour,
                clearer decisions, and a smoother movement into the collection.
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
                  Talk To Us
                </Button>
              </div>
            </div>

            <div className="grid gap-px bg-[#5a4332] md:grid-cols-2">
              <div className="overflow-hidden bg-[#e7d6c3]">
                <img src="/banner_mobile.png" alt="Chicken pickle bowl" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden bg-[#e7d6c3]">
                <img src="/mango/mango_pickle.webp" alt="Mango pickle jar" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden bg-[#e7d6c3]">
                <img src="/mutton/mutton_pickle.webp" alt="Mutton pickle jar" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden bg-[#e7d6c3]">
                <img src="/pandu_mirchi/pandu_mirchi.webp" alt="Pandu mirchi pickle jar" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomeMain;
