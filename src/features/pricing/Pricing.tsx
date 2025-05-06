import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Star, Rocket, Crown, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import NavBar from "@/apputils/NavBar";
import PageWrapper from "@/apputils/PageWrapper";
import Footer from "@/apputils/Footer";

const plans = [
  {
    role: "Freelancer",
    title: "Freelancer Plans",
    description:
      "Optimized for independent professionals: start free or unlock premium features to take your freelance career to the next level.",
    tiers: [
      {
        type: "Free",
        price: "₹0 / $0",
        features: [
          "Apply to 5 jobs/day",
          "Create and showcase portfolio",
          "Basic analytics dashboard",
          "Community support",
        ],
        special: ["Public profile sharing", "Skill endorsement"],
        icon: <Star className="text-green-500 w-5 h-5" />,
        recommended: false,
      },
      {
        type: "Premium",
        price: "₹85 / $1",
        features: [
          "Unlimited job applications",
          "Featured profile placement",
          "Advanced analytics & AI suggestions",
          "24/7 priority support",
        ],
        special: [
          "Verified badge",
          "Proposal boost",
          "Early access to new gigs",
        ],
        icon: <Rocket className="text-yellow-500 w-5 h-5" />,
        recommended: true,
      },
    ],
  },
  {
    role: "Employee",
    title: "Employee Plans",
    description:
      "Designed for job seekers: apply, get noticed, and grow with tailored insights and visibility.",
    tiers: [
      {
        type: "Free",
        price: "₹0 / $0",
        features: [
          "Build resume profile",
          "Apply to unlimited jobs",
          "Save job searches",
          "Community forums",
        ],
        special: ["Basic resume insights"],
        icon: <Star className="text-green-500 w-5 h-5" />,
        recommended: false,
      },
      {
        type: "Premium",
        price: "₹85 / $1",
        features: [
          "Priority resume screening",
          "AI-driven skill gap analysis",
          "Profile engagement analytics",
          "Direct recruiter messaging",
        ],
        special: ["Success badge", "Interview preparation toolkit"],
        icon: <TrendingUp className="text-indigo-500 w-5 h-5" />,
        recommended: true,
      },
    ],
  },
  {
    role: "Client",
    title: "Client Plans",
    description:
      "Perfect for businesses: post projects, find top freelancers, and manage your workflow seamlessly.",
    tiers: [
      {
        type: "Free",
        price: "₹0 / $0",
        features: [
          "Post 3 projects/month",
          "View freelancer profiles",
          "Milestone tracking",
          "Community access",
        ],
        special: ["Basic project analytics"],
        icon: <Star className="text-green-500 w-5 h-5" />,
        recommended: false,
      },
      {
        type: "Premium",
        price: "₹85 / $1",
        features: [
          "Unlimited project posts",
          "Boosted project visibility",
          "Escrow & automated payouts",
          "Dedicated support agent",
        ],
        special: ["Custom branding", "Premium freelancer suggestions"],
        icon: <Crown className="text-pink-500 w-5 h-5" />,
        recommended: true,
      },
    ],
  },
  {
    role: "Employer",
    title: "Employer Plans",
    description:
      "For enterprises and HR teams: unlimited job postings, robust recruitment tools, and advanced analytics.",
    tiers: [
      {
        type: "Free",
        price: "₹0 / $0",
        features: [
          "Post up to 5 jobs",
          "Access candidate database",
          "Basic applicant messaging",
          "Community support",
        ],
        special: ["Job recommendations"],
        icon: <Star className="text-green-500 w-5 h-5" />,
        recommended: false,
      },
      {
        type: "Premium",
        price: "₹85 / $1",
        features: [
          "Unlimited job postings",
          "AI-powered candidate matching",
          "Recruitment pipeline dashboard",
          "Dedicated account manager",
        ],
        special: ["Company branding hub", "Priority onboarding"],
        icon: <TrendingUp className="text-indigo-500 w-5 h-5" />,
        recommended: true,
      },
    ],
  },
];

export default function PricingPage() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageWrapper>
      <div className="flex flex-col">
        <NavBar />
        <div className="bg-gradient-to-br from-white to-gray-100">
          <motion.div
            className=" flex flex-col justify-center items-center text-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Flexible Pricing Tailored to You
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-700">
              Whether you’re a Freelancer, Employee, Client, or Employer, find
              the perfect plan that fits your needs.
            </p>
            <Button size="lg" className="mt-8 px-8" onClick={scrollToPricing}>
              Get Started Now
            </Button>
          </motion.div>

          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-800">
                How It Works
              </h2>
              <p className="text-gray-600 mt-2">
                From signup to success, we make every step easy and efficient.
              </p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
              {[
                {
                  step: "1. Sign Up",
                  desc: "Choose your role and create a profile in under 2 minutes.",
                },
                {
                  step: "2. Select Plan",
                  desc: "Pick Free or Premium based on the features you need.",
                },
                {
                  step: "3. Grow",
                  desc: "Start applying, hiring, or working—see results fast.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="mx-auto w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl">
                    {i + 1}
                  </div>
                  <h4 className="text-xl font-medium mt-4">{item.step}</h4>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section ref={pricingRef} className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
              <Tabs defaultValue="Freelancer">
                <TabsList className="w-full bg-blue-600 h-12">
                  {plans.map((p) => (
                    <TabsTrigger
                      key={p.role}
                      value={p.role}
                      className="text-white data-[state=active]:text-black"
                    >
                      {p.role}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {plans.map((p) => (
                  <TabsContent key={p.role} value={p.role} className="pt-10">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-center mb-8 px-4"
                    >
                      <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                        {p.title}
                      </h3>
                      <p className="text-gray-600">{p.description}</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {p.tiers.map((tier) => (
                        <motion.div
                          key={tier.type}
                          whileHover={{ translateY: -4 }}
                          className="group"
                        >
                          <Card
                            className={`relative overflow-visible border rounded-2xl transition-shadow duration-300 group-hover:shadow-xl ${
                              tier.recommended
                                ? "border-indigo-600"
                                : "border-gray-200"
                            }`}
                          >
                            {tier.recommended && (
                              <div className="absolute -top-3 right-4 bg-indigo-600 text-white text-xs uppercase px-3 py-1 rounded-lg shadow">
                                Popular
                              </div>
                            )}
                            <CardHeader className="pb-0 px-6 pt-6">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  {tier.icon}
                                  <h4 className="text-xl font-bold">
                                    {tier.type} Plan
                                  </h4>
                                </div>
                                <span className="text-2xl font-extrabold text-gray-900">
                                  {tier.price}
                                </span>
                              </div>
                            </CardHeader>
                            <CardContent className="px-6 py-4">
                              <ul className="mb-4 space-y-2">
                                {tier.features.map((feature, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2 text-gray-700"
                                  >
                                    <BadgeCheck className="w-4 h-4 text-indigo-500" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              <h5 className="font-medium text-gray-800 mb-2">
                                Special Features:
                              </h5>
                              <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {tier.special.map((s, i) => (
                                  <li key={i}>{s}</li>
                                ))}
                              </ul>
                            </CardContent>
                            <CardFooter className="px-6 pb-6">
                              <Button
                                variant={
                                  tier.recommended ? "default" : "outline"
                                }
                                className="w-full py-3"
                              >
                                {tier.recommended
                                  ? "Upgrade Now"
                                  : tier.type === "Free"
                                  ? "Current Plan"
                                  : "Choose Plan"}
                              </Button>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
}
