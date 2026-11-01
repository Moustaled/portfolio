const heroImg = '/design/energy-system.svg';
const reseauIndustrielImg = '/design/network.svg';
const cablesElectriquesImg = '/design/cables.svg';
const stockageSolaireImg = '/design/storage.svg';
const auditBatimentImg = '/design/building.svg';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  domain: string;
  type: string;
  shortDescription: string;
  githubUrl: string;
  imageUrl: string;
  tools: string[];
  context: string;
  problem: string;
  methodology: string[];
  results: string[];
  learnings: string[];
  keyMetrics?: { label: string; value: string; note?: string }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  tasks: string[];
  tools: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  specialization?: string;
  courses: string[];
}

export const PROFILE_DATA = {
  name: "Moustapha Ibrahim Djama",
  title: "Élève-ingénieur en Systèmes Électriques",
  subtitle: "Production d'Énergie · Transport HTB · Distribution HTA/BT · Automatismes & Data",
  tagline: "Concevoir et modéliser les systèmes électriques de bout en bout : de la production d'énergie au transport très haute tension, jusqu'à la distribution et la valorisation des données.",
  school: "ECAM-EPMI (Cergy-Pontoise)",
  status: "Élève-ingénieur en systèmes électriques, production, transport & distribution",
  internshipGoal: "Recherche stage de fin d’études · 6 mois · Février 2027",
  internshipTarget:
    "Bureaux d’études électrotechniques, réseaux de transport & distribution (HTB/HTA/BT), centrales de production d'énergie et automatismes industriels",
  location: "Val-d’Oise (95) · Mobilité France",
  phone: "(+33) 7 45 31 88 16",
  email: "moustaphaibrahim206@gmail.com",
  github: "https://github.com/Moustaled",
  githubUsername: "Moustaled",
  linkedin: "https://www.linkedin.com/in/moustapha-ibrahim-djama",
  portfolioUrl: "https://ais-pre-6g6dor5lzinedrsj2glfbd-259780484912.europe-west2.run.app",
  vercelUrl: "https://vercel.com/moustaleddistallo-8831",
  heroImage: heroImg,
  languages: [
    { name: "Français", level: "Courant / Bilingue" },
    { name: "Anglais", level: "Niveau B2 (technique et professionnel)" },
    { name: "Arabe", level: "Intermédiaire" },
  ],
  interests: [
    "Systèmes électriques globaux (production, postes HTA/BT, transport et distribution)",
    "Automatismes industriels, régulation & supervision",
    "Programmation scientifique, algorithmique & calculs de dimensionnement",
    "Football",
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "calcul-reseau-electrique",
    slug: "calcul-reseau-electrique-industriel",
    title: "Calcul d’un réseau électrique industriel",
    category: "Génie électrique",
    domain: "Distribution Basse Tension",
    type: "Étude d'ingénierie & calcul d'installation",
    shortDescription:
      "Étude complète d'une distribution BT industrielle : bilan de puissances foisonnées, dimensionnement des canalisations, calculs de courts-circuits (Ik3, Ik1) et vérification du schéma unifilaire.",
    githubUrl: "https://github.com/Moustaled/calcul-reseau-electrique-industriel",
    imageUrl: reseauIndustrielImg,
    tools: ["Caneco BT", "AutoCAD / AutoCAD Electrical", "Excel"],
    context:
      "Dans une installation industrielle de production, la distribution électrique doit garantir à la fois la continuité de service des procédés, la protection des personnes contre les contacts indirects et la sauvegarde du matériel face aux contraintes thermiques et électrodynamiques.",
    problem:
      "Comment structurer l'architecture BT d'un atelier à partir de charges hétérogènes (moteurs asynchrones, éclairage, auxiliaires), déterminer les calibres des disjoncteurs et vérifier la sélectivité amont-aval tout en maîtrisant les chutes de tension en régime établi et au démarrage des moteurs ?",
    methodology: [
      "Inventaire détaillé des charges réceptrices et détermination des puissances actives (P en kW) et réactives (Q en kvar).",
      "Application méthodique des coefficients d'utilisation (Ku) et de foisonnement (Ks) pour établir la puissance d'emploi globale du TGBT.",
      "Calcul des courants d'emploi assignés Ib par départ selon la formule triphasée Ib = S / (√3 × Un).",
      "Calcul des impédances de boucle (amont réseau HTA, transformateur 20 kV / 400 V, câbles de liaison) selon les règles de la NF C 15-105.",
      "Évaluation du courant de court-circuit triphasé maximal (Ik3 max) au TGBT pour dimensionner le pouvoir de coupure (Pdc) des disjoncteurs de tête.",
      "Évaluation du courant de court-circuit monophasé minimal (Ik1 min) en extrémité des câbles les plus longs pour s'assurer du déclenchement instantané des protections en schéma de liaison à la terre TN / TT.",
      "Vérification des chutes de tension cumulées (ΔU ≤ 3% éclairage, ΔU ≤ 5% force motrice).",
      "Conception et cotation du schéma unifilaire général de distribution.",
    ],
    results: [
      "Dimensionnement validé pour une installation alimentée par transformateur 630 kVA (Ucc = 4%).",
      "Courant de court-circuit franc présumé calculé à ~22,7 kA au jeu de barres principal : choix d'appareillage avec pouvoir de coupure calibré (36 kA et 50 kA).",
      "Vérification de la sélectivité chronométrique et ampèremétrique entre le disjoncteur général et les départs divisions moteurs.",
      "Chutes de tension maintenues strictement inférieures aux seuils normatifs (3,2% max au terminal moteur le plus défavorisé).",
    ],
    learnings: [
      "Maîtrise de la méthode des impédances complexes (R, X) pour le calcul rigoureux des réseaux BT industriels.",
      "Compréhension approfondie du rôle des régimes de neutre et de la coordination câble / disjoncteur.",
      "Capacité à concevoir, lire et vérifier un schéma unifilaire complet sous AutoCAD Electrical et Caneco BT.",
    ],
    keyMetrics: [
      { label: "Tension réseau", value: "400 V triphasé" },
      { label: "Transfo étudié", value: "630 kVA (20 kV/400 V)" },
      { label: "Ik3 max TGBT", value: "~22,7 kA" },
      { label: "Chute de tension", value: "≤ 3,2 % (conforme)" },
    ],
  },
  {
    id: "dimensionnement-cables-bt",
    slug: "dimensionnement-cables-electriques-bt",
    title: "Dimensionnement de câbles électriques BT",
    category: "Génie électrique",
    domain: "Normes & Dimensionnement (NF C 15-100)",
    type: "Méthodologie & Automatisation de calcul",
    shortDescription:
      "Méthodologie rigoureuse de calcul de section de câbles selon la norme NF C 15-100 : facteurs de correction, courant admissible Iz, chute de tension admissible et tenue thermique au court-circuit.",
    githubUrl: "https://github.com/Moustaled/dimensionnement-cables-electriques-bt",
    imageUrl: cablesElectriquesImg,
    tools: ["Python", "Excel", "Caneco BT"],
    context:
      "Le dimensionnement d'un câble ne se résume pas à son courant d'emploi. Un câble sous-dimensionné risque la surchauffe destructrice et l'incendie, tandis qu'un câble surdimensionné entraîne des surcoûts matériels et des difficultés mécaniques de pose.",
    problem:
      "Comment déterminer de façon exacte et reproductible la section minimale normalisée (en mm²) d'une canalisation électrique en conciliant contrainte thermique permanente, facteurs de correction environnementaux, chute de tension admissible et contrainte thermique de court-circuit ?",
    methodology: [
      "Calcul du courant d'emploi Ib à partir des caractéristiques de la charge (puissance nominale, cos φ, rendement η).",
      "Sélection du calibre nominal de la protection In assurant la condition fondamentale Ib ≤ In ≤ Iz.",
      "Identification des conditions d'installation et application des facteurs d'influence : k1 (mode de pose selon tableaux NF C 15-100), k2 (température ambiante), k3 (groupement de câbles jointifs sur chemins de câbles).",
      "Calcul du facteur global k = k1 × k2 × k3 et du courant admissible requis Iz' = In / k.",
      "Sélection de la section minimale normalisée correspondante dans les tables de référence (cuivre ou aluminium, isolant PVC à 70°C ou PR/XLPE à 90°C).",
      "Vérification de la chute de tension en ligne : ΔU = b × (ρ1 × (L/S) × cos φ + λ × L × sin φ) × Ib avec comparaison au seuil imposé.",
      "Augmentation itérative de la section si la chute de tension dépasse la limite admissible (par exemple 3% ou 5%).",
      "Vérification finale de la contrainte thermique au court-circuit : S ≥ √(Ik² × t) / k_matériau.",
    ],
    results: [
      "Script d'automatisation validé sur un panel complet de départs réels (de 1,5 mm² à 240 mm²).",
      "Mise en évidence quantitative de la bascule de contrainte : pour les liaisons de faible longueur (< 25 m), le critère thermique permanent (Iz) est dominant ; au-delà de 60-80 m, le critère de chute de tension (ΔU) devient quasi-systématiquement prépondérant.",
      "Comparaison technico-économique documentée entre conducteurs Cuivre et Aluminium pour les fortes sections.",
    ],
    learnings: [
      "Assimilation complète des mécanismes normatifs de la NF C 15-100 et du guide UTE C 15-105.",
      "Capacité à traduire une norme technique en algorithme de calcul automatisé, transparent et sans faille.",
      "Sensibilité concrète aux coûts d'installation et aux choix technologiques de conducteurs.",
    ],
    keyMetrics: [
      { label: "Norme appliquée", value: "NF C 15-100" },
      { label: "Isolants traités", value: "PVC (70°C) & XLPE (90°C)" },
      { label: "Âmes analysées", value: "Cuivre (Cu) & Aluminium (Al)" },
      { label: "Plage de sections", value: "1,5 mm² à 240 mm²" },
    ],
  },
  {
    id: "simulation-stockage-energie",
    slug: "simulation-stockage-energie-renouvelable",
    title: "Simulation stockage & production d'énergie hybride",
    category: "Production & Systèmes",
    domain: "Microgrid & Systèmes hybrides PV / Batterie / Diesel",
    type: "Modélisation & Analyse de données énergétiques",
    shortDescription:
      "Modélisation et simulation du profil de production énergétique et du stockage par batterie pour un système hybride : arbitrage des flux, réduction du carburant fossile et des émissions de CO₂.",
    githubUrl: "https://github.com/Moustaled/simulation-stockage-energie-renouvelable",
    imageUrl: stockageSolaireImg,
    tools: ["Python", "PVsyst", "Power BI", "MATLAB / Simulink"],
    context:
      "L'hybridation des sources de production (groupes thermiques, production solaire/éolienne et batteries) permet de sécuriser l'alimentation électrique des sites isolés ou industriels tout en optimisant le coût du kWh et l'empreinte carbone.",
    problem:
      "Comment équilibrer heure par heure et jour par jour l'offre de production locale, la capacité de stockage d'une batterie et l'appoint d'un groupe électrogène afin d'assurer 100% de la demande électrique d'un site en minimisant la consommation de carburant et les cycles prématurés de la batterie ?",
    methodology: [
      "Extraction et traitement de séries temporelles de production et d'irradiation horaire.",
      "Calcul de la production : intégration des rendements onduleurs, pertes thermiques et courbes caractéristiques.",
      "Définition du déficit énergétique à chaque pas de temps : E_déficit = E_charge - E_production.",
      "Modélisation de l'état de charge de la batterie (SOC) avec contrainte de seuil minimal (SOC_min) pour éviter la décharge profonde destructrice.",
      "Arbitrage prioritaire strict : Production directe → Recharge batterie si surplus → Décharge batterie si déficit → Appoint thermique/diesel.",
      "Calcul de la consommation de carburant résiduelle et des émissions de CO₂ évitées.",
      "Consolidation des résultats dans un tableau de bord Power BI analytique.",
    ],
    results: [
      "Simulation annuelle complète montrant une couverture énergétique substantielle de la charge étudiée.",
      "Réduction drastique du nombre d'heures de fonctionnement du générateur thermique en période de production favorable.",
      "Identification claire des saisons critiques nécessitant un pilotage fin ou un appoint thermique contrôlé.",
      "Définition des limites du modèle (absence actuelle de vieillissement de cellule SOH et logique déterministe à base de règles plutôt qu'optimisation prédictive).",
    ],
    learnings: [
      "Modélisation algorithmique de bilans de puissance pas-à-pas pour les centrales et micro-réseaux hybrides.",
      "Traitement de gros volumes de données énergétiques avec Python et Power BI.",
      "Compréhension des compromis technico-économiques du stockage par batterie stationnaire.",
    ],
    keyMetrics: [
      { label: "Outil analytique", value: "Power BI & Python" },
      { label: "Priorité des flux", value: "PV → Batterie → Diesel" },
      { label: "Granularité", value: "Simulation temporelle journalière" },
      { label: "Analyse", value: "Bilan énergétique, CO₂ & Coûts" },
    ],
  },
  {
    id: "audit-energetique-batiment",
    slug: "Audit-energetique-batiment",
    title: "Audit énergétique d’un bâtiment",
    category: "Performance Énergétique",
    domain: "Audit des Usages & Efficacité Énergétique",
    type: "Analyse méthodique & Scénarios d'amélioration",
    shortDescription:
      "Analyse globale des consommations d'un bâtiment, répartition par postes (chauffage, éclairage, ventilation, auxiliaires), ratios d'intensité énergétique (kWh/m².an) et chiffrage de scénarios d'efficacité.",
    githubUrl: "https://github.com/Moustaled/Audit-energetique-batiment",
    imageUrl: auditBatimentImg,
    tools: ["Excel", "DIALux evo", "Power BI", "Revit MEP"],
    context:
      "Face à la hausse continue des coûts de l'énergie et aux exigences de décarbonation du parc bâti, l'audit énergétique est l'outil indispensable pour objectiver les gisements d'économies d'énergie et prioriser les investissements.",
    problem:
      "Comment décomposer la consommation globale d'un bâtiment en postes élémentaires à partir de relevés et de données d'exploitation, détecter les dérives de consommation et chiffrer des scénarios d'amélioration technico-économiquement viables ?",
    methodology: [
      "Collecte et consolidation des historiques de consommations (factures, index de comptage, surfaces utiles, horaires d'occupation).",
      "Établissement du bilan des puissances installées par équipement et estimation des heures équivalentes à pleine charge.",
      "Répartition de la consommation par usage : Chauffage / CVC, Ventilation, Éclairage, Bureautique et Auxiliaires.",
      "Calcul des indicateurs clés de performance énergétique (IPÉ) : ratio en kWh/m²·an et comparaison avec les étalons sectoriels.",
      "Modélisation de l'éclairage sous DIALux evo pour optimiser les apports lumineux et réduire la puissance surfacique.",
      "Élaboration de trois niveaux d'actions : écogestes à coût nul, actions d'efficacité à faible investissement (LED asservies, programmation d'intermittence), travaux d'enveloppe.",
      "Calcul des gains énergétiques prévisionnels, estimation des coûts d'investissement et calcul du temps de retour brut (TRI).",
    ],
    results: [
      "Mise en évidence d'une prépondérance du poste thermique/CVC (> 50% de la consommation totale).",
      "Détection d'un talon de consommation résiduel en période inoccupée représentant près de 18% de la facture.",
      "Chiffrage d'un plan d'actions combiné permettant de viser 25% à 35% d'économies d'énergie globales avec un temps de retour brut moyen inférieur à 4 ans sur les lots d'automatisme et d'éclairage.",
    ],
    learnings: [
      "Rigueur dans la ventilation des consommations multivecteurs (électricité et thermique).",
      "Maîtrise du dimensionnement d'éclairage performant avec DIALux evo.",
      "Évaluation technico-économique concrète orientée retour sur investissement et décision client.",
    ],
    keyMetrics: [
      { label: "Poste dominant", value: "Chauffage & CVC (> 50%)" },
      { label: "Talon inoccupé", value: "~18% de consommation de base" },
      { label: "Potentiel d'économie", value: "25% à 35% d'énergie" },
      { label: "Temps de retour", value: "< 4 ans sur actions prioritaires" },
    ],
  },
];

