import type { Metadata } from "next";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import basePath from "@/basePath";
import { getSiteContent, imgSrc } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Location Expert — Groupe SB",
  description:
    "Location d'outils et de machinerie à Chibougamau. Outils de chantier, machinerie lourde, chapiteaux et équipement spécialisé.",
};

const categories = [
  {
    title: "OUTILS DE CHANTIER",
    slug: "outils-chantier",
    items: ["Outils pour béton", "Outils à toiture et charpente", "Échafaudage et échelle", "Outils divers"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
  },
  {
    title: "MACHINERIE ET TRANSPORT",
    slug: "machinerie-transport",
    items: ["Machinerie lourde", "Transport et manutention", "Élévation", "Remorques"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
  },
  {
    title: "ÉQUIPEMENT SPÉCIALISÉ",
    slug: "equipement-specialise",
    items: ["Génératrices et éclairage", "Pompes à eau et drainage", "Chauffage et ventilation", "Équipement divers"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  },
  {
    title: "AMÉNAGEMENT",
    slug: "amenagement",
    items: ["Paysagement et jardinage", "Compaction", "Équipement saisonnier", "Inventaire complet sur location-expert.ca"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" /></svg>,
  },
  {
    title: "LOCATION CHAPITEAU",
    slug: "location-chapiteau",
    items: ["10x15", "20x20", "20x40", "40x80", "Service d'installation inclus"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M12 2v20" /></svg>,
  },
];

// Real equipment photos taken from the client's own inventory site,
// location-expert.ca. Product shots on a white background, so these tiles are
// deliberately light — they read as a catalogue rather than a project album.
const equipment = [
  { src: "/equipements/mini-excavatrice.jpg", alt: "Mini-excavatrice" },
  { src: "/equipements/chargeuse-sur-roues.jpg", alt: "Chargeuse sur roues" },
  { src: "/equipements/chargeuse-compacte.jpg", alt: "Chargeuse compacte sur chenilles" },
  { src: "/equipements/chauffage-chantier.jpg", alt: "Chauffage de chantier" },
  { src: "/equipements/ventilateur-industriel.jpg", alt: "Ventilateur industriel" },
  { src: "/equipements/compresseur-air.jpg", alt: "Compresseur à air" },
];

export default async function LocationPage({
  searchParams,
}: {
  searchParams?: Promise<{ draft?: string }>;
}) {
  // ?draft=1 renders unpublished content for the portal's preview pane.
  const draft = (await searchParams)?.draft === "1";
  const cms = await getSiteContent(draft);
  const page = cms.divisionPages["location"];

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={imgSrc(page.hero.backgroundImage, "/location-expert-hero.jpg")} alt="" fill sizes="100vw" className="object-cover grayscale" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black-1/96 via-black-1/50 to-black-1/25" />
        <div className="absolute inset-0 bg-location/12" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#090909_100%)]" />
        <div className="relative z-10 px-[5%] pt-32 pb-20 text-center">
          <div className="inline-block text-[0.68rem] font-bold tracking-[0.2em] uppercase bg-black/30 border border-location/40 text-location px-2.5 py-1 rounded-sm mb-4">
            {page.hero.tag}
          </div>
          <h1 className="mb-3">
            <Image src={`${basePath}/logo-location-expert.png`} alt="Location Expert" width={500} height={200} className="w-[clamp(280px,40vw,500px)] h-auto mx-auto" priority />
          </h1>
          <p className="text-silver text-base leading-relaxed max-w-[520px] mx-auto">{page.hero.subtitle}</p>
        </div>
      </section>

      <RevealOnScroll>
        <section className="bg-black-1 py-24 px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end gap-8 flex-wrap mb-12">
              <div>
                <div className="inline-flex items-center gap-2.5 text-location text-xs font-bold tracking-[0.22em] uppercase mb-4">
                  {page.services.eyebrow}
                </div>
                <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient">{page.services.title}</h2>
              </div>
              <p className="text-silver text-base leading-relaxed max-w-[420px]">{page.services.intro}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {page.services.cards.map((cat, i) => (
                <RevealOnScroll key={cat.title} delay={i * 100} className="h-full">
                  <div className="group relative bg-charcoal rounded-sm overflow-hidden transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.55)] flex flex-col h-full">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${basePath}/texture-metal.jpg')` }} />
                    <div className="absolute inset-0 bg-black" style={{ opacity: 0.9 }} />
                    <span className="absolute bottom-0 left-0 w-full sm:w-0 h-[3px] bg-location transition-all duration-700 sm:group-hover:w-full z-[3]" />
                    <div className="relative z-[2] p-8 flex flex-col h-full">
                      <div className="font-display text-xl tracking-[0.04em] text-white mb-4 pb-3 border-b border-location/25 flex items-center gap-2.5">
                        <span className="text-location">{categories[i]?.icon}</span>
                        {cat.title}
                      </div>
                      <ul className="space-y-2 flex-1">
                        {cat.items.map((item) => (
                          <li key={item} className="text-sm text-silver flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-location flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="bg-black-2 py-24 px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end gap-8 flex-wrap mb-12">
              <div>
                <div className="inline-flex items-center gap-2.5 text-location text-xs font-bold tracking-[0.22em] uppercase mb-4">
                  Notre inventaire
                </div>
                <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient">{page.gallery.title}</h2>
              </div>
              <a
                href="https://www.location-expert.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold tracking-[0.1em] uppercase text-location hover:text-white transition-colors"
              >
                Inventaire complet →
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {page.gallery.images.map((item, gi) => (
                <div key={`${item}-${gi}`} className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-white">
                  <Image
                    src={imgSrc(item, "/equipements/mini-excavatrice.jpg")}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
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
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
