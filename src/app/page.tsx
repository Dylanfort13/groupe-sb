import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Divisions } from "@/components/Divisions";
import { Gallery } from "@/components/Gallery";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RevealOnScroll>
        <Divisions />
      </RevealOnScroll>

      <section className="bg-light-bg py-32 px-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div>
              <div className="inline-flex items-center gap-2.5 text-orange text-xs font-bold tracking-[0.22em] uppercase mb-4">
                Qui sommes-nous
              </div>
              <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient-light mb-6">
                CONSTRUIT SUR<br />
                <span className="text-orange">L&apos;EXPÉRIENCE</span>
              </h2>
              <p className="text-light-muted leading-relaxed mb-6 max-w-[460px]">
                Groupe SB est une entreprise établie à Chibougamau, au cœur du Nord-du-Québec. Avec quatre divisions complémentaires, nous offrons une gamme complète de services en construction, déneigement, location d&apos;équipements et installation de pieux vissés.
              </p>
              <blockquote className="text-lg italic text-light-muted/70 border-l-3 border-orange pl-5 my-8 leading-relaxed">
                &laquo; À l&apos;écoute des besoins de nos clients, service rapide et efficace &raquo;
              </blockquote>
              <div className="flex flex-wrap gap-2">
                {["Résidentiel", "Commercial", "Industriel", "Nord-du-Québec"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold tracking-[0.1em] uppercase text-orange border border-orange/30 bg-orange/5 px-3 py-1.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll type="right">
            <div className="relative rounded-sm overflow-hidden">
              <Image
                src="/about.png"
                alt="Groupe SB"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-light-bg to-transparent" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <RevealOnScroll>
        <Stats />
      </RevealOnScroll>
      <RevealOnScroll>
        <Gallery />
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
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Soumission gratuite
              </Link>
              <a
                href="tel:4187707506"
                className="inline-flex items-center gap-2 bg-transparent text-light-text text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-charcoal/40 hover:border-orange hover:text-orange transition-all duration-200 touch-manipulation"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 016.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 015.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.13a16 16 0 006 6l1.5-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0120 14.92z" /></svg>
                418-770-7506
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-6 text-xs font-semibold tracking-[0.1em] uppercase text-light-muted/50">
              <span>Chibougamau</span>
              <span className="w-1 h-1 rounded-full bg-orange" />
              <span>Chapais</span>
              <span className="w-1 h-1 rounded-full bg-orange" />
              <span>Mistissini</span>
              <span className="w-1 h-1 rounded-full bg-orange" />
              <span>Nord-du-Québec</span>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
