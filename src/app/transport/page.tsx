import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import basePath from "@/basePath";
import { getSiteContent, imgSrc } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Transport SB — Groupe SB",
  description:
    "Transport lourd, déplacement de machinerie et transport de matériel à Chibougamau et au Nord-du-Québec.",
};

const services = [
  {
    title: "CAMION LOURD",
    slug: "camion-lourd",
    items: ["Transport longue distance", "Livraison sur chantier", "Transport de matériaux"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
  },
  {
    title: "DÉPLACEMENT DE MACHINERIE",
    slug: "deplacement-machinerie",
    items: ["Transport de machinerie lourde", "Déménagement d'équipements industriels", "Chargement et arrimage spécialisé"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
  },
  {
    title: "TRANSPORT MATÉRIEL",
    slug: "transport-materiel",
    items: ["Nacelle", "Équipements divers", "Agrégats"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9,22 9,12 15,12 15,22" /></svg>,
  },
];

// Pulled from this division's own category sub-pages so the album isn't empty.
const galleryImages = [
  "/services/transport/camion-lourd/0.jpg",
  "/services/transport/camion-lourd/1.jpg",
  "/services/transport/deplacement-machinerie/0.jpg",
  "/services/transport/deplacement-machinerie/1.jpg",
  "/services/transport/transport-materiel/0.jpg",
  "/services/transport/transport-materiel/2.jpg",
];

export default async function TransportPage({
  searchParams,
}: {
  searchParams?: Promise<{ draft?: string }>;
}) {
  // ?draft=1 renders unpublished content for the portal's preview pane.
  const draft = (await searchParams)?.draft === "1";
  const cms = await getSiteContent(draft);
  const page = cms.divisionPages["transport"];

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={imgSrc(page.hero.backgroundImage, "/transport-sb.jpg")} alt="" fill sizes="100vw" className="object-cover grayscale" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black-1/96 via-black-1/50 to-black-1/25" />
        <div className="absolute inset-0 bg-transport/12" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#090909_100%)]" />
        <div className="relative z-10 px-[5%] pt-32 pb-20 text-center">
          <div className="inline-block text-[0.68rem] font-bold tracking-[0.2em] uppercase bg-black/30 border border-transport/40 text-transport px-2.5 py-1 rounded-sm mb-4">
            {page.hero.tag}
          </div>
          <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9] tracking-[0.02em] title-gradient mb-3 whitespace-pre-line">
            {page.hero.title}
          </h1>
          <p className="text-silver text-base leading-relaxed max-w-[520px] mx-auto">{page.hero.subtitle}</p>
        </div>
      </section>

      <RevealOnScroll>
        <section className="bg-black-1 py-24 px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end gap-8 flex-wrap mb-12">
              <div>
                <div className="inline-flex items-center gap-2.5 text-transport text-xs font-bold tracking-[0.22em] uppercase mb-4">
                  {page.services.eyebrow}
                </div>
                <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient">{page.services.title}</h2>
              </div>
              <p className="text-silver text-base leading-relaxed max-w-[420px]">{page.services.intro}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {page.services.cards.map((svc, i) => (
                <RevealOnScroll key={svc.title} delay={i * 100} className="h-full">
                  <div className="group relative bg-charcoal rounded-sm overflow-hidden transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.55)] flex flex-col h-full">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${basePath}/texture-metal.jpg')` }} />
                    <div className="absolute inset-0 bg-black" style={{ opacity: 0.9 }} />
                    <span className="absolute bottom-0 left-0 w-full sm:w-0 h-[3px] bg-transport transition-all duration-700 sm:group-hover:w-full z-[3]" />
                    <div className="relative z-[2] p-8 flex flex-col h-full">
                      <div className="font-display text-xl tracking-[0.04em] text-white mb-4 pb-3 border-b border-transport/25 flex items-center gap-2.5">
                        <span className="text-transport">{services[i]?.icon}</span>
                        {svc.title}
                      </div>
                      <ul className="space-y-2 flex-1">
                        {svc.items.map((item) => (
                          <li key={item} className="text-sm text-silver flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-transport flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Link
                          href={`/transport/${svc.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-transport border border-transport/40 hover:border-transport hover:bg-transport/10 px-4 py-2 rounded-sm transition-all duration-200"
                        >
                          En savoir plus
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                      </div>
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
                <div className="inline-flex items-center gap-2.5 text-transport text-xs font-bold tracking-[0.22em] uppercase mb-4">
                  {page.gallery.eyebrow}
                </div>
                <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient">{page.gallery.title}</h2>
              </div>
              <Link href="/realisations" className="text-xs font-bold tracking-[0.1em] uppercase text-transport hover:text-white transition-colors">
                Voir tout →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {page.gallery.images.map((src, gi) => (
                <div key={`${src}-${gi}`} className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-black-1">
                  <Image
                    src={imgSrc(src, "/construction-sb.jpg")}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.04]"
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
            <div className="w-[500px] h-[500px] rounded-full bg-transport/[0.04] blur-3xl" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="w-12 h-[3px] bg-transport mx-auto mb-8" />
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.93] tracking-[0.02em] text-light-text mb-5">
              BESOIN D&apos;UN TRANSPORT?
            </h2>
            <p className="text-light-muted text-base leading-relaxed max-w-[480px] mx-auto mb-10">
              Contactez-nous pour planifier votre transport de machinerie ou de matériel.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transport text-white text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-transport hover:opacity-90 transition-all duration-200 touch-manipulation"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
