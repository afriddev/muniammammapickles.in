/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from "@/apputils/AppContext";
import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

function CollectionMain() {
  const navigate = useNavigate();
  const { pickelsData } = useAppContext();

  return (
    <div className="flex flex-col h-fit">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col  gap-5">
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
            <h1 className="font-light text-center  hidden lg:flex text-white text-xl items-center ml-16 ">
              The Store For Home Made Food Products
            </h1>
          </div>
        </div>

        <div className="flex gap-24 mt-10  justify-center  ">
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
          <div className=" flex-row gap-10 grid grid-cols-2 lg:grid-cols-3  lg:px-0 px-5">
            {pickelsData?.map((pickle, index: number) => (
              <div
                key={index}
                className="  rounded-sm flex-col  items-center justify-center flex"
              >
                <img
                  src={pickle.imageUrl}
                  className=" h-[20vh] lg:h-[30vh] lg:w-[14vw] rounded"
                />
                <div className=" w-full h-fit flex-col justify-center items-center p-3">
                  <div className="font-semibold text-black w-full flex justify-center">
                    {pickle?.productName}
                  </div>
                  <div className="text-gray-600 font-thin w-full flex justify-center">
                    {parseInt((pickle?.price / 4) as any)} -{" "}
                    {parseInt(pickle?.price as any)} .Rs
                  </div>
                  <Button
                    onClick={() => navigate(`/product/${pickle?.productId}`)}
                    className="mt-2 w-full flex justify-center"
                    variant={"secondary"}
                  >
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#fcf6e8] w-full p-10 grid grid-cols-2 lg:grid-cols-4  justify-between gap-10 lg:gap-0 lg:px-[10vw] text-center">
          <div className="flex flex-col items-center gap-2">
            <img src="fast_shipping.png" className="lg:h-[14vh] lg:w-[7vw]" />
            <p>Fast Shipping</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              src="payment_protected.png"
              className="lg:h-[14vh] lg:w-[7vw]"
            />
            <p>Safe Payments</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="24_support.png" className="lg:h-[14vh] lg:w-[7vw]" />
            <p>24x7 Support</p>
          </div>
          <div className="flex flex-col items-center gap-2  ">
            <img src="delivery_box.png" className="lg:h-[14vh] lg:w-[7vw]" />
            <p>Spill Proof packing</p>
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
