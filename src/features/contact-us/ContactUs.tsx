import { Mail, ShieldCheck, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import PageWrapper from "@/apputils/PageWrapper";
import NavBar from "@/apputils/NavBar";
import Footer from "@/apputils/Footer";

const contactData = [
  {
    title: "Legal Inquiries",
    description:
      "For compliance, terms of service, DMCA, or policy-related matters. Our legal team will respond within 3–5 business days.",
    email: "legal@freegrow.com",
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "General Support",
    description:
      "For product support, platform questions, or help with using FreeGrow. Our support agents are available 24/7.",
    email: "support@freegrow.com",
    icon: <Mail className="w-6 h-6 text-green-600" />,
  },
  {
    title: "Other Questions",
    description:
      "For partnership opportunities, press, feedback, or anything else not covered above. We’d love to hear from you!",
    email: "hello@freegrow.com",
    icon: <Info className="w-6 h-6 text-yellow-600" />,
  },
];

const ContactUs = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col ">
        <div className="flex flex-col lg:h-screen">
          <NavBar />
          <div className=" py-16 px-4 md:px-10   text-foreground h-full flex flex-col items-center justify-center">
            <motion.div
              className="max-w-5xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
                We’re always here to help. Whether it's legal, general, or
                something else entirely, find the best way to reach us below.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {contactData.map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <Card
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform group-hover:-translate-y-1`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        {item.icon}
                        <h3 className="text-xl font-semibold text-gray-800">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        {item.description}
                      </p>
                      <a
                        href={`mailto:${item.email}`}
                        className="text-sm font-medium text-indigo-600 hover:underline"
                      >
                        {item.email}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
};

export default ContactUs;
