"use client";

import { useState } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

type Category = "tous" | "construction" | "deneigement" | "location" | "pieux";

const filters: { label: string; value: Category }[] = [
  { label: "TOUS", value: "tous" },
  { label: "CONSTRUCTION", value: "construction" },
  { label: "DÉNEIGEMENT", value: "deneigement" },
  { label: "LOCATION", value: "location" },
  { label: "PIEUX VISTECH", value: "pieux" },
];

const projects = [
  {
    category: "construction" as Category,
    tag: "Construction",
    name: "Résidentiel",
    gradient: "linear-gradient(135deg, #2c1a0a 0%, #5a3218 40%, #1a1108 100%)",
    grid: "lg:col-start-1 lg:col-end-6 lg:row-start-1",
    isPlaceholder: false,
  },
  {
    category: "deneigement" as Category,
    tag: "Déneigement",
    name: "Hiver 2024",
    gradient: "linear-gradient(135deg, #3d2010 0%, #6b3a1a 50%, #1a0f06 100%)",
    grid: "lg:col-start-6 lg:col-end-9 lg:row-start-1",
    isPlaceholder: false,
  },
  {
    category: "tous" as Category,
    tag: "Photos à venir",
    name: "Vos photos ici",
    gradient: "linear-gradient(135deg, #1a0f06 0%, #ef6006 50%, #1a0f06 100%)",
    grid: "lg:col-start-9 lg:col-end-13 lg:row-start-1",
    isPlaceholder: true,
  },
  {
    category: "location" as Category,
    tag: "Location",
    name: "Équipements",
    gradient: "linear-gradient(135deg, #2c1a0a 0%, #4a2810 50%, #0d0804 100%)",
    grid: "lg:col-start-1 lg:col-end-5 lg:row-start-2",
    isPlaceholder: false,
  },
  {
    category: "pieux" as Category,
    tag: "Pieux Vistech",
    name: "Fondations",
    gradient: "linear-gradient(135deg, #3d2010 0%, #5a3218 50%, #1a1108 100%)",
    grid: "lg:col-start-5 lg:col-end-9 lg:row-start-2",
    isPlaceholder: false,
  },
  {
    category: "construction" as Category,
    tag: "Construction",
    name: "Commercial",
    gradient: "linear-gradient(135deg, #2c1a0a 0%, #4a2810 50%, #0d0804 100%)",
    grid: "lg:col-start-9 lg:col-end-13 lg:row-start-2",
    isPlaceholder: false,
  },
];

export default function RealisationsPage() {
  const [active, setActive] = useState<Category>("tous");

  const visible =
    active === "tous"
      ? projects
      : projects.filter((p) => p.category === active || p.isPlaceholder);

  return (
    <>
      <section className="bg-black-2 pt-28 pb-16 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 text-orange text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Portfolio
          </div>
          <h1 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient mb-3">
            NOS RÉALISATIONS
          </h1>
          <p className="text-silver text-base leading-relaxed max-w-[520px]">
            Aperçu de nos projets en construction, déneigement, location et
            fondations.
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
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.06]"
                  style={{ background: p.gradient }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-orange mb-1">
                    {p.tag}
                  </div>
                  <div className="font-display text-xl tracking-[0.03em] text-white">
                    {p.name}
                  </div>
                </div>
                {p.isPlaceholder && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-6">
                      <svg
                        className="mx-auto mb-3 opacity-40"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ef6006"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                      <p className="text-white/30 text-xs font-bold tracking-[0.1em] uppercase">
                        Photos ajoutées
                        <br />
                        une fois reçues
                      </p>
                    </div>
                  </div>
                )}
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
