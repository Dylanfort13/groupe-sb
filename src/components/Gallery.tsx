import RevealOnScroll from "./RevealOnScroll";
import Link from "next/link";
import Image from "next/image";
import basePath from "@/basePath";

// Stand-in imagery until the client uploads real project photos. The section
// heading deliberately does not claim these are completed Groupe SB projects.
export const PORTFOLIO_SLOTS = [
  { src: "/portfolio/home-residentiel.jpg", tag: "Construction", name: "Résidentiel", grid: "lg:col-start-1 lg:col-end-6 lg:row-start-1" },
  { src: "/portfolio/home-deneigement.jpg", tag: "Déneigement", name: "Déneigement commercial", grid: "lg:col-start-6 lg:col-end-9 lg:row-start-1" },
  { src: "/portfolio/home-transport.jpg", tag: "Transport", name: "Transport de machinerie", grid: "lg:col-start-9 lg:col-end-13 lg:row-start-1" },
  { src: "/portfolio/home-location.jpg", tag: "Location", name: "Équipements", grid: "lg:col-start-1 lg:col-end-5 lg:row-start-2" },
  { src: "/portfolio/home-pieux.jpg", tag: "Pieux Vistech", name: "Fondations", grid: "lg:col-start-5 lg:col-end-9 lg:row-start-2" },
  { src: "/portfolio/home-commercial.jpg", tag: "Construction", name: "Commercial", grid: "lg:col-start-9 lg:col-end-13 lg:row-start-2" },
];

export function Gallery() {
  return (
    <section className="bg-light-bg py-32 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end gap-8 flex-wrap mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 text-orange text-xs font-bold tracking-[0.22em] uppercase mb-4">
              Portfolio
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient-light">
              NOTRE<br />SAVOIR-FAIRE
            </h2>
          </div>
          <p className="text-light-muted text-base leading-relaxed max-w-[420px]">
            Un aperçu de nos champs d&apos;expertise en construction, déneigement,
            location, transport et fondations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
          {PORTFOLIO_SLOTS.map((p) => (
            <RevealOnScroll key={p.name} className={p.grid}>
              <div className="group relative overflow-hidden rounded-sm cursor-pointer h-[220px] sm:h-[240px] lg:h-[280px]">
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
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 bg-orange text-white text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-orange hover:bg-orange-dark hover:border-orange-dark transition-all duration-200 touch-manipulation"
          >
            Voir plus de photos
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
