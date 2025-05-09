import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

function CollectionMain() {
  const pickles = [
    {
      pic: "/01.png",
      title: "CHIKEN PICKLE",
      description: "Rs.300 - 100gms",
    },
    {
      pic: "/01.png",
      title: "CHIKEN PICKLE",
      description: "Rs.700 - 250gms",
    },
    {
      pic: "/01.png",
      title: "CHIKEN PICKLE",
      description: "Rs.999 - 1kg",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-fit">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col">
        <div className="bg-secondary p-4 w-full h-fit flex flex-row items-center">
          <img
            src="final.png"
            className="w-[25vw] lg:w-[15vw] lg:-mt-10  object-cover flex items-center"
            alt="Order List"
          />
          <div className="flex flex-col justify-center w-[70vw] items-center  ">
            <h1 className="font-semibold text-white text-lg text-center  lg:text-3xl flex items-center ">
              A SOULFUL DESTINATION OF PICKLES
            </h1>
            <h1 className="font-light text-center bg-red-400 hidden lg:flex text-white text-xl items-center ml-16 ">
              The Store For Home Made Food Products
            </h1>
          </div>
        </div>

        <div className="flex gap-24 mt-10 w-full justify-center  ">
          <div className="lg:flex flex-col hidden ">
            <div className="flex">
              <div className="w-full h-fit  flex gap-5 flex-col">
                <div className="text-gray-500 text-lg font-thin underline">
                  Search by name
                </div>
                <div className="flex-col gap-4">
                  <Input className="" placeholder="Search for product" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="text-gray-500 text-lg font-thin underline">
                    Product Categories
                  </div>
                  <div className=" flex flex-col gap-2">
                    <div>+ Veg Pickles</div>
                    <div> + Non-Veg Pickles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-row gap-10 grid grid-cols-2 lg:grid-cols-3 ">
            {pickles?.map((pickle, index: number) => (
              <div
                key={index}
                className="  rounded-sm flex-col  items-center justify-center flex"
              >
                <img src="/01.png" className="h-[25vh] lg:w-[9vw] " />
                <div className=" w-full h-fit flex-col justify-center items-center p-3">
                  <div className="font-semibold text-black w-full flex justify-center">
                    {pickle?.title}
                  </div>
                  <div className="text-gray-600 font-thin w-full flex justify-center">
                    {pickle?.description}
                  </div>
                  <Button
                    onClick={() => navigate("/product")}
                    className="mt-2 w-full flex justify-center"
                    variant={"secondary"}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default CollectionMain;
