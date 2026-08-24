/**
 * Content layer for the Groupe SB site.
 *
 * Content lives in the FortX platform (fortx.site) and is fetched at render
 * time. FALLBACK_CONTENT below is the site's copy exactly as it shipped, so if
 * the platform is unreachable, slow, or misconfigured the site still renders
 * normally instead of going blank. Every field is merged over the fallback
 * individually — a missing or empty CMS field never blanks a section.
 */
import basePath from "@/basePath";

const CENTRAL_URL =
  process.env.CENTRAL_URL || process.env.NEXT_PUBLIC_CENTRAL_URL || "";
const TENANT_ID = process.env.NEXT_PUBLIC_TENANT_ID || "";

export type Division = {
  name: string;
  href: string;
  tag: string;
  description: string;
  services: string[];
  phone: string;
  image: string;
  accent: string;
};

export type PortfolioItem = { src: string; tag: string; name: string };
export type Stat = { num: string; label: string };

export type SiteContent = {
  hero: {
    line1: string;
    line2: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    backgroundImage: string;
    logo: string;
  };
  divisions: { eyebrow: string; title: string; intro: string; items: Division[] };
  about: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    quote: string;
    tags: string[];
    image: string;
  };
  stats: { items: Stat[]; backgroundImage: string };
  portfolio: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    ctaText: string;
    items: PortfolioItem[];
  };
  cta: { title: string; body: string; ctaText: string; zones: string[] };
};

