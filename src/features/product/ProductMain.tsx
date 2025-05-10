import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoChevronBackOutline } from "react-icons/io5";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ProductMain() {
  const navigate = useNavigate();
  const [noOfItems, setNoOfItems] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>(0);

  function handleIncrement() {
    setNoOfItems(noOfItems + 1);
  }
  function handleDecrement() {
    if (noOfItems > 1) {
      setNoOfItems(noOfItems - 1);
    }
  }
  return (
    <div>
      <NavBar />
      <div className="ml-4 mt-2">
        <Button
          className=""
          onClick={() => {
            navigate("/collection");
          }}
          variant={"ghost"}
        >
          <IoChevronBackOutline /> Back
        </Button>
      </div>

      <div className="flex items-center justify-center mt-5 ">
        <div className="w-full flex-col  items-center justify-center flex ">
          <div className="flex lg:flex-row flex-col justify-between w-[90%] lg:w-[60%]">
            <img
              src="/01.png "
              className=" lg:w-[20vw] lg:h-[60vh] rounded-lg"
            />
            <div className="flex flex-col gap-2 w-fit ">
              <div className="flex-col flex gap-3">
                <h1 className=" font-semibold text-2xl text-foreground">
                  Chicken Pickle
                </h1>
                <h2 className=" font-light text-foreground/70 text-xl">
                  <span className="text-foreground">Rs.</span> 400
                </h2>
              </div>
              <div className="text-foreground/60">
                Shipping calculated at checkout.
              </div>
              <p className="lg:w-[30vw] text-foreground/60 ">
                <span className="text-foreground">PRODUCT DESCRIPTION :</span>{" "}
                Rich in vitamin C and natural antioxidants, it's both tasty and
                nourishing. Each batch is slow-cooked with authentic spices for
                that homemade punch. Perfect with rice, roti, or as a zesty side
                to your favorite meals.
              </p>
              <p className="lg:w-[30vw] text-foreground/60 ">
                <span className="text-foreground">Shelf Life :</span> 6 months.
              </p>
              <p className="lg:w-[30vw] text-foreground/60 ">
                <span className="text-foreground">Product storage :</span> Keep
                it at room temperature in a cool, dry place for 2 days and store
                it in the refrigerator.
              </p>

              <div className="flex-col flex gap-1">
                <div className="font-semibold text-foreground/60 text-sm">
                  <span className="text-foreground">SIZE : </span>300G
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      setSelectedSize(0);
                    }}
                    className="h-8"
                    variant={selectedSize === 0 ? "secondary" : "outline"}
                  >
                    250g
                  </Button>
                  <Button
                    onClick={() => {
                      setSelectedSize(1);
                    }}
                    className="h-8"
                    variant={selectedSize === 1 ? "secondary" : "outline"}
                  >
                    500g
                  </Button>
                  <Button
                    onClick={() => {
                      setSelectedSize(2);
                    }}
                    className="h-8"
                    variant={selectedSize === 2 ? "secondary" : "outline"}
                  >
                    1kg
                  </Button>
                </div>
              </div>
              <div className="flex gap-4 h-fit items-center">
                <div className="border-2 border-black flex justify-between gap-7 p-2 items-center lg:w-[7vw]">
                  <MdOutlineHorizontalRule
                    className="cursor-pointer"
                    onClick={handleDecrement}
                  />
                  <div>{noOfItems}</div>
                  <FaPlus
                    onClick={handleIncrement}
                    className="cursor-pointer"
                  />
                </div>
                <Button
                  className="rounded-none w-[50%] lg:w-[20vw]"
                  variant={"secondary"}
                >
                  Add to cart
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-foreground/70 text-sm">
                  Vendor :{" "}
                  <span className="font-semibold text-foreground">
                    Muni ammmamma pickles
                  </span>
                </div>
                <div className="text-foreground/70 text-sm">
                  Availabilty :{" "}
                  <span className="font-semibold text-foreground">
                    In Stock
                  </span>
                </div>

                <div className="text-foreground/70 text-sm">
                  Delivery :{" "}
                  <span className="font-semibold text-foreground">
                    Withn 7 days{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <section className="bg-white text-gray-800   border w-[90%] lg:w-[60%] mt-10">
            <h2 className="text-xl font-semibold border-b p-5 pb-2 mb-4 text-secondary">
              Description
            </h2>

            <div className="space-y-6 p-5">
              <div>
                <h3 className="text-lg font-bold">Product Description</h3>
                <p>
                  Complete every meal at home or at the office with this
                  delicious tomato achar with garlic from the legendary brand
                  Priya Foods and get transported back to your childhood. This
                  recipe has a distinctive taste of Andhra or Telugu style
                  homemade pickles.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">Ingredients</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Tomato Pieces</li>
                  <li>Ioized Salt</li>
                  <li>Refined Rice Bran Oil</li>
                  <li>Mustard</li>
                  <li>Garlic</li>
                  <li>Red Chillies</li>
                  <li>Fenugreek and Turmeric</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold">Nutrition</h3>
                <p>
                  We at Priya Foods have successfully integrated traditional
                  science with modern-day scientific manufacturing. Our Tomato
                  Pickle has wholesome ingredients such as tomatoes which are
                  selectively handpicked. Refined rice bran oil which contains
                  oryzanol – a natural anti-oxidant which is good for the heart.
                  Mustard seeds contain beneficial alpha-linolenic acid that
                  forms essential omega fats in our body. Fenugreek is known for
                  diabetic management and a positive effect on digestive health.
                  Garlic is known for its anti-inflammatory and anti-acidity
                  properties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-secondary">
                  More About Tomato Pickle:
                </h3>

                <div className="mt-2">
                  <h4 className="font-semibold">
                    Traditional and Signature Pickle Taste
                  </h4>
                  <p>
                    Priya Tomato Pickle with Garlic is a highly tempting and
                    savored pickle. It is adored across generations – a
                    distinctive taste that can’t be forgotten!
                  </p>
                </div>

                <div className="mt-2">
                  <h4 className="font-semibold">
                    Taste, Purity & Hygiene Combined
                  </h4>
                  <p>
                    Handpicked fresh tomatoes, refined rice bran oil & iodized
                    salt meeting stringent quality standards are used so as to
                    retain the authentic taste, appearance & texture.
                  </p>
                </div>

                <div className="mt-2">
                  <h4 className="font-semibold">
                    Relish With All Indian Cuisines
                  </h4>
                  <p>
                    The magic recipe of this achar completes the taste of every
                    meal from dosa, idli, uttapam to roti, rice, and paratha.
                    Enjoyed by all, bachelors as well as families!
                  </p>
                </div>

                <div className="mt-2">
                  <h4 className="font-semibold">Packaging & Certification</h4>
                  <p>
                    Easy to carry, leakproof pack. No breakage, no fuss. Priya
                    Foods has ISO: 22000-2018 Certification from Intertek; HACCP
                    Certification from Intertek.
                  </p>
                </div>

                <div className="mt-2">
                  <h4 className="font-semibold">Storage</h4>
                  <p>
                    Use a dry spoon for serving, mix well before use and keep
                    the oil layer on top of the pickle for freshness. Store in a
                    dry and cool place. It has a long shelf life of 12 months
                    after opening.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default ProductMain;
