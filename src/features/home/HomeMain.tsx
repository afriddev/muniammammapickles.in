import NavBar from "@/apputils/NavBar";
import Footer from "@/apputils/Footer";
import DeliverySection from "./DeliverySection";
import Testimonials from "./Testimonials";
import HeroBanner from "./Test1";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
function HomeMain() {
  const features = [
    {
      id: "01",
      title: "Rooted in Tradition",
      description:
        "Every jar tells a story—crafted with age-old recipes passed down from generations.",
    },
    {
      id: "02",
      title: "Farm-Fresh Ingredients",
      description:
        "We handpick local, seasonal produce to ensure quality and authentic taste.",
    },
    {
      id: "03",
      title: "Small-Batch Crafting",
      description:
        "Made in small batches to preserve flavor integrity and freshness.",
    },
    {
      id: "04",
      title: "No Artificial Preservatives",
      description:
        "Our pickles are naturally fermented—free from chemicals or shortcuts.",
    },
    {
      id: "05",
      title: "Eco-Friendly Packaging",
      description:
        "Sustainability is core—we use recyclable jars and minimal plastic.",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="flex  flex-col">
      <NavBar />
      <div className="flex flex-col gap-14 items-center text-center">
        <div className="relative">
          <img className="hidden lg:flex w-full" src="/banner_image.jpg" />
          <img src="/banner_mobile.png" className="lg:hidden w-full" />

          <div className="absolute inset-0 bg-black/50 lg:bg-black/0 z-10"></div>

          <div className="absolute text-background lg:w-[30vw] text-start left-[5vw] z-20 flex flex-col justify-center top-[13vh] gap-3">
            <h1 className="text-3xl lg:text-[50px] leading-tight">
              Irresistible Chicken Pickle Flavors
            </h1>
            <p className="text-background text-xl lg:text-3xl">
              A bold twist on traditional flavors, crafted to excite your taste
              buds
            </p>
            <Button
              onClick={() => navigate("/collection")}
              className="mt-8 bg-orange-400 hover:bg-orange-600 text-white font-semibold px-10 py-6 w-fit rounded-none shadow-md transition duration-300"
            >
              Order Now
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 relative w-full">
          <img src="ing.png" className="absolute right-0 w-[10vw] " />
          <h4 className="text-pink-800 text-3xl">
            There's something for everyone
          </h4>
          <div className="flex flex-col lg:flex-row items-center justify-center    gap-5">
            <div className="flex items-center gap-5">
              <img src="chef.png" className="h-[25vh] lg:h-[50vh] lg:w-[20vw] object-cover rounded-xl" />
              <img src="helthy.png" className="h-[25vh] lg:h-[50vh] lg:w-[20vw] object-cover rounded-xl" />
            </div>
            <img src="go_better.png" className="h-[25vh] lg:h-[50vh] lg:w-[20vw] object-cover rounded-xl" />
          </div>
        </div>
        <section className="bg-white py-16 px-6 md:px-10 lg:px-20">
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((item) => (
              <div key={item.id} className="flex items-start space-x-4">
                <div className="text-[50px] text-outline font-unicafancy">
                  {item.id}
                </div>
                <div>
                  <h4 className="text-xl -mt-4 font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="relative">
          <img
            src="ing.png"
            className="z-50 rotate-180 absolute left-0 w-[10vw]  top-[0vh]"
          />
          <img
            src="ing.png"
            className="absolute right-0 z-50 w-[10vw]  bottom-[0vh]"
          />
          <DeliverySection />
        </div>

        <Testimonials />

        <section className="py-20 lg:px-[20vw] relative">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="relative w-full md:w-1/2">
              <img
                src="/chef.png" // Replace with your image path
                alt="About us"
                className="h-[70vh] rounded-lg object-cover"
              />

              {/* Floating Decorative Circles */}
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-yellow-400 rounded-full shadow-md animate-ping"></div>
              <div className="absolute -bottom-8 left-3 lg:left-10 w-14 h-14 border-8 border-white rounded-full shadow-lg animate-bounce"></div>
              <div className="absolute top-1/3 -right-3 w-4 h-4 animate-ping bg-yellow-400 rounded-full"></div>

              {/* Experience Card */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white px-6 py-10 shadow-xl rounded-lg lg:w-[10vw] text-center z-10">
                <h3 className="text-4xl font-extrabold text-purple-800 tracking-wide">
                  17
                </h3>
                <p className="mt-2 text-sm font-medium text-gray-700">
                  Years
                  <br />
                  Experience
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 ">
              <h2 className="text-3xl md:text-4xl font-bold  leading-tight text-pink-800">
                We are doing more than
                <br />
                you expect
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Faudantium magnam error temporibus ipsam aliquid neque quibusdam
                dolor, quia ea numquam assumenda mollitia dolorem impedit.
                Voluptate at quis exercitationem officia temporibus adipisci
                quae totam enim dolorem assumenda.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Consectetur adipisicing elit. Cupiditate nesciunt amet facilis
                numquam, nam adipisci qui voluptate voluptas enim obcaecati
                veritatis animi nulla, mollitia commodi quaerat ex, autem ea
                laborum.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-[#fcf6e8] w-full p-10 grid grid-cols-2 lg:grid-cols-4  justify-between gap-10 lg:gap-0 lg:px-[10vw] text-center">
          <div className="flex flex-col items-center gap-2">
            <img src="fast_shipping.png" />
            <p>Fast Shipping</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="payment_protected.png" />
            <p>Safe Payments</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="24_support.png" />
            <p>24x7 Support</p>
          </div>
          <div className="flex flex-col items-center gap-2  ">
            <img src="delivery_box.png" />
            <p>Spill Proof packing</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 relative">
          <img
            src="ing.png"
            className="absolute left-0 w-[10vw] rotate-180 top-[0vh]"
          />
          <img
            src="ing.png"
            className="absolute right-0 w-[10vw]  -bottom-[10vh]"
          />

          <h4 className="text-pink-800 text-3xl">Our Promise</h4>
          <div>
            <img
              src="spices_detail.png"
              className="object-cover w-[100vw] h-[25vh] lg:h-fit"
            />
          </div>
          <div className=" flex flex-col gap-6 lg:max-w-[60%] px-3 lg:text-sm text-center">
            <p>
              Traditional food is timeless. It is not only deeply nourishing, it
              is a pleasure to savour, and share! Nothing beats the enticing
              aroma of a slowly simmering pot of sambar rice, the tempting look
              of the red hot mango pickle, or the soul-warming deliciousness of
              the tangy rasam. Truth be told, traditional recipes are no less
              than precious heirlooms passed down from generation to generation!
            </p>
            <p>
              Priya Foods has its roots in tradition. A tradition of good,
              wholesome food prepared with minimally processed ingredients in a
              manner as close as possible to how your great-grandmother would
              have made it for you. With love, with diligence, and with no room
              for the slightest compromise – be it in the goodness of the
              ingredients, in the method of preparation, or in the time taken.
            </p>
            <p>
              Priya Foods brings to you and to your family…the{" "}
              <strong>Joy of Traditional Taste</strong> ! In particular, Telugu
              taste from the two states of Telangana and Andhra Pradesh. Because
              we believe that the beauty of food nostalgia keeps hearts
              connected wherever we are. Our recipes, the spices and ingredients
              we pick, the methods we follow, even the implements we use, are
              the kind that would get the nod of approval from even the purists.
            </p>
            <p>
              Established in 1980 with the aim of reintroducing authentic,
              traditional Telugu dishes to busy Indian households, Priya Foods
              has managed to find a place in Indian kitchens across the country.
              Especially sought after, Priya Foods’ Chutneys and Pickles serve
              nostalgia along with delectability to the Indian diaspora across
              the world. <br />
              Priya Foods’ state-of-the-art manufacturing facility holding
              multiple national and international certifications is an ode to
              its commitment to freshness, quality, hygiene, and safety. Priya
              Foods has successfully integrated traditional science with
              modern-day scientific manufacturing to keep the Telugu culinary
              flag flying high unfazed by time and distance. And all this comes
              at a price point that delivers value beyond expectations in order
              to enable every Indian culinary lover to bring home the real taste
              of Indian cuisine, hospitality, and trust.
            </p>
          </div>
        </div>
        <HeroBanner />
      </div>

      <Footer />
    </div>
  );
}

export default HomeMain;