export const FALLBACK_CONTENT: SiteContent = {
  hero: {
    line1: "CHAQUE PROJET",
    line2: "COMPTE",
    subheadline:
      "Service rapide et efficace, à l'écoute de vos besoins. Résidentiel, commercial et industriel, partout au Nord-du-Québec.",
    ctaPrimary: "Soumission gratuite",
    ctaSecondary: "Nos divisions",
    backgroundImage: "/construction-sb.jpg",
    logo: "/logo.png",
  },
  divisions: {
    eyebrow: "Groupe SB",
    // Rendered with whitespace-pre-line: a newline here becomes a line break.
    title: "NOS\nDIVISIONS",
    intro:
      "Six divisions complémentaires pour répondre à tous vos besoins en construction, déneigement, location, transport, pieux vissés et café.",
    items: [
      {
        name: "Construction SB",
        href: "/construction",
        tag: "Division 01",
        description:
          "Construction résidentielle et commerciale, spécialité béton, excavation et fondations.",
        services: [
          "Construction résidentielle & commerciale",
          "Excavation et drain de fondation",
          "Isolation uréthane et laine soufflée",
          "Paysagement et installation clôture",
        ],
        phone: "418-770-7506",
        image: "/construction-sb.jpg",
        accent: "construction",
      },
      {
        name: "Déneigement SB",
        href: "/deneigement",
        tag: "Division 02",
        description:
          "Déneigement résidentiel, commercial et industriel, transport et matériel granulaire.",
        services: [
          "Déneigement sur appel et à la main",
          "Transport de neige et vrac",
          "Vente de matériel granulaire",
          "Contrats saisonniers",
        ],
        phone: "418-770-4657",
        image: "/deneigement-sb.jpg",
        accent: "deneigement",
      },
      {
        name: "Location Expert",
        href: "/location",
        tag: "Division 03",
        description:
          "Location d'outils de chantier, machinerie lourde et équipement spécialisé.",
        services: [
          "Outils de chantier et échafaudage",
          "Machinerie lourde et élévation",
          "Génératrices, pompes et chauffage",
          "Location de chapiteaux",
        ],
        phone: "418-770-8243",
        image: "/location-expert.jpg",
        accent: "location",
      },
      {
        name: "Pieux Vistech",
        href: "/pieux-vistech",
        tag: "Division 04",
        description:
          "Installation de pieux vissés pour fondations résidentielles et commerciales.",
        services: [
          "Pieux vissés résidentiels",
          "Fondations de patios et terrasses",
          "Agrandissements et solariums",
          "Quais et structures extérieures",
        ],
        phone: "418-770-4657",
        image: "/pieux-vistech.jpg",
        accent: "pieux",
      },
      {
        name: "Transport SB",
        href: "/transport",
        tag: "Division 05",
        description:
          "Transport de machinerie, matériaux et agrégats partout au Nord-du-Québec.",
        services: [
          "Camions lourds (10 et 12 roues)",
          "Déplacement de machinerie",
          "Transport de nacelle et équipements",
          "Livraison d'agrégats et matériaux",
        ],
        phone: "418-770-4657",
        image: "/transport-sb.jpg",
        accent: "transport",
      },
      {
        name: "Café Marc Robitaille",
        href: "/cafe",
        tag: "Division 06",
        description:
          "Distributeur de café et slush — machines commerciales, entretien et fournitures.",
        services: [
          "Café premium (diverses torréfactions)",
          "Produits Slush Puppie",
          "Machines commerciales à café et slush",
          "Entretien et réparation d'équipements",
        ],
        phone: "418-668-8022",
        image: "/cafe-sb.jpg",
        accent: "cafe",
      },
    ],
  },
  about: {
    eyebrow: "Qui sommes-nous",
    titleLine1: "CONSTRUIT SUR",
    titleLine2: "L'EXPÉRIENCE",
    body: "Groupe SB est une entreprise établie à Chibougamau, au cœur du Nord-du-Québec. Avec six divisions complémentaires, nous offrons une gamme complète de services en construction, déneigement, location, transport, pieux vissés et distribution de café.",
    quote:
      "À l'écoute des besoins de nos clients, service rapide et efficace",
    tags: ["Résidentiel", "Commercial", "Industriel", "Nord-du-Québec"],
    image: "/about.png",
  },
  stats: {
    items: [
      { num: "6", label: "Divisions spécialisées" },
      { num: "25+", label: "Services offerts" },
      { num: "5", label: "Zones desservies" },
      { num: "1", label: "Appel suffit" },
    ],
    backgroundImage: "/hero-construction.jpg",
  },
  portfolio: {
    eyebrow: "Portfolio",
    titleLine1: "NOTRE",
    titleLine2: "SAVOIR-FAIRE",
    description:
      "Un aperçu de nos champs d'expertise en construction, déneigement, location, transport et fondations.",
    ctaText: "Voir plus de photos",
    items: [
      { src: "/portfolio/home-residentiel.jpg", tag: "Construction", name: "Résidentiel" },
      { src: "/portfolio/home-deneigement.jpg", tag: "Déneigement", name: "Déneigement commercial" },
      { src: "/portfolio/home-transport.jpg", tag: "Transport", name: "Transport de machinerie" },
      { src: "/portfolio/home-location.jpg", tag: "Location", name: "Équipements" },
      { src: "/portfolio/home-pieux.jpg", tag: "Pieux Vistech", name: "Fondations" },
      { src: "/portfolio/home-commercial.jpg", tag: "Construction", name: "Commercial" },
    ],
  },
  cta: {
    title: "UN PROJET EN TÊTE?",
    body: "Service rapide et efficace : notre équipe vous répond rapidement pour tout projet résidentiel, commercial ou industriel.",
    ctaText: "Soumission gratuite",
    zones: ["Chibougamau", "Chapais", "Mistissini", "Nord-du-Québec"],
  },
};

/**
 * Resolve an image reference to a usable src.
 * CMS uploads return absolute Vercel Blob URLs; bundled assets are site-relative
 * and need the basePath prefix.
 */
export function imgSrc(value: string | undefined | null, fallback: string): string {
  const v = (typeof value === "string" ? value : "").trim();
  const chosen = v || fallback;
  return /^https?:\/\//.test(chosen) ? chosen : `${basePath}${chosen}`;
}

/** An image field may arrive as a plain string or as a Payload upload object. */
function readImage(raw: unknown): string {
  if (typeof raw === "string") return raw;
  if (raw && typeof raw === "object" && "url" in raw) {
    const url = (raw as { url?: unknown }).url;
    if (typeof url === "string") return url;
  }
  return "";
}

const str = (raw: unknown, fallback: string): string => {
  const v = typeof raw === "string" ? raw.trim() : "";
  return v || fallback;
};

