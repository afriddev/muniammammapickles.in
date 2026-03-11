/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetAddressFilled,
  useGetEmailId,
  useGetName,
} from "@/apputils/AppHooks";
import {
  CART_UPDATED_EVENT,
  readCartItems,
  writeCartItems,
} from "@/apputils/cart";
import AppSpinner from "@/apputils/AppSpinner";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCreateOrder, useVerifyOrder } from "@/hooks/user/userHooks";
import type { addToCartProductType } from "@/types/product/ProductDataTypes";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RazorpayOrderOptions, useRazorpay } from "react-razorpay";

type CartMainProps = {
  mode?: "sheet" | "page";
};

function CartMain({ mode = "sheet" }: CartMainProps) {
  const isPage = mode === "page";
  const navigate = useNavigate();
  const { toast } = useToast();
  const emailId = useGetEmailId();
  const myName = useGetName();
  const addressFilled = useGetAddressFilled();
  const { createOrder, isPending } = useCreateOrder();
  const { verifyOrder, isPending: verifyOrderPending } = useVerifyOrder();
  const { Razorpay } = useRazorpay();
  const [agreed, setAgreed] = useState(false);
  const [cartProducts, setCartProducts] = useState<addToCartProductType[]>(() =>
    readCartItems()
  );
  const key = import.meta.env.VITE_RAZORPAY_KEY_ID;

  useEffect(() => {
    const syncCart = () => {
      setCartProducts(readCartItems());
    };

    syncCart();
    window.addEventListener(CART_UPDATED_EVENT, syncCart);
    window.addEventListener("storage", syncCart);

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  const totalPrice = useMemo(
    () =>
      cartProducts.reduce(
        (price, item) => price + (item.price / item.size) * item.quantity,
        0
      ),
    [cartProducts]
  );

  const totalUnits = useMemo(
    () =>
      cartProducts.reduce(
        (totalCount, cartItem) => totalCount + (cartItem.quantity ?? 0),
        0
      ),
    [cartProducts]
  );

  function updateItems(nextItems: addToCartProductType[]) {
    setCartProducts(nextItems);
    writeCartItems(nextItems);
  }

  function handleDelete(index: number) {
    const nextItems = cartProducts.filter((_, itemIndex) => itemIndex !== index);
    updateItems(nextItems);
  }

  function handleQuantityChange(index: number, nextQuantity: number) {
    if (nextQuantity <= 0) {
      handleDelete(index);
      return;
    }

    const nextItems = cartProducts.map((item, itemIndex) =>
      itemIndex === index ? { ...item, quantity: nextQuantity } : item
    );
    updateItems(nextItems);
  }

  function getCartImage(item: addToCartProductType) {
    if (item.imageUrl) {
      return item.imageUrl;
    }

    switch (item.productId) {
      case "Chicken-pickle-boneless":
        return "/chicken/chicken_bone_less.jpeg";
      case "Chicken-pickle-bone":
        return "/chicken/chicken_bone.webp";
      case "mango-pickle":
        return "/mango/mango_pickle.webp";
      case "mutton-pickle":
        return "/mutton/mutton_pickle.webp";
      case "pandu-mirchi-pickle":
        return "/pandu_mirchi/pandu_mirchi.webp";
      default:
        return "/banner_mobile.png";
    }
  }

  function handlePayment(orderId: string, amount: number) {
    if (!key || !Razorpay) {
      toast({
        title: "Payment is not ready",
        description: "Razorpay configuration is missing for this storefront.",
        variant: "destructive",
      });
      return;
    }

    const options: RazorpayOrderOptions = {
      key,
      amount,
      currency: "INR",
      name: "Muni Ammamma Pickles",
      description: "Order payment for Muni Ammamma Pickles",
      order_id: orderId,
      handler: (response) => {
        if (
          response.razorpay_order_id &&
          response.razorpay_payment_id &&
          response.razorpay_signature
        ) {
          verifyOrder({
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          });
        }
      },
      prefill: {
        name: myName as string,
        email: emailId as string,
      },
      theme: {
        color: "#8a4027",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  }

  function handlePlaceOrder() {
    if (!emailId) {
      toast({
        title: "Please login to continue",
        description: "You must be logged in before placing an order.",
        variant: "constructive",
      });
      navigate("/login");
      return;
    }

    if (addressFilled !== "true") {
      toast({
        title: "Please complete your address",
        description: "We need your saved delivery address before checkout.",
        variant: "destructive",
      });
      navigate("/profile");
      return;
    }

    createOrder(
      { emailId, amount: Math.round(totalPrice) },
      {
        onSuccess(data) {
          if (data?.data === "SUCCESS") {
            handlePayment(data.orderId, data.amount);
          }
        },
      }
    );
  }

  return (
    <div
      className={
        isPage
          ? "grid gap-px bg-[#b7a189] xl:grid-cols-[minmax(0,1fr)_380px]"
          : "flex h-full min-h-0 flex-col"
      }
    >
      <AppSpinner isPending={isPending || verifyOrderPending} />

      <section
        className={
          isPage
            ? "bg-[#f7f1e8] p-6 lg:p-8"
            : "flex min-h-0 flex-1 flex-col bg-[#f5efe4]"
        }
      >
        <div className={isPage ? "" : "border-b border-[#b7a189] px-4 pb-4"}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
                {isPage ? "Cart" : "Cart drawer"}
              </p>
              <h1
                className={`mt-4 font-fraunces tracking-[-0.03em] text-[#201610] ${
                  isPage
                    ? "text-[3rem] leading-[1.04] lg:text-[4.2rem]"
                    : "text-[2rem] leading-[1.06]"
                }`}
              >
                {isPage ? "Review the jars before checkout." : "Your cart"}
              </h1>
              <p className="mt-4 max-w-[640px] text-sm leading-7 text-[#5f4633]">
                {isPage
                  ? "Confirm size, quantity, and total before moving into payment."
                  : "A quick view of what is ready to buy right now."}
              </p>
            </div>
            {!isPage ? (
              <Button
                variant="outline"
                onClick={() => navigate("/cart")}
                className="h-11 border-[#8a4027] bg-transparent px-4 text-[11px] uppercase tracking-[0.18em] text-[#8a4027] hover:bg-[#8a4027] hover:text-[#f5efe4]"
              >
                Full cart
              </Button>
            ) : null}
          </div>
        </div>

        <div
          className={
            isPage
              ? "mt-8 grid gap-4"
              : "flex-1 overflow-y-auto px-4 py-4"
          }
        >
          {cartProducts.length === 0 ? (
            <div
              className={`flex flex-col items-center justify-center border border-dashed border-[#d3bf9f] bg-[#f8efdf] text-center ${
                isPage ? "min-h-[360px] p-10" : "min-h-[260px] p-6"
              }`}
            >
              <ShoppingBag className="h-14 w-14 text-[#8a4027]" />
              <h2 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                Your cart is empty
              </h2>
              <p className="mt-3 max-w-[420px] text-sm leading-7 text-[#5f4633]">
                Add a jar from the collection and come back here when you are ready
                to check out.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => navigate("/collection")}
                  className="h-11 border-[#201610] bg-[#201610] px-6 text-xs uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-[#3d1d10]"
                >
                  Start shopping
                </Button>
                {!isPage ? (
                  <Button
                    variant="outline"
                    onClick={() => navigate("/cart")}
                    className="h-11 border-[#8a4027] bg-transparent px-6 text-xs uppercase tracking-[0.18em] text-[#8a4027] hover:bg-[#8a4027] hover:text-[#f5efe4]"
                  >
                    Open full cart
                  </Button>
                ) : null}
              </div>
            </div>
          ) : (
            <div className={isPage ? "grid gap-4" : "grid gap-3"}>
              {cartProducts.map((item, index) => {
                const sizeLabel =
                  item.size === 4 ? "250g" : item.size === 2 ? "500g" : "1kg";
                const unitPrice = Math.round(item.price / item.size);
                const lineTotal = unitPrice * item.quantity;
                const imageSrc = getCartImage(item);

                return (
                  <article
                    key={`${item.productId}-${index}`}
                    className="border border-[#b7a189] bg-[#f7f1e8]"
                  >
                    <div
                      className={`grid gap-px bg-[#b7a189] ${
                        isPage
                          ? "lg:grid-cols-[140px_minmax(0,1fr)_230px]"
                          : "grid-cols-[96px_minmax(0,1fr)]"
                      }`}
                    >
                      <div className="bg-[#e7d6c3]">
                        <img
                          src={imageSrc}
                          alt={item.productName}
                          className={`w-full object-cover ${
                            isPage ? "h-full min-h-[210px]" : "h-full min-h-[132px]"
                          }`}
                          onError={(event) => {
                            event.currentTarget.src = "/banner_mobile.png";
                          }}
                        />
                      </div>

                      <div className="bg-[#f7f1e8] p-4 lg:p-5">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="border border-[#b7a189] bg-[#eee1cf] px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-[#8a4027]">
                            Size {sizeLabel}
                          </span>
                          <span className="border border-[#b7a189] bg-[#eee1cf] px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-[#8a4027]">
                            Unit Rs. {unitPrice}
                          </span>
                        </div>

                        <h3 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                          {item.productName}
                        </h3>
                        <p className="mt-3 max-w-[620px] text-sm leading-7 text-[#5f4633]">
                          {item.description}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-[#d3bf9f] pt-4">
                          <div className="flex items-center border border-[#b7a189] bg-[#eee1cf]">
                            <button
                              type="button"
                              onClick={() =>
                                handleQuantityChange(index, item.quantity - 1)
                              }
                              className="flex h-10 w-10 items-center justify-center border-r border-[#b7a189] text-[#201610]"
                              aria-label={`Decrease quantity for ${item.productName}`}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="flex h-10 min-w-[52px] items-center justify-center text-sm uppercase tracking-[0.18em] text-[#201610]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                handleQuantityChange(index, item.quantity + 1)
                              }
                              className="flex h-10 w-10 items-center justify-center border-l border-[#b7a189] text-[#201610]"
                              aria-label={`Increase quantity for ${item.productName}`}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleDelete(index)}
                            className="inline-flex h-10 items-center gap-2 border border-[#b7a189] bg-transparent px-4 text-[11px] uppercase tracking-[0.18em] text-[#8a4027]"
                          >
                            <Trash2 className="h-4 w-4" />
                            Remove
                          </button>
                        </div>
                      </div>

                      <div
                        className={`flex flex-col justify-between bg-[#eee1cf] p-4 lg:p-5 ${
                          isPage ? "" : "col-span-2 border-t border-[#b7a189]"
                        }`}
                      >
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                              Line total
                            </p>
                            <p className="mt-3 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                              Rs. {lineTotal}
                            </p>
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                              Best for
                            </p>
                            <p className="mt-3 text-sm leading-7 text-[#5f4633]">
                              {item.productName.includes("Mango")
                                ? "Curd rice, dosa, and lunch plates."
                                : "Hot rice, roti, and repeat spicy meals."}
                            </p>
                          </div>
                        </div>

                        {isPage ? (
                          <Button
                            variant="outline"
                            onClick={() => navigate(`/product/${item.productId}`)}
                            className="mt-5 h-11 border-[#8a4027] bg-transparent text-xs uppercase tracking-[0.18em] text-[#8a4027] hover:bg-[#8a4027] hover:text-[#f5efe4]"
                          >
                            Open jar page
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <aside
        className={
          isPage ? "bg-[#eee1cf] p-6 lg:p-8" : "border-t border-[#b7a189] bg-[#eee1cf] p-4"
        }
      >
        <div className="border border-[#b7a189] bg-[#f7f1e8] p-5">
          <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
            Order summary
          </p>
          <div className="mt-5 space-y-3 border-t border-[#b7a189] pt-4 text-sm leading-7 text-[#5f4633]">
            <div className="flex items-center justify-between text-[#201610]">
              <span>Distinct jars</span>
              <span>{cartProducts.length}</span>
            </div>
            <div className="flex items-center justify-between text-[#201610]">
              <span>Total units</span>
              <span>{totalUnits}</span>
            </div>
            <div className="flex items-center justify-between text-[#201610]">
              <span>Subtotal</span>
              <span className="font-fraunces text-[1.8rem] leading-[1.06] tracking-[-0.03em]">
                Rs. {Math.round(totalPrice)}
              </span>
            </div>
            <p>Shipping is calculated during payment.</p>
          </div>

          <div className="mt-5 grid gap-px bg-[#b7a189] border-t border-[#b7a189] pt-5">
            <div className="flex items-center justify-between bg-[#eee1cf] px-4 py-3 text-sm text-[#201610]">
              <span>Account</span>
              <span className="uppercase tracking-[0.14em] text-[#8a4027]">
                {emailId ? "Ready" : "Login required"}
              </span>
            </div>
            <div className="flex items-center justify-between bg-[#eee1cf] px-4 py-3 text-sm text-[#201610]">
              <span>Delivery address</span>
              <span className="uppercase tracking-[0.14em] text-[#8a4027]">
                {addressFilled === "true" ? "Saved" : "Missing"}
              </span>
            </div>
          </div>

          <label className="mt-5 flex items-start gap-3 border-t border-[#b7a189] pt-5 text-sm leading-7 text-[#5f4633]">
            <input
              checked={agreed}
              type="checkbox"
              className="mt-1"
              onChange={() => setAgreed((current) => !current)}
            />
            <span>
              I agree with the terms and conditions and understand that unboxing
              proof may be requested for missing-item claims.
            </span>
          </label>

          <div className="mt-5 grid gap-3">
            <Button
              onClick={handlePlaceOrder}
              disabled={!agreed || totalPrice <= 0}
              className="h-12 border-[#201610] bg-[#201610] text-xs uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-[#3d1d10]"
            >
              Place order
            </Button>
            {!isPage ? (
              <Button
                variant="outline"
                onClick={() => navigate("/cart")}
                className="h-12 border-[#8a4027] bg-transparent text-xs uppercase tracking-[0.18em] text-[#8a4027] hover:bg-[#8a4027] hover:text-[#f5efe4]"
              >
                Open full cart
              </Button>
            ) : null}
            <Button
              variant="outline"
              onClick={() => navigate("/collection")}
              className="h-12 border-[#8a4027] bg-transparent text-xs uppercase tracking-[0.18em] text-[#8a4027] hover:bg-[#8a4027] hover:text-[#f5efe4]"
            >
              Continue shopping
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default CartMain;
