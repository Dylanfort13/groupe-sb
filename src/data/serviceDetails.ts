export type ServiceItem = {
  name: string;
  description: string;
  imagePosition?: string;
};

export type CategoryData = {
  categoryTitle: string;
  divisionName: string;
  divisionPath: string;
  divisionSlug: string;
  categorySlug: string;
  divisionNumber: string;
  accentVar: string;
  items: ServiceItem[];
};

const data: Record<string, Record<string, CategoryData>> = {
  construction: {
    construction: {
      categoryTitle: "Construction",
      divisionName: "Construction SB",
      divisionPath: "/construction",
      divisionSlug: "construction",
      categorySlug: "construction",
      divisionNumber: "Division 01",
      accentVar: "construction",
      items: [
        { name: "Construction résidentielle", description: "Maisons unifamiliales, jumelées ou multiplex construites selon vos plans et devis, de la fondation à la finition. Notre équipe coordonne chaque étape du chantier pour vous livrer une construction de qualité, dans les délais convenus." },
        { name: "Construction commerciale", description: "Bâtiments commerciaux, entrepôts et locaux industriels érigés selon les normes du bâtiment en vigueur au Québec. Nous gérons l'ensemble du projet, de la conception structurale à la remise des clés." },
        { name: "Spécialité béton", description: "Travaux de béton coulé, dalles, murs et structures en béton armé pour tous types de projets résidentiels et commerciaux. Nos équipes maîtrisent les techniques de coffrage et de finition pour des résultats durables et conformes aux normes." },
      ],
    },
    "excavation-fondations": {
      categoryTitle: "Excavation & Fondations",
      divisionName: "Construction SB",
      divisionPath: "/construction",
      divisionSlug: "construction",
      categorySlug: "excavation-fondations",
      divisionNumber: "Division 01",
      accentVar: "construction",
      items: [
        { name: "Excavation générale", description: "Terrassement, déblaiement et préparation de terrain pour tout type de projet, machinerie lourde disponible pour chantiers de toutes tailles. Nous assurons un nivellement précis et une gestion rigoureuse des déblais pour préparer le site dans les meilleures conditions." },
        { name: "Drain de fondation", description: "Installation et remplacement de drains de fondation pour protéger votre sous-sol des infiltrations d'eau. Nos techniciens évaluent la situation hydrique de votre terrain et proposent la solution de drainage la plus adaptée." },
        { name: "Réparation de fondation", description: "Diagnostic et réparation de fissures, affaissements et problèmes structuraux de fondations existantes. Nous utilisons des techniques éprouvées d'injection et de renforcement pour stabiliser durablement votre structure." },
        { name: "Membrane pulvérisée de fondation", description: "Application de membrane imperméabilisante pulvérisée pour une protection optimale et durable contre l'humidité. Ce système sans joint assure une étanchéité continue sur l'ensemble de la surface de fondation." },
      ],
    },
    isolation: {
      categoryTitle: "Isolation",
      divisionName: "Construction SB",
      divisionPath: "/construction",
      divisionSlug: "construction",
      categorySlug: "isolation",
      divisionNumber: "Division 01",
      accentVar: "construction",
      items: [
        { name: "Isolation uréthane pulvérisé", description: "Mousse de polyuréthane projetée pour une isolation thermique et un pare-vapeur continu, idéale pour murs, toits et sous-planchers. Ce procédé élimine les ponts thermiques et réduit significativement vos coûts de chauffage." },
        { name: "Laine soufflée à la cellulose", description: "Isolation par insufflation de ouate de cellulose dans les combles et les murs pour améliorer l'efficacité énergétique de votre bâtiment. Ce matériau écologique et traité contre le feu offre d'excellentes performances acoustiques et thermiques." },
      ],
    },
  },

  deneigement: {
    deneigement: {
      categoryTitle: "Déneigement",
      divisionName: "Déneigement SB",
      divisionPath: "/deneigement",
      divisionSlug: "deneigement",
      categorySlug: "deneigement",
      divisionNumber: "Division 02",
      accentVar: "deneigement",
      items: [
        { name: "Résidentiel", description: "Déneigement d'entrées, cours et trottoirs résidentiels avec contrats saisonniers pour un service sans souci tout l'hiver. Intervention garantie après chaque chute de neige significative, selon les seuils convenus à votre contrat." },
        { name: "Commercial", description: "Déneigement de stationnements, accès et bâtiments commerciaux pour assurer la sécurité de votre clientèle en tout temps. Nos contrats commerciaux incluent un suivi météo et des délais d'intervention adaptés à vos heures d'opération." },
        { name: "Industriel", description: "Déneigement de sites industriels, cours de manœuvre et zones de chargement, disponible 24h sur 24 7j sur 7. Notre équipement lourd est dimensionné pour les grandes surfaces et les accumulations de neige importantes." },
        { name: "Sur appel", description: "Intervention rapide sur demande pour les besoins ponctuels ou lors d'accumulations importantes en dehors des contrats réguliers. Contactez-nous à toute heure et notre équipe se déplace dans les meilleurs délais." },
        { name: "À la main", description: "Déneigement manuel des accès, entrées et surfaces délicates où la machinerie ne peut accéder en toute sécurité. Notre équipe prend soin de vos aménagements et surfaces fragiles tout en assurant un dégagement complet." },
      ],
    },
    transport: {
      categoryTitle: "Transport",
      divisionName: "Déneigement SB",
      divisionPath: "/deneigement",
      divisionSlug: "deneigement",
      categorySlug: "transport",
      divisionNumber: "Division 02",
      accentVar: "deneigement",
      items: [
        { name: "Transport de neige", description: "Chargement et transport de la neige vers des sites de dépôt désignés pour libérer stationnements et accès encombrés. Notre flotte de camions et chargeurs permet d'opérer rapidement sur les grands sites commerciaux et industriels." },
        { name: "Transport en vrac (10 roues)", description: "Camion 10 roues pour le transport de matériaux en vrac : neige, granulaires, terre et déblais sur chantier. Disponible à l'heure ou au contrat pour vos besoins de transport dans la région de Chibougamau.", imagePosition: "bottom" },
        { name: "Transport en vrac (12 roues)", description: "Camion 12 roues à plus grande capacité pour les chantiers nécessitant des volumes importants de matériaux. Sa charge utile supérieure réduit le nombre de voyages et optimise vos coûts de transport." },
        { name: "Remorques 2 et 3 essieux", description: "Remorques pour le transport de machinerie légère, équipements et matériaux divers entre les sites. Disponibles en différentes configurations selon la nature et le volume de votre chargement." },
      ],
    },
    "materiaux-granulaires": {
      categoryTitle: "Matériaux & Granulaires",
      divisionName: "Déneigement SB",
      divisionPath: "/deneigement",
      divisionSlug: "deneigement",
      categorySlug: "materiaux-granulaires",
      divisionNumber: "Division 02",
      accentVar: "deneigement",
      items: [
        { name: "Vente de matériel granulaire", description: "Vente et livraison de granulaires : gravier, pierre concassée, sable et matériaux de remblai pour vos travaux de construction et d'aménagement. Livraison directe sur chantier avec camion benne dans la région de Chibougamau." },
        { name: "Sel et abrasifs", description: "Fourniture de sel de déglaçage et d'abrasifs pour chaussées, stationnements et surfaces extérieures en conditions hivernales. Nous proposons des formats adaptés aux particuliers comme aux gestionnaires de grands sites." },
      ],
    },
    amenagement: {
      categoryTitle: "Aménagement",
      divisionName: "Déneigement SB",
      divisionPath: "/deneigement",
      divisionSlug: "deneigement",
      categorySlug: "amenagement",
      divisionNumber: "Division 02",
      accentVar: "deneigement",
      items: [
        { name: "Paysagement", description: "Aménagement paysager, plantation, engazonnement et entretien extérieur pour résidences et commerces de la région. Nos équipes conçoivent et réalisent des espaces verts adaptés au climat nordique du Saguenay–Lac-Saint-Jean." },
        { name: "Installation clôture à maille", description: "Pose de clôtures à maille chainée pour délimiter terrains résidentiels, commerciaux et industriels. Nous utilisons des matériaux galvanisés ou enduits de PVC pour une durabilité maximale face aux hivers rigoureux de la région." },
        { name: "Nettoyage de pavé (balais mécanique commercial)", description: "Balayage mécanique commercial de stationnements, ruelles et surfaces pavées pour un entretien impeccable au printemps et à l'automne. Notre équipement professionnel ramasse sable, gravier et débris en un seul passage efficace." },
      ],
    },
  },

  location: {
    "outils-chantier": {
      categoryTitle: "Outils de chantier",
      divisionName: "Location Expert",
      divisionPath: "/location",
      divisionSlug: "location",
      categorySlug: "outils-chantier",
      divisionNumber: "Division 03",
      accentVar: "location",
      items: [
        { name: "Outils pour béton", description: "Malaxeurs, vibrateurs, meuleuses à béton et outillage spécialisé pour tous vos travaux de béton et de maçonnerie. Tout notre équipement est entretenu régulièrement et disponible à la journée, à la semaine ou au mois." },
        { name: "Outils à toiture et charpente", description: "Cloueuses pneumatiques, scies à onglets, chariots et équipement professionnel pour la pose de toiture et charpente. Consultez notre inventaire complet sur location-expert.ca pour vérifier la disponibilité en temps réel." },
        { name: "Échafaudage et échelle", description: "Échafaudages modulaires et échelles de toutes dimensions pour travaux en hauteur réalisés en toute sécurité. Nos systèmes sont conformes aux normes de la CNESST et disponibles avec instructions de montage." },
        { name: "Outils divers", description: "Large sélection d'outils électriques et manuels pour tous les corps de métier : perforateurs, meuleuses, scies, compresseurs et plus. Notre équipe vous conseille sur le bon équipement selon votre type de travaux." },
      ],
    },
    "machinerie-transport": {
      categoryTitle: "Machinerie et transport",
      divisionName: "Location Expert",
      divisionPath: "/location",
      divisionSlug: "location",
      categorySlug: "machinerie-transport",
      divisionNumber: "Division 03",
      accentVar: "location",
      items: [
        { name: "Machinerie lourde", description: "Pelles mécaniques, chargeurs, niveleuses et machinerie de chantier lourde pour vos travaux d'excavation et terrassement. Nos opérateurs qualifiés sont disponibles avec la machinerie si vous le souhaitez." },
        { name: "Transport et manutention", description: "Chariots télescopiques, transpalettes et équipement de manutention pour déplacer efficacement vos matériaux sur chantier. Adapté aux espaces restreints comme aux grandes surfaces, selon vos contraintes de projet." },
        { name: "Élévation", description: "Nacelles élévatrices, chariots élévateurs et plateformes de travail en hauteur pour vos projets en altitude. Nos équipements sont inspectés et certifiés pour assurer votre sécurité lors des travaux en hauteur." },
        { name: "Remorques", description: "Remorques de différentes capacités pour le transport de machinerie légère, équipements et matériaux divers. Disponibles avec attelage standard ou renforcé selon le poids et les dimensions de votre chargement." },
      ],
    },
    "equipement-specialise": {
      categoryTitle: "Équipement spécialisé",
      divisionName: "Location Expert",
      divisionPath: "/location",
      divisionSlug: "location",
      categorySlug: "equipement-specialise",
      divisionNumber: "Division 03",
      accentVar: "location",
      items: [
        { name: "Génératrices et éclairage", description: "Génératrices portatives et industrielles, tours d'éclairage pour chantiers, événements et situations d'urgence. Nos génératrices offrent une puissance allant de 2 kW à plus de 100 kW selon vos besoins." },
        { name: "Pompes à eau et drainage", description: "Pompes submersibles, de surface et systèmes de drainage pour l'assèchement de chantier et la gestion des eaux. Idéales pour les excavations en milieu humide ou les situations d'urgence après infiltrations importantes." },
        { name: "Chauffage et ventilation", description: "Réchauffeurs au propane, ventilateurs et équipement de gestion climatique pour travailler en toute saison. Indispensables pour les chantiers nordiques où les températures exigent un chauffage des espaces de travail." },
        { name: "Équipement divers", description: "Compresseurs, détecteurs, équipement de sécurité et outillage spécialisé disponibles à la demande selon vos besoins. Notre équipe peut vous aider à identifier l'équipement exact requis pour votre projet spécifique." },
      ],
    },
    amenagement: {
      categoryTitle: "Aménagement",
      divisionName: "Location Expert",
      divisionPath: "/location",
      divisionSlug: "location",
      categorySlug: "amenagement",
      divisionNumber: "Division 03",
      accentVar: "location",
      items: [
        { name: "Paysagement et jardinage", description: "Tondeuses, débroussailleuses et équipement d'entretien paysager pour résidences et espaces commerciaux. Location à la journée ou à la semaine, avec livraison possible sur votre propriété." },
        { name: "Compaction", description: "Compacteurs à plaque vibrante, rouleaux et pilonneuses pour la préparation et la finition de surfaces de sol. Disponibles en plusieurs tailles selon la superficie et le type de matériau à compacter." },
        { name: "Équipement saisonnier", description: "Souffleuses à neige, déneigeurs et équipement hivernal disponibles à la location dès le début de la saison. Idéal pour les propriétaires qui préfèrent louer plutôt que d'acheter et entreposer de l'équipement hivernal." },
        { name: "Inventaire complet sur location-expert.ca", description: "Consultez l'inventaire complet en ligne sur location-expert.ca pour vérifier la disponibilité en temps réel et effectuer votre réservation. Notre équipe est également disponible par téléphone pour vous guider dans votre choix d'équipement." },
      ],
    },
    "location-chapiteau": {
      categoryTitle: "Location chapiteau",
      divisionName: "Location Expert",
      divisionPath: "/location",
      divisionSlug: "location",
      categorySlug: "location-chapiteau",
      divisionNumber: "Division 03",
      accentVar: "location",
      items: [
        { name: "10×15", description: "Chapiteau 10×15 pieds, idéal pour petits événements, kiosques et activités de plein air en toute saison. Montage simple et rapide, livré et installé par notre équipe à l'adresse de votre choix." },
        { name: "20×20", description: "Chapiteau 20×20 pieds pour événements familiaux, réceptions et activités corporatives avec service d'installation inclus. Peut accommoder confortablement une vingtaine de personnes autour de tables." },
        { name: "20×40", description: "Grand chapiteau 20×40 pieds pour réceptions, festivals et événements communautaires d'envergure. Installation incluse par notre équipe certifiée, avec options de plancher, éclairage et parois latérales." },
        { name: "40×80", description: "Méga chapiteau 40×80 pieds pour événements majeurs, expositions et grands rassemblements. Service d'installation complet inclus avec coordination préalable pour assurer la conformité aux règlements municipaux." },
        { name: "Service d'installation inclus", description: "Notre équipe qualifiée prend en charge l'installation et le démontage complet du chapiteau sur le site de votre choix. Nous effectuons une visite préalable du site pour garantir une installation sécuritaire et conforme." },
      ],
    },
  },

  "pieux-vistech": {
    "installation-pieux": {
      categoryTitle: "Installation de pieux vissés",
      divisionName: "Pieux Vistech Chibougamau",
      divisionPath: "/pieux-vistech",
      divisionSlug: "pieux-vistech",
      categorySlug: "installation-pieux",
      divisionNumber: "Division 04",
      accentVar: "pieux",
      items: [
        { name: "Fondations résidentielles", description: "Pieux vissés certifiés Vistech pour fondations de maisons neuves, agrandissements et stabilisation de structures existantes. Installation rapide sans excavation majeure, idéale pour les terrains difficiles d'accès ou en zones de pergélisol." },
        { name: "Structures commerciales", description: "Installation de pieux pour bâtiments commerciaux, hangars et structures industrielles légères nécessitant des fondations solides. Nos ingénieurs calculent la capacité portante requise et dimensionnent les pieux en conséquence." },
        { name: "Terrasses et patios", description: "Fondations par pieux vissés pour terrasses, balcons et patios : installation rapide sans excavation majeure, idéal pour le pergélisol. Les pieux peuvent être installés et chargés le jour même, sans délai de cure comme pour le béton." },
        { name: "Clôtures et solarium", description: "Pieux vissés pour l'ancrage de clôtures, solariums, vérandas et structures légères sur tout type de terrain. Solution propre et précise qui préserve l'aménagement paysager existant lors des travaux." },
        { name: "Agrandissements", description: "Solution idéale pour les ajouts et agrandissements de bâtiments existants sans perturber les fondations en place. Les pieux s'installent à proximité immédiate de la structure existante sans risque de mouvement ou de fissuration." },
      ],
    },
    "types-projets": {
      categoryTitle: "Types de projets",
      divisionName: "Pieux Vistech Chibougamau",
      divisionPath: "/pieux-vistech",
      divisionSlug: "pieux-vistech",
      categorySlug: "types-projets",
      divisionNumber: "Division 04",
      accentVar: "pieux",
      items: [
        { name: "Nouvelles constructions", description: "Fondations complètes par pieux vissés pour nouvelles constructions résidentielles et commerciales dans le Nord-du-Québec. Alternative moderne et durable au béton coulé, particulièrement avantageuse dans les régions nordiques." },
        { name: "Rénovations et stabilisation", description: "Correction d'affaissements, stabilisation de fondations existantes et reprise en sous-œuvre par pieux vissés certifiés. Notre équipe évalue la structure et propose un plan d'intervention adapté pour redonner une assise solide à votre bâtiment." },
        { name: "Bâtiments accessoires (cabanon, garage)", description: "Installation rapide de pieux pour garages, cabanons, remises et bâtiments accessoires de toutes dimensions. Idéal pour les propriétaires qui souhaitent éviter la complexité et le coût d'une fondation en béton coulé." },
        { name: "Passerelles et quais", description: "Fondations pour ponts, passerelles, quais et structures en milieu humide ou difficile d'accès par machinerie conventionnelle. Les pieux vissés résistent aux cycles de gel-dégel et assurent une stabilité durable en milieu aquatique." },
      ],
    },
  },

  transport: {
    "camion-lourd": {
      categoryTitle: "Camion lourd",
      divisionName: "Transport SB",
      divisionPath: "/transport",
      divisionSlug: "transport",
      categorySlug: "camion-lourd",
      divisionNumber: "Division 05",
      accentVar: "transport",
      items: [
        { name: "Transport longue distance", description: "Transport de marchandises et matériaux sur longues distances dans tout le Nord-du-Québec et les régions avoisinantes. Nos chauffeurs expérimentés connaissent les routes nordiques et assurent une livraison sécuritaire dans les délais convenus." },
        { name: "Livraison sur chantier", description: "Livraison directe et ponctuelle sur chantier de matériaux de construction, équipements et fournitures diverses. Nous planifions les livraisons selon votre calendrier de chantier pour minimiser les temps d'arrêt." },
        { name: "Transport de matériaux", description: "Transport de granulaires, matières premières, acier et matériaux de construction en grande quantité selon vos délais. Nos camions sont équipés pour le vrac, les charges palettisées et les matériaux nécessitant un arrimage spécialisé." },
      ],
    },
    "deplacement-machinerie": {
      categoryTitle: "Déplacement de machinerie",
      divisionName: "Transport SB",
      divisionPath: "/transport",
      divisionSlug: "transport",
      categorySlug: "deplacement-machinerie",
      divisionNumber: "Division 05",
      accentVar: "transport",
      items: [
        { name: "Transport de machinerie lourde", description: "Transport sécurisé de pelles mécaniques, chargeurs, grues et machinerie lourde sur porte-chars spécialisés homologués. Nous gérons les permis de transport hors-normes et les escortes lorsque requis par la réglementation." },
        { name: "Déménagement d'équipements industriels", description: "Déplacement et relocalisation d'équipements industriels volumineux avec matériel de manutention adapté et équipe spécialisée. Nous établissons un plan de déménagement détaillé pour assurer la sécurité des équipements et du personnel." },
        { name: "Chargement et arrimage spécialisé", description: "Service d'arrimage professionnel selon les normes de transport en vigueur pour garantir la sécurité de chaque chargement. Nos techniciens utilisent sangles, chaînes et supports adaptés à chaque type de charge et de véhicule." },
      ],
    },
    "transport-materiel": {
      categoryTitle: "Transport matériel",
      divisionName: "Transport SB",
      divisionPath: "/transport",
      divisionSlug: "transport",
      categorySlug: "transport-materiel",
      divisionNumber: "Division 05",
      accentVar: "transport",
      items: [
        { name: "Nacelle", description: "Transport et livraison de nacelles élévatrices sur vos chantiers pour la réalisation de travaux en hauteur. Nos équipes s'occupent du chargement sécurisé et de la livraison sur site selon vos fenêtres horaires." },
        { name: "Équipements divers", description: "Transport d'équipements spéciaux, outils lourds et matériel de chantier selon vos exigences et délais. De la simple boîte à outils lourde au générateur industriel, nous adaptons notre véhicule au chargement requis." },
        { name: "Agrégats", description: "Transport de sable, gravier, pierre concassée et autres agrégats en vrac pour l'approvisionnement de vos projets. Livraison en vrac directement sur votre chantier selon les quantités commandées et les accès disponibles." },
      ],
    },
  },

  cafe: {
    "cafe-distribution": {
      categoryTitle: "Café",
      divisionName: "Café Marc Robitaille",
      divisionPath: "/cafe",
      divisionSlug: "cafe",
      categorySlug: "cafe-distribution",
      divisionNumber: "Division 06",
      accentVar: "cafe",
      items: [
        { name: "Café corsé", description: "Café de torréfaction corsée, sélectionné pour les amateurs d'espresso intense avec une belle rondeur et une persistance en bouche prononcée. Disponible en grains ou moulu, en formats adaptés à la distribution commerciale." },
        { name: "Café doux", description: "Blend doux et équilibré pour une tasse agréable en toute occasion, idéal pour une clientèle variée au quotidien. Sa douceur naturelle en fait le choix parfait pour les restaurants, cafétérias et bureaux souhaitant plaire à tous les palais." },
        { name: "Café décaféiné", description: "Café décaféiné de qualité qui conserve toute la saveur et le caractère d'un bon café, disponible en format commercial. Idéal pour compléter l'offre café et répondre aux besoins des clients sensibles à la caféine." },
        { name: "Distribution commerciale", description: "Distribution régulière et fiable de café en grains ou moulu pour restaurants, cafétérias et bureaux de la région du Saguenay–Lac-Saint-Jean. Nous assurons un approvisionnement constant avec livraison selon vos besoins et votre fréquence de consommation." },
      ],
    },
    "slush-puppie": {
      categoryTitle: "Slush Puppie",
      divisionName: "Café Marc Robitaille",
      divisionPath: "/cafe",
      divisionSlug: "cafe",
      categorySlug: "slush-puppie",
      divisionNumber: "Division 06",
      accentVar: "cafe",
      items: [
        { name: "Distribution Slush Puppie", description: "Distribution officielle des produits et concentrés Slush Puppie dans la région du Saguenay–Lac-Saint-Jean. Nous assurons un approvisionnement régulier en concentrés de toutes les saveurs populaires pour vos points de vente." },
        { name: "Machines commerciales", description: "Vente et location de machines à slush commerciales Slush Puppie pour points de vente au détail, dépanneurs et commerces. Nous vous aidons à choisir le modèle adapté à votre volume de ventes et à l'espace disponible." },
        { name: "Entretien et réparation", description: "Service complet d'entretien préventif et de réparation des machines à slush pour minimiser les temps d'arrêt. Notre technicien intervient rapidement en cas de panne pour assurer la continuité de votre service." },
        { name: "Support aux événements", description: "Fourniture d'équipement et de produits Slush Puppie pour événements, festivals, activités spéciales et levées de fonds. Nous livrons les machines et concentrés nécessaires et assurons un support technique sur place si requis." },
      ],
    },
    "service-entretien": {
      categoryTitle: "Service & Entretien",
      divisionName: "Café Marc Robitaille",
      divisionPath: "/cafe",
      divisionSlug: "cafe",
      categorySlug: "service-entretien",
      divisionNumber: "Division 06",
      accentVar: "cafe",
      items: [
        { name: "Installation de machines", description: "Installation professionnelle de machines à café et à slush selon les normes du fabricant, avec formation du personnel incluse. Nous veillons au branchement correct, au calibrage et aux premiers essais pour vous assurer un démarrage optimal." },
        { name: "Entretien préventif", description: "Programme d'entretien régulier planifié pour maintenir vos équipements en parfait état de fonctionnement tout au long de l'année. Nos visites périodiques comprennent nettoyage, ajustements et remplacement des pièces d'usure avant qu'elles ne causent de problèmes." },
        { name: "Réparation", description: "Service de réparation rapide et fiable pour minimiser les temps d'arrêt et assurer la continuité de vos opérations. Notre technicien diagnostique la panne et intervient avec les pièces nécessaires pour une remise en service rapide." },
        { name: "Financement participatif (levée de fonds)", description: "Programme de levée de fonds pour organisations, écoles et associations via la vente de produits Slush Puppie à leur clientèle. Nous fournissons l'équipement, les produits et le soutien nécessaire pour maximiser vos revenus de collecte." },
      ],
    },
  },
};

export function getCategoryData(division: string, category: string): CategoryData | null {
  return data[division]?.[category] ?? null;
}

export function getAllSlugs(division: string): string[] {
  return Object.keys(data[division] ?? {});
}