const list = <T,>(raw: unknown, fallback: T[]): T[] =>
  Array.isArray(raw) && raw.length > 0 ? (raw as T[]) : fallback;

/** Merge CMS content over the fallback, field by field. */
function merge(c: Record<string, any>): SiteContent {
  const F = FALLBACK_CONTENT;
  return {
    hero: {
      line1: str(c.hero?.line1, F.hero.line1),
      line2: str(c.hero?.line2, F.hero.line2),
      subheadline: str(c.hero?.subheadline, F.hero.subheadline),
      ctaPrimary: str(c.hero?.ctaPrimary, F.hero.ctaPrimary),
      ctaSecondary: str(c.hero?.ctaSecondary, F.hero.ctaSecondary),
      backgroundImage: str(readImage(c.hero?.backgroundImage), F.hero.backgroundImage),
      logo: str(readImage(c.hero?.logo), F.hero.logo),
    },
    divisions: {
      eyebrow: str(c.divisions?.eyebrow, F.divisions.eyebrow),
      title: str(c.divisions?.title, F.divisions.title),
      intro: str(c.divisions?.intro, F.divisions.intro),
      items: list<Division>(c.divisions?.items, F.divisions.items).map((d, i) => {
        const base = F.divisions.items[i] ?? F.divisions.items[0];
        return {
          name: str(d?.name, base.name),
          // href and accent are routing/design, never client-editable.
          href: base.href,
          accent: base.accent,
          tag: str(d?.tag, base.tag),
          description: str(d?.description, base.description),
          services: list<string>(d?.services, base.services),
          phone: str(d?.phone, base.phone),
          image: str(readImage(d?.image), base.image),
        };
      }),
    },
    about: {
      eyebrow: str(c.about?.eyebrow, F.about.eyebrow),
      titleLine1: str(c.about?.titleLine1, F.about.titleLine1),
      titleLine2: str(c.about?.titleLine2, F.about.titleLine2),
      body: str(c.about?.body, F.about.body),
      quote: str(c.about?.quote, F.about.quote),
      tags: list<string>(c.about?.tags, F.about.tags),
      image: str(readImage(c.about?.image), F.about.image),
    },
    stats: {
      items: list<Stat>(c.stats?.items, F.stats.items),
      backgroundImage: str(readImage(c.stats?.backgroundImage), F.stats.backgroundImage),
    },
    portfolio: {
      eyebrow: str(c.portfolio?.eyebrow, F.portfolio.eyebrow),
      titleLine1: str(c.portfolio?.titleLine1, F.portfolio.titleLine1),
      titleLine2: str(c.portfolio?.titleLine2, F.portfolio.titleLine2),
      description: str(c.portfolio?.description, F.portfolio.description),
      ctaText: str(c.portfolio?.ctaText, F.portfolio.ctaText),
      items: list<PortfolioItem>(c.portfolio?.items, F.portfolio.items).map((p, i) => {
        const base = F.portfolio.items[i] ?? F.portfolio.items[0];
        return {
          src: str(readImage(p?.src), base.src),
          tag: str(p?.tag, base.tag),
          name: str(p?.name, base.name),
        };
      }),
    },
    cta: {
      title: str(c.cta?.title, F.cta.title),
      body: str(c.cta?.body, F.cta.body),
      ctaText: str(c.cta?.ctaText, F.cta.ctaText),
      zones: list<string>(c.cta?.zones, F.cta.zones),
    },
  };
}

export async function getSiteContent(draft = false): Promise<SiteContent> {
  if (!CENTRAL_URL || !TENANT_ID) return FALLBACK_CONTENT;

  try {
    const url = `${CENTRAL_URL}/api/public/site?tenant=${TENANT_ID}${draft ? "&draft=true" : ""}`;
    const res = await fetch(url, { next: { revalidate: draft ? 0 : 60 } });
    if (!res.ok) throw new Error(`CMS responded ${res.status}`);
    const data = await res.json();
    if (!data?.content) return FALLBACK_CONTENT;
    return merge(data.content);
  } catch (err) {
    console.error("[cms] fetch failed, using bundled fallback:", err);
    return FALLBACK_CONTENT;
  }
}
