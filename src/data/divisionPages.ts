/**
 * Default content for the six division pages, extracted verbatim from the
 * hardcoded pages. This is the fallback the CMS content is merged over.
 *
 * Icons, slugs, accent colours and layout stay in the page components — they
 * are design and routing, not client-editable content.
 */

export type ServiceCard = { title: string; slug: string; items: string[] };

export type DivisionPageContent = {
  hero: {
    tag: string;
    /** Rendered with whitespace-pre-line: a newline becomes a line break. */
    title: string;
    subtitle: string;
    backgroundImage: string;
    /** When set, replaces the text title (Location Expert uses its own logo). */
    logo: string;
  };
  services: { eyebrow: string; title: string; intro: string; cards: ServiceCard[] };
  gallery: { eyebrow: string; title: string; images: string[] };
};

export const DIVISION_SLUGS = [
  "construction",
  "deneigement",
  "location",
  "pieux-vistech",
  "transport",
  "cafe",
] as const;

export type DivisionSlug = (typeof DIVISION_SLUGS)[number];

export const DIVISION_PAGES: Record<string, DivisionPageContent> = {
  construction: {
    hero: {
      tag: "Division 01",
      title: "CONSTRUCTION SB",
      subtitle:
        "Construction résidentielle et commerciale de tous types, spécialité béton. Votre projet, notre expertise.",
      backgroundImage: "/construction-sb.jpg",
      logo: "",
    },
    services: {
      eyebrow: "Ce que nous faisons",
      title: "NOS SERVICES",
      intro: "Résidentiel, commercial et spécialité béton, de l'excavation à la finition.",
      cards: [
        { title: "CONSTRUCTION", slug: "construction", items: ["Construction résidentielle", "Construction commerciale", "Spécialité béton"] },
        { title: "EXCAVATION & FONDATIONS", slug: "excavation-fondations", items: ["Excavation générale", "Drain de fondation", "Réparation de fondation", "Membrane pulvérisée de fondation"] },
        { title: "ISOLATION", slug: "isolation", items: ["Isolation uréthane pulvérisé", "Laine soufflée à la cellulose"] },
      ],
    },
    gallery: {
      eyebrow: "Nos travaux",
      title: "RÉALISATIONS",
      images: [
        "/services/construction/construction/0.jpg",
        "/services/construction/construction/1.jpg",
        "/services/construction/construction/2.jpg",
        "/services/construction/excavation-fondations/0.jpg",
        "/services/construction/excavation-fondations/3.jpg",
        "/services/construction/isolation/0.jpg",
      ],
    },
  },

  deneigement: {
    hero: {
      tag: "Division 02",
      title: "DÉNEIGEMENT SB",
      subtitle:
        "Déneigement résidentiel, commercial et industriel, service sur appel et contrats saisonniers au Nord-du-Québec.",
      backgroundImage: "/deneigement-sb.jpg",
      logo: "",
    },
    services: {
      eyebrow: "Ce que nous faisons",
      title: "NOS SERVICES",
      intro: "De l'entrée résidentielle au site industriel, réactifs, efficaces, disponibles.",
      cards: [
        { title: "DÉNEIGEMENT", slug: "deneigement", items: ["Résidentiel", "Commercial", "Industriel", "Sur appel", "À la main"] },
        { title: "TRANSPORT", slug: "transport", items: ["Transport de neige", "Transport en vrac (10 roues)", "Transport en vrac (12 roues)", "Remorques 2 et 3 essieux"] },
        { title: "MATÉRIAUX & GRANULAIRES", slug: "materiaux-granulaires", items: ["Vente de matériel granulaire", "Sel et abrasifs"] },
        { title: "AMÉNAGEMENT", slug: "amenagement", items: ["Paysagement", "Installation clôture à maille", "Nettoyage de pavé (balais mécanique commercial)"] },
      ],
    },
    gallery: {
      eyebrow: "Nos travaux",
      title: "RÉALISATIONS",
      images: [
        "/services/deneigement/deneigement/0.jpg",
        "/services/deneigement/deneigement/1.jpg",
        "/services/deneigement/deneigement/2.jpg",
        "/services/deneigement/transport/0.jpg",
        "/services/deneigement/materiaux-granulaires/0.jpg",
        "/services/deneigement/amenagement/0.jpg",
      ],
    },
  },

  location: {
    hero: {
      tag: "Division 03",
      title: "LOCATION EXPERT",
      subtitle:
        "Location d'outils et de machinerie diverse : l'équipement qu'il vous faut, quand vous en avez besoin.",
      backgroundImage: "/location-expert-hero.jpg",
      logo: "/logo-location-expert.png",
    },
    services: {
      eyebrow: "Notre inventaire",
      title: "CATALOGUE D'ÉQUIPEMENTS",
      intro:
        "Outils de chantier, machinerie lourde, chapiteaux et équipement spécialisé disponibles à la location.",
      cards: [
        { title: "OUTILS DE CHANTIER", slug: "outils-chantier", items: ["Outils pour béton", "Outils à toiture et charpente", "Échafaudage et échelle", "Outils divers"] },
        { title: "MACHINERIE ET TRANSPORT", slug: "machinerie-transport", items: ["Machinerie lourde", "Transport et manutention", "Élévation", "Remorques"] },
        { title: "ÉQUIPEMENT SPÉCIALISÉ", slug: "equipement-specialise", items: ["Génératrices et éclairage", "Pompes à eau et drainage", "Chauffage et ventilation", "Équipement divers"] },
        { title: "AMÉNAGEMENT", slug: "amenagement", items: ["Paysagement et jardinage", "Compaction", "Équipement saisonnier", "Inventaire complet sur location-expert.ca"] },
        { title: "LOCATION CHAPITEAU", slug: "location-chapiteau", items: ["10x15", "20x20", "20x40", "40x80", "Service d'installation inclus"] },
      ],
    },
    gallery: {
      eyebrow: "Notre inventaire",
      title: "NOS ÉQUIPEMENTS",
      images: [
        "/equipements/mini-excavatrice.jpg",
        "/equipements/chargeuse-sur-roues.jpg",
        "/equipements/chargeuse-compacte.jpg",
        "/equipements/chauffage-chantier.jpg",
        "/equipements/ventilateur-industriel.jpg",
        "/equipements/compresseur-air.jpg",
      ],
    },
  },

  "pieux-vistech": {
    hero: {
      tag: "Division 04",
      title: "PIEUX VISTECH\nCHIBOUGAMAU",
      subtitle:
        "Installation de pieux vissés certifiés Vistech, fondations solides pour le Grand Nord.",
      backgroundImage: "/pieux-vistech.jpg",
      logo: "",
    },
    services: {
      eyebrow: "Ce que nous faisons",
      title: "NOS SERVICES",
      intro: "Pieux vissés pour tous types de structures : résidentiel, commercial, terrasses et plus.",
      cards: [
        { title: "INSTALLATION DE PIEUX VISSÉS", slug: "installation-pieux", items: ["Fondations résidentielles", "Structures commerciales", "Terrasses et patios", "Clôtures et solarium", "Agrandissements"] },
        { title: "TYPES DE PROJETS", slug: "types-projets", items: ["Nouvelles constructions", "Rénovations et stabilisation", "Bâtiments accessoires (cabanon, garage)", "Passerelles et quais"] },
      ],
    },
    gallery: {
      eyebrow: "Nos travaux",
      title: "RÉALISATIONS",
      images: [
        "/services/pieux-vistech/installation-pieux/0.jpg",
        "/services/pieux-vistech/installation-pieux/1.jpg",
        "/services/pieux-vistech/installation-pieux/2.jpg",
        "/services/pieux-vistech/installation-pieux/3.jpg",
        "/services/pieux-vistech/types-projets/0.jpg",
        "/services/pieux-vistech/types-projets/3.jpg",
      ],
    },
  },

  transport: {
    hero: {
      tag: "Division 05",
      title: "TRANSPORT SB",
      subtitle: "Transport lourd, déplacement de machinerie et matériel au Nord-du-Québec.",
      backgroundImage: "/transport-sb.jpg",
      logo: "",
    },
    services: {
      eyebrow: "Ce que nous faisons",
      title: "NOS SERVICES",
      intro: "Transport lourd et spécialisé pour tous vos besoins au Nord-du-Québec.",
      cards: [
        { title: "CAMION LOURD", slug: "camion-lourd", items: ["Transport longue distance", "Livraison sur chantier", "Transport de matériaux"] },
        { title: "DÉPLACEMENT DE MACHINERIE", slug: "deplacement-machinerie", items: ["Transport de machinerie lourde", "Déménagement d'équipements industriels", "Chargement et arrimage spécialisé"] },
        { title: "TRANSPORT MATÉRIEL", slug: "transport-materiel", items: ["Nacelle", "Équipements divers", "Agrégats"] },
      ],
    },
    gallery: {
      eyebrow: "Nos travaux",
      title: "RÉALISATIONS",
      images: [
        "/services/transport/camion-lourd/0.jpg",
        "/services/transport/camion-lourd/1.jpg",
        "/services/transport/deplacement-machinerie/0.jpg",
        "/services/transport/deplacement-machinerie/1.jpg",
        "/services/transport/transport-materiel/0.jpg",
        "/services/transport/transport-materiel/2.jpg",
      ],
    },
  },

  // The Café page has its own bespoke layout. Its gallery images map to the
  // three photo blocks on that page, in order.
  cafe: {
    hero: {
      tag: "Division 06",
      title: "CAFÉ MARC ROBITAILLE",
      subtitle:
        "Distributeur de café et de produits Slush Puppie au Saguenay–Lac-Saint-Jean et au Nord-du-Québec.",
      backgroundImage: "/cafe/coffee-hero.jpg",
      logo: "/cafe/logo-marc-robitaille.svg",
    },
    services: {
      eyebrow: "Ce que nous offrons",
      title: "NOS PRODUITS",
      intro: "Café, Slush Puppie, machines commerciales, entretien et réparation.",
      cards: [
        { title: "CAFÉ", slug: "cafe-distribution", items: ["Café corsé", "Café doux", "Café décaféiné", "Distribution commerciale"] },
        { title: "SLUSH PUPPIE", slug: "slush-puppie", items: ["Distribution Slush Puppie", "Machines commerciales", "Entretien et réparation", "Support aux événements"] },
        { title: "SERVICE & ENTRETIEN", slug: "service-entretien", items: ["Installation de machines", "Entretien préventif", "Réparation", "Financement participatif (levée de fonds)"] },
      ],
    },
    gallery: {
      eyebrow: "En images",
      title: "NOS PRODUITS",
      images: ["/cafe/coffee-cup.jpg", "/cafe/coffee-beans.jpg", "/cafe/service.jpg"],
    },
  },
};
