import Link from "next/link";
import type { DivisionContact } from "@/lib/cms";

const accentClass: Record<string, string> = {
  construction: "text-construction",
  deneigement: "text-deneigement",
  location: "text-location",
  pieux: "text-pieux",
  transport: "text-transport",
  cafe: "text-cafe",
};

const telHref = (phone: string) => `tel:${phone.replace(/[^0-9]/g, "")}`;

export default function Footer({ contacts = [] }: { contacts?: DivisionContact[] }) {
  return (
    <footer className="bg-black-2 text-silver/60 pt-16 pb-8 px-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
        <div>
          <div className="font-display text-2xl tracking-wider text-white mb-4">
            GROUPE <span className="text-orange">SB</span>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            À l&apos;écoute de nos clients, service rapide et efficace.
            Résidentiel, commercial et industriel dans le Nord-du-Québec.
          </p>
          <p className="text-xs text-silver/40">239 3e Rue, Chibougamau, QC</p>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-5">
            Navigation
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li><Link href="/" className="text-sm text-silver/55 hover:text-orange transition-colors">Accueil</Link></li>
            <li><Link href="/a-propos" className="text-sm text-silver/55 hover:text-orange transition-colors">À propos</Link></li>
            <li><Link href="/realisations" className="text-sm text-silver/55 hover:text-orange transition-colors">Réalisations</Link></li>
            <li><Link href="/contact" className="text-sm text-silver/55 hover:text-orange transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-5">
            Nos Divisions
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li><Link href="/construction" className="text-sm text-silver/55 hover:text-orange transition-colors">Construction SB</Link></li>
            <li><Link href="/deneigement" className="text-sm text-silver/55 hover:text-orange transition-colors">Déneigement SB</Link></li>
            <li><Link href="/location" className="text-sm text-silver/55 hover:text-orange transition-colors">Location Expert</Link></li>
            <li><Link href="/pieux-vistech" className="text-sm text-silver/55 hover:text-orange transition-colors">Pieux Vistech</Link></li>
            <li><Link href="/transport" className="text-sm text-silver/55 hover:text-orange transition-colors">Transport SB</Link></li>
            <li><Link href="/cafe" className="text-sm text-silver/55 hover:text-orange transition-colors">Café Marc Robitaille</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-5">
            Contact
          </h4>
          <div className="flex flex-col gap-3 text-sm">
            {contacts.map((division) => (
              <div key={division.name}>
                <span className={`${accentClass[division.accent] || "text-orange"} font-semibold`}>
                  {division.name}
                </span>
                <br />
                {division.phone
                  .split(" / ")
                  .filter(Boolean)
                  .map((number, i) => (
                    <span key={number}>
                      {i > 0 && " / "}
                      <a href={telHref(number)} className="text-silver/55 hover:text-orange transition-colors">
                        {number}
                      </a>
                    </span>
                  ))}
                {division.email && (
                  <>
                    <br />
                    <a
                      href={`mailto:${division.email}`}
                      className="text-silver/55 hover:text-orange transition-colors text-xs"
                    >
                      {division.email}
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-xs text-silver/40">
        <span>&copy; {new Date().getFullYear()} Groupe SB. Tous droits réservés.</span>
        <span>239 3e Rue, Chibougamau, QC</span>
      </div>
    </footer>
  );
}
