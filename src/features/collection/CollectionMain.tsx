import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import { useAppContext } from "@/apputils/AppContext";
import {
  getPickleLeadImage,
  getPicklePricePoints,
  getPickleProfile,
} from "@/apputils/pickleUi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { productDataType } from "@/types/product/ProductDataTypes";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type PickleFilter = "ALL" | "VEG" | "NON_VEG";

const filters: { label: string; value: PickleFilter }[] = [
  { label: "All Pickles", value: "ALL" },
  { label: "Veg", value: "VEG" },
  { label: "Non-Veg", value: "NON_VEG" },
];

function filterPickles(
  pickles: productDataType[],
  activeFilter: PickleFilter,
  searchedValue: string
) {
  return pickles.filter((pickle) => {
    const matchesFilter =
      activeFilter === "ALL" ? true : pickle.pickleType === activeFilter;
    const matchesSearch = pickle.productName
      .toLowerCase()
      .includes(searchedValue.trim().toLowerCase());

    return matchesFilter && matchesSearch;
  });
}

function CollectionMain() {
  const navigate = useNavigate();
  const { pickelsData } = useAppContext();
  const [searchedValue, setSearchedValue] = useState("");
  const [activeFilter, setActiveFilter] = useState<PickleFilter>("ALL");

  const filteredPickles = useMemo(
    () => filterPickles(pickelsData, activeFilter, searchedValue),
    [activeFilter, pickelsData, searchedValue]
  );

  return (
    <div className="min-h-screen bg-[#f5efe4] text-[#201610]">
      <NavBar />
      <main>
        <section className="border-b border-[#b7a189] bg-[#201610] text-[#f5efe4]">
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.94fr_1.06fr]">
            <div className="border-r-0 border-[#5a4332] px-6 py-10 lg:border-r lg:px-10 lg:py-14">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#b07a3a]">
                Collection
              </p>
              <h1 className="mt-6 max-w-[760px] font-fraunces text-[3.2rem] leading-[1.02] tracking-[-0.04em] text-[#fffaf2] sm:text-[4.2rem] lg:text-[5.6rem]">
                Better jars, better cards, and a cleaner way to choose fast.
              </h1>
              <p className="mt-6 max-w-[620px] text-base leading-8 text-[#d9c5ac] lg:text-lg">
                Browse the jar by flavour, compare sizes quickly, and move into the
                product page without the old flat listing feel.
              </p>

              <div className="mt-10 grid gap-px bg-[#5a4332] md:grid-cols-3">
                <div className="bg-[#2e1710] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#b07a3a]">
                    Sizes shown
                  </p>
                  <h2 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.025em] text-[#fffaf2]">
                    250g to 1kg
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#d9c5ac]">
                    Every jar now shows the actual pack ladder instead of a weak price range line.
                  </p>
                </div>
                <div className="bg-[#2e1710] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#b07a3a]">
                    Mapped images
                  </p>
                  <h2 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.025em] text-[#fffaf2]">
                    Public assets only
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#d9c5ac]">
                    The grid uses the real mapped product imagery already in the project.
                  </p>
                </div>
                <div className="bg-[#2e1710] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#b07a3a]">
                    Faster browse
                  </p>
                  <h2 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.025em] text-[#fffaf2]">
                    Clear filters
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#d9c5ac]">
                    All, veg, non-veg, plus direct search without the old awkward controls.
                  </p>
                </div>
              </div>
            </div>

            <div className="min-h-[420px] overflow-hidden bg-[#e7d6c3]">
              <picture className="block h-full w-full">
                <source srcSet="/banner_image.jpg" media="(min-width: 1024px)" />
                <img
                  src="/banner_mobile.png"
                  alt="Pickle collection hero"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="border-b border-[#b7a189] bg-[#eee1cf]">
          <div className="mx-auto max-w-[1600px] px-6 py-8 lg:px-10 lg:py-10">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <Input
                    value={searchedValue}
                    onClear={() => setSearchedValue("")}
                    onChange={(event) => setSearchedValue(event.target.value)}
                    icon="search"
                    placeholder="Search for chicken, mango, mutton..."
                    className="h-12 border-[#b7a189] bg-[#f7f1e8] text-[#201610]"
                  />
                </div>
                <div className="grid gap-px bg-[#b7a189] sm:grid-cols-3">
                  {filters.map((filter) => {
                    const isActive = activeFilter === filter.value;
                    return (
                      <button
                        key={filter.value}
                        onClick={() => setActiveFilter(filter.value)}
                        className={`px-4 py-3 text-xs uppercase tracking-[0.18em] ${
                          isActive
                            ? "bg-[#201610] text-[#f5efe4]"
                            : "bg-[#f7f1e8] text-[#201610]"
                        }`}
                      >
                        {filter.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-px bg-[#b7a189] sm:grid-cols-2 lg:min-w-[260px]">
                <div className="bg-[#f7f1e8] px-4 py-3 text-xs uppercase tracking-[0.18em] text-[#8a4027]">
                  <span className="text-[#201610]">{filteredPickles.length}</span> jars shown
                </div>
                <button
                  onClick={() => {
                    setActiveFilter("ALL");
                    setSearchedValue("");
                  }}
                  className="bg-[#f7f1e8] px-4 py-3 text-left text-xs uppercase tracking-[0.18em] text-[#201610]"
                >
                  Reset filters
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f1e8]">
          <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
            <div className="grid gap-6 xl:grid-cols-3 md:grid-cols-2">
              {filteredPickles.map((pickle) => {
                const profile = getPickleProfile(pickle);
                const pricePoints = getPicklePricePoints(pickle.price);
                const leadImage = getPickleLeadImage(pickle.productId, pickle.imageUrl);

                return (
                  <article key={pickle.productId} className="h-full border border-[#b7a189] bg-[#f5efe4]">
                    <div className="grid h-full">
                      <div className="border-b border-[#b7a189] bg-[#e7d6c3]">
                        <img
                          src={leadImage}
                          alt={pickle.productName}
                          className="aspect-[4/3.8] h-full w-full object-cover"
                        />
                      </div>
                      <div className="grid gap-px bg-[#b7a189] md:grid-cols-[1.05fr_0.95fr]">
                        <div className="flex h-full flex-col bg-[#f5efe4] p-5 lg:p-6">
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
                          <div className="mt-4 min-h-[110px]">
                            <h2 className="font-fraunces text-[2.2rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                              {pickle.productName}
                            </h2>
                          </div>
                          <p className="min-h-[112px] text-sm leading-7 text-[#5f4633]">
                            {pickle.description}
                          </p>
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
                          </div>
                        </div>

                        <div className="flex h-full flex-col bg-[#f7f1e8]">
                          <div className="grid gap-px bg-[#b7a189]">
                            {pricePoints.map((point) => (
                              <div
                                key={point.label}
                                className="flex items-center justify-between bg-[#f7f1e8] px-4 py-4 text-[#201610]"
                              >
                                <span className="text-[11px] uppercase tracking-[0.2em] text-[#8a4027]">
                                  {point.label}
                                </span>
                                <span className="font-fraunces text-[1.5rem] leading-none">
                                  Rs. {point.value}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-auto border-t border-[#b7a189] bg-[#eee1cf] p-5">
                            <p className="text-[11px] uppercase tracking-[0.22em] text-[#8a4027]">
                              Pick a size and open the jar page
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
                    </div>
                  </article>
                );
              })}
            </div>

            {filteredPickles.length === 0 && (
              <div className="border border-[#b7a189] bg-[#eee1cf] px-6 py-16 text-center">
                <div className="mx-auto flex max-w-[420px] flex-col items-center gap-4">
                  <Search className="h-8 w-8 text-[#8a4027]" />
                  <h2 className="font-fraunces text-[2.4rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                    No jar matched this search
                  </h2>
                  <p className="text-sm leading-7 text-[#5f4633]">
                    Try a broader word like chicken, mango, or mutton, or reset the filters.
                  </p>
                  <Button
                    variant="outline"
                    className="h-11 border-[#201610] bg-transparent px-6 text-xs uppercase tracking-[0.18em] text-[#201610] hover:bg-[#201610] hover:text-[#f5efe4]"
                    onClick={() => {
                      setActiveFilter("ALL");
                      setSearchedValue("");
                    }}
                  >
                    <X className="h-4 w-4" />
                    Clear Search
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CollectionMain;
