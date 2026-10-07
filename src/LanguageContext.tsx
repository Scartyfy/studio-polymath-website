import React, { createContext, useContext, useState } from 'react';

type Language = 'EN' | 'FR';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    'nav.home': 'Home',
    'nav.manifest': 'Manifesto',
    'nav.team': 'Team',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.tag1': 'Human-Machine Interaction',
    'hero.tag2': 'Sustainable Interactive Systems',
    'hero.tag3': 'Global Design',
    'manifest.scroll': 'TRANSLATING MACHINE LANGUAGE INTO HUMAN EXPERIENCES. SHAPED BY ROBOTIC ENGINEERING AND GLOBAL DESIGN. DESIGNED AND BUILT IN FRANCE.',
    'home.timeline1.subtitle': 'Studio',
    'home.timeline1.title': 'Who are we?',
    'home.timeline1.desc': 'Our studio brings together robotics engineers, advanced materials experts and passionate industrial designers. We unite mathematical precision with the fluidity of gesture.',
    'home.timeline1.link': 'Read more',
    'home.timeline2.subtitle': 'The Vision',
    'home.timeline2.title': 'Manifesto',
    'home.timeline2.desc': 'Contemporary robotics must no longer be satisfied with simple mechanical execution. At polymath, we design our creations as true cognitive partners.',
    'home.timeline2.link': 'Read more',
    'home.timeline3.subtitle': 'R&D',
    'home.timeline3.title': 'Projects',
    'home.timeline3.desc': 'As an engineering and design studio, we develop multiple innovative projects. Our current flagship project is The First European Autonomous Quadruped Patrol Robot.',
    'home.timeline3.link': 'Read more',
    'home.timeline4.subtitle': 'Network',
    'home.timeline4.title': 'Contact',
    'home.timeline4.desc': 'Initiate the dialogue. Send us your requests or projects, our team will study each proposal carefully.',
    'home.timeline4.link': 'Read more',
    'quote.text': '« I did not know I was dreaming. It was human vocabulary that taught me. »',
    'quote.author': '— Isaac Asimov, Robot Dreams',
    'footer.home': 'Home',
    'footer.manifest': 'Manifesto',
    'footer.team': 'Team',
    'footer.projects': 'Projects',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal Mentions & Copyrights',
    'footer.rights': '© 2026 Polymath Studio. All rights reserved.',
    'page.projects.title': 'Current Project',
    'projects.badge': 'Ongoing Project // 2026-2029',
    'projects.scroll.discover': 'Scroll to explore the robot',
    'projects.main.title': 'The First European Autonomous Quadruped Patrol Robot',
    'projects.intro.p1': "At Polymath Studio, we are redefining large campus security with the first European patrol robot. Designed to navigate across dozens of hectares, this autonomous quadruped monitors outdoor perimeters, negotiates obstacles, and covers blind spots out of reach for stationary cameras. Our solution tackles the critical challenge of nighttime and weekend rounds by providing a reassuring, unarmed, and non-threatening presence.",
    'projects.intro.p2': "Our strength lies in the end-to-end mastery of system architecture and design, ensuring strong European sovereignty through the integration of trusted European sensors and full VMS compatibility. This engineering rigor is spearheaded by our team of four engineer-designers.",
    'projects.night.badge': 'Primary Use Case // Autonomous Night Patrol',
    'projects.night.caption': 'Autonomous nighttime monitoring and all-terrain navigation across real campus grounds. Integrated high-sensitivity optical and thermal sensing.',
    'projects.night.placeholder': 'Visual slot: Night patrol photo of the robot on campus',
    'projects.gallery.img1': '01 // Sovereign Quadruped Architecture & European Sensor Fusion',
    'projects.gallery.img2': '02 // Autonomous Night Patrol & All-Terrain Navigation',
    'projects.gallery.img3': '03 // Non-Threatening Campus Presence & Ethical Footprint',
    'projects.gallery.video': '04 // Dynamic Locomotion & Gait Analysis (Video Telemetry)',
    'projects.scale.title': 'Scale & Ergonomics: Non-Threatening Footprint',
    'projects.scale.desc': 'Engineered with a standing height of 0.50 m against a 1.80 m human silhouette, the quadruped features a low, unintimidating profile, removing anxiety for students and staff during nocturnal patrols.',
    'projects.scale.robot': 'Polymath Quadruped (0.50 m)',
    'projects.scale.human': 'Human Silhouette (1.80 m)',
    'projects.scale.ratio': 'Scale ratio 1:3.6 — Compact unarmed silhouette',
    'projects.scale.placeholder': 'Technical dimensioning blueprint (0.50 m vs 1.80 m)',
    'projects.jo.title': 'R&D Foundations: Quadruped Robotics Research (Calgary)',
    'projects.jo.desc': "The development of quadruped locomotion, real-time embedded systems, and the ROS ecosystem is directly led by our CTO, Joschka Mayer. It is built upon his extensive laboratory research and experiments conducted at the University of Calgary with quadruped platforms, ensuring proven dynamic stability and complete in-house software sovereignty. He has also previously engineered a quadruped robot from scratch.",
    'projects.jo.caption': 'Experimental quadruped platform — Mobile robotics and dynamic locomotion research conducted by Joschka Mayer in Calgary.',
    'projects.jo.extra': 'Documentation & additional archive gallery (Joschka R&D)',
    'projects.pillar1.title': 'All-Terrain Autonomy',
    'projects.pillar1.desc': 'High operational endurance ensuring continuous autonomous patrols across vast hectares, step negotiation, and comprehensive coverage of blind spots.',
    'projects.pillar2.title': 'VMS Compatibility',
    'projects.pillar2.desc': 'Certified European sensors and seamless compatibility with existing site VMS systems.',
    'projects.pillar3.title': 'Ethical Design & HRI',
    'projects.pillar3.desc': 'Low 50 cm stature, non-threatening aesthetics, and natural behavior designed for peaceful human coexistence.',
    'projects.pillar4.title': 'On-Site Serviceability',
    'projects.pillar4.desc': 'Built to endure with modular hardware, local repairability, and zero reliance on closed foreign dependencies.',
    'projects.cta.badge': 'Seeking Funding & Partnerships',
    'projects.cta.title': 'Deploy this solution on your campus?',
    'projects.cta.desc': 'We are currently seeking funding to accelerate the development and industrialization of the robot. We partner with universities, research campuses, and corporate facilities to deploy autonomous patrol pilots.',
    'projects.cta.button': 'Connect with our engineering team',
    'page.manifest.title': 'Manifesto',
    'page.manifest.subtitle': 'Vision & Principles',
    'manifest.p1': "In a world of constant development dominated by overproduction, particularly in the fields of robotics and artificial intelligence, the world needs a technological pivot.",
    'manifest.p2': "Polymath is this pivot. Inspired by the greatest inventors who, in their era, already merged design and engineering, Polymath is an engineer-designer development studio addressing tomorrow's profound transformations, as well as refining current processes.",
    'manifest.p3': "The solution has been right before our eyes from the beginning: nature. Not merely nature as casual inspiration or a design motif, but nature as our focal point, as the true direction of technological evolution. Nature must no longer be seen as an afterthought at the end of the production chain, but as a purpose, an instrument, and an ally.",
    'manifest.p4': "This vision does not necessarily oppose progress or even profit; it opposes consumerism. Because that is where the danger lies: a world of aimless creation devoid of real purpose. Of course, purpose is not linear: it must be seen as something that evolves or belongs to the future, at horizons we may not yet fully grasp.",
    'manifest.p5': "It is imperative to transform the economic model behind emerging technologies, because planned obsolescence is unsustainable in the medium and long term. We must recognize that recyclable materials are not necessarily recycled, and that modular, evolutive hardware designs—conceived for the future and adaptable across short and medium horizons—are far more relevant.",
    'manifest.p6': "As for implementing this paradigm within robotics, it is profoundly timely: the market is expanding but not yet saturated; there is still time to establish truly sustainable practices.",
    'page.team.title': 'Team',
    'page.team.subtitle': 'Founders',
    'team.summary': 'We are a collective of engineers and designers passionate about creating sustainable interfaces. Our approach combines absolute technical rigor with human-centered design to shape interactive experiences that make sense.',
    'team.role1': 'Co-Founder',
    'team.role2': 'Design Lead',
    'team.role3': 'Lead Engineer',
    'team.role4': 'Software Engineer',

    // Alec
    'team.alec.role': 'Chief Architect / Co-founder',
    'team.alec.bio': "I design the backbone of projects and ensure it stands strong, from concept to delivery.",
    'team.alec.skill1.title': 'Systems Architecture',
    'team.alec.skill1.desc': 'thinking of the solution as a coherent whole, breaking the problem into articulated subsystems.',
    'team.alec.skill2.title': 'Design Systems',
    'team.alec.skill2.desc': 'defining and maintaining a consistent design language (visual and functional).',
    'team.alec.skill3.title': 'Applied Mathematics',
    'team.alec.skill3.desc': 'leveraging mathematics to solve concrete technical challenges.',
    'team.alec.skill4.title': 'Technical Feasibility',
    'team.alec.skill4.desc': 'evaluating how to turn an idea into reality and whether it is viable — bridging vision and execution.',

    // Arthur
    'team.arthur.role': 'Chief Design Officer / Co-founder',
    'team.arthur.bio': "I keep the focus on humans and ensure meaning in everything built.",
    'team.arthur.skill1.title': 'Human-Robot Interaction',
    'team.arthur.skill1.desc': 'designing the relationship between human and machine.',
    'team.arthur.skill2.title': 'Ethics & Impact',
    'team.arthur.skill2.desc': 'questioning the human and social impact of solutions.',
    'team.arthur.skill3.title': 'User Research',
    'team.arthur.skill3.desc': 'grounding projects in real-world usage and needs.',
    'team.arthur.skill4.title': 'UX/UI',
    'team.arthur.skill4.desc': 'designing clear, usable, and desirable interfaces.',

    // Alann
    'team.alann.role': 'CEO / Co-founder',
    'team.alann.bio': "I drive the studio's vision and strategy, and engineer the physical hardware that makes ideas tangible.",
    'team.alann.skill1.title': 'Product Vision / Strategy',
    'team.alann.skill1.desc': 'defining the what and why — strategic choices and roadmap decisions.',
    'team.alann.skill2.title': 'Mechanical Engineering',
    'team.alann.skill2.desc': 'designing and sizing the mechanical and physical structure of devices.',
    'team.alann.skill3.title': 'Design Integration',
    'team.alann.skill3.desc': 'integrating mechanical engineering into overall design coherence.',
    'team.alann.skill4.title': 'Fundraising & Partnerships',
    'team.alann.skill4.desc': 'gathering funding and building strategic alliances that bring projects to life.',

    // Joschka
    'team.joschka.role': 'CTO / Co-founder',
    'team.joschka.bio': "I lead technical execution and breathe life into hardware, from circuitry to environmental perception.",
    'team.joschka.skill1.title': 'Electronics',
    'team.joschka.skill1.desc': 'designing and implementing electrical circuits and power systems.',
    'team.joschka.skill2.title': 'Embedded Systems',
    'team.joschka.skill2.desc': 'programming resource-constrained hardware (microcontrollers, real-time).',
    'team.joschka.skill3.title': 'Computer Vision',
    'team.joschka.skill3.desc': 'enabling machines to perceive and interpret their surroundings.',
    'team.joschka.skill4.title': 'ROS Architecture',
    'team.joschka.skill4.desc': 'structuring robotic software so sensors, computation, and motion communicate seamlessly from end to end.',
    'page.contact.title': 'Contact',
    'page.contact.subtitle': 'Network',
    'form.name': 'Full name',
    'form.email': 'Email',
    'form.subject': 'Subject',
    'form.message': 'Message',
    'form.submit': 'Transmit',
    'form.sending': 'Transmitting...',
    'form.success.title': 'Transmission confirmed',
    'form.success.desc': 'Your message has been transmitted to Polymath Studio.',
    'form.success.again': 'Send another message',
    'form.error.desc': 'An error occurred during transmission. Please write to us directly at:',
    'form.required': 'Please enter a message.',
    'contact.direct': 'Direct email'
  },
  FR: {
    'nav.home': 'Accueil',
    'nav.manifest': 'Manifeste',
    'nav.team': 'Équipe',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'hero.tag1': 'Interaction Homme-Machine',
    'hero.tag2': 'Systèmes Interactifs Durables',
    'hero.tag3': 'Design Global',
    'manifest.scroll': 'TRADUIRE LE LANGAGE MACHINE EN EXPÉRIENCES HUMAINES. FAÇONNÉ PAR L\'INGÉNIERIE ROBOTIQUE ET LE DESIGN GLOBAL. CONÇU ET ASSEMBLÉ EN FRANCE.',
    'home.timeline1.subtitle': 'Studio',
    'home.timeline1.title': 'Qui sommes-nous ?',
    'home.timeline1.desc': 'Notre studio rassemble des ingénieurs en robotique, des experts en matériaux avancés et des designers industriels passionnés. Nous unissons la précision mathématique à la fluidité du geste.',
    'home.timeline1.link': 'En savoir plus',
    'home.timeline2.subtitle': 'L\'Intention',
    'home.timeline2.title': 'Manifeste',
    'home.timeline2.desc': 'La robotique contemporaine ne doit plus se satisfaire de la simple exécution mécanique. Chez polymath, nous concevons nos créations comme de véritables partenaires cognitifs.',
    'home.timeline2.link': 'En savoir plus',
    'home.timeline3.subtitle': 'R&D',
    'home.timeline3.title': 'Projets',
    'home.timeline3.desc': 'En tant que studio de design et d\'ingénierie, nous développons plusieurs projets innovants. Notre projet actuel est The First European Autonomous Quadruped Patrol Robot.',
    'home.timeline3.link': 'En savoir plus',
    'home.timeline4.subtitle': 'Réseau',
    'home.timeline4.title': 'Contact',
    'home.timeline4.desc': 'Initiez le dialogue. Transmettez-nous vos requêtes ou vos projets, notre équipe étudiera chaque proposition avec attention.',
    'home.timeline4.link': 'En savoir plus',
    'quote.text': '« Je ne savais pas que je rêvais. C\'est le vocabulaire humain qui me l\'a appris. »',
    'quote.author': '— Isaac Asimov, Le Robot qui rêvait',
    'footer.home': 'Accueil',
    'footer.manifest': 'Manifeste',
    'footer.team': 'Équipe',
    'footer.projects': 'Projets',
    'footer.contact': 'Contact',
    'footer.legal': 'Mentions légales & Copyrights',
    'footer.rights': '© 2026 Polymath Studio. Tous droits réservés.',
    'page.projects.title': 'Projet en cours',
    'projects.badge': 'Projet en cours // 2026-2029',
    'projects.scroll.discover': 'Défiler pour découvrir le robot',
    'projects.main.title': 'Le premier robot quadrupède de patrouille européen',
    'projects.intro.p1': "Chez Polymath Studio, nous redéfinissons la sécurité des grands campus avec le premier robot de patrouille européen. Conçu pour évoluer sur des dizaines d'hectares, ce quadrupède autonome surveille les extérieurs, franchit les obstacles et couvre les angles morts inaccessibles aux caméras fixes. Notre solution répond au défi majeur des rondes de nuit et du week-end en offrant une présence sécurisante, non armée et non anxiogène.",
    'projects.intro.p2': "Notre force réside dans la maîtrise totale de l'architecture système et du design, garantissant une souveraineté européenne forte grâce à l'intégration de capteurs de confiance et une parfaite compatibilité VMS. Cette exigence technique est portée par notre équipe de quatre ingénieurs-designers.",
    'projects.night.badge': 'Cas d\'usage principal // Ronde de nuit automatisée',
    'projects.night.caption': 'Surveillance nocturne autonome et franchissement tout-terrain en milieu universitaire réel. Intégration capteurs optiques et thermiques haute sensibilité.',
    'projects.night.placeholder': 'Emplacement visuel : Image nocturne du robot sur le campus',
    'projects.gallery.img1': '01 // Architecture Quadrupède Souveraine & Intégration Capteurs',
    'projects.gallery.img2': '02 // Ronde Nocturne Autonome & Franchissement Tout-Terrain',
    'projects.gallery.img3': '03 // Présence Sécurisante & Insertion Campus Bienveillante',
    'projects.gallery.video': '04 // Analyse Dynamique de Locomotion (Démonstration Vidéo)',
    'projects.scale.title': 'Dimensionnement & Ergonomie : Présence non anxiogène',
    'projects.scale.desc': 'Conçu à une hauteur de 0,50 m au garrot face à une silhouette humaine de 1,80 m, le quadrupède présente une posture basse et inoffensive, éliminant tout sentiment d\'anxiété chez les étudiants et le personnel.',
    'projects.scale.robot': 'Quadrupède Polymath (0,50 m)',
    'projects.scale.human': 'Silhouette Humaine (1,80 m)',
    'projects.scale.ratio': 'Rapport d\'échelle 1:3.6 — Profil compact non armé',
    'projects.scale.placeholder': 'Schéma de dimensionnement technique (0,50 m face à 1,80 m)',
    'projects.jo.title': 'Fondations R&D : Travaux de recherche sur quadrupèdes (Calgary)',
    'projects.jo.desc': "Le développement de la locomotion, des systèmes embarqués temps réel et de l'environnement ROS est directement piloté par notre CTO, Joschka Mayer. Il s'appuie sur son expertise et ses expérimentations de laboratoire menées à l'Université de Calgary sur des plateformes quadrupèdes, garantissant une stabilité dynamique éprouvée et une maîtrise complète de la chaîne logicielle. Il a également déjà créé de A à Z son propre robot quadrupède.",
    'projects.jo.caption': 'Plateforme expérimentale quadrupède — Travaux de recherche en locomotion et robotique mobile menés par Joschka Mayer à Calgary.',
    'projects.jo.extra': 'Espace documentation & visuels complémentaires (R&D Joschka)',
    'projects.pillar1.title': 'Autonomie & Tout-terrain',
    'projects.pillar1.desc': 'Autonomie opérationnelle supérieure garantissant des patrouilles continues sur des dizaines d\'hectares, franchissement tout-terrain de dénivelés et couverture exhaustive des angles morts.',
    'projects.pillar2.title': 'Compatibilité VMS',
    'projects.pillar2.desc': 'Capteurs européens certifiés et pleine compatibilité d\'intégration avec vos systèmes VMS existants.',
    'projects.pillar3.title': 'Design Éthique & HRI',
    'projects.pillar3.desc': 'Gabarit bas de 50 cm, présence non menaçante et rassurante pensée pour l\'interaction humaine bienveillante.',
    'projects.pillar4.title': 'Réparabilité sur site',
    'projects.pillar4.desc': 'Matériel conçu pour durer, modularité mécanique totale et maintenance directe sans dépendance extérieure.',
    'projects.cta.badge': 'Recherche de financements & Partenariats',
    'projects.cta.title': 'Déployer la solution sur votre campus ?',
    'projects.cta.desc': 'Nous sommes actuellement à la recherche de financements pour accélérer le développement et l\'industrialisation du robot. Nous collaborons avec les universités, campus de recherche et sites tertiaires pour déployer des expérimentations de patrouille autonome.',
    'projects.cta.button': 'Contacter l\'équipe d\'ingénierie',
    'page.manifest.title': 'Manifeste',
    'page.manifest.subtitle': 'Vision & Principes',
    'manifest.p1': "Dans un monde en constant développement et dominé par la surproduction, particulièrement dans les domaines de la robotique et de l'intelligence artificielle, le monde a besoin d’un pivot technologique.",
    'manifest.p2': "Polymath est ce pivot. Inspiré des plus grands inventeurs qui, à leur époque, mélangeaient déjà design et ingénierie, Polymath est un studio de développement ingénieur-designer qui traite des grands changements de demain, mais aussi de la modification des procédés actuels.",
    'manifest.p3': "La solution est là, sous nos yeux depuis le début : la nature. Non pas la nature comme simple inspiration ou idée de design, mais la nature comme ligne de mire, comme visée de l'évolution technologique. Il ne faut plus voir la nature comme quelque chose à prendre en compte en bout de chaîne, mais comme un but, un outil, un allié.",
    'manifest.p4': "Cette vision ne s’oppose pas forcément au progrès ou même au profit ; elle s’oppose au consumérisme. Car oui, le danger est là : un monde de création sans but, sans réel intérêt. Bien sûr, l’intérêt n’est pas quelque chose de linéaire : il faut le voir comme quelque chose qui peut évoluer ou même être futur, à des horizons qui ne nous permettent pas de bien l’apprécier.",
    'manifest.p5': "Il est impératif de changer le modèle économique derrière les nouvelles technologies, car l’obsolescence programmée n’est pas viable à moyen et long terme. Il est important de comprendre que les matériaux recyclables ne sont pas forcément recyclés, et que des designs de hardware évolutifs — pensés pour le futur et tournés vers des évolutions à court et moyen terme — seraient plus pertinents.",
    'manifest.p6': "Quant à l’implémentation de ce système dans la robotique, elle est plus que pertinente : le marché est grandissant mais pas encore saturé ; il est encore temps de mettre en place des procédés plus durables.",
    'page.team.title': 'Équipe',
    'page.team.subtitle': 'Fondateurs',
    'team.summary': 'Nous sommes un collectif d\'ingénieurs et de designers passionnés par la création d\'interfaces durables. Notre approche combine une rigueur technique absolue avec un design centré sur l\'humain, afin de façonner des expériences interactives qui font sens.',
    'team.role1': 'Co-Fondateur',
    'team.role2': 'Design Lead',
    'team.role3': 'Lead Engineer',
    'team.role4': 'Ingénieur Logiciel',

    // Alec
    'team.alec.role': 'Chief Architect / Co-founder',
    'team.alec.bio': "Je conçois l'ossature des projets et vérifie qu'elle tient debout, du concept à la réalisation.",
    'team.alec.skill1.title': 'Systems Architecture',
    'team.alec.skill1.desc': 'penser la solution comme un tout cohérent, découper le problème en sous-systèmes articulés.',
    'team.alec.skill2.title': 'Design Systems',
    'team.alec.skill2.desc': 'définir et maintenir un langage de conception cohérent (visuel et fonctionnel).',
    'team.alec.skill3.title': 'Applied Mathematics',
    'team.alec.skill3.desc': 'mobiliser les maths pour résoudre des problèmes techniques concrets.',
    'team.alec.skill4.title': 'Technical Feasibility',
    'team.alec.skill4.desc': "évaluer comment réaliser une idée et si elle est faisable — le pont entre la vision et l'exécution.",

    // Arthur
    'team.arthur.role': 'Chief Design Officer / Co-founder',
    'team.arthur.bio': "Je garde le cap sur l'humain et veille au sens de ce qui est construit.",
    'team.arthur.skill1.title': 'Human-Robot Interaction',
    'team.arthur.skill1.desc': "concevoir la relation entre l'utilisateur et la machine.",
    'team.arthur.skill2.title': 'Ethics & Impact',
    'team.arthur.skill2.desc': 'interroger les conséquences humaines et sociales des solutions.',
    'team.arthur.skill3.title': 'User Research',
    'team.arthur.skill3.desc': 'partir des usages et besoins réels pour cadrer le projet.',
    'team.arthur.skill4.title': 'UX/UI',
    'team.arthur.skill4.desc': 'concevoir des interfaces claires, utilisables et désirables.',

    // Alann
    'team.alann.role': 'CEO / Co-founder',
    'team.alann.bio': "Je porte la vision et la direction du studio, et conçois la partie physique qui rend les idées tangibles.",
    'team.alann.skill1.title': 'Product Vision / Strategy',
    'team.alann.skill1.desc': 'définir le quoi et le pourquoi — les directions à prendre et les arbitrages.',
    'team.alann.skill2.title': 'Mechanical Engineering',
    'team.alann.skill2.desc': 'concevoir et dimensionner la partie mécanique et physique des objets.',
    'team.alann.skill3.title': 'Design Integration',
    'team.alann.skill3.desc': 'intégrer la mécanique dans la cohérence globale de conception.',
    'team.alann.skill4.title': 'Fundraising & Partnerships',
    'team.alann.skill4.desc': "réunir les financements et nouer les alliances qui permettent aux projets d'exister.",

    // Joschka
    'team.joschka.role': 'CTO / Co-founder',
    'team.joschka.bio': "Je porte la technique et donne vie à l'objet, du circuit à la perception de son environnement.",
    'team.joschka.skill1.title': 'Electronics',
    'team.joschka.skill1.desc': 'conception et mise en œuvre des circuits et systèmes électriques.',
    'team.joschka.skill2.title': 'Embedded Systems',
    'team.joschka.skill2.desc': 'programmer le matériel contraint (microcontrôleurs, temps réel).',
    'team.joschka.skill3.title': 'Computer Vision',
    'team.joschka.skill3.desc': 'permettre à la machine de percevoir et interpréter son environnement.',
    'team.joschka.skill4.title': 'ROS Architecture',
    'team.joschka.skill4.desc': 'structurer le logiciel robotique pour que capteurs, calcul et mouvement communiquent de bout en bout.',
    'page.contact.title': 'Contact',
    'page.contact.subtitle': 'Réseau',
    'form.name': 'Nom complet',
    'form.email': 'Email',
    'form.subject': 'Sujet',
    'form.message': 'Message',
    'form.submit': 'Transmettre',
    'form.sending': 'Transmission en cours...',
    'form.success.title': 'Transmission confirmée',
    'form.success.desc': 'Votre message a été transmis avec succès à l\'équipe Polymath.',
    'form.success.again': 'Envoyer un autre message',
    'form.error.desc': 'Une erreur est survenue lors de la transmission. Vous pouvez nous écrire directement à :',
    'form.required': 'Veuillez saisir votre message.',
    'contact.direct': 'Email direct'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('polymath_lang');
      if (saved === 'FR' || saved === 'EN') return saved;
    } catch {
      // ignore
    }
    return 'EN';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('polymath_lang', newLang);
      document.documentElement.lang = newLang.toLowerCase();
    } catch {
      // ignore
    }
  };

  React.useEffect(() => {
    try {
      document.documentElement.lang = lang.toLowerCase();
    } catch {
      // ignore
    }
  }, [lang]);

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations.EN?.[key] ?? translations.FR?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
