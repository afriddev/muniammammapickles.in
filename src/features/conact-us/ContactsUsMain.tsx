/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone, SendHorizontal } from "lucide-react";

const contactPoints = [
  {
    label: "Email",
    value: "afridayan01@gmail.com",
    note: "Order support, product questions, and refund follow-up.",
  },
  {
    label: "Coverage",
    value: "Storefront Support",
    note: "Help with account, address, cart, product, and policy issues.",
  },
  {
    label: "Response Window",
    value: "Fast review",
    note: "Messages are reviewed as quickly as possible after submission.",
  },
];

function ContactUsMain() {
  const { register, handleSubmit, formState, setError, reset } = useForm();
  const { errors, isSubmitting } = formState;
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (!successMessage) {
      return;
    }

    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 1500);

    return () => clearTimeout(timer);
  }, [successMessage]);

  async function handleSubmitClick(data: any) {
    const url = "https://freeemailapi.vercel.app/sendEmail/";

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        toEmail: "afridayan01@gmail.com",
        subject: "New Contact Request — Muni Ammamma Pickles",
        title: "New Message Received",
        body: `
          <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: auto; background-color: #ffffff; padding: 32px; border: 1px solid #e5e7eb;">
            <h2 style="font-size: 24px; color: #111827; margin-bottom: 8px;">New Message from Muni Ammamma Pickles</h2>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <table style="font-size: 15px; color: #111827; width: 100%; margin-bottom: 24px;">
              <tr><td style="padding: 8px 0; font-weight: 600;">Name:</td><td>${data?.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600;">Email:</td><td>${data?.email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600;">Phone:</td><td>${data?.phone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600;">Message:</td><td style="white-space: pre-wrap;">${data?.message}</td></tr>
            </table>
          </div>
        `,
      }),
    });

    const result = await response.json();

    if (result?.message === "wrongEmail") {
      setError("email", {
        type: "manual",
        message: "Please enter a valid email address",
      });
    } else if (result?.message === "emailSendSuccess") {
      setSuccessMessage("Message sent successfully");
      reset();
    }
  }

  return (
    <div className="min-h-screen bg-[#f5efe4] text-[#201610]">
      <NavBar />
      <main>
        <section className="border-b border-[#5a4332] bg-[#201610] text-[#f5efe4]">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-[#5a4332] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[#201610] px-6 py-14 lg:px-10 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#d79b45]">
                Contact Us
              </p>
              <h1 className="mt-5 max-w-[820px] font-fraunces text-[3.2rem] leading-[1.02] tracking-[-0.04em] text-[#fffaf2] lg:text-[5.2rem]">
                Support should feel like part of the brand, not an afterthought page.
              </h1>
              <p className="mt-6 max-w-[680px] text-base leading-8 text-[#dcc9b4] lg:text-lg">
                Use this page for order help, delivery questions, product information,
                refund issues, account problems, or anything else blocking a purchase.
              </p>
              <div className="mt-10 grid gap-px bg-[#5a4332] md:grid-cols-3">
                {contactPoints.map((item) => (
                  <article key={item.label} className="bg-[#2e1710] p-5 lg:p-6">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#d79b45]">
                      {item.label}
                    </p>
                    <h2
                      className={`mt-4 font-fraunces leading-[1.06] tracking-[-0.03em] text-[#fffaf2] ${
                        item.label === "Email"
                          ? "break-all text-[1rem] leading-[1.2] sm:text-[1.1rem] lg:text-[1.2rem]"
                          : "text-[1.8rem]"
                      }`}
                    >
                      {item.value}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[#dcc9b4]">
                      {item.note}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="bg-[#eee1cf] px-6 py-14 lg:px-10 lg:py-20">
              <div className="grid gap-px bg-[#b7a189] sm:grid-cols-3">
                <div className="bg-[#f7f1e8] p-5">
                  <Mail className="h-5 w-5 text-[#8a4027]" />
                  <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                    Email
                  </p>
                  <p className="mt-2 break-all text-sm leading-7 text-[#5f4633]">
                    afridayan01@gmail.com
                  </p>
                </div>
                <div className="bg-[#f7f1e8] p-5">
                  <Phone className="h-5 w-5 text-[#8a4027]" />
                  <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                    Order Help
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#5f4633]">Cart, account, and delivery support.</p>
                </div>
                <div className="bg-[#f7f1e8] p-5">
                  <MapPin className="h-5 w-5 text-[#8a4027]" />
                  <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
                    Address Issues
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#5f4633]">Use this form if checkout is blocked by address or profile details.</p>
                </div>
              </div>

              <div className="mt-8 border border-[#b7a189] bg-[#f7f1e8] p-6 lg:p-8">
                <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
                  Send Message
                </p>
                <h2 className="mt-4 font-fraunces text-[2.4rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                  Tell us what is blocking you.
                </h2>

                <form className="mt-8 grid gap-5" onSubmit={handleSubmit(handleSubmitClick)}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">Name</label>
                      <input
                        className="mt-2 h-12 w-full border border-[#b7a189] bg-[#eee1cf] px-4 text-sm text-[#201610] outline-none"
                        placeholder="Your name"
                        {...register("name", { required: "Please enter your name" })}
                      />
                      {errors?.name?.message ? (
                        <p className="mt-2 text-xs text-[#8a4027]">{errors.name.message as any}</p>
                      ) : null}
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">Phone</label>
                      <input
                        className="mt-2 h-12 w-full border border-[#b7a189] bg-[#eee1cf] px-4 text-sm text-[#201610] outline-none"
                        placeholder="Phone number"
                        {...register("phone", { required: "Please enter your phone number" })}
                      />
                      {errors?.phone?.message ? (
                        <p className="mt-2 text-xs text-[#8a4027]">{errors.phone.message as any}</p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">Email</label>
                    <input
                      className="mt-2 h-12 w-full border border-[#b7a189] bg-[#eee1cf] px-4 text-sm text-[#201610] outline-none"
                      placeholder="Email address"
                      {...register("email", {
                        required: "Please enter your email address",
                        pattern: /^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$/gi,
                      })}
                    />
                    {errors?.email?.message ? (
                      <p className="mt-2 text-xs text-[#8a4027]">{errors.email.message as any}</p>
                    ) : null}
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">Message</label>
                    <textarea
                      className="mt-2 min-h-[160px] w-full resize-none border border-[#b7a189] bg-[#eee1cf] px-4 py-3 text-sm text-[#201610] outline-none"
                      placeholder="Order problem, address issue, product question, or anything else"
                      {...register("message", { required: "Please enter your message" })}
                    />
                    {errors?.message?.message ? (
                      <p className="mt-2 text-xs text-[#8a4027]">{errors.message.message as any}</p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      disabled={isSubmitting}
                      className="h-12 border-[#d79b45] bg-[#d79b45] px-8 text-sm uppercase tracking-[0.18em] text-[#201610] hover:bg-[#e5aa55]"
                    >
                      Send Message
                      <SendHorizontal className="h-4 w-4" />
                    </Button>
                    {successMessage ? (
                      <p className="text-sm text-[#2f5d3a]">{successMessage}</p>
                    ) : (
                      <p className="text-sm text-[#5f4633]">
                        We will review your message and get back to you.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUsMain;
