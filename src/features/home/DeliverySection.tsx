import { Button } from "@/components/ui/button";
import React from "react";

const DeliverySection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden lg:px-[10vw]">
      <div className="container  lg:mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full  mb-12 lg:mb-0">
          <h2 className=" text-3xl lg:text-5xl font-extrabold leading-tight  w-full  text-pink-800">
            A Moments Of Delivered On{" "}
            <span className="text-orange-500">Right Time</span> & Place
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            The restaurants in Hangzhou also catered to many northern Chinese
            who had fled south from Kaifeng during the Jurchen invasion of the
            1120s, while it is also known that many restaurants were run by
            families.
          </p>

          <Button className="mt-8 bg-orange-400 hover:bg-orange-600 text-white font-semibold px-10 py-6 rounded-none  shadow-md transition duration-300">
            Order Now
          </Button>
        </div>

        {/* Image Content */}
        <div className="relative lg:w-1/2 w-full max-w-xl aspect-[1/0.86]">
          <img
            src="/delivery-banner-bg.png"
            alt="clouds"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <img
            src="/delivery-boy.svg"
            alt="delivery boy"
            className="absolute top-0 left-0 w-full transform -translate-x-20 transition-all"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
