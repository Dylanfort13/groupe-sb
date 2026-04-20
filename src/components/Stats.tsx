import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export function Stats() {
  const stats = [
    { num: "4", label: "Divisions spécialisées" },
    { num: "20+", label: "Services offert" },
    { num: "5", label: "Zones desservies" },
    { num: "1", label: "Appel suffit" },
  ];

  return (
    <section className="relative py-24 px-[5%] overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/hero-construction.jpg" alt="" fill sizes="100vw" className="object-cover grayscale" />
      </div>
      <div className="absolute inset-0 bg-black-1/88" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#090909_100%)]" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <RevealOnScroll key={stat.label} delay={i * 100}>
            <div className="text-center group">
              <div className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-none mb-3 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent group-hover:from-orange group-hover:to-orange/60 transition-all duration-400">
                {stat.num}
              </div>
              <div className="w-6 h-[2px] bg-orange/40 mx-auto mb-3 group-hover:w-10 transition-all duration-300" />
              <div className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-silver/60 group-hover:text-silver transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
