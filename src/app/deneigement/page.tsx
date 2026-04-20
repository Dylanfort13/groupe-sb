import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Déneigement SB — Groupe SB",
  description:
    "Déneigement résidentiel, commercial et industriel à Chibougamau, Chapais et environs. Transport de neige et vente de matériel granulaire.",
};

const services = [
  {
    title: "DÉNEIGEMENT",
    items: ["Résidentiel", "Commercial", "Industriel", "Sur appel", "À la main"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" /></svg>,
  },
  {
    title: "TRANSPORT",
    items: ["Transport de neige", "Transport en vrac (10 roues)", "Transport en vrac (12 roues)", "Remorques 2 et 3 essieux"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
  },
  {
    title: "MATÉRIAUX & GRANULAIRES",
    items: ["Vente de matériel granulaire", "Sel et abrasifs"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="5.64" y1="5.64" x2="18.36" y2="18.36" /><line x1="18.36" y1="5.64" x2="5.64" y2="18.36" /><circle cx="12" cy="12" r="3" /></svg>,
  },
];

export default function DeneigementPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/deneigement-sb.jpg" alt="" fill sizes="100vw" className="object-cover grayscale" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black-1/96 via-black-1/50 to-black-1/25" />
        <div className="absolute inset-0 bg-deneigement/12" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#090909_100%)]" />
        <div className="relative z-10 px-[5%] pt-32 pb-20 text-center">
          <div className="inline-block text-[0.68rem] font-bold tracking-[0.2em] uppercase bg-black/30 border border-deneigement/40 text-deneigement px-2.5 py-1 rounded-sm mb-4">
            Division 02
          </div>
          <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9] tracking-[0.02em] title-gradient mb-3">
            DÉNEIGEMENT SB
          </h1>
          <p className="text-silver text-base leading-relaxed max-w-[520px] mx-auto">
            Déneigement résidentiel, commercial et industriel, service sur appel et contrats saisonniers au Nord-du-Québec.
          </p>
        </div>
      </section>

      <RevealOnScroll>
      <section className="bg-black-1 py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end gap-8 flex-wrap mb-12">
            <div>
              <div className="inline-flex items-center gap-2.5 text-deneigement text-xs font-bold tracking-[0.22em] uppercase mb-4">
                Ce que nous faisons
              </div>
              <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient">NOS SERVICES</h2>
            </div>
            <p className="text-silver text-base leading-relaxed max-w-[420px]">De l&apos;entrée résidentielle au site industriel, réactifs, efficaces, disponibles.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} delay={i * 100} className="h-full">
              <div className="bg-charcoal/22 border border-charcoal/55 rounded-sm p-8 transition-all duration-200 hover:border-deneigement/38 hover:-translate-y-0.5 h-full">
                <div className="font-display text-xl tracking-[0.04em] text-white mb-4 pb-3 border-b border-deneigement/25 flex items-center gap-2.5">
                  <span className="text-deneigement">{svc.icon}</span>
                  {svc.title}
                </div>
                <ul className="space-y-2">
                  {svc.items.map((item) => (
                    <li key={item} className="text-sm text-silver flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-deneigement flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
      <section className="bg-light-bg py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 text-deneigement text-xs font-bold tracking-[0.22em] uppercase mb-4">
            Saison hivernale
          </div>
          <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient-light mb-10">
            INFORMATIONS<br />SAISONNIÈRES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Saison de déneigement", text: "Période d'opération, horaires de service et temps de réponse." },
              { title: "Zone de service", text: "Chibougamau, Chapais, Mistissini, Oujé-Bougoumou et tout le Nord-du-Québec." },
              { title: "Contrats saisonniers", text: "Contrats saisonniers disponibles pour résidentiel et commercial. Réservez tôt." },
            ].map((item) => (
              <div key={item.title} className="bg-light-card border border-charcoal/20 rounded-sm p-8">
                <h3 className="font-display text-xl text-light-text tracking-[0.04em] mb-3">{item.title}</h3>
                <p className="text-sm text-light-muted leading-relaxed whitespace-pre-line">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
      <section className="bg-light-bg py-24 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-deneigement/[0.04] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="w-12 h-[3px] bg-deneigement mx-auto mb-8" />
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.93] tracking-[0.02em] text-light-text mb-5">
            RÉSERVEZ VOTRE CONTRAT DE DÉNEIGEMENT
          </h2>
          <p className="text-light-muted text-base leading-relaxed max-w-[480px] mx-auto mb-10">
            Appelez-nous dès maintenant pour réserver votre contrat pour la saison à venir.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-deneigement text-white text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-deneigement hover:opacity-90 transition-all duration-200 touch-manipulation"
            >
              Réserver un contrat
            </Link>
            <a
              href="tel:4187704657"
              className="inline-flex items-center gap-2 bg-transparent text-light-text text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-charcoal/40 hover:border-deneigement hover:text-deneigement transition-all duration-200 touch-manipulation"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 016.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 015.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.13a16 16 0 006 6l1.5-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0120 14.92z" /></svg>
              418-770-4657
            </a>
          </div>
        </div>
      </section>
      </RevealOnScroll>
    </>
  );
}
