import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Collection", path: "/collection" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const flavourLinks = [
  { label: "Chicken Pickle", path: "/collection" },
  { label: "Mutton Pickle", path: "/collection" },
  { label: "Mango Pickle", path: "/collection" },
  { label: "Pandu Mirchi", path: "/collection" },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Service", path: "/terms" },
  { label: "Cookie Policy", path: "/cookie-policy" },
  { label: "Refund Policy", path: "/refund-policy" },
];

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full border-t border-[#b7a189] bg-[#201610] text-[#f5efe4]">
      <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-px bg-[#5a4332] lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div className="bg-[#2e1710] p-6 lg:p-8">
            <img
              src="/final.png"
              alt="Muni Ammamma Pickles"
              className="h-24 w-24 border border-[#b7a189] bg-[#e7d6c3] object-cover"
            />
            <h2 className="mt-5 font-fraunces text-4xl leading-[1.08] tracking-[-0.03em] text-[#fffaf2]">
              Authentic Telugu pickles for everyday meals and gifting.
            </h2>
            <p className="mt-4 max-w-[340px] text-sm leading-7 text-[#d9c5ac]">
              Chicken, mutton, mango, and pandu mirchi jars made for rice,
              dosa, paratha, and family tables that want real flavour.
            </p>
            <Button
              className="mt-6 h-11 border-[#b07a3a] bg-[#b07a3a] px-5 text-xs uppercase tracking-[0.18em] text-[#201610] shadow-none hover:bg-[#9a6733]"
              onClick={() => navigate("/collection")}
            >
              Shop Collection
            </Button>
          </div>

          <div className="bg-[#201610] p-6 lg:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#b07a3a]">
              Quick Links
            </p>
            <div className="mt-5 flex flex-col border-t border-[#5a4332]">
              {quickLinks.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="border-b border-[#5a4332] py-3 text-left text-sm uppercase tracking-[0.18em] text-[#fffaf2]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#201610] p-6 lg:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#b07a3a]">
              Best Sellers
            </p>
            <div className="mt-5 flex flex-col border-t border-[#5a4332]">
              {flavourLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className="border-b border-[#5a4332] py-3 text-left text-sm uppercase tracking-[0.18em] text-[#fffaf2]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#201610] p-6 lg:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#b07a3a]">
              Store Info
            </p>
            <div className="mt-5 border-t border-[#5a4332] pt-5 text-sm leading-7 text-[#d9c5ac]">
              <p>For product questions and order help:</p>
              <button
                className="mt-3 block text-left text-sm uppercase tracking-[0.18em] text-[#fffaf2]"
                onClick={() =>
                  window.open(
                    "mailto:afridayan01@gmail.com?subject=Muni Ammamma Pickles enquiry"
                  )
                }
              >
                afridayan01@gmail.com
              </button>
            </div>
            <div className="mt-6 flex flex-col border-t border-[#5a4332]">
              {legalLinks.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="border-b border-[#5a4332] py-3 text-left text-sm uppercase tracking-[0.18em] text-[#fffaf2]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-[#5a4332] pt-5 text-[11px] uppercase tracking-[0.24em] text-[#b07a3a] lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 Muni Ammamma Pickles</p>
          <p>Small-batch Telugu pickles for everyday meals and gifting.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
