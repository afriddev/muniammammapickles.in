import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Menu, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function NavBar() {
  const navigate = useNavigate();

  return (
    <header className="w-full sticky top-0 z-[200] bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="px-5 lg:px-20 py-4 flex items-center justify-between">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="flex relative">
            <div className="w-6 h-3 rotate-90 rounded-t-full bg-secondary"></div>
            <div className="w-6 h-3 rotate-180 -mt-3 -ml-3 rounded-t-full bg-secondary"></div>
          </div>
          <h1 className="text-xl lg:text-2xl font-bold text-secondary -ml-2 mt-1 tracking-tight">
            Muni Ammama Pickles
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Popover>
            <PopoverTrigger className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
              Products
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <div
                onClick={() => navigate("/products/classic")}
                className="cursor-pointer py-2 hover:text-blue-600"
              >
                Classic Pickles
              </div>
              <div
                onClick={() => navigate("/products/premium")}
                className="cursor-pointer py-2 hover:text-blue-600"
              >
                Premium Series
              </div>
              <div
                onClick={() => navigate("/products/combo")}
                className="cursor-pointer py-2 hover:text-blue-600"
              >
                Combos
              </div>
            </PopoverContent>
          </Popover>

          <button
            onClick={() => navigate("/about")}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            About
          </button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/cart")}
            className="relative"
          >
            <ShoppingCart className="w-5 h-5 text-blue-600" />
          </Button>

          <Button
            variant="outline"
            className="border-blue-500 text-blue-600 hover:bg-blue-50"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>

          <Button
            onClick={() => navigate("/pricing")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Get Started
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-blue-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 space-y-4">
              <div
                onClick={() => navigate("/products")}
                className="text-base font-medium text-gray-800 hover:text-blue-600 cursor-pointer"
              >
                Products
              </div>
              <div
                onClick={() => navigate("/about")}
                className="text-base font-medium text-gray-800 hover:text-blue-600 cursor-pointer"
              >
                About
              </div>
              <div
                onClick={() => navigate("/cart")}
                className="text-base font-medium text-gray-800 hover:text-blue-600 cursor-pointer"
              >
                Cart
              </div>
              <Button
                variant="outline"
                className="w-full border-blue-500 text-blue-600 hover:bg-blue-50"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/pricing")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Started
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
