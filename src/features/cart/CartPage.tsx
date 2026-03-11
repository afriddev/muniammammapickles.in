import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import CartMain from "./CartMain";

function CartPage() {
  return (
    <div className="min-h-screen bg-[#f5efe4] text-[#201610]">
      <NavBar />
      <main>
        <section className="border-b border-[#5a4332] bg-[#201610] text-[#f5efe4]">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-[#5a4332] lg:grid-cols-[1fr_340px]">
            <div className="bg-[#201610] px-6 py-14 lg:px-10 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#d79b45]">
                Checkout cart
              </p>
              <h1 className="mt-5 max-w-[860px] font-fraunces text-[3.2rem] leading-[1.02] tracking-[-0.04em] text-[#fffaf2] lg:text-[5.2rem]">
                Clean cart, clear totals, no drawer-level confusion.
              </h1>
              <p className="mt-6 max-w-[720px] text-base leading-8 text-[#dcc9b4] lg:text-lg">
                Review every jar on a full page, confirm your address, and move into payment without the cramped side sheet.
              </p>
            </div>
            <div className="grid gap-px bg-[#5a4332]">
              <div className="bg-[#2e1710] p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#d79b45]">
                  Step 1
                </p>
                <p className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#fffaf2]">
                  Review jars
                </p>
              </div>
              <div className="bg-[#2e1710] p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#d79b45]">
                  Step 2
                </p>
                <p className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#fffaf2]">
                  Place order
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#b7a189] bg-[#eee1cf]">
          <div className="mx-auto max-w-[1600px] px-6 py-10 lg:px-10 lg:py-14">
            <CartMain mode="page" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CartPage;
