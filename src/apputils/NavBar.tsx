import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartMain from "@/features/cart/CartMain";
import { useEffect, useState } from "react";
import { useGetEmailId, useGetProfileUrl } from "./AppHooks";
import { CART_UPDATED_EVENT, getCartCount } from "./cart";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Collection", path: "/collection" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const emailId = useGetEmailId();
  const profileUrl = useGetProfileUrl();

  useEffect(() => {
    setOpenCart(false);
    setOpenMenu(false);
  }, [location]);

  useEffect(() => {
    const syncCartCount = () => {
      setCartCount(getCartCount());
    };

    syncCartCount();
    window.addEventListener("storage", syncCartCount);
    window.addEventListener(CART_UPDATED_EVENT, syncCartCount);

    return () => {
      window.removeEventListener("storage", syncCartCount);
      window.removeEventListener(CART_UPDATED_EVENT, syncCartCount);
    };
  }, []);

  function isActive(path: string) {
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "/home";
    }

    return location.pathname.startsWith(path);
  }

  return (
    <header className="sticky top-0 z-[200] w-full border-b border-[#b7a189] bg-[#f5efe4]/95 backdrop-blur">
      <div className="border-b border-[#6f3421] bg-[#8a4027]">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3 text-[10px] uppercase tracking-[0.32em] text-[#fffaf2] lg:px-10">
          <p>Handmade Andhra pickles</p>
          <p className="hidden font-semibold md:block">Packed fresh. Built for repeat orders.</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4 lg:px-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 text-left"
        >
          <img
            src="/final.png"
            alt="Muni Ammamma Pickles"
            className="h-12 w-12 border border-[#b7a189] bg-[#e7d6c3] object-cover"
          />
          <div>
            <p className="font-fraunces text-[2rem] leading-[1.02] tracking-[-0.03em] text-[#201610]">
              Muni Ammamma
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.34em] text-[#8a4027]">
              Pickles
            </p>
          </div>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`border-b pb-1 text-sm uppercase tracking-[0.18em] transition-colors ${
                isActive(item.path)
                  ? "border-[#8a4027] text-[#201610]"
                  : "border-transparent text-[#6a4c37] hover:border-[#8a4027] hover:text-[#201610]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Sheet open={openCart} onOpenChange={setOpenCart}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="h-11 border-[#201610] bg-transparent px-5 text-xs uppercase tracking-[0.18em] text-[#201610] shadow-none hover:bg-[#201610] hover:text-[#f5efe4]"
              >
                <ShoppingBag className="h-4 w-4" />
                Cart
                <span className="border border-current px-1.5 py-0.5 text-[10px] leading-none">
                  {cartCount}
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-full max-w-[440px] flex-col border-l border-[#b7a189] bg-[#f5efe4] p-0 pt-12 shadow-none"
            >
              <CartMain />
            </SheetContent>
          </Sheet>

          {emailId ? (
            <button
              onClick={() => navigate("/profile")}
              className="flex items-center gap-3 border border-[#201610] px-3 py-2"
            >
              <img
                src={profileUrl || "/default_profile.webp"}
                alt="Profile"
                className="h-9 w-9 border border-[#b7a189] object-cover"
              />
              <span className="text-xs uppercase tracking-[0.18em] text-[#201610]">
                Account
              </span>
            </button>
          ) : (
            <Button
              className="h-11 border-[#201610] bg-[#201610] px-5 text-xs uppercase tracking-[0.18em] text-[#f5efe4] shadow-none hover:bg-[#342017]"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={openCart} onOpenChange={setOpenCart}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative border-[#201610] bg-transparent text-[#201610] shadow-none hover:bg-[#201610] hover:text-[#f5efe4]"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 border border-[#201610] bg-[#f5efe4] px-1 text-[9px] leading-none text-[#201610]">
                  {cartCount}
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-full max-w-[440px] flex-col border-l border-[#b7a189] bg-[#f5efe4] p-0 pt-12 shadow-none"
            >
              <CartMain />
            </SheetContent>
          </Sheet>

          <Sheet open={openMenu} onOpenChange={setOpenMenu}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-[#201610] bg-transparent text-[#201610] shadow-none hover:bg-[#201610] hover:text-[#f5efe4]"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-[#b7a189] bg-[#f5efe4] p-0 shadow-none"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="px-6 py-20">
                  <div className="border-b border-[#b7a189] pb-6">
                    <p className="font-fraunces text-4xl leading-[1.04] tracking-[-0.03em] text-[#201610]">
                      Store Menu
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#5f4633]">
                      Pick a flavour, open the collection, and order fast.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col border-t border-[#b7a189]">
                    {navItems.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        className="border-b border-[#b7a189] py-4 text-left text-sm uppercase tracking-[0.18em] text-[#201610]"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#b7a189] px-6 py-6">
                  {emailId ? (
                    <Button
                      variant="outline"
                      className="w-full border-[#201610] bg-transparent text-xs uppercase tracking-[0.18em] text-[#201610] shadow-none hover:bg-[#201610] hover:text-[#f5efe4]"
                      onClick={() => navigate("/profile")}
                    >
                      My Account
                    </Button>
                  ) : (
                    <Button
                      className="w-full border-[#201610] bg-[#201610] text-xs uppercase tracking-[0.18em] text-[#f5efe4] shadow-none hover:bg-[#342017]"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
