import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";
import type { CategoryData } from "@/data/serviceDetails";

const accentHex: Record<string, string> = {
  construction: "#c46520",
  deneigement: "#3a7ca5",
  location: "#4a8c3f",
  pieux: "#7a5aad",
  transport: "#b84040",
  cafe: "#7a5230",
};

export default function ServiceCategoryPage({ data }: { data: CategoryData }) {
  const hex = accentHex[data.accentVar] ?? "#ef6006";
  const total = data.items.length;

  return (
    <>
      {/* hero */}
      <section className="relative py-32 px-[5%] overflow-hidden">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, #090909 60%, ${hex}22)` }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,transparent_40%,#090909_100%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* back button + badge on same row */}
          <div className="flex items-center justify-between mb-10">
            <Link
              href={data.divisionPath}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-silver/50 hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
              {data.divisionName}
            </Link>
            <div
              className="inline-block text-[0.68rem] font-bold tracking-[0.2em] uppercase bg-black/30 border px-2.5 py-1 rounded-sm"
              style={{ borderColor: `${hex}66`, color: `var(--color-${data.accentVar})` }}
            >
              {data.divisionNumber}
            </div>
          </div>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.9] tracking-[0.02em] title-gradient">
            {data.categoryTitle.toUpperCase()}
          </h1>
        </div>
      </section>

      {/* B3 — 50/50 alternating sections */}
      <section className="bg-black-1">
        <div className="flex flex-col">
          {data.items.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <RevealOnScroll key={item.name} delay={i * 60}>
                <div
                  className={`group flex flex-col lg:flex-row ${flip ? "lg:flex-row-reverse" : ""} border-b border-charcoal/35 last:border-b-0`}
                >
                  {/* image panel 50% */}
                  <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto min-h-[380px] relative flex-shrink-0 overflow-hidden bg-black-2">
                    <Image
                      src={`/services/${data.divisionSlug}/${data.categorySlug}/${i}.jpg`}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      style={{ objectPosition: item.imagePosition ?? "center" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(${flip ? "215deg" : "145deg"}, ${hex}40 0%, transparent 60%)` }}
                    />
                    {/* accent bar slides in from edge */}
                    <div
                      className={`absolute top-0 ${flip ? "right-0" : "left-0"} w-[4px] h-0 group-hover:h-full transition-all duration-700`}
                      style={{ backgroundColor: hex }}
                    />
                  </div>

                  {/* text panel 50% */}
                  <div className="w-full lg:w-1/2 px-10 lg:px-16 py-16 flex flex-col justify-between">
                    <div className="flex flex-col justify-center flex-1">
                      <h3 className="font-display text-[clamp(2rem,3vw,2.6rem)] leading-[0.92] tracking-[0.02em] text-white mb-6">
                        {item.name.toUpperCase()}
                      </h3>
                      <p className="text-silver/60 leading-relaxed max-w-[460px]">{item.description}</p>
                    </div>
                    {/* footer stripe */}
                    <div className="mt-10 pt-6 border-t border-charcoal/30 flex items-center justify-between">
                      <span
                        className="text-[0.65rem] font-bold tracking-[0.18em] uppercase"
                        style={{ color: `${hex}70` }}
                      >
                        {data.divisionName}
                      </span>
                      <span
                        className="font-display text-sm"
                        style={{ color: `${hex}50` }}
                      >
                        {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <RevealOnScroll>
        <section className="bg-light-bg py-20 px-[5%] relative overflow-hidden">
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[400px] h-[400px] rounded-full blur-3xl" style={{ backgroundColor: `${hex}08` }} />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="w-10 h-[3px] mx-auto mb-8" style={{ backgroundColor: `var(--color-${data.accentVar})` }} />
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.93] tracking-[0.02em] text-light-text mb-4">
              UN PROJET EN TÊTE?
            </h2>
            <p className="text-light-muted text-sm leading-relaxed max-w-[400px] mx-auto mb-8">
              Contactez {data.divisionName} pour une soumission gratuite sans engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white text-sm font-bold tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm border-2 hover:opacity-90 transition-all duration-200"
              style={{ backgroundColor: `var(--color-${data.accentVar})`, borderColor: `var(--color-${data.accentVar})` }}
            >
              Soumission gratuite
            </Link>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