export const EXPERIENCE_DATA: Experience = {
  role: "Stagiaire en analyse de données énergétiques",
  company: "EDD (Électricité de Djibouti)",
  period: "Nov. 2025 – Fév. 2026",
  location: "Mission professionnelle en entreprise",
  description:
    "Première expérience professionnelle appliquée au cœur de l'analyse et du traitement de données de production et de distribution énergétique.",
  tasks: [
    "Analysé sous Python des jeux de données de production d'énergie afin d’identifier les tendances saisonnières et les écarts de performance.",
    "Automatisé le nettoyage, le formatage et la consolidation de données de comptage à l’aide de scripts Python et de requêtes SQL, auparavant traitées manuellement sous Excel.",
    "Créé des indicateurs de suivi prévision / réalisé et des tableaux de synthèse hebdomadaires dans Power BI directement utilisés lors des points d’équipe opérationnels.",
    "Analysé les écarts de production et corrélé les anomalies aux conditions d'exploitation, facteurs météorologiques ainsi qu'aux indisponibilités techniques des installations.",
    "Rédigé une note de synthèse technique présentant les résultats consolidés et les principaux constats d'exploitation.",
  ],
  tools: ["Python", "Power BI", "SQL", "Excel", "Tableaux croisés dynamiques"],
};

