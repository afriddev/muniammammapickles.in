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
    <div className="min-h-screen bg-[#f6ebd1] text-[#24110b]">
      <NavBar />
      <main>
        <section className="border-b border-[#c8af8d] bg-[#24110b] text-[#f6ebd1]">
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.94fr_1.06fr]">
            <div className="border-r-0 border-[#5c3a24] px-6 py-10 lg:border-r lg:px-10 lg:py-14">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#f0d4a1]">
                Collection
              </p>
              <h1 className="mt-6 max-w-[760px] font-fraunces text-[3.2rem] leading-[0.9] text-[#fff4df] sm:text-[4.2rem] lg:text-[5.6rem]">
                Better jars, better cards, and a cleaner way to choose fast.
              </h1>
              <p className="mt-6 max-w-[620px] text-base leading-8 text-[#e2ccb0] lg:text-lg">
                Browse the jar by flavour, compare sizes quickly, and move into the
                product page without the old flat listing feel.
              </p>

              <div className="mt-10 grid gap-px bg-[#5c3a24] md:grid-cols-3">
                <div className="bg-[#2e1710] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#f0d4a1]">
                    Sizes shown
                  </p>
                  <h2 className="mt-4 font-fraunces text-[2rem] leading-[0.95] text-[#fff4df]">
                    250g to 1kg
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#e2ccb0]">
                    Every jar now shows the actual pack ladder instead of a weak price range line.
                  </p>
                </div>
                <div className="bg-[#2e1710] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#f0d4a1]">
                    Mapped images
                  </p>
                  <h2 className="mt-4 font-fraunces text-[2rem] leading-[0.95] text-[#fff4df]">
                    Public assets only
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#e2ccb0]">
                    The grid uses the real mapped product imagery already in the project.
                  </p>
                </div>
                <div className="bg-[#2e1710] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#f0d4a1]">
                    Faster browse
                  </p>
                  <h2 className="mt-4 font-fraunces text-[2rem] leading-[0.95] text-[#fff4df]">
                    Clear filters
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#e2ccb0]">
                    All, veg, non-veg, plus direct search without the old awkward controls.
                  </p>
                </div>
              </div>
            </div>

            <div className="min-h-[420px] overflow-hidden bg-[#ead8b8]">
              <picture className="block h-full w-full">
                <source srcSet="/banner_image.jpg" media="(min-width: 1024px)" />
                <img
                  src="/bg_1.png"
                  alt="Pickle collection hero"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="border-b border-[#c8af8d] bg-[#efe0c2]">
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
                    className="h-12 border-[#c8af8d] bg-[#f7edd9] text-[#24110b]"
                  />
                </div>
                <div className="grid gap-px bg-[#c8af8d] sm:grid-cols-3">
                  {filters.map((filter) => {
                    const isActive = activeFilter === filter.value;
                    return (
                      <button
                        key={filter.value}
                        onClick={() => setActiveFilter(filter.value)}
                        className={`px-4 py-3 text-xs uppercase tracking-[0.18em] ${
                          isActive
                            ? "bg-[#24110b] text-[#f6ebd1]"
                            : "bg-[#f7edd9] text-[#24110b]"
                        }`}
                      >
                        {filter.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-px bg-[#c8af8d] sm:grid-cols-2 lg:min-w-[260px]">
                <div className="bg-[#f7edd9] px-4 py-3 text-xs uppercase tracking-[0.18em] text-[#8c3618]">
                  <span className="text-[#24110b]">{filteredPickles.length}</span> jars shown
                </div>
                <button
                  onClick={() => {
                    setActiveFilter("ALL");
                    setSearchedValue("");
                  }}
                  className="bg-[#f7edd9] px-4 py-3 text-left text-xs uppercase tracking-[0.18em] text-[#24110b]"
                >
                  Reset filters
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7edd9]">
          <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
            <div className="grid gap-px bg-[#c8af8d] xl:grid-cols-3 md:grid-cols-2">
              {filteredPickles.map((pickle) => {
                const profile = getPickleProfile(pickle);
                const pricePoints = getPicklePricePoints(pickle.price);
                const leadImage = getPickleLeadImage(pickle.productId, pickle.imageUrl);

                return (
                  <article key={pickle.productId} className="h-full bg-[#f6ebd1]">
                    <div className="grid gap-px bg-[#c8af8d]">
                      <div className="border-b border-[#c8af8d] bg-[#ead8b8]">
                        <img
                          src={leadImage}
                          alt={pickle.productName}
                          className="aspect-[4/3.8] h-full w-full object-cover"
                        />
                      </div>
                      <div className="grid gap-px bg-[#c8af8d] md:grid-cols-[1.05fr_0.95fr]">
                        <div className="flex h-full flex-col bg-[#f6ebd1] p-5 lg:p-6">
                          <div
                            className="border border-[#c8af8d] px-3 py-2"
                            style={{ backgroundColor: profile.panel }}
                          >
                            <p className="text-[11px] uppercase tracking-[0.24em] text-[#6d4426]">
                              {profile.tag}
                            </p>
                          </div>
                          <h2 className="mt-4 font-fraunces text-[2.2rem] leading-[0.94] text-[#24110b]">
                            {pickle.productName}
                          </h2>
                          <p className="mt-4 min-h-[72px] text-sm leading-7 text-[#5a3822]">
                            {pickle.description}
                          </p>
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
                          </div>
                        </div>

                        <div className="grid gap-px bg-[#c8af8d]">
                          {pricePoints.map((point) => (
                            <div
                              key={point.label}
                              className="flex items-center justify-between bg-[#f7edd9] px-4 py-4 text-[#24110b]"
                            >
                              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8c3618]">
                                {point.label}
                              </span>
                              <span className="font-fraunces text-[1.5rem] leading-none">
                                Rs. {point.value}
                              </span>
                            </div>
                          ))}
                          <div className="bg-[#24110b] p-4">
                            <Button
                              onClick={() => navigate(`/product/${pickle.productId}`)}
                              className="h-11 w-full border-[#f0d4a1] bg-[#f0d4a1] text-xs uppercase tracking-[0.18em] text-[#24110b] hover:bg-[#deb968]"
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
              <div className="border border-[#c8af8d] bg-[#efe0c2] px-6 py-16 text-center">
                <div className="mx-auto flex max-w-[420px] flex-col items-center gap-4">
                  <Search className="h-8 w-8 text-[#8c3618]" />
                  <h2 className="font-fraunces text-[2.4rem] leading-none text-[#24110b]">
                    No jar matched this search
                  </h2>
                  <p className="text-sm leading-7 text-[#5a3822]">
                    Try a broader word like chicken, mango, or mutton, or reset the filters.
                  </p>
                  <Button
                    variant="outline"
                    className="h-11 border-[#24110b] bg-transparent px-6 text-xs uppercase tracking-[0.18em] text-[#24110b] hover:bg-[#24110b] hover:text-[#f6ebd1]"
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
