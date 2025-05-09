import NavBar from "@/apputils/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const pickles = [
    {
      pic: "red_chilli.png",
      title: "CHIKEN PICKLE",
      description: "Rs.110 - Rs.330",
    },
    {
      pic: "red_chilli.png",
      title: "MANGO PICKLE",
      description: "Rs.110 - Rs.330",
    },
    {
      pic: "red_chilli.png",
      title: "TOMATO PICKLE",
      description: "Rs.110 - Rs.330",
    },
    {
      pic: "red_chilli.png",
      title: "MUTTON PICKLE",
      description: "Rs.110 - Rs.330",
    },
    {
      pic: "red_chilli.png",
      title: "RED_CHILLI PICKLE",
      description: "Rs.110 - Rs.330",
    },
    {
      pic: "red_chilli.png",
      title: "AMLA PICKLE",
      description: "Rs.110 - Rs.330",
    },
    
  ];
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-fit">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col">
        <div className="bg-red-800 w-full h-fit flex flex-row">
          
          <img
            src="final.png"
            className="w-[15vw]  object-cover flex items-center"
            alt="Order List"
          />

          <div className="flex flex-col justify-center ml-[21vw] ">
            <h1 className="font-semibold text-white text-3xl flex items-center ">
              A SOULFUL DESTINATION OF PICKLES
            </h1>
            <h1 className="font-light text-white text-xl flex items-center ml-16 ">
              The Store For Home Made Food Products
            </h1>
          </div>
        </div>

        <div className="flex gap-24 mt-10 w-full justify-center  ">
          <div className="flex flex-col ">
            <div className="flex">
              <div className="w-full h-fit  flex gap-5 flex-col">
                <div className="text-gray-500 text-lg font-thin underline">
                  Search by name
                </div>
                <div className="flex-col gap-4">
                  <Input className="" placeholder="Search for product"/>
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
          <div className=" flex-row gap-10 grid md:grid-cols-3 " >
            {pickles?.map((pickle, index: number) => (
              <div key={index} className="  rounded-sm flex-col ">
                <img src="/red_chilli.png"  className="h-[25vh] w-[12vw] object-cover border p-5"  onClick={() => navigate("/product")}/>
                <div className=" w-full h-fit flex-col justify-center items-center p-3">
                  <div className="font-semibold text-black w-full flex justify-center">
                    {pickle?.title}
                  </div>
                  <div className="text-gray-600 font-thin w-full flex justify-center">
                    {pickle?.description}
                  </div>
                  <Button className="mt-2 w-full flex justify-center bg-red-800" >Add to cart</Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
export default ProductList;
