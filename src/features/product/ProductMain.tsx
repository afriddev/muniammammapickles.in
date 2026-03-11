/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from "@/apputils/AppContext";
import AppSpinner from "@/apputils/AppSpinner";
import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import { readCartItems, writeCartItems } from "@/apputils/cart";
import {
  getPickleLeadImage,
  getPicklePricePoints,
  getPickleProfile,
} from "@/apputils/pickleUi";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  addToCartProductType,
  productDataType,
} from "@/types/product/ProductDataTypes";
import { Minus, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const sizeOptions = [
  { label: "250g", divisor: 4 },
  { label: "500g", divisor: 2 },
  { label: "1kg", divisor: 1 },
];

function ProductMain() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pickelsData } = useAppContext();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(4);
  const [productData, setProductData] = useState<productDataType | undefined>();

  useEffect(() => {
    const currentProduct = pickelsData.find((pickle) => pickle.productId === id);
    setProductData(currentProduct);
    setQuantity(1);
    setSelectedSize(4);
  }, [id, pickelsData]);

  const relatedPickles = useMemo(
    () =>
      pickelsData
        .filter((pickle) => pickle.productId !== id)
        .sort((first, second) => second.orders - first.orders)
        .slice(0, 3),
    [id, pickelsData]
  );

  function handleAddToCart() {
    if (!productData) {
      return;
    }

    const cartItems: addToCartProductType[] = readCartItems();
    const existingProduct = cartItems.find(
      (cartItem) => cartItem.productId === productData.productId
    );

    if (existingProduct) {
      existingProduct.size = selectedSize;
      existingProduct.quantity = quantity;
      writeCartItems(cartItems);
    } else {
      cartItems.push({
        description: productData.description,
        isKgs: productData.isKgs,
        isML: productData.isMl,
        imageUrl: getPickleLeadImage(productData.productId, productData.imageUrl),
        price: productData.price,
        productId: productData.productId,
        productName: productData.productName,
        quantity,
        size: selectedSize,
      });
      writeCartItems(cartItems);
    }

    toast({
      variant: "constructive",
      title: "Added to cart",
      description: `${productData.productName} · ${
        sizeOptions.find((option) => option.divisor === selectedSize)?.label ?? "250g"
      } · Qty ${quantity}`,
    });
  }

  if (!productData) {
    return (
      <div className="min-h-screen bg-[#f5efe4] text-[#201610]">
        <AppSpinner isPending={true} />
        <NavBar />
        <Footer />
      </div>
    );
  }

  const profile = getPickleProfile(productData);
  const leadImage = getPickleLeadImage(productData.productId, productData.imageUrl);
  const pricePoints = getPicklePricePoints(productData.price);
  const selectedPrice = Math.round(productData.price / selectedSize);

  return (
    <div className="min-h-screen bg-[#f5efe4] text-[#201610]">
      <AppSpinner isPending={false} />
      <NavBar />
      <main>
        <section className="border-b border-[#b7a189] bg-[#eee1cf]">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-[#b7a189] lg:grid-cols-[1.02fr_0.98fr]">
            <div className="bg-[#e7d6c3]">
              <div className="relative min-h-[420px] overflow-hidden lg:min-h-[760px]">
                <img
                  src={leadImage}
                  alt={productData.productName}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201610]/18 via-transparent to-transparent" />
                <div className="absolute left-0 top-0 border-b border-r border-[#b7a189] bg-[#efe4d2] p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#8a4027]">
                    {profile.tag}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f4633]">
                    {profile.notes.join(" • ")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f7f1e8] px-6 py-10 lg:px-10 lg:py-14">
              <button
                onClick={() => navigate("/collection")}
                className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]"
              >
                Back to collection
              </button>
              <h1 className="mt-5 max-w-[720px] font-fraunces text-[3rem] leading-[1.04] tracking-[-0.035em] text-[#201610] lg:text-[4.8rem]">
                {productData.productName}
              </h1>
              <p className="mt-5 max-w-[620px] text-base leading-8 text-[#5f4633] lg:text-lg">
                {productData.description}
              </p>

              <div className="mt-8 grid gap-px bg-[#b7a189] sm:grid-cols-3">
                <div className="bg-[#eee1cf] p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                    Best with
                  </p>
                  <p className="mt-4 font-fraunces text-[1.8rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                    {profile.pairWith}
                  </p>
                </div>
                <div className="bg-[#eee1cf] p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                    Shelf life
                  </p>
                  <p className="mt-4 font-fraunces text-[1.8rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                    6 months
                  </p>
                </div>
                <div className="bg-[#eee1cf] p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                    Availability
                  </p>
                  <p className="mt-4 font-fraunces text-[1.8rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                    {productData.isAvailable ? "In stock" : "Out of stock"}
                  </p>
                </div>
              </div>

              <div className="mt-8 border border-[#b7a189] bg-[#eee1cf] p-5 lg:p-6">
                <div className="flex flex-col gap-2 border-b border-[#b7a189] pb-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                    Selected pack
                  </p>
                  <div className="flex items-end justify-between gap-4">
                    <p className="font-fraunces text-[2.6rem] leading-[1.02] tracking-[-0.03em] text-[#201610]">
                      Rs. {selectedPrice}
                    </p>
                    <p className="text-sm leading-7 text-[#5f4633]">
                      Shipping calculated at checkout.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-px bg-[#b7a189] sm:grid-cols-3">
                  {sizeOptions.map((option, index) => (
                    <button
                      key={option.label}
                      onClick={() => setSelectedSize(option.divisor)}
                      className={`px-4 py-4 text-left ${
                        selectedSize === option.divisor
                          ? "bg-[#201610] text-[#f5efe4]"
                          : "bg-[#f7f1e8] text-[#201610]"
                      }`}
                    >
                      <p className="text-[11px] uppercase tracking-[0.24em]">
                        {option.label}
                      </p>
                      <p className="mt-3 font-fraunces text-[1.8rem] leading-[1.06] tracking-[-0.03em]">
                        Rs. {pricePoints[index].value}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                      Quantity
                    </p>
                    <div className="mt-3 flex h-12 items-center border border-[#201610] bg-[#f7f1e8]">
                      <button
                        onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                        className="flex h-full w-12 items-center justify-center border-r border-[#201610]"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <div className="flex h-full min-w-[72px] items-center justify-center text-sm uppercase tracking-[0.18em]">
                        {quantity}
                      </div>
                      <button
                        onClick={() => setQuantity((current) => current + 1)}
                        className="flex h-full w-12 items-center justify-center border-l border-[#201610]"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-3 lg:max-w-[340px]">
                    <Button
                      disabled={!productData.isAvailable}
                      onClick={handleAddToCart}
                      className="h-12 border-[#201610] bg-[#201610] text-xs uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-[#3d1d10]"
                    >
                      Add to cart
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 border-[#8a4027] bg-transparent text-xs uppercase tracking-[0.18em] text-[#8a4027] hover:bg-[#8a4027] hover:text-[#f5efe4]"
                      onClick={() => navigate("/collection")}
                    >
                      Continue browsing
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#b7a189] bg-[#f7f1e8]">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-[#b7a189] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="bg-[#f7f1e8] px-6 py-14 lg:px-10 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
                What is inside
              </p>
              <h2 className="mt-4 max-w-[720px] font-fraunces text-[3rem] leading-[1.04] tracking-[-0.035em] text-[#201610] lg:text-[4.4rem]">
                Ingredients and handling should be clear before checkout.
              </h2>
              <div className="mt-8 grid gap-px bg-[#b7a189]">
                {productData.ingredients.map((ingredient) => (
                  <div
                    key={ingredient}
                    className="bg-[#eee1cf] px-5 py-4 text-sm leading-7 text-[#5f4633] lg:px-6"
                  >
                    {ingredient}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-px bg-[#b7a189] md:grid-cols-2">
              <div className="bg-[#eee1cf] p-6 lg:p-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                  Storage
                </p>
                <h3 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                  Cool, dry, and clean spoon only.
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f4633]">
                  Keep the jar sealed well, use a dry spoon, and store it in a cool
                  place. Refrigeration helps once opened regularly.
                </p>
              </div>
              <div className="bg-[#eee1cf] p-6 lg:p-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                  Meal pairing
                </p>
                <h3 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                  Best with {profile.pairWith}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f4633]">
                  The jar is positioned for direct meal use, not shelf decoration.
                  Pairing guidance is shown so customers can buy faster.
                </p>
              </div>
              <div className="bg-[#eee1cf] p-6 lg:p-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                  Delivery
                </p>
                <h3 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                  Packed for safe dispatch.
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f4633]">
                  Orders move into fulfilment after payment confirmation. Delivery
                  time depends on serviceability and courier movement.
                </p>
              </div>
              <div className="bg-[#eee1cf] p-6 lg:p-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                  Jar mood
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.notes.map((note) => (
                    <span
                      key={note}
                      className="border border-[#b7a189] px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-[#6a4c37]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eee1cf]">
          <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[760px]">
                <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
                  More jars
                </p>
                <h2 className="mt-4 font-fraunces text-[3rem] leading-[1.04] tracking-[-0.035em] text-[#201610] lg:text-[4.4rem]">
                  Keep the next choice visible while the customer is still hungry.
                </h2>
              </div>
              <Button
                variant="outline"
                className="h-12 border-[#201610] bg-transparent px-8 text-sm uppercase tracking-[0.18em] text-[#201610] hover:bg-[#201610] hover:text-[#f5efe4]"
                onClick={() => navigate("/collection")}
              >
                View full collection
              </Button>
            </div>

            <div className="mt-10 grid gap-px bg-[#b7a189] lg:grid-cols-3">
              {relatedPickles.map((pickle) => {
                const relatedProfile = getPickleProfile(pickle);
                const relatedImage = getPickleLeadImage(
                  pickle.productId,
                  pickle.imageUrl
                );

                return (
                  <article key={pickle.productId} className="bg-[#f7f1e8]">
                    <div className="border-b border-[#b7a189] bg-[#e7d6c3]">
                      <img
                        src={relatedImage}
                        alt={pickle.productName}
                        className="aspect-[4/3] h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 lg:p-8">
                      <div
                        className="flex min-h-[44px] items-center border px-4 py-2"
                        style={{
                          backgroundColor: relatedProfile.accent,
                          borderColor: relatedProfile.accent,
                        }}
                      >
                        <p className="text-[11px] uppercase tracking-[0.22em] text-[#fffaf2]">
                          {relatedProfile.tag}
                        </p>
                      </div>
                      <h3 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                        {pickle.productName}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[#5f4633]">
                        {pickle.description}
                      </p>
                      <Button
                        onClick={() => navigate(`/product/${pickle.productId}`)}
                        className="mt-6 h-11 w-full border-[#201610] bg-[#201610] text-xs uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-[#3d1d10]"
                      >
                        View jar
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ProductMain;
