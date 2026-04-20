import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "À propos — Groupe SB",
  description:
    "Groupe SB : à l'écoute de ses clients, service rapide et efficace au Nord-du-Québec.",
};

const values = [
  {
    num: "01",
    title: "Écoute",
    description: "À l'écoute de vos besoins, nous prenons le temps de comprendre votre projet avant de proposer des solutions adaptées.",
  },
  {
    num: "02",
    title: "Rapidité",
    description: "Service rapide et réactif : en situation d'urgence comme pour les projets planifiés, notre équipe mobilise les ressources dans les meilleurs délais.",
  },
  {
    num: "03",
    title: "Efficacité",
    description: "Des équipes qualifiées et un parc d'équipements modernes pour mener chaque mandat à terme selon les standards les plus élevés de l'industrie.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative py-32 px-[5%] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero-construction.jpg" alt="" fill sizes="100vw" className="object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-black-1/88" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#090909_100%)]" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 text-orange text-xs font-bold tracking-[0.22em] uppercase mb-6">
            Notre entreprise
          </div>
          <h1 className="font-display text-[clamp(3rem,6vw,6rem)] leading-[0.93] tracking-[0.02em] title-gradient">
            À PROPOS DE<br />GROUPE SB
          </h1>
        </div>
      </section>

      <RevealOnScroll>
        <section className="bg-black-1 py-32 px-[5%]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll type="left">
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/trailer.png"
                  alt="Équipement Groupe SB"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll type="right">
              <div>
                <div className="inline-flex items-center gap-2.5 text-orange text-xs font-bold tracking-[0.22em] uppercase mb-4">
                  Notre histoire
                </div>
                <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient mb-6">
                  CONSTRUIT SUR<br />
                  <span className="text-orange">L&apos;EXPÉRIENCE</span>
                </h2>
                <p className="text-silver leading-relaxed mb-6">
                  Groupe SB est une entreprise établie à Chibougamau, au cœur du Nord-du-Québec. Avec quatre divisions complémentaires, nous offrons une gamme complète de services en construction, déneigement, location d&apos;équipements et installation de pieux vissés.
                </p>
                <div className="w-12 h-[2px] bg-orange mb-6" />
                <p className="text-silver leading-relaxed">
                  Notre positionnement unique : une seule entreprise, quatre expertises. Résidentiel, commercial et industriel, nous servons Chibougamau, Chapais, Mistissini, Oujé-Bougoumou et l&apos;ensemble du Nord-du-Québec.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="bg-light-bg py-32 px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2.5 text-orange text-xs font-bold tracking-[0.22em] uppercase mb-4">
              Ce qui nous distingue
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient-light mb-4">
              NOS VALEURS
            </h2>
            <p className="text-light-muted text-base leading-relaxed max-w-[520px] mb-14">Chez Groupe SB, les valeurs se vivent sur le terrain.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <RevealOnScroll key={v.title} delay={i * 120}>
                  <div className="bg-light-card border border-charcoal/20 rounded-sm p-10 transition-all duration-200 hover:border-orange/35">
                    <div className="font-display text-[clamp(3rem,5vw,4.5rem)] leading-none text-orange mb-4">
                      {v.num}
                    </div>
                    <h3 className="font-display text-xl tracking-[0.04em] text-light-text mb-3">{v.title}</h3>
                    <p className="text-sm text-light-muted leading-relaxed">{v.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="relative py-32 px-[5%] overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/construction-sb.jpg" alt="" fill sizes="100vw" className="object-cover grayscale" />
          </div>
          <div className="absolute inset-0 bg-black-1/88" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#090909_100%)]" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2.5 text-orange text-xs font-bold tracking-[0.22em] uppercase mb-4">
              Zone de service
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient mb-4">
              OÙ NOUS<br />INTERVENONS
            </h2>
            <p className="text-silver text-base leading-relaxed max-w-[520px] mb-8">Nous desservons les communautés du Nord-du-Québec avec l&apos;ensemble de nos divisions.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {["Chibougamau", "Chapais", "Mistissini", "Oujé-Bougoumou", "Nord-du-Québec"].map((zone) => (
                <div key={zone} className="bg-charcoal/30 border border-charcoal/60 rounded-sm py-4 px-3 text-center text-sm font-semibold tracking-[0.06em] text-silver hover:border-orange hover:text-white transition-colors cursor-default">
                  {zone}
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="bg-light-bg py-24 px-[5%] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full bg-orange/[0.04] blur-3xl" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="w-12 h-[3px] bg-orange mx-auto mb-8" />
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.93] tracking-[0.02em] text-light-text mb-5">
              UN PROJET EN TÊTE?
            </h2>
            <p className="text-light-muted text-base leading-relaxed max-w-[480px] mx-auto mb-10">
              Service rapide et efficace : notre équipe vous répond rapidement pour tout projet résidentiel, commercial ou industriel.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange text-white text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-orange hover:bg-orange-dark hover:border-orange-dark transition-all duration-200 touch-manipulation"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                Nous contacter
              </Link>
              <a
                href="tel:4187707506"
                className="inline-flex items-center gap-2 bg-transparent text-light-text text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-charcoal/40 hover:border-orange hover:text-orange transition-all duration-200 touch-manipulation"
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
