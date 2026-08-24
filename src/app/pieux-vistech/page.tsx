import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import basePath from "@/basePath";
import { getSiteContent, imgSrc } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Pieux Vistech Chibougamau — Groupe SB",
  description:
    "Installation de pieux vissés certifiés Vistech à Chibougamau. Fondations résidentielles, commerciales, terrasses et solariums.",
};

const serviceGroups = [
  {
    title: "INSTALLATION DE PIEUX VISSÉS",
    slug: "installation-pieux",
    items: ["Fondations résidentielles", "Structures commerciales", "Terrasses et patios", "Clôtures et solarium", "Agrandissements"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="22" /><polyline points="8,6 12,2 16,6" /><line x1="6" y1="14" x2="18" y2="14" /><line x1="4" y1="18" x2="20" y2="18" /></svg>,
  },
  {
    title: "TYPES DE PROJETS",
    slug: "types-projets",
    items: ["Nouvelles constructions", "Rénovations et stabilisation", "Bâtiments accessoires (cabanon, garage)", "Passerelles et quais"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
  },
];

const steps = [
  { num: "1", title: "ÉVALUATION", description: "Analyse du terrain et du projet pour déterminer le type et le nombre de pieux nécessaires selon les charges prévues." },
  { num: "2", title: "INSTALLATION", description: "Vissage des pieux dans le sol à l'aide de machinerie spécialisée, sans excavation majeure, avec un minimum de perturbation du terrain." },
  { num: "3", title: "FINITION", description: "Ajustement final au niveau, installation des connecteurs de structure et validation de la capacité portante selon les normes en vigueur." },
];

// Pulled from this division's own category sub-pages so the album isn't empty.
const galleryImages = [
  "/services/pieux-vistech/installation-pieux/0.jpg",
  "/services/pieux-vistech/installation-pieux/1.jpg",
  "/services/pieux-vistech/installation-pieux/2.jpg",
  "/services/pieux-vistech/installation-pieux/3.jpg",
  "/services/pieux-vistech/types-projets/0.jpg",
  "/services/pieux-vistech/types-projets/3.jpg",
];

export default async function PieuxPage({
  searchParams,
}: {
  searchParams?: Promise<{ draft?: string }>;
}) {
  // ?draft=1 renders unpublished content for the portal's preview pane.
  const draft = (await searchParams)?.draft === "1";
  const cms = await getSiteContent(draft);
  const page = cms.divisionPages["pieux-vistech"];

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={imgSrc(page.hero.backgroundImage, "/pieux-vistech.jpg")} alt="" fill sizes="100vw" className="object-cover grayscale object-bottom" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black-1/96 via-black-1/50 to-black-1/25" />
        <div className="absolute inset-0 bg-pieux/12" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#090909_100%)]" />
        <div className="relative z-10 px-[5%] pt-32 pb-20 text-center">
          <div className="inline-block text-[0.68rem] font-bold tracking-[0.2em] uppercase bg-black/30 border border-pieux/40 text-pieux px-2.5 py-1 rounded-sm mb-4">
            {page.hero.tag}
          </div>
          <h1
            className={
              page.hero.logo
                ? "mb-3"
                : "font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9] tracking-[0.02em] title-gradient mb-3 whitespace-pre-line"
            }
          >
            {page.hero.logo ? (
              <Image
                src={imgSrc(page.hero.logo, "/logo.png")}
                alt={page.hero.title}
                width={500}
                height={200}
                className="w-[clamp(280px,40vw,500px)] h-auto mx-auto"
                priority
              />
            ) : (
              page.hero.title
            )}
          </h1>
          <p className="text-silver text-base leading-relaxed max-w-[520px] mx-auto">{page.hero.subtitle}</p>
        </div>
      </section>

      <RevealOnScroll>
        <section className="bg-black-1 py-24 px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end gap-8 flex-wrap mb-12">
              <div>
                <div className="inline-flex items-center gap-2.5 text-pieux text-xs font-bold tracking-[0.22em] uppercase mb-4">
                  {page.services.eyebrow}
                </div>
                <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient">{page.services.title}</h2>
              </div>
              <p className="text-silver text-base leading-relaxed max-w-[420px]">{page.services.intro}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {page.services.cards.map((sg, i) => (
                <RevealOnScroll key={sg.title} delay={i * 100} className="h-full">
                  <div className="group relative bg-charcoal rounded-sm overflow-hidden transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.55)] flex flex-col h-full">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${basePath}/texture-metal.jpg')` }} />
                    <div className="absolute inset-0 bg-black" style={{ opacity: 0.9 }} />
                    <span className="absolute bottom-0 left-0 w-full sm:w-0 h-[3px] bg-pieux transition-all duration-700 sm:group-hover:w-full z-[3]" />
                    <div className="relative z-[2] p-8 flex flex-col h-full">
                      <div className="font-display text-xl tracking-[0.04em] text-white mb-4 pb-3 border-b border-pieux/25 flex items-center gap-2.5">
                        <span className="text-pieux">{serviceGroups[i]?.icon}</span>
                        {sg.title}
                      </div>
                      <ul className="space-y-2 flex-1">
                        {sg.items.map((item) => (
                          <li key={item} className="text-sm text-silver flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-pieux flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Link
                          href={`/pieux-vistech/${sg.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-pieux border border-pieux/40 hover:border-pieux hover:bg-pieux/10 px-4 py-2 rounded-sm transition-all duration-200"
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
        <section className="bg-light-bg py-32 px-[5%]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 text-pieux text-xs font-bold tracking-[0.22em] uppercase mb-4">
              Notre processus
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient-light mb-20">
              COMMENT ÇA<br />FONCTIONNE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
              {steps.map((step, i) => (
                <div key={step.num} className="flex flex-col items-center text-center relative">
                  <div className="w-[60px] h-[60px] bg-pieux rounded-full flex items-center justify-center font-display text-2xl text-white flex-shrink-0 mb-6">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-[30px] left-[calc(50%+30px)] w-[calc(100%-60px)] h-0.5 bg-pieux/25" />
                  )}
                  <h3 className="font-display text-xl text-light-text tracking-[0.04em] mb-3">{step.title}</h3>
                  <p className="text-sm text-light-muted leading-relaxed max-w-[280px]">{step.description}</p>
                </div>
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
                <div className="inline-flex items-center gap-2.5 text-pieux text-xs font-bold tracking-[0.22em] uppercase mb-4">
                  {page.gallery.eyebrow}
                </div>
                <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient">{page.gallery.title}</h2>
              </div>
              <Link href="/realisations" className="text-xs font-bold tracking-[0.1em] uppercase text-pieux hover:text-white transition-colors">
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
            <div className="w-[500px] h-[500px] rounded-full bg-pieux/[0.04] blur-3xl" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="w-12 h-[3px] bg-pieux mx-auto mb-8" />
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.93] tracking-[0.02em] text-light-text mb-5">
              OBTENEZ UNE ÉVALUATION GRATUITE
            </h2>
            <p className="text-light-muted text-base leading-relaxed max-w-[480px] mx-auto mb-10">
              Contactez-nous pour une évaluation gratuite de vos besoins en pieux vissés.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-pieux text-white text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-pieux hover:opacity-90 transition-all duration-200 touch-manipulation"
              >
                Évaluation gratuite
              </Link>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
