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

function HomeMain() {
  const navigate = useNavigate();
  const { pickelsData } = useAppContext();

  const featuredPickles = [...pickelsData]
    .sort((first, second) => second.orders - first.orders)
    .slice(0, 4);

  const heroPickle = featuredPickles[0] ?? pickelsData[0];
  const heroProfile = heroPickle ? getPickleProfile(heroPickle) : null;

  return (
    <div className="min-h-screen bg-[#f6ebd1] text-[#24110b]">
      <NavBar />
      <main>
        <section className="border-b border-[#c8af8d] bg-[#efe0c2]">
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="border-r-0 border-[#c8af8d] px-6 py-10 lg:border-r lg:px-10 lg:py-14">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8c3618]">
                Premium Telugu Pickles
              </p>
              <h1 className="mt-6 max-w-[780px] font-fraunces text-[3.2rem] leading-[0.9] text-[#24110b] sm:text-[4.4rem] lg:text-[6rem]">
                Pickles that look rich, taste bold, and feel worth buying fast.
              </h1>
              <p className="mt-6 max-w-[640px] text-base leading-8 text-[#5a3822] lg:text-lg">
                Rich Telugu-style pickles for homes that want deep spice, glossy
                masala, and jars that feel worth opening the moment they arrive.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  className="h-12 border-[#24110b] bg-[#24110b] px-8 text-sm uppercase tracking-[0.18em] text-[#f6ebd1] hover:bg-[#3d1d10]"
                  onClick={() => navigate("/collection")}
                >
                  Shop Best Sellers
                </Button>
                <Button
                  variant="outline"
                  className="h-12 border-[#8c3618] bg-transparent px-8 text-sm uppercase tracking-[0.18em] text-[#8c3618] hover:bg-[#8c3618] hover:text-[#f6ebd1]"
                  onClick={() => navigate("/about")}
                >
                  Brand Story
                </Button>
              </div>

              <div className="mt-10 grid gap-px bg-[#c8af8d] md:grid-cols-3">
                <div className="bg-[#f7edd9] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8c3618]">
                    Food-first frame
                  </p>
                  <h2 className="mt-4 font-fraunces text-[2rem] leading-[0.95] text-[#24110b]">
                    No generic look
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#5a3822]">
                    Dark wood, chilli red, mustard gold, and oil warmth set the
                    tone from the first fold.
                  </p>
                </div>
                <div className="bg-[#f7edd9] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8c3618]">
                    Built to convert
                  </p>
                  <h2 className="mt-4 font-fraunces text-[2rem] leading-[0.95] text-[#24110b]">
                    Faster decisions
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#5a3822]">
                    Sizes, pairings, and flavour notes are visible before the user
                    even opens the jar page.
                  </p>
                </div>
                <div className="bg-[#f7edd9] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8c3618]">
                    Shelf presence
                  </p>
                  <h2 className="mt-4 font-fraunces text-[2rem] leading-[0.95] text-[#24110b]">
                    Richer mood
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#5a3822]">
                    The jars feel closer to real pantry luxury and less like a
                    generic food listing.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-px bg-[#c8af8d]">
              <div className="relative min-h-[420px] overflow-hidden bg-[#2a140d] lg:min-h-[620px]">
                <picture className="block h-full w-full">
                  <source srcSet="/banner_image.jpg" media="(min-width: 1024px)" />
                  <img
                    src="/banner_mobile.png"
                    alt="Signature chicken pickle hero"
                    className="h-full w-full object-cover"
                    fetchPriority="high"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#24110b]/78 via-[#24110b]/18 to-transparent" />
                <div className="absolute left-0 top-0 max-w-[320px] border-b border-r border-[#c8af8d] bg-[#f3e2c4] p-5 lg:max-w-[360px] lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#8c3618]">
                    Signature Hero
                  </p>
                  <h2 className="mt-4 font-fraunces text-[2.2rem] leading-[0.92] text-[#24110b]">
                    Dark wood, glossy masala, whole-spice appetite.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#5a3822]">
                    The page now opens with the texture and colour that people
                    actually expect from a strong pickle brand.
                  </p>
                </div>
                {heroPickle && heroProfile ? (
                  <div className="absolute bottom-0 right-0 max-w-[380px] border-l border-t border-[#c8af8d] bg-[#24110b]/88 p-5 text-[#f6ebd1] backdrop-blur-sm lg:p-6">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#f0d4a1]">
                      {heroProfile.tag}
                    </p>
                    <h3 className="mt-3 font-fraunces text-[2rem] leading-none text-[#fff4df]">
                      {heroPickle.productName}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#ead7bc]">
                      {heroProfile.notes.join(" • ")}
                    </p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-[#f0d4a1]">
                      Best with {heroProfile.pairWith}
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="grid gap-px bg-[#c8af8d] md:grid-cols-3">
                <div className="bg-[#f7edd9] p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8c3618]">
                    Rich finish
                  </p>
                      <p className="mt-3 text-sm leading-7 text-[#24110b]">
                        Thick masala and bright oil become the luxury detail of the jar.
                      </p>
                    </div>
                <div className="bg-[#f7edd9] p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8c3618]">
                    Everyday use
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#24110b]">
                    Built for rice, dosa, idli, paratha, and repeat shelf use.
                  </p>
                </div>
                <div className="bg-[#f7edd9] p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8c3618]">
                    Better product focus
                  </p>
                      <p className="mt-3 text-sm leading-7 text-[#24110b]">
                        The real product photography carries the premium feel instead of graphics.
                      </p>
                    </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#c8af8d] bg-[#f7edd9]">
          <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[760px]">
                <p className="text-[11px] uppercase tracking-[0.34em] text-[#8c3618]">
                  Signature Jars
                </p>
                <h2 className="mt-4 font-fraunces text-[3rem] leading-[0.92] text-[#24110b] lg:text-[4.6rem]">
                  Use the real jar images and let the products do the premium work.
                </h2>
              </div>
              <Button
                variant="outline"
                className="h-12 border-[#24110b] bg-transparent px-8 text-sm uppercase tracking-[0.18em] text-[#24110b] hover:bg-[#24110b] hover:text-[#f6ebd1]"
                onClick={() => navigate("/collection")}
              >
                View Collection
              </Button>
            </div>

            <div className="mt-10 grid gap-px bg-[#c8af8d] xl:grid-cols-4 md:grid-cols-2">
              {featuredPickles.map((pickle) => {
                const profile = getPickleProfile(pickle);
                const pricePoints = getPicklePricePoints(pickle.price);
                const leadImage = getPickleLeadImage(pickle.productId, pickle.imageUrl);

                return (
                  <article key={pickle.productId} className="h-full bg-[#f6ebd1]">
                    <div className="grid h-full gap-px bg-[#c8af8d]">
                      <div className="border-b border-[#c8af8d] bg-[#ead8b8]">
                        <img
                          src={leadImage}
                          alt={pickle.productName}
                          className="aspect-[4/4.4] h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex h-full flex-col p-5 lg:p-6">
                        <div
                          className="border border-[#c8af8d] px-3 py-2"
                          style={{ backgroundColor: profile.panel }}
                        >
                          <p className="text-[11px] uppercase tracking-[0.24em] text-[#6d4426]">
                            {profile.tag}
                          </p>
                        </div>
                        <h3 className="mt-4 font-fraunces text-[2rem] leading-none text-[#24110b]">
                          {pickle.productName}
                        </h3>
                        <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#5a3822]">
                          {pickle.description}
                        </p>
                        <div className="mt-4 grid gap-px bg-[#c8af8d]">
                          {pricePoints.map((point) => (
                            <div
                              key={point.label}
                              className="flex items-center justify-between bg-[#f7edd9] px-3 py-2 text-sm text-[#24110b]"
                            >
                              <span className="uppercase tracking-[0.18em] text-[#8c3618]">
                                {point.label}
                              </span>
                              <span className="font-fraunces text-[1.4rem] leading-none">
                                Rs. {point.value}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex min-h-[72px] flex-wrap content-start gap-2">
                          {profile.notes.map((note) => (
                            <span
                              key={note}
                              className="border border-[#c8af8d] px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-[#6d4426]"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                        <div className="mt-auto border-t border-[#c8af8d] pt-4">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8c3618]">
                            Best with {profile.pairWith}
                          </p>
                          <Button
                            onClick={() => navigate(`/product/${pickle.productId}`)}
                            className="mt-4 h-11 w-full border-[#24110b] bg-[#24110b] text-xs uppercase tracking-[0.18em] text-[#f6ebd1] hover:bg-[#3d1d10]"
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

        <section className="border-b border-[#c8af8d] bg-[#efe0c2]">
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[#c8af8d] px-6 py-14 lg:border-b-0 lg:border-r lg:px-10 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8c3618]">
                Kitchen Presence
              </p>
              <h2 className="mt-4 max-w-[720px] font-fraunces text-[3rem] leading-[0.92] text-[#24110b] lg:text-[4.4rem]">
                From spice board to jar shelf, every image should feel edible.
              </h2>
              <p className="mt-6 max-w-[640px] text-base leading-8 text-[#5a3822]">
                The spice collage, the brand mark, and the actual jar photography
                now sit in one warmer visual system that feels more like food and
                less like filler.
              </p>
              <div className="mt-10 grid gap-px bg-[#c8af8d] sm:grid-cols-2">
                <div className="bg-[#f7edd9] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8c3618]">
                    Brand trust
                  </p>
                  <h3 className="mt-4 font-fraunces text-[2rem] leading-none text-[#24110b]">
                    Ammamma feel
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5a3822]">
                    The brand mark reads like packaging art, not a decorative extra.
                  </p>
                </div>
                <div className="bg-[#f7edd9] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8c3618]">
                    Spice depth
                  </p>
                  <h3 className="mt-4 font-fraunces text-[2rem] leading-none text-[#24110b]">
                    Proper palette
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5a3822]">
                    Chilli red, mustard gold, dark wood brown, and oil warmth do the heavy lifting.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-px bg-[#c8af8d] md:grid-cols-2">
              <div className="overflow-hidden bg-[#ead8b8]">
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
              <div className="overflow-hidden bg-[#24110b]">
                <img
                  src="/banner_mobile.png"
                  alt="Chicken pickle served on a warm surface"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden bg-[#ead8b8]">
                <img
                  src="/chicken/chicken_bone_less.jpeg"
                  alt="Boneless chicken pickle closeup"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#c8af8d] bg-[#f7edd9]">
          <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8c3618]">
                Everyday Plates
              </p>
              <h2 className="mt-4 font-fraunces text-[3rem] leading-[0.92] text-[#24110b] lg:text-[4.4rem]">
                For rice, dosa, gifting, and the meals people repeat most.
              </h2>
            </div>

            <div className="mt-10 grid gap-px bg-[#c8af8d] lg:grid-cols-4">
              {tableMoments.map((moment) => (
                <article key={moment.title} className="bg-[#f6ebd1]">
                  <div className="border-b border-[#c8af8d] bg-[#ead8b8]">
                    <img src={moment.image} alt={moment.title} className="aspect-[4/3] h-full w-full object-cover" />
                  </div>
                  <div className="p-5 lg:p-6">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#8c3618]">
                      Meal moment
                    </p>
                    <h3 className="mt-4 font-fraunces text-[2rem] leading-none text-[#24110b]">
                      {moment.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#5a3822]">
                      {moment.copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#c8af8d] bg-[#24110b] text-[#f6ebd1]">
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.04fr_0.96fr]">
            <div className="border-b border-[#5c3a24] px-6 py-14 lg:border-b-0 lg:border-r lg:px-10 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#f0d4a1]">
                Final Push
              </p>
              <h2 className="mt-4 max-w-[760px] font-fraunces text-[3rem] leading-[0.92] text-[#fff4df] lg:text-[4.6rem]">
                Stronger jars, cleaner cards, better images, and a sharper final push to buy.
              </h2>
              <p className="mt-6 max-w-[620px] text-base leading-8 text-[#e4d0b5]">
                The last fold keeps the same promise: rich jars, warmer colour,
                clearer decisions, and a smoother movement into the collection.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  className="h-12 border-[#f0d4a1] bg-[#f0d4a1] px-8 text-sm uppercase tracking-[0.18em] text-[#24110b] hover:bg-[#deb968]"
                  onClick={() => navigate("/collection")}
                >
                  Shop Collection
                </Button>
                <Button
                  variant="outline"
                  className="h-12 border-[#f0d4a1] bg-transparent px-8 text-sm uppercase tracking-[0.18em] text-[#f0d4a1] hover:bg-[#f0d4a1] hover:text-[#24110b]"
                  onClick={() => navigate("/contact")}
                >
                  Talk To Us
                </Button>
              </div>
            </div>

            <div className="grid gap-px bg-[#5c3a24] md:grid-cols-2">
              <div className="overflow-hidden bg-[#ead8b8]">
                <img src="/banner_mobile.png" alt="Chicken pickle bowl" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden bg-[#ead8b8]">
                <img src="/mango/mango_pickle.webp" alt="Mango pickle jar" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden bg-[#ead8b8]">
                <img src="/mutton/mutton_pickle.webp" alt="Mutton pickle jar" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden bg-[#ead8b8]">
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
