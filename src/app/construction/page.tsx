import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Construction SB — Groupe SB",
  description:
    "Construction résidentielle et commerciale, spécialité béton. Excavation, fondation, paysagement et isolation à Chibougamau.",
};

const services = [
  {
    title: "CONSTRUCTION",
    items: ["Construction résidentielle", "Construction commerciale", "Spécialité béton"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9,22 9,12 15,12 15,22" /></svg>,
  },
  {
    title: "EXCAVATION & FONDATIONS",
    items: ["Excavation générale", "Drain de fondation", "Réparation de fondation", "Membrane pulvérisée de fondation"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M2 22l10-10M2 12l5-5 5 5-5 5z" /><path d="M22 2l-8 8" /></svg>,
  },
  {
    title: "AMÉNAGEMENT",
    items: ["Paysagement", "Installation clôture à maille", "Nettoyage de pavé (balais mécanique commercial)"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" /></svg>,
  },
  {
    title: "ISOLATION",
    items: ["Isolation uréthane pulvérisé", "Laine soufflée à la cellulose"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
];

export default function ConstructionPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/construction-sb.jpg" alt="" fill sizes="100vw" className="object-cover grayscale" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black-1/96 via-black-1/50 to-black-1/25" />
        <div className="absolute inset-0 bg-construction/12" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#090909_100%)]" />
        <div className="relative z-10 px-[5%] pt-32 pb-20 text-center">
          <div className="inline-block text-[0.68rem] font-bold tracking-[0.2em] uppercase bg-black/30 border border-construction/40 text-construction px-2.5 py-1 rounded-sm mb-4">
            Division 01
          </div>
          <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9] tracking-[0.02em] title-gradient mb-3">
            CONSTRUCTION SB
          </h1>
          <p className="text-silver text-base leading-relaxed max-w-[520px] mx-auto">
            Construction résidentielle et commerciale de tous types, spécialité béton. Votre projet, notre expertise.
          </p>
        </div>
      </section>

      <RevealOnScroll>
        <section className="bg-black-1 py-24 px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end gap-8 flex-wrap mb-12">
              <div>
                <div className="inline-flex items-center gap-2.5 text-construction text-xs font-bold tracking-[0.22em] uppercase mb-4">
                  Ce que nous faisons
                </div>
                <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient">NOS SERVICES</h2>
              </div>
              <p className="text-silver text-base leading-relaxed max-w-[420px]">Résidentiel, commercial et spécialité béton, de l&apos;excavation à la finition.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((svc, i) => (
                <RevealOnScroll key={svc.title} delay={i * 100} className="h-full">
                  <div className="bg-charcoal/22 border border-charcoal/55 rounded-sm p-8 transition-all duration-200 hover:border-construction/38 hover:-translate-y-0.5 h-full">
                    <div className="font-display text-xl tracking-[0.04em] text-white mb-4 pb-3 border-b border-construction/25 flex items-center gap-2.5">
                      <span className="text-construction">{svc.icon}</span>
                      {svc.title}
                    </div>
                    <ul className="space-y-2">
                      {svc.items.map((item) => (
                        <li key={item} className="text-sm text-silver flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-construction flex-shrink-0" />
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
            <div className="w-[500px] h-[500px] rounded-full bg-construction/[0.04] blur-3xl" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="w-12 h-[3px] bg-construction mx-auto mb-8" />
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.93] tracking-[0.02em] text-light-text mb-5">
              DEMANDEZ UNE SOUMISSION GRATUITE
            </h2>
            <p className="text-light-muted text-base leading-relaxed max-w-[480px] mx-auto mb-10">
              Décrivez votre projet de construction et recevez une estimation sans engagement.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-construction text-white text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-construction hover:opacity-90 transition-all duration-200 touch-manipulation"
              >
                Soumission gratuite
              </Link>
              <a
                href="tel:4187707506"
                className="inline-flex items-center gap-2 bg-transparent text-light-text text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-charcoal/40 hover:border-construction hover:text-construction transition-all duration-200 touch-manipulation"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 016.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 015.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.13a16 16 0 006 6l1.5-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0120 14.92z" /></svg>
                418-770-7506
              </a>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
