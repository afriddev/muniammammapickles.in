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
        <section className="border-b border-[#b7a189] bg-[#eee1cf]">
          <div className="mx-auto max-w-[1100px] px-6 py-10 lg:px-10 lg:py-14">
            <div className="border border-[#b7a189] bg-[#f7f1e8] p-6 lg:p-8">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
                {eyebrow}
              </p>
              <h1 className="mt-4 max-w-[840px] font-fraunces text-[2.8rem] leading-[1.04] tracking-[-0.03em] text-[#201610] lg:text-[4.2rem]">
                {title}
              </h1>
              <p className="mt-4 max-w-[860px] text-sm leading-7 text-[#5f4633]">
                {intro}
              </p>
              <div className="mt-6 grid gap-px bg-[#b7a189] sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-[#eee1cf] p-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#8a4027]">
                      {stat.label}
                    </p>
                    <p className="mt-3 font-fraunces text-[1.5rem] leading-[1.06] tracking-[-0.02em] text-[#201610]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 border border-[#b7a189] bg-[#f7f1e8] p-6 lg:p-8">
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