export const SKILL_GROUPS = [
  {
    category: "Ingénierie Électrique & Réseaux",
    summary: "Conception, calcul, protection et schéma de distribution HTA/BT",
    skills: [
      { name: "Réseaux électriques HTA & BT", detail: "Distribution, bilans de puissance, schémas unifilaires" },
      { name: "Dimensionnement de canalisations", detail: "Courant admissible Iz, chute de tension ΔU, contrainte thermique" },
      { name: "Calculs de court-circuit", detail: "Courants Ik3 max, Ik1 min, pouvoirs de coupure selon IEC 60909" },
      { name: "Protections & Sélectivité", detail: "Coordination disjoncteurs, régimes de neutre (TT, TN, IT)" },
      { name: "Machines électriques", detail: "Moteurs asynchrones, alternateurs, transformateurs" },
      { name: "Postes de transformation HTA/BT", detail: "Couplages, impédances de court-circuit, cellules de protection" },
    ],
  },
  {
    category: "Production d'Énergie & Systèmes",
    summary: "Production globale d'électricité, mix énergétique, stockage et efficacité",
    skills: [
      { name: "Production d'électricité", detail: "Centrales thermiques, groupes de secours, solaire, éolien, mix électrique" },
      { name: "Systèmes hybrides & Microgrids", detail: "Couplage multi-sources, arbitrage de flux de puissance" },
      { name: "Stockage d’énergie", detail: "Batteries stationnaires Li-ion, gestion de l'état de charge (SOC)" },
      { name: "Audit énergétique", detail: "Bilan des usages, décomposition par postes, méthodologie ISO 50001" },
      { name: "Efficacité énergétique", detail: "Scénarios d'amélioration, calcul du temps de retour brut (TRI)" },
      { name: "Éclairage tertiaire", detail: "Études photométriques et dimensionnement sous DIALux evo" },
    ],
  },
  {
    category: "Automatismes & Data Science",
    summary: "Supervision industrielle, automatisation de calculs et tableaux de bord",
    skills: [
      { name: "Automatismes industriels", detail: "Automates programmables, logique séquentielle sous TIA Portal" },
      { name: "Python", detail: "Programmation scientifique, modélisation physique et scripts d'automatisation" },
      { name: "Power BI & Tableaux de bord", detail: "Visualisation de données énergétiques, KPI et suivi de production" },
      { name: "Excel avancé", detail: "Tableaux croisés dynamiques, formules complexes, modélisation de bilans" },
      { name: "Bases de données SQL", detail: "Requêtage, jointures et extraction de données de comptage" },
      { name: "Modélisation numérique", detail: "Simulation sous MATLAB / Simulink et PVsyst" },
    ],
  },
];

