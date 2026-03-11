import { useEffect } from "react";
import { useGetEmailId } from "./AppHooks";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { IoIosLogOut } from "react-icons/io";
import { Button } from "@/components/ui/button";

function Protected() {
  const emailId = useGetEmailId();
  const navigate = useNavigate();

  useEffect(() => {
    if (!emailId) {
      navigate("/login");
    }
  }, [emailId, navigate]);

  function handleLogout() {
    localStorage.removeItem("MAPEmailId");
    localStorage.removeItem("MAPName");
    localStorage.removeItem("MAPProfile");
    localStorage.removeItem("MAPAddressFilled");
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-[#f5efe4] text-[#201610]">
      <NavBar />
      <main>
        <section className="border-b border-[#b7a189] bg-[#f7f1e8]">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-5 px-6 py-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">Account center</p>
              <h1 className="mt-4 font-fraunces text-[2.8rem] leading-[1.04] tracking-[-0.03em] text-[#201610] lg:text-[4.2rem]">
                Manage your profile and delivery details.
              </h1>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="h-12 border-[#201610] bg-transparent px-6 text-xs uppercase tracking-[0.18em] text-[#201610] hover:bg-[#201610] hover:text-[#f5efe4]"
            >
              Logout
              <IoIosLogOut className="h-5 w-5" />
            </Button>
          </div>
        </section>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Protected;
