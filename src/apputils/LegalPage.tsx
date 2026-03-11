import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type LegalPageStat = {
  label: string;
  value: string;
};

export type LegalPageSection = {
  title: string;
  body: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  effectiveDate: string;
  stats: LegalPageStat[];
  sections: LegalPageSection[];
  primaryAction?: {
    label: string;
    path: string;
  };
  secondaryAction?: {
    label: string;
    path: string;
  };
};

function LegalPage({
  eyebrow,
  title,
  intro,
  effectiveDate,
  stats,
  sections,
  primaryAction,
  secondaryAction,
}: LegalPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5efe4] text-[#201610]">
      <NavBar />
      <main>
        <section className="border-b border-[#5a4332] bg-[#201610] text-[#f5efe4]">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-[#5a4332] lg:grid-cols-[1fr_340px]">
            <div className="bg-[#201610] px-6 py-14 lg:px-10 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#d79b45]">
                {eyebrow}
              </p>
              <h1 className="mt-5 max-w-[900px] font-fraunces text-[3.2rem] leading-[1.02] tracking-[-0.04em] text-[#fffaf2] lg:text-[5.2rem]">
                {title}
              </h1>
              <p className="mt-6 max-w-[760px] text-base leading-8 text-[#dcc9b4] lg:text-lg">
                {intro}
              </p>
              <div className="mt-6 border-t border-[#5a4332] pt-4 text-[11px] uppercase tracking-[0.24em] text-[#d79b45]">
                Effective {effectiveDate}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="outline"
                  className="h-12 border-[#f5efe4] bg-[#f5efe4] px-8 text-sm uppercase tracking-[0.18em] text-[#201610] hover:bg-[#ead8bc]"
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
                {primaryAction ? (
                  <Button
                    className="h-12 border-[#d79b45] bg-[#d79b45] px-8 text-sm uppercase tracking-[0.18em] text-[#201610] hover:bg-[#e5aa55]"
                    onClick={() => navigate(primaryAction.path)}
                  >
                    {primaryAction.label}
                  </Button>
                ) : null}
                {secondaryAction ? (
                  <Button
                    variant="outline"
                    className="h-12 border-[#d79b45] bg-transparent px-8 text-sm uppercase tracking-[0.18em] text-[#d79b45] hover:bg-[#d79b45] hover:text-[#201610]"
                    onClick={() => navigate(secondaryAction.path)}
                  >
                    {secondaryAction.label}
                  </Button>
                ) : null}
              </div>
            </div>

            <div className="grid gap-px bg-[#5a4332]">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col justify-between bg-[#2e1710] p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#d79b45]">
                    {stat.label}
                  </p>
                  <p className="mt-10 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#fffaf2]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#b7a189] bg-[#eee1cf]">
          <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-20">
            <div className="grid gap-px bg-[#b7a189] lg:grid-cols-2">
              {sections.map((section, index) => (
                <article key={section.title} className="bg-[#f7f1e8] p-6 lg:p-8">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#8a4027]">
                    Section {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 font-fraunces text-[2rem] leading-[1.06] tracking-[-0.03em] text-[#201610]">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-[#5f4633]">
                    {section.body}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LegalPage;
