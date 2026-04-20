import type { Metadata } from "next";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Location Expert — Groupe SB",
  description:
    "Location d'outils et de machinerie à Chibougamau. Outils de chantier, machinerie lourde et équipement spécialisé.",
};

const categories = [
  {
    title: "OUTILS DE CHANTIER",
    items: ["Outils pour béton", "Outils à toiture et charpente", "Échafaudage et échelle", "Outils divers"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
  },
  {
    title: "MACHINERIE ET TRANSPORT",
    items: ["Machinerie lourde", "Compaction", "Transport et manutention", "Élévation"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
  },
  {
    title: "ÉQUIPEMENT SPÉCIALISÉ",
    items: ["Génératrices et éclairage", "Pompes à eau et drainage", "Chauffage et ventilation", "Équipement divers"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  },
  {
    title: "AMÉNAGEMENT",
    items: ["Paysagement et jardinage", "Remorques", "Équipement saisonnier", "Inventaire complet sur location-expert.ca"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" /><path d="M12 6v6l4 2" /></svg>,
  },
];

export default function LocationPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/location-expert-hero.jpg" alt="" fill sizes="100vw" className="object-cover grayscale" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black-1/96 via-black-1/50 to-black-1/25" />
        <div className="absolute inset-0 bg-location/12" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#090909_100%)]" />
        <div className="relative z-10 px-[5%] pt-32 pb-20 text-center">
          <div className="inline-block text-[0.68rem] font-bold tracking-[0.2em] uppercase bg-black/30 border border-location/40 text-location px-2.5 py-1 rounded-sm mb-4">
            Division 03
          </div>
          <h1 className="mb-3">
            <Image src="/logo-location-expert.png" alt="Location Expert" width={500} height={200} className="w-[clamp(280px,40vw,500px)] h-auto mx-auto" priority />
          </h1>
          <p className="text-silver text-base leading-relaxed max-w-[520px] mx-auto">
            Location d&apos;outils et de machinerie diverse : l&apos;équipement qu&apos;il vous faut, quand vous en avez besoin.
          </p>
        </div>
      </section>

      <RevealOnScroll>
      <section className="bg-black-1 py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end gap-8 flex-wrap mb-12">
            <div>
              <div className="inline-flex items-center gap-2.5 text-location text-xs font-bold tracking-[0.22em] uppercase mb-4">
                Notre inventaire
              </div>
              <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient">CATALOGUE D&apos;ÉQUIPEMENTS</h2>
            </div>
            <p className="text-silver text-base leading-relaxed max-w-[420px]">Outils de chantier, machinerie lourde et équipement spécialisé disponibles à la location.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {categories.map((cat, i) => (
              <RevealOnScroll key={cat.title} delay={i * 100} className="h-full">
              <div className="bg-charcoal/22 border border-charcoal/55 rounded-sm p-8 transition-all duration-200 hover:border-location/38 hover:-translate-y-0.5 h-full">
                <div className="font-display text-xl tracking-[0.04em] text-white mb-4 pb-3 border-b border-location/25 flex items-center gap-2.5">
                  <span className="text-location">{cat.icon}</span>
                  {cat.title}
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-silver flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-location flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
      <section className="bg-light-bg py-24 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-location/[0.04] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="w-12 h-[3px] bg-location mx-auto mb-8" />
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.93] tracking-[0.02em] text-light-text mb-5">
            BESOIN D&apos;ÉQUIPEMENT?
          </h2>
          <p className="text-light-muted text-base leading-relaxed max-w-[480px] mx-auto mb-10">
            Visitez le site web de Location Expert pour consulter l&apos;inventaire complet et réserver en ligne.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://www.location-expert.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-location text-white text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-location hover:opacity-90 transition-all duration-200 touch-manipulation"
            >
              Visiter le site web
            </a>
            <a
              href="tel:4187708243"
              className="inline-flex items-center gap-2 bg-transparent text-light-text text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-charcoal/40 hover:border-location hover:text-location transition-all duration-200 touch-manipulation"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 016.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 015.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.13a16 16 0 006 6l1.5-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0120 14.92z" /></svg>
              418-770-8243
            </a>
          </div>
        </div>
      </section>
      </RevealOnScroll>
    </>
  );
}
