import RevealOnScroll from "./RevealOnScroll";
import Link from "next/link";

const placeholders = [
  { gradient: "linear-gradient(135deg, #2c1a0a 0%, #5a3218 40%, #1a1108 100%)", tag: "Construction", name: "Résidentiel", grid: "lg:col-start-1 lg:col-end-6 lg:row-start-1" },
  { gradient: "linear-gradient(135deg, #3d2010 0%, #6b3a1a 50%, #1a0f06 100%)", tag: "Déneigement", name: "Hiver 2024", grid: "lg:col-start-6 lg:col-end-9 lg:row-start-1" },
  { gradient: "linear-gradient(135deg, #1a0f06 0%, #ef6006 50%, #1a0f06 100%)", tag: "Photos à venir", name: "Vos photos ici", isPlaceholder: true, grid: "lg:col-start-9 lg:col-end-13 lg:row-start-1" },
  { gradient: "linear-gradient(135deg, #2c1a0a 0%, #4a2810 50%, #0d0804 100%)", tag: "Location", name: "Équipements", grid: "lg:col-start-1 lg:col-end-5 lg:row-start-2" },
  { gradient: "linear-gradient(135deg, #3d2010 0%, #5a3218 50%, #1a1108 100%)", tag: "Pieux Vistech", name: "Fondations", grid: "lg:col-start-5 lg:col-end-9 lg:row-start-2" },
  { gradient: "linear-gradient(135deg, #2c1a0a 0%, #4a2810 50%, #0d0804 100%)", tag: "Construction", name: "Commercial", grid: "lg:col-start-9 lg:col-end-13 lg:row-start-2" },
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
              NOS<br />RÉALISATIONS
            </h2>
          </div>
          <p className="text-light-muted text-base leading-relaxed max-w-[420px]">
            Aperçu de nos projets en construction, déneigement, location et fondations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
          {placeholders.map((p) => (
            <RevealOnScroll key={p.name} className={p.grid}>
              <div
                className={`group relative overflow-hidden rounded-sm cursor-pointer h-[220px] sm:h-[240px] lg:h-[280px]`}
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
                      <svg className="mx-auto mb-3 opacity-40" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef6006" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                      <p className="text-white/30 text-xs font-bold tracking-[0.1em] uppercase">Photos ajoutées<br />une fois reçues</p>
                    </div>
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 bg-orange text-white text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-orange hover:bg-orange-dark hover:border-orange-dark transition-all duration-200 touch-manipulation"
          >
            Voir plus de projets
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