/**
 * EXACT 10 SOFTWARE TOOLS REQUESTED BY USER:
 * 1. Caneco BT
 * 2. AutoCAD / AutoCAD Electrical
 * 3. Excel
 * 4. DIALux evo
 * 5. PVsyst
 * 6. Power BI
 * 7. Python
 * 8. Revit MEP
 * 9. TIA Portal
 * 10. MATLAB / Simulink
 */
export const TECHNICAL_SOFTWARE = [
  { name: "Caneco BT", category: "Génie électrique", desc: "Calculs normatifs et dimensionnement BT" },
  { name: "AutoCAD / AutoCAD Electrical", category: "DAO / Schémas", desc: "Schémas unifilaires et plans de distribution" },
  { name: "Excel", category: "Calculs & Bilans", desc: "Bilans de puissances et tableaux croisés" },
  { name: "DIALux evo", category: "Éclairagisme", desc: "Conception et études photométriques d'éclairage" },
  { name: "PVsyst", category: "Solaire & PV", desc: "Dimensionnement et simulation de systèmes photovoltaïques" },
  { name: "Power BI", category: "Business Intelligence", desc: "Tableaux de bord dynamiques et KPI de production" },
  { name: "Python", category: "Programmation", desc: "Modélisation numérique, calculs scientifiques et automatisation" },
  { name: "Revit MEP", category: "BIM / Électricité", desc: "Modélisation 3D des réseaux électriques dans le bâtiment" },
  { name: "TIA Portal", category: "Automatisme", desc: "Programmation d'automates Siemens et supervision" },
  { name: "MATLAB / Simulink", category: "Simulation", desc: "Modélisation de systèmes dynamiques et électrotechnique" },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Diplôme d’ingénieur (en préparation)",
    school: "ECAM-EPMI",
    location: "Cergy-Pontoise, France",
    period: "2024 – 2027",
    specialization: "Spécialisation : Génie électrique, énergie & automatisation",
    courses: [
      "Électrotechnique & réseaux électriques (HTA/BT)",
      "Production, conversion et transport de l'énergie",
      "Électronique de puissance & variateurs",
      "Machines électriques & alternateurs",
      "Automatique industrielle & TIA Portal",
      "Informatique industrielle & supervision",
      "Traitement du signal & probabilités",
      "Gestion de projet d'ingénierie",
    ],
  },
  {
    degree: "Classes Préparatoires aux Grandes Écoles (CPGE)",
    school: "École d’Excellence",
    location: "Djibouti",
    period: "2022 – 2024",
    specialization: "Filière MP (Mathématiques - Physique), option Informatique",
    courses: [
      "Mathématiques approfondies (analyse, algèbre linéaire, probabilités)",
      "Physique générale (électromagnétisme, thermodynamique, mécanique, optique)",
      "Algorithmique & structures de données",
      "Programmation impérative et scientifique",
    ],
  },
];

