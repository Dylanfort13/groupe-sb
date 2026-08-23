import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import basePath from "@/basePath";

export const metadata: Metadata = {
  title: "Café Marc Robitaille — Groupe SB",
  description:
    "Groupe SB est distributeur officiel des produits Café Marc Robitaille à Chibougamau et dans la région.",
};

const CREAM = "#f5efe4";
const ESPRESSO = "#1a0d03";
const BROWN = "#7a5230";

const tickerItems = [
  "CAFÉ 100% ARABICA",
  "CAFÉ CORSÉ",
  "CAFÉ DOUX",
  "CAFÉ DÉCAFÉINÉ",
  "BRÛLERIE DE MARC",
  "DISTRIBUTION COMMERCIALE",
  "SERVICE & ENTRETIEN",
];
const tickerStr = tickerItems.join("   ·   ");

export default function CafePage() {
  return (
    <>
      <style>{`
        @keyframes ticker-ltr {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-ltr {
          animation: ticker-ltr 34s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden" style={{ backgroundColor: ESPRESSO }}>
        <div className="absolute inset-0">
          <Image
            src={`${basePath}/cafe/coffee-hero.jpg`}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.3 }}
            priority
          />
        </div>
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${ESPRESSO} 35%, transparent 75%)` }} />
        <div className="relative z-10 w-full px-[6%] pb-16 pt-44">
          <p className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: BROWN }}>
            Distributeur officiel — Groupe SB
          </p>
          <div className="mb-6">
            <Image
              src={`${basePath}/cafe/logo-marc-robitaille.svg`}
              alt="Café Marc Robitaille"
              width={200}
              height={80}
              className="h-14 w-auto"
            />
          </div>
          <h1
            className="font-display leading-[0.88] tracking-[0.01em]"
            style={{ fontSize: "clamp(3.8rem,9vw,10rem)", color: CREAM }}
          >
            CAFÉ MARC<br />
            <em className="italic" style={{ color: BROWN }}>ROBITAILLE</em>
          </h1>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      {/* Full-bleed split: text left / image right */}
      <section style={{ backgroundColor: CREAM }}>
        <div className="flex flex-col lg:flex-row" style={{ minHeight: "620px" }}>
          {/* text */}
          <div className="w-full lg:w-1/2 px-[6%] py-20 flex flex-col justify-center">
            <p className="text-xs font-bold tracking-[0.22em] uppercase mb-6" style={{ color: BROWN }}>
              Chibougamau &amp; région
            </p>
            <h2
              className="font-display leading-[0.9] mb-8"
              style={{ fontSize: "clamp(2.6rem,4.5vw,5rem)", color: ESPRESSO }}
            >
              VOTRE<br />
              DISTRIBUTEUR<br />
              DE <em className="italic" style={{ color: BROWN }}>CAFÉ</em><br />
              EN RÉGION
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-[420px]" style={{ color: `${ESPRESSO}99` }}>
              Groupe SB est distributeur officiel des produits Café Marc Robitaille à Chibougamau et dans la région. Que vous soyez un particulier ou un établissement commercial, nous vous proposons leurs cafés corsés, doux et décaféinés — tous torréfiés à la brûlerie de Marc, à Alma.
            </p>
            <Link
              href="/contact"
              className="self-start text-sm font-bold tracking-[0.14em] uppercase px-8 py-4 hover:opacity-80 transition-opacity"
              style={{ backgroundColor: ESPRESSO, color: CREAM }}
            >
              Nous contacter
            </Link>
          </div>
          {/* image */}
          <div className="w-full lg:w-1/2 relative" style={{ minHeight: "420px" }}>
            <Image
              src={`${basePath}/cafe/coffee-cup.jpg`}
              alt="Café de qualité"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────────────────── */}
      <div className="overflow-hidden py-5" style={{ backgroundColor: ESPRESSO }}>
        <div className="ticker-ltr inline-flex">
          <span className="font-display text-2xl lg:text-3xl tracking-[0.1em] uppercase" style={{ color: CREAM }}>
            {tickerStr}&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;{tickerStr}&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;
          </span>
          <span className="font-display text-2xl lg:text-3xl tracking-[0.1em] uppercase" aria-hidden style={{ color: CREAM }}>
            {tickerStr}&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;{tickerStr}&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* ── CAFÉ SECTION ─────────────────────────────────────────────────── */}
      {/* Full-bleed split: text left / image right */}
      <section style={{ backgroundColor: CREAM }}>
        <div className="flex flex-col lg:flex-row" style={{ minHeight: "580px" }}>
          {/* text — order-2 so image appears first on mobile */}
          <div className="w-full lg:w-1/2 px-[6%] py-20 flex flex-col justify-center order-2 lg:order-1">
            <p className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: BROWN }}>
              01 — Nos produits
            </p>
            <h2
              className="font-display leading-[0.9] mb-6"
              style={{ fontSize: "clamp(2.6rem,4vw,4.5rem)", color: ESPRESSO }}
            >
              LES<br />
              <em className="italic" style={{ color: BROWN }}>CAFÉS</em><br />
              DE MARC
            </h2>
            <p className="leading-relaxed mb-6 max-w-[400px]" style={{ color: `${ESPRESSO}99` }}>
              Nous distribuons la gamme complète des cafés de Marc Robitaille — sélectionnés parmi les meilleures origines et torréfiés à Alma. Disponibles en version corsée, douce ou décaféinée pour répondre à tous les goûts, à la maison comme en entreprise.
            </p>
            <ul className="space-y-2.5">
              {["Café corsé", "Café doux", "Café décaféiné", "Distribution commerciale"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: `${ESPRESSO}77` }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: BROWN }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* image */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2" style={{ minHeight: "400px" }}>
            <Image
              src={`${basePath}/cafe/coffee-beans.jpg`}
              alt="Cafés de qualité"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── SERVICE SECTION ──────────────────────────────────────────────── */}
      {/* Full-bleed split: image left / text right */}
      <section style={{ backgroundColor: ESPRESSO }}>
        <div className="flex flex-col lg:flex-row" style={{ minHeight: "580px" }}>
          {/* image */}
          <div className="w-full lg:w-1/2 relative" style={{ minHeight: "400px" }}>
            <Image
              src={`${basePath}/cafe/service.jpg`}
              alt="Service et entretien"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ opacity: 0.75 }}
            />
          </div>
          {/* text */}
          <div className="w-full lg:w-1/2 px-[6%] py-20 flex flex-col justify-center">
            <p className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: BROWN }}>
              02 — Nos services
            </p>
            <h2
              className="font-display leading-[0.9] mb-6"
              style={{ fontSize: "clamp(2.6rem,4vw,4.5rem)", color: CREAM }}
            >
              SERVICE<br />
              &amp; <em className="italic" style={{ color: BROWN }}>ENTRETIEN</em><br />
              COMPLET
            </h2>
            <p className="leading-relaxed mb-6 max-w-[400px]" style={{ color: `${CREAM}70` }}>
              En plus de la distribution, notre équipe technique assure l'installation, l'entretien préventif et la réparation des machines à café — pour que vos équipements restent opérationnels en tout temps.
            </p>
            <ul className="space-y-2.5">
              {["Installation de machines", "Entretien préventif", "Réparation rapide", "Financement participatif"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: `${CREAM}55` }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: BROWN }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: BROWN }}>
        <div className="flex flex-col lg:flex-row" style={{ minHeight: "500px" }}>
          {/* text */}
          <div className="w-full lg:w-1/2 pl-[6%] pr-0 py-24 lg:py-32 flex flex-col justify-center">
            <h2
              className="font-display leading-[0.88] mb-8"
              style={{ fontSize: "clamp(3rem,7vw,8rem)", color: CREAM }}
            >
              INTÉRESSÉ<br />
              PAR NOS<br />
              PRODUITS<br />
              <em className="italic" style={{ color: ESPRESSO }}>CAFÉ?</em>
            </h2>
            <p className="text-base leading-relaxed max-w-[380px] mb-10" style={{ color: `${CREAM}bb` }}>
              Contactez Groupe SB pour passer une commande de produits Café Marc Robitaille, obtenir une soumission ou en savoir plus sur nos services de distribution en région.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="text-sm font-bold tracking-[0.14em] uppercase px-10 py-4 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: ESPRESSO, color: CREAM }}
              >
                Nous contacter
              </Link>
            </div>
          </div>
          {/* logo */}
          <div className="w-full lg:w-1/2 flex items-center justify-center pl-0 pr-[6%] py-16">
            <Image
              src={`${basePath}/cafe/logo-marc-robitaille.svg`}
              alt="Café Marc Robitaille"
              width={320}
              height={128}
              className="w-[320px] max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
