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
          <div className="mx-auto max-w-[1480px] px-6 py-8 lg:px-10 lg:py-10">
            <div className="grid gap-px border border-[#b7a189] bg-[#b7a189] lg:min-h-[calc(100vh-190px)] lg:grid-cols-[minmax(0,540px)_1fr]">
              <div className="bg-[#f7f1e8] p-6 lg:p-10">
                {children}
              </div>

              <div className="grid gap-px bg-[#5a4332]">
                <div className="grid gap-px bg-[#5a4332] xl:grid-cols-[0.98fr_1.02fr]">
                  <div className="bg-[#201610] p-6 text-[#fffaf2] lg:p-8">
                    <div className="flex items-center gap-4 border-b border-[#5a4332] pb-6">
                      <img
                        src="/final.png"
                        alt="Muni Ammamma Pickles"
                        className="h-16 w-16 border border-[#7d5c49] bg-[#dbc5a8] object-cover"
                      />
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.34em] text-[#d79b45]">
                          {eyebrow}
                        </p>
                        <p className="mt-2 font-fraunces text-[2rem] leading-[1.04] tracking-[-0.03em] text-[#fffaf2]">
                          Muni Ammamma
                        </p>
                      </div>
                    </div>

                    <h1 className="mt-6 max-w-[520px] font-fraunces text-[2.8rem] leading-[1.02] tracking-[-0.04em] text-[#fffaf2] lg:text-[4rem]">
                      {title}
                    </h1>
                    <p className="mt-5 max-w-[540px] text-sm leading-7 text-[#dcc9b4] lg:text-base">
                      {intro}
                    </p>

                    <div className="mt-8 grid gap-px bg-[#5a4332] sm:grid-cols-3 xl:grid-cols-1">
                      {stats.map((stat) => (
                        <div key={stat.label} className="bg-[#2e1710] p-4">
                          <p className="text-[10px] uppercase tracking-[0.24em] text-[#d79b45]">
                            {stat.label}
                          </p>
                          <p className="mt-3 font-fraunces text-[1.55rem] leading-[1.06] tracking-[-0.02em] text-[#fffaf2]">
                            {stat.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-px bg-[#5a4332]">
                    <div className="overflow-hidden bg-[#e7d6c3]">
                      <img
                        src="/banner_image.jpg"
                        alt="Signature pickle spread"
                        className="h-full min-h-[260px] w-full object-cover"
                      />
                    </div>
                    <div className="grid gap-px bg-[#5a4332] sm:grid-cols-2">
                      <div className="overflow-hidden bg-[#dbc5a8]">
                        <img
                          src="/mango/mango_pickle.webp"
                          alt="Mango pickle bowl"
                          className="h-full min-h-[220px] w-full object-cover"
                        />
                      </div>
                      <div className="bg-[#efe4d2] p-6 text-[#201610] lg:p-8">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a4027]">
                          Form first
                        </p>
                        <p className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em]">
                          Direct login, no wasted hero space.
                        </p>
                        <p className="mt-4 text-sm leading-7 text-[#5f4633]">
                          The form stays in the first viewport. The brand support panel sits beside it, not in the way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AuthShell;
