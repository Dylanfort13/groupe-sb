"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import basePath from "@/basePath";

type Category =
  | "tous"
  | "construction"
  | "deneigement"
  | "location"
  | "pieux"
  | "transport";

const filters: { label: string; value: Category }[] = [
  { label: "TOUS", value: "tous" },
  { label: "CONSTRUCTION", value: "construction" },
  { label: "DÉNEIGEMENT", value: "deneigement" },
  { label: "LOCATION", value: "location" },
  { label: "PIEUX VISTECH", value: "pieux" },
  { label: "TRANSPORT", value: "transport" },
];

// Stand-in imagery until the client uploads real project photos. The page
// heading deliberately does not claim these are completed Groupe SB projects.
const projects = [
  {
    category: "construction" as Category,
    tag: "Construction",
    name: "Résidentiel",
    src: "/portfolio/real-residentiel.jpg",
    grid: "lg:col-start-1 lg:col-end-6 lg:row-start-1",
  },
  {
    category: "deneigement" as Category,
    tag: "Déneigement",
    name: "Déneigement commercial",
    src: "/portfolio/real-deneigement.jpg",
    grid: "lg:col-start-6 lg:col-end-9 lg:row-start-1",
  },
  {
    category: "transport" as Category,
    tag: "Transport",
    name: "Transport de machinerie",
    src: "/portfolio/real-transport.jpg",
    grid: "lg:col-start-9 lg:col-end-13 lg:row-start-1",
  },
  {
    category: "location" as Category,
    tag: "Location",
    name: "Équipements",
    src: "/portfolio/real-location.jpg",
    grid: "lg:col-start-1 lg:col-end-5 lg:row-start-2",
  },
  {
    category: "pieux" as Category,
    tag: "Pieux Vistech",
    name: "Fondations",
    src: "/portfolio/real-pieux.jpg",
    grid: "lg:col-start-5 lg:col-end-9 lg:row-start-2",
  },
  {
    category: "construction" as Category,
    tag: "Construction",
    name: "Commercial",
    src: "/portfolio/real-commercial.jpg",
    grid: "lg:col-start-9 lg:col-end-13 lg:row-start-2",
  },
];

export default function RealisationsPage() {
  const [active, setActive] = useState<Category>("tous");

  const visible =
    active === "tous" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-black-2 pt-28 pb-16 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 text-orange text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Portfolio
          </div>
          <h1 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient mb-3">
            NOTRE SAVOIR-FAIRE
          </h1>
          <p className="text-silver text-base leading-relaxed max-w-[520px]">
            Un aperçu de nos champs d&apos;expertise en construction,
            déneigement, location, transport et fondations.
          </p>
        </div>
      </section>

      <section className="bg-light-bg py-24 px-[5%]">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2.5 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`text-xs font-bold tracking-[0.15em] uppercase px-5 py-2.5 rounded-full border-2 transition-all duration-200 touch-manipulation ${
                  active === f.value
                    ? "bg-orange text-white border-orange"
                    : "bg-transparent text-light-muted border-charcoal/40 hover:border-orange hover:text-orange"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
            {visible.map((p) => (
              <div
                key={p.name + p.category}
                className={`group relative overflow-hidden rounded-sm cursor-pointer h-[220px] sm:h-[240px] lg:h-[280px] ${p.grid}`}
              >
                <Image
                  src={`${basePath}${p.src}`}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-[1.06] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-orange mb-1">
                    {p.tag}
                  </div>
                  <div className="font-display text-xl tracking-[0.03em] text-white">
                    {p.name}
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <RevealOnScroll>
        <section className="relative py-20 px-[5%] overflow-hidden bg-black-2 border-t border-b border-charcoal/50">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between gap-8 flex-wrap">
            <div>
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase mb-3 text-orange">
                <span className="block w-6 h-0.5 bg-orange" />
                Contactez-nous
              </div>
              <h2 className="font-display text-[clamp(2rem,3.5vw,3.2rem)] leading-[0.94] tracking-[0.02em] mb-2 text-white">
                UN PROJET EN TÊTE?
              </h2>
              <p className="text-sm leading-relaxed max-w-[440px] text-silver">
                Contactez l&apos;une de nos divisions, nous vous rappelons rapidement.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.12em] uppercase px-8 py-4 rounded-sm border-2 bg-orange text-white border-orange hover:bg-orange-dark hover:border-orange-dark transition-all duration-200 touch-manipulation flex-shrink-0"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              Nous contacter
            </Link>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
