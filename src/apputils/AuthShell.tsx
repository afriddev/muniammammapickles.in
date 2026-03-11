import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import type { ReactNode } from "react";

type AuthShellStat = {
  label: string;
  value: string;
};

type AuthShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  stats: AuthShellStat[];
  children: ReactNode;
};

function AuthShell({ eyebrow, title, intro, stats, children }: AuthShellProps) {
  return (
    <div className="min-h-screen bg-[#f5efe4] text-[#201610]">
      <NavBar />
      <main>
        <section className="border-b border-[#5a4332] bg-[#201610] text-[#f5efe4]">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-[#5a4332] lg:grid-cols-[0.96fr_1.04fr]">
            <div className="bg-[#201610] px-6 py-14 lg:px-10 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#d79b45]">
                {eyebrow}
              </p>
              <h1 className="mt-5 max-w-[760px] font-fraunces text-[3rem] leading-[1.02] tracking-[-0.04em] text-[#fffaf2] lg:text-[5rem]">
                {title}
              </h1>
              <p className="mt-6 max-w-[660px] text-base leading-8 text-[#dcc9b4] lg:text-lg">
                {intro}
              </p>
              <div className="mt-10 grid gap-px bg-[#5a4332] sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-[#2e1710] p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#d79b45]">
                      {stat.label}
                    </p>
                    <p className="mt-4 font-fraunces text-[1.9rem] leading-[1.06] tracking-[-0.03em] text-[#fffaf2]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-px bg-[#5a4332] md:grid-cols-2">
              <div className="overflow-hidden bg-[#e7d6c3] md:col-span-2">
                <img
                  src="/banner_image.jpg"
                  alt="Signature pickle spread"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden bg-[#e7d6c3]">
                <img
                  src="/final.png"
                  alt="Muni Ammamma brand mark"
                  className="h-full w-full object-contain p-8"
                />
              </div>
              <div className="overflow-hidden bg-[#e7d6c3]">
                <img
                  src="/mango/mango_pickle.webp"
                  alt="Mango pickle bowl"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eee1cf]">
          <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-[760px] border border-[#b7a189] bg-[#f7f1e8] p-6 lg:p-10">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AuthShell;
