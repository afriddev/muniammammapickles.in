import NavBar from "@/apputils/NavBar";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

function Product() {
  return (
    <div>
      <NavBar />
      <div className="bg-yellow-50 w-full h-fit flex justify-between items-center px-10">
        <img src="final.png" className="w-14 h-14" />
        <div className="">Now Shipping Across India!</div>
        <div>Free Delivery on orders above 700/-</div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <div className="w-full flex-col  items-center justify-center flex ">
          <div className="flex justify-between w-[60%]">
            <img
              src="/pickle_bottle.png "
              className=" w-[20vw] h-[60vh] rounded-lg object-cover"
            />
            <div className="flex flex-col gap-5  w-fit ">
              <div className="flex-col flex gap-3">
                <h1 className=" font-semibold text-2xl text-foreground">
                  Chicken Pickle
                </h1>
                <h2 className=" font-light text-foreground/70 text-xl">
                  Rs. 400
                </h2>
              </div>
              <div className="text-foreground/60">
                Shipping calculated at checkout.
              </div>
              <p className="w-[30vw] text-foreground/60 ">
                PRODUCT DESCRIPTION: Rich in vitamin C and natural antioxidants,
                it's both tasty and nourishing. Each batch is slow-cooked with
                authentic spices for that homemade punch. Perfect with rice,
                roti, or as a zesty side to your favorite meals.
              </p>
              <div className="flex-col flex gap-1">
                <div className="font-semibold text-foreground/60 text-sm">
                  SIZE:300G
                </div>
                <div className="flex gap-2">
                  <Button className="" variant={"default"}>250g</Button>
                  <Button className="" variant={"outline"}>500g</Button>
                  <Button className="" variant={"outline"}>1kg</Button>
                </div>
              </div>
              <div className="flex gap-4 h-fit items-center">
                <div className="border-2 border-black flex justify-between gap-7 p-2 items-center">
                  <MdOutlineHorizontalRule />
                  <div>1</div>
                  <FaPlus />
                </div>
                <Button>Add to cart</Button>
                <FaRegHeart className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
