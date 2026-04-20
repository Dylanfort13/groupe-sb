import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contact — Groupe SB",
  description: "Contactez Groupe SB : Construction SB, Déneigement SB, Location Expert et Pieux Vistech Chibougamau.",
};

const divisions = [
  {
    name: "Construction SB",
    phone: "418-770-7506",
    email: "constructions-sb@hotmail.com",
    accent: "text-construction",
    accentBorder: "border-construction/55",
    accentBorderHover: "hover:border-construction/35",
    accentIcon: "stroke-construction",
  },
  {
    name: "Déneigement SB",
    phone: "418-770-4657 / 418-770-3726",
    email: "deneigementsb@hotmail.com",
    accent: "text-deneigement",
    accentBorder: "border-deneigement/55",
    accentBorderHover: "hover:border-deneigement/35",
    accentIcon: "stroke-deneigement",
  },
  {
    name: "Location Expert",
    phone: "418-770-8243",
    email: "locationexpert@hotmail.com",
    accent: "text-location",
    accentBorder: "border-location/55",
    accentBorderHover: "hover:border-location/35",
    accentIcon: "stroke-location",
  },
  {
    name: "Pieux Vistech Chibougamau",
    phone: "418-770-4657",
    email: "chibougamau@pieuxvistech.com",
    accent: "text-pieux",
    accentBorder: "border-pieux/55",
    accentBorderHover: "hover:border-pieux/35",
    accentIcon: "stroke-pieux",
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="relative py-32 px-[5%] overflow-hidden">
        <Image src="/hero-construction.jpg" alt="" fill className="object-cover grayscale" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(9,9,9,0.75) 0%, rgba(9,9,9,0.95) 100%)" }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 text-orange text-xs font-bold tracking-[0.22em] uppercase mb-6">
            Groupe SB
          </div>
          <h1 className="font-display text-[clamp(3rem,6vw,6rem)] leading-[0.93] tracking-[0.02em] title-gradient mb-4">
            NOUS JOINDRE
          </h1>
          <p className="text-silver text-base leading-relaxed max-w-[520px] mx-auto">
            Chaque division dispose de ses propres coordonnées. Contactez directement la division concernée.
          </p>
        </div>
      </div>

      <RevealOnScroll>
        <section className="bg-light-bg py-24 px-[5%]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <RevealOnScroll type="left">
              <div>
                <div className="inline-flex items-center gap-2.5 text-orange text-xs font-bold tracking-[0.22em] uppercase mb-4">
                  Écrivez-nous
                </div>
                <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient-light mb-4">
                  FORMULAIRE<br />DE CONTACT
                </h2>
                <p className="text-light-muted text-base leading-relaxed mb-8">
                  Décrivez votre projet et la division concernée, nous vous répondons rapidement.
                </p>
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mt-0.5 flex-shrink-0 stroke-orange" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <div>
                    <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-light-muted/60 mb-1">Siège social</div>
                    <div className="text-sm font-semibold text-light-text">239 3e Rue, Chibougamau, QC</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll type="right">
              <ContactForm />
            </RevealOnScroll>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="bg-black-1 py-24 px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2.5 text-orange text-xs font-bold tracking-[0.22em] uppercase mb-6">
              Coordonnées
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient mb-10">
              NOS DIVISIONS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
              {divisions.map((div, i) => (
                <RevealOnScroll key={div.name} delay={i * 100}>
                  <div className={`bg-charcoal/18 border ${div.accentBorder} rounded-sm p-8 transition-all duration-200 ${div.accentBorderHover}`}>
                    <div className={`font-display text-xl tracking-[0.05em] ${div.accent} mb-4 pb-3 border-b border-charcoal/55`}>
                      {div.name}
                    </div>
                    <div className="flex items-start gap-3 mb-3">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 mt-0.5 flex-shrink-0 ${div.accentIcon}`} aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.13a16 16 0 006 6l1.5-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
                      <div>
                        <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-silver/50 mb-1">Téléphone</div>
                        <a href={`tel:${div.phone.split(" / ")[0].replace(/-/g, "")}`} className="text-sm font-semibold text-silver/90 hover:text-orange transition-colors">
                          {div.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 mt-0.5 flex-shrink-0 ${div.accentIcon}`} aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                      <div>
                        <div className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-silver/50 mb-1">Courriel</div>
                        <a href={`mailto:${div.email}`} className="text-sm font-semibold text-silver/90 hover:text-orange transition-colors">
                          {div.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <section className="bg-black-1 py-12">
        <div className="w-full h-[400px]" style={{ filter: "grayscale(100%) invert(92%) contrast(83%)" }}>
          <iframe
            src="https://maps.google.com/maps?q=239+3e+Rue+Chibougamau+QC&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Groupe SB, 239 3e Rue, Chibougamau, QC"
          />
        </div>
      </section>
    </>
  );
}
