"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const divisions = [
  {
    name: "Construction SB",
    href: "/construction",
    tag: "Division 01",
    description: "Construction résidentielle et commerciale, spécialité béton, excavation et fondations.",
    services: [
      "Construction résidentielle & commerciale",
      "Excavation et drain de fondation",
      "Isolation uréthane et laine soufflée",
      "Paysagement et installation clôture",
    ],
    phone: "418-770-7506",
    image: "/construction-sb.jpg",
    accent: "construction",
  },
  {
    name: "Déneigement SB",
    href: "/deneigement",
    tag: "Division 02",
    description: "Déneigement résidentiel, commercial et industriel, transport et matériel granulaire.",
    services: [
      "Déneigement sur appel et à la main",
      "Transport de neige et vrac",
      "Vente de matériel granulaire",
      "Contrats saisonniers",
    ],
    phone: "418-770-4657",
    image: "/deneigement-sb.jpg",
    accent: "deneigement",
  },
  {
    name: "Location Expert",
    href: "/location",
    tag: "Division 03",
    description: "Location d'outils de chantier, machinerie lourde et équipement spécialisé.",
    services: [
      "Outils de chantier et construction",
      "Machinerie lourde et compaction",
      "Génératrices et éclairage",
      "Paysagement et jardinage",
    ],
    phone: "418-770-8243",
    image: "/location-expert.jpg",
    accent: "location",
  },
  {
    name: "Pieux Vistech Chibougamau",
    href: "/pieux-vistech",
    tag: "Division 04",
    description: "Installation de pieux vissés certifiés pour tous types de fondations.",
    services: [
      "Fondations résidentielles",
      "Structures commerciales",
      "Terrasses, clôtures, solarium",
      "Agrandissements",
    ],
    phone: "418-770-4657",
    image: "/pieux-vistech.jpg",
    accent: "pieux",
  },
];

const accentMap: Record<string, { bar: string; bullet: string; numColor: string; tagBorder: string; linkHover: string; overlayHover: string }> = {
  construction: { bar: "bg-construction", bullet: "bg-construction", numColor: "text-construction/25", tagBorder: "border-construction/50", linkHover: "group-hover:text-construction", overlayHover: "group-hover:bg-black-1/92" },
  deneigement: { bar: "bg-deneigement", bullet: "bg-deneigement", numColor: "text-deneigement/25", tagBorder: "border-deneigement/50", linkHover: "group-hover:text-deneigement", overlayHover: "group-hover:bg-black-1/92" },
  location: { bar: "bg-location", bullet: "bg-location", numColor: "text-location/25", tagBorder: "border-location/50", linkHover: "group-hover:text-location", overlayHover: "group-hover:bg-black-1/92" },
  pieux: { bar: "bg-pieux", bullet: "bg-pieux", numColor: "text-pieux/25", tagBorder: "border-pieux/50", linkHover: "group-hover:text-pieux", overlayHover: "group-hover:bg-black-1/92" },
};

export function Divisions() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridMinHeight, setGridMinHeight] = useState<number | undefined>();

  const lockGridHeight = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const current = grid.scrollHeight;
    if (!gridMinHeight || current > gridMinHeight) {
      setGridMinHeight(current);
    }
  }, [gridMinHeight]);

  return (
    <section id="divisions" className="bg-black-1 pt-32 pb-44 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2.5 text-orange text-xs font-bold tracking-[0.22em] uppercase mb-4">
            <span className="block w-7 h-0.5 bg-orange" />
            Groupe SB
          </div>
          <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient">
            NOS<br />DIVISIONS
          </h2>
          <p className="text-silver text-base leading-relaxed max-w-[520px] mt-4">
            Quatre divisions complémentaires pour répondre à tous vos besoins en construction, déneigement, location d&apos;équipements et fondations.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-16 sm:gap-4 mt-12"
          style={gridMinHeight ? { minHeight: `${gridMinHeight}px` } : undefined}
        >
          {divisions.map((div, i) => {
            const accent = accentMap[div.accent];
            return (
              <RevealOnScroll key={div.name} className="sm:col-span-1" delay={i * 120}>
              <Link
                href={div.href}
                onMouseEnter={() => setTimeout(lockGridHeight, 450)}
                className="group relative bg-charcoal rounded-sm overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.55)] sm:min-h-[320px] flex flex-col"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={div.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className={`absolute inset-0 bg-black-1/85 transition-colors duration-500 z-[1] ${accent.overlayHover}`} />

                <span className={`absolute bottom-0 left-0 w-full sm:w-0 h-[3px] ${accent.bar} transition-all duration-400 sm:group-hover:w-full z-[3]`} />

                <div className="relative z-[2] p-6 flex flex-col justify-center flex-1 transition-[padding] duration-300 group-hover:pt-8 group-hover:pb-8">
                  <div className={`font-display text-4xl leading-none mb-3 transition-colors duration-400 ${accent.numColor}`}>
                    0{i + 1}
                  </div>

                  <div className={`self-start text-[0.65rem] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded-sm mb-3 border ${accent.tagBorder}`} style={{ color: `var(--color-${div.accent})` }}>
                    {div.tag}
                  </div>

                  <h3 className="font-display text-xl tracking-[0.03em] text-white mb-2">
                    {div.name}
                  </h3>

                  <p className="text-[0.84rem] leading-relaxed text-silver/80 mb-4">
                    {div.description}
                  </p>

                  <div className="max-h-40 opacity-100 sm:max-h-0 sm:opacity-0 transition-all duration-400 sm:group-hover:max-h-40 sm:group-hover:opacity-100">
                    <ul className="space-y-1.5 mb-5">
                      {div.services.map((s) => (
                        <li key={s} className="text-xs text-silver/60 flex items-start gap-1.5">
                          <span className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 ${accent.bullet}`} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className={`text-[0.68rem] font-bold tracking-[0.15em] uppercase text-white inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200 ${accent.linkHover}`}>
                    En savoir plus
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
