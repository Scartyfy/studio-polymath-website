import React from 'react';
import { Database, LayoutDashboard, Palette, Briefcase, Settings, Target, Layers, Code, PenTool, Type, Zap, Scissors, Cog, Map, Monitor, Ruler, Shield, Heart, CheckCircle } from "lucide-react";
import { Language } from "../types";

export const getProjectData = (id: string, lang: Language) => {
  const data: any = {
    'p1': {
      subtitle: "",
      title: "That's My Jam",
      headerDesc: lang === 'fr' ? "Création d'entreprise" : "Startup Venture",
      contextTitle: lang === 'fr' ? "La Problématique & Le Défi" : "The Challenge & Context",
      contextText: lang === 'fr'
        ? "À côté de mes études, avec deux amis, nous avons monté une start-up qui nous permet d'appliquer toutes les compétences apprises à l'école dans un projet concret. Cela me permet d'aller encore plus loin et de monter en compétence sur de nombreux sujets qui touchent à l'entrepreneuriat."
        : "Alongside my studies, with two friends, we founded a startup that allows us to apply everything learned in school into a concrete project. This pushes me further and accelerates my skills across diverse facets of entrepreneurship.",
      concept: {
        title: lang === 'fr' ? "Le Concept & Fonctionnement" : "The Concept & How It Works",
        text: lang === 'fr'
          ? "That's My Jam est né d'une ambition simple : briser le mur invisible entre la scène et la fosse pour transformer les spectateurs en véritables acteurs de l'événement.\n\nConcrètement, le public est invité à voter en temps réel en scannant un QR code affiché dans la salle ou projeté sur scène, directement depuis son smartphone et sans aucune application à installer. Le groupe ou le DJ met à disposition l'ensemble des sons et des morceaux pouvant être joués durant la soirée. Sur scène, les artistes reçoivent en direct les votes et les tendances du public, ce qui leur permet d'adapter l'ambiance de la salle instantanément, d'ajuster leur setlist en direct et de répondre au mieux aux attentes et à l'énergie de la foule."
          : "That's My Jam was born from a simple ambition: breaking the invisible wall between the stage and the crowd to turn spectators into active participants in the live experience.\n\nIn practice, the audience is invited to vote in real time simply by scanning a QR code displayed across the venue or projected on stage, directly from their smartphone without installing any app. The band or DJ uploads all the tracks and sounds that can be played during the performance. On stage, artists receive live incoming votes and trends from the room, enabling them to instantly modulate the atmosphere, adapt their setlist dynamically, and respond perfectly to the crowd's energy and expectations.",
        image: "https://drive.google.com/thumbnail?id=1FHJs5vCDogyqyLkG-C4bg9UHaSMu4lYn&sz=w2000"
      },
      techTitle: lang === 'fr' ? "Compétences Appliquées" : "Applied Skills",
      skills: true,
      skillsList: [
        {
          label: lang === 'fr' ? "Base de Données Relationnelle" : "Relational Database",
          text: lang === 'fr' ? "Modélisation et requêtes via base de données relationnelle" : "Relational database modeling and queries",
          details: lang === 'fr'
            ? "Mise en pratique de l'ingénierie apprise à l'école avec la création d'une base de données relationnelle robuste pour gérer les salles, les utilisateurs et les votes en temps réel."
            : "Practical application of software engineering with a robust relational database managing live venues, users, and real-time votes.",
          image: "https://drive.google.com/thumbnail?id=1EoFttAcjlnFPrtDQDddkxs54gTrCPSP-&sz=w1000"
        },
        {
          label: "Interface UX/UI",
          text: lang === 'fr' ? "Clarté, accessibilité et compréhension immédiate" : "Clarity, accessibility, and immediate onboarding",
          details: lang === 'fr'
            ? "Création d'une interface ultra-accessible via scan de QR code, pensée pour un vote fluide en 3 secondes dans une salle de concert sombre et sans aucune friction de connexion."
            : "Creation of an ultra-accessible interface via QR code scan, designed for smooth 3-second voting in dark concert venues without login friction.",
          images: [
            { src: "https://drive.google.com/thumbnail?id=1ipGpwDlo4zdXIgsCYGKFpZoUefeTmQw9&sz=w1000", label: lang === 'fr' ? "Vue Public" : "Public View" },
            { src: [
                "https://drive.google.com/thumbnail?id=1DgjrZ3QifQYEQo_G4wJ2jDkKxYUg3nbK&sz=w1000",
                "https://drive.google.com/thumbnail?id=1RzPdPqclgXampDIvFUq4dv8LHGbhgqTO&sz=w1000"
              ], 
              label: lang === 'fr' ? "Vue Artiste" : "Artist View" 
            }
          ]
        },
        {
          label: lang === 'fr' ? "Design d'Expérience" : "Experience Design",
          text: lang === 'fr' ? "Créer un dialogue continu avec le public" : "Continuous dialogue with the live crowd",
          details: lang === 'fr'
            ? "Conception d'une boucle interactive en temps réel : le public vote via QR code, le groupe visualise en direct les tendances sur scène et module l'ambiance sonore pour une communion totale."
            : "Designing a real-time interactive loop: the crowd votes via QR code, the band visualizes live trends on stage and modulates sound atmosphere for total communion."
        }
      ],
      resultTitle: lang === 'fr' ? "Le Résultat & L'Apprentissage" : "Results & Takeaways",
      resultText: lang === 'fr'
        ? "Cette expérience entrepreneuriale immersive m'a apporté une vision à 360° de la création d'un produit. Les retours actuels sur la boîte sont très prometteurs : le public comme les artistes saluent une interface intuitive qui révolutionne l'ambiance des événements sans en casser le rythme."
        : "This immersive entrepreneurial experience gave me a 360° perspective on end-to-end product design. Current feedback is extremely encouraging: audiences and artists praise an intuitive interface that transforms live atmospheres without friction.",
      images: {
        heroBg: "https://drive.google.com/thumbnail?id=12Y1whGrGWg2l--aMALl6DM2Y_IJWkgoo&sz=w2000",
        context: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1000",
        resultBg: "https://images.unsplash.com/photo-1540039155732-d68a91b4fa7b?auto=format&fit=crop&q=80&w=2000"
      }
    },
    'p2': {
      subtitle: "",
      title: lang === 'fr' ? "Projet SNCF" : "SNCF Project",
      headerDesc: lang === 'fr' ? "Projet Partenaire" : "Partner Project",
      contextTitle: lang === 'fr' ? "Le Contexte & L'Objectif" : "Context & Objective",
      contextText: lang === 'fr'
        ? "Réhumaniser le voyage TER à l'ère de l'hyperdigitalisation."
        : "Rehumanizing regional TER rail travel in an era of hyper-digitization.",
      techTitle: lang === 'fr' ? "Observations & Recherches" : "Field Research & Insights",
      skills: true,
      skillsList: [
        {
          label: lang === 'fr' ? "Interviews Terrain" : "Field Interviews",
          text: lang === 'fr' ? "12 personnes interviewées & Agent TER Occitanie" : "12 people interviewed & Occitanie TER Onboard Agent",
          details: lang === 'fr'
            ? "Impact du sous-effectif : manque de présence humaine et insécurité. L'uniforme est perçu comme une barrière. Aux arrêts isolés (PANG sans borne de validation), le contrôleur reste la seule ressource. La nécessité de privilégier les contacts humains a été confirmée."
            : "Impact of understaffing: lack of human presence and insecurity. The uniform is perceived as a barrier. At unstaffed halts without ticket machines, the conductor remains the only resource. The necessity of prioritizing interpersonal human contact was confirmed.",
          quotes: lang === 'fr' ? [
            { text: "Je choisis les petites gares pour être sûre de trouver un humain au guichet.", author: "Voyageuse" },
            { text: "Sans ce TER, notre village serait complètement coupé du monde.", author: "Étudiant" },
            { text: "C'est l'uniforme qu'ils engueulent, pas la personne.", author: "Agent de bord" },
            { text: "La borne sur le quai était en panne, heureusement que le contrôleur m'a dépanné !", author: "Usager régulier" },
            { text: "On manque cruellement de présence humaine, on se sent seuls le soir.", author: "Voyageuse" },
            { text: "Seul pour gérer tout un train la nuit, le sentiment d'insécurité monte vite.", author: "Contrôleur" },
            { text: "Train en panne : en dix minutes, on s'était tous organisés pour covoiturer.", author: "Passager" },
            { text: "Ici, pas de touristes. Juste des travailleurs et des étudiants qui font le trajet tous les jours.", author: "Travailleur pendulaire" },
            { text: "Prendre son temps dans une gare historique, ça change tout.", author: "Voyageuse occasionnelle" },
            { text: "Le contrôleur, c'est bien plus qu'un simple vérificateur de billets.", author: "Habitué de la ligne" }
          ] : [
            { text: "I pick smaller stations to make sure there's an actual human at the counter.", author: "Female Traveler" },
            { text: "Without this regional train, our village would be completely cut off.", author: "Student" },
            { text: "It's the uniform they yell at, not the human behind it.", author: "Onboard Agent" },
            { text: "The platform validator was broken—luckily the conductor sorted me out!", author: "Regular Commuter" },
            { text: "We sorely lack human presence; evenings can feel very isolated.", author: "Female Traveler" },
            { text: "Alone managing a whole train at night, feeling vulnerable rises quickly.", author: "Conductor" },
            { text: "Train stalled: within ten minutes, everyone organized carpooling together.", author: "Passenger" },
            { text: "No tourists here. Just workers and students making the daily commute.", author: "Daily Commuter" },
            { text: "Taking time in a historic station changes the entire mindset.", author: "Occasional Traveler" },
            { text: "The conductor is so much more than just a ticket inspector.", author: "Line Regular" }
          ]
        },
        {
          label: lang === 'fr' ? "La Concurrence" : "Competitive Analysis",
          text: lang === 'fr' ? "Veille concurrentielle & Offres alternatives" : "Benchmarking & Alternative Mobility",
          details: lang === 'fr'
            ? "La concurrence (e.g. Transdev) propose une offre doublée, un engagement strict sur la ponctualité, et des trains de dernière génération: plus de personnel à bord, sièges confortables, Wi-Fi, espaces vélos et sécurité renforcée, le tout axé sur l'accessibilité à tous."
            : "Competitors (e.g. Transdev) offer doubled frequency, strict punctuality guarantees, and latest-gen rolling stock: more onboard staff, ergonomic seating, Wi-Fi, bike bays, and reinforced safety—all anchored in universal accessibility."
        },
        {
          label: lang === 'fr' ? "La Sociologie" : "Sociology",
          text: "The Social Life of Small Urban Spaces (William H. Whyte)",
          details: lang === 'fr'
            ? "Une place ne dépend pas de son esthétique mais de sa capacité à favoriser les intéractions sociales via : la Triangulation (quelque chose d'extérieur qui crée le lien), la Projection, et le Mouvement (l'humain aime regarder le mouvement)."
            : "A public space depends not on pure aesthetics, but on its ability to catalyze social interaction through: Triangulation (an external element creating a bond), Projection, and Movement (humans love observing motion).",
          image: "https://drive.google.com/thumbnail?id=10ZggtwEmj4Da76AQ2U30Go4n2Mn2fHH4&sz=w1000"
        }
      ],
      postResearchText: lang === 'fr'
        ? "Constat :\n\nCe sous-effectif étant inévitable, il fallait se concentrer sur le dernier humain présent dans les trains : l'agent TER, et faire passer l'agent d'une figure de contrôle isolée et répressive à un repère rassurant et accessible pour les voyageurs."
        : "Finding:\n\nWith understaffing unavoidable, the solution had to focus on the last human present aboard: the TER agent—shifting the conductor from an isolated enforcement figure into a reassuring, accessible guide for passengers.",
      processTitle: lang === 'fr' ? "Solution" : "Solution",
      steps: [
        {
          title: lang === 'fr' ? "Concept Général" : "General Concept",
          desc: lang === 'fr'
            ? "Un système de géolocalisation interne à bord du train permettant de localiser facilement le contrôleur.\n\nComment ça marche ? L'agent porte un émetteur qui envoie un signal en continu. Ce signal est capté par des récepteurs situés dans chaque wagon de la rame."
            : "An onboard indoor positioning system allowing passengers to locate the conductor effortlessly.\n\nHow does it work? The agent wears a continuous transmitter whose signal is captured by receivers installed in each car of the train.",
        },
        {
          title: lang === 'fr' ? "Le Matériel : L'Émetteur" : "Hardware: The Wearable Tag",
          desc: lang === 'fr'
            ? "Un petit boîtier électronique (TAG) porté par l'agent qui émet un signal en continu. Composé d'une carte ESP32, d'une batterie Li-Po 5V et d'une LED, son design a été pensé pour l'ergonomie de l'agent."
            : "A compact wearable electronic tag worn by the agent broadcasting continuously. Built with an ESP32 board, a 5V Li-Po battery, and a status LED, designed specifically for staff ergonomic comfort.",
          image: "https://drive.google.com/thumbnail?id=1J5dudpctxl4QwO1UEGodEbrGOCSj_8Tp&sz=w1000",
          image2: "https://drive.google.com/thumbnail?id=1nIZ3cYLqpC4KCv_rWDGGWJtzRDgOhhqN&sz=w1000"
        },
        {
          title: lang === 'fr' ? "Les Récepteurs" : "Receivers & Anchors",
          desc: lang === 'fr'
            ? "Des petits récepteurs discrets (ancres) répartis au plafond dans chaque wagon du train. Ils captent le signal de l'émetteur porté par l'agent. Architecture intérieure des ancres. Composants embarqués sécurisés pour s'intégrer discrètement au plafond de chaque wagon."
            : "Discreet ceiling-mounted anchors across each train car that capture signals from the wearable tag. Secure onboard components engineered for low-profile integration.",
          image: "https://drive.google.com/thumbnail?id=1dV8PDpPb23biy6QHFpyOdrefsZftAgnY&sz=w1000",
          image2: "https://drive.google.com/thumbnail?id=1xfu-EW3-CtAnS1V-UoOvc_I0ubfxIRjy&sz=w1000"
        },
        {
          title: lang === 'fr' ? "L'Infrastructure Technique" : "Technical Infrastructure",
          desc: lang === 'fr'
            ? "Un système Plug & Play très facile à implémenter : les récepteurs se calent sur le réseau existant du train, évitant l'ajout de nouveaux câbles. Il traite les signaux et affiche en direct sur tous les écrans de la rame où se trouve exactement le contrôleur (ex. \"Votre agent est en voiture 4\")."
            : "A Plug & Play architecture easily deployed across the train's existing network without additional wiring. It processes positioning signals and displays live conductor location on all car screens (e.g. \"Your agent is currently in Car 4\").",
          image: "https://drive.google.com/thumbnail?id=1wV1HyHVQjdHoaCBJBrk15-HfKp7CcLMD&sz=w1000"
        },
        {
          title: lang === 'fr' ? "L'Expérience Humaine" : "The Human Experience",
          blocks: lang === 'fr' ? [
            {
              title: "Pour l'Agent",
              text: "Le système pallie le sentiment de sous-effectif, l'agent \"occupe\" visuellement tout le train.\nLa dynamique s'inverse : ce n'est plus l'agent qui traque le client pour exiger un titre, c'est la technologie qui guide le client vers l'agent. Les conflits sont désamorcés."
            },
            {
              title: "Pour le Passager",
              text: "En cas de problème (borne en panne, besoin d'info), il ne stresse plus à sa place : il sait exactement où aller.\nSavoir l'agent présent (\"L'agent est en Voiture 2\") crée un filet de sécurité psychologique, même à distance."
            }
          ] : [
            {
              title: "For the Staff",
              text: "The system alleviates the feeling of understaffing; the conductor visually \"occupies\" the entire train.\nThe dynamic inverts: staff no longer hunt down passengers; technology peacefully guides passengers to staff, de-escalating potential conflict."
            },
            {
              title: "For the Passenger",
              text: "In case of issues (broken validator, travel inquiry), passengers no longer stress in their seats: they know exactly where to go.\nKnowing the conductor is onboard creates a reassuring psychological safety net even from afar."
            }
          ]
        },
        {
          image: "https://drive.google.com/thumbnail?id=12jVPNY-uvmuAwicHia_nnjDDRYxvrQf3&sz=w1000"
        },
        {
          title: lang === 'fr' ? "La Gestion de la Fraude" : "Fare Enforcement Dynamics",
          desc: lang === 'fr'
            ? "La position de l'agent étant affichée en direct, un passager sans billet a l'obligation stricte de se lever et de marcher dans sa direction.\n\nLa transparence totale justifie l'amende maximale pour les personnes de mauvaise foi, tout en préservant la bienveillance pour les voyageurs honnêtes."
            : "With conductor location displayed transparently, passengers without tickets are obliged to walk toward the conductor.\n\nTotal transparency legitimately penalizes dishonest evasion while preserving goodwill for honest travelers.",
        },
        {
          title: lang === 'fr' ? "Preuve de Concept (LE POC)" : "Proof of Concept (POC)",
          desc: lang === 'fr'
            ? "Des tests de terrain et des interviews (9 participants) ont été réalisés dans les gares avec de faux flyers annonçant la fonctionnalité. \n\nRetours usagers : \"Ça cartonnerait chez les jeunes\", \"À son époque l'agent faisait un appel vocal pour dire où il était\", \"Good idea, it could have helped me during my trip\"."
            : "Station field tests and user interviews (9 participants) were conducted using flyers announcing the feature.\n\nUser feedback: \"Young travelers would love this\", \"Conductors used to make PA announcements telling people where they were\", \"Good idea, it could have helped me during my trip\".",
          image: "https://drive.google.com/thumbnail?id=1lYWhBA1v2wQ7zI4Fsb34NRhBFjGqpnD1&sz=w1000"
        }
      ],
      resultTitle: lang === 'fr' ? "Le Résultat & L'Apprentissage" : "Results & Takeaways",
      resultText: lang === 'fr'
        ? "Ce projet m'a permis de comprendre comment l'intégration de technologies simples et robustes peut avoir un impact significatif sur l'expérience utilisateur globale, en réhumanisant le contact et en apaisant les tensions dans un environnement contraint."
        : "This project taught me how integrating simple and robust technologies can have a significant impact on overall user experience, rehumanizing contact and easing tensions in a constrained environment.",
      images: {
        heroBg: "https://drive.google.com/thumbnail?id=1lLITLZdFeR9_07zkoQxYjThbcnY7DTku&sz=w2000",
        context: "https://images.unsplash.com/photo-1540039155732-d68a91b4fa7b?auto=format&fit=crop&q=80&w=1000",
        resultBg: "https://images.unsplash.com/photo-1522780550166-284a0288c8dc?auto=format&fit=crop&q=80&w=2000"
      }
    },
    'p3': {
      subtitle: lang === 'fr' ? "Design automobile" : "Automotive Design",
      title: lang === 'fr' ? "Concept-car" : "Concept Car",
      headerDesc: lang === 'fr' ? "Design Automobile & Aérodynamique" : "Automotive Design & Aerodynamics",
      contextTitle: lang === 'fr' ? "Le Défi & La Vision" : "Challenge & Vision",
      contextText: lang === 'fr'
        ? "Conception de concept cars explorant la convergence entre efficience aérodynamique, morphologie sculptée et ergonomie de l'habitacle. En tant qu'ingénieur-designer, l'enjeu était de créer une présence visuelle forte dictée par l'équilibre des volumes et la pureté des lignes."
        : "Concept car design exploring the convergence between aerodynamic efficiency, sculpted morphology, and cockpit ergonomics. As an engineer-designer, the challenge was to create a commanding visual presence driven by volume balance and clean lines.",
      concept: {
        title: lang === 'fr' ? "L'Aérodynamique comme Forme Pure" : "Aerodynamics as Pure Form",
        text: lang === 'fr'
          ? "Le concept Lobster Car explore une silhouette sculpturale inspirée des carapaces et des lignes de tension organiques. La carrosserie guide les flux d'air pour assurer la stabilité et l'efficience tout en proposant une identité visuelle radicale."
          : "The Lobster Car concept explores a sculptural silhouette inspired by carapaces and organic tension lines. The bodywork channels airflow to ensure stability and efficiency while asserting a radical visual identity.",
        image: "./car1.jpg"
      },
      techTitle: lang === 'fr' ? "Recherches & Compétences Appliquées" : "Research & Applied Skills",
      skills: true,
      skillsList: [
        {
          label: lang === 'fr' ? "Aérodynamique & Forme Extérieure" : "Aerodynamics & Exterior Styling",
          text: lang === 'fr' ? "Optimisation de la silhouette et écoulement des flux" : "Silhouette optimization and aerodynamic airflow",
          details: lang === 'fr'
            ? "Étude poussée des volumes et des écoulements d'air sur carrosserie sculpturale pour allier performance aérodynamique et présence esthétique."
            : "In-depth volume and airflow analysis over sculptural body panels to unite aerodynamic performance and aesthetic impact.",
          images: [
            { src: "./car2.jpg", label: lang === 'fr' ? "Étude Aérodynamique & Profil" : "Aerodynamic Study & Profile" },
            { src: "./car1.jpg", label: lang === 'fr' ? "Affiche Principale" : "Main Poster" }
          ]
        },
        {
          label: lang === 'fr' ? "Cockpit & Ergonomie" : "Cockpit & Ergonomics",
          text: lang === 'fr' ? "Interface conducteur et ergonomie du poste de pilotage" : "Driver interface and cockpit ergonomic layout",
          details: lang === 'fr'
            ? "Conception ergonomique du poste de conduite : commandes physiques intuitives et visibilité optimale pour une expérience de conduite pure."
            : "Ergonomic cockpit design: intuitive physical controls and optimal sightlines for an uncompromised driving experience.",
          images: [
            { src: "./car3.jpg", label: lang === 'fr' ? "Poste de Pilotage" : "Driver Cockpit" }
          ]
        },
        {
          label: lang === 'fr' ? "Esquisses & Recherche Formelle" : "Ideation & Formal Sketching",
          text: lang === 'fr' ? "Recherche stylistique et études préliminaires" : "Stylistic research and preliminary studies",
          details: lang === 'fr'
            ? "De la feuille de croquis aux rendus volumiques, le processus explore les lignes de tension et l'équilibre des masses."
            : "From rough sketchbook explorations to volumetric renderings, the process investigates tension lines and mass distribution.",
          images: [
            { src: "./car4.jpg", label: lang === 'fr' ? "Recherche Formelle & Croquis" : "Formal Research & Sketches" }
          ]
        }
      ],
      postResearchText: lang === 'fr'
        ? "Constat :\n\nLe projet Lobster Car démontre la synergie entre vision formelle de designer et précision de conception. Une démarche épurée où chaque élément visuel trouve sa justification."
        : "Finding:\n\nThe Lobster Car project demonstrates the synergy between designer formal vision and engineering precision. A refined process where every visual element is purposeful.",
      processTitle: lang === 'fr' ? "Architecture & Solutions Techniques" : "Architecture & Technical Solutions",
      steps: [
        {
          title: lang === 'fr' ? "1. Affiche & Manifeste de Style" : "1. Poster & Styling Manifesto",
          desc: lang === 'fr'
            ? "Présentation grand format définissant les intentions stylistiques et l'impact visuel du concept."
            : "Large-format showcase defining styling intentions and visual punch of the concept.",
          image: "./car1.jpg"
        },
        {
          title: lang === 'fr' ? "2. Recherche & Esquisses Préparatoires" : "2. Research & Preliminary Sketches",
          desc: lang === 'fr'
            ? "Étude des proportions et des lignes de force avant toute phase de modélisation."
            : "Proportion and key character line explorations prior to 3D modeling.",
          image: "./car4.jpg"
        },
        {
          title: lang === 'fr' ? "3. Visuels Photographiques" : "3. Photographic Visuals",
          desc: lang === 'fr'
            ? "Rendus en situation révélant la silhouette, les détails de carrosserie et l'équilibre général."
            : "Contextual track renders revealing silhouette, surface details, and overall stance.",
          image: "./car2.jpg"
        }
      ],
      resultTitle: lang === 'fr' ? "Bilan & Acquis Ingénieur-Designer" : "Synthesis & Engineer-Designer Learnings",
      resultText: lang === 'fr'
        ? "Cette étude complète valide une méthodologie double : aborder l'objet automobile avec la sensibilité formelle du designer et la rigueur technique de l'ingénieur."
        : "This comprehensive exploration validates a dual approach: tackling the automobile with a designer's formal sensitivity and an engineer's technical rigor.",
      images: {
        heroBg: "./IMG_4351.jpg",
        context: "./car2.jpg",
        resultBg: "./car5.jpg"
      }
    },
    'p4': {
      subtitle: "",
      title: lang === 'fr' ? "Maquette APP UX/UI" : "UX/UI App Prototype",
      headerDesc: "",
      contextTitle: lang === 'fr' ? "Le Contexte & Le Défi" : "Context & Challenge",
      contextText: lang === 'fr'
        ? "Comment se souvenir de notre visite au musée de façon ludique et instructive ? Conception d'une application après-musée pour transformer l'ancrage mémoriel en expérience sociale et interactive à travers le grattage et le jeu."
        : "How to remember our museum visit in a fun and educational way? Designing a post-museum companion app to transform memory retention into an interactive, social experience through scratch mechanics and games.",
      techTitle: lang === 'fr' ? "Compétences & Outils" : "Skills & Tools",
      skills: {
        col1Label: lang === 'fr' ? "Outils" : "Tools",
        col1Text: "Figma, Illustrator, Miro",
        col2Label: "Design",
        col2Text: lang === 'fr' ? "Enquête terrain, User Journey, Wireframes" : "Field research, User Journey, Wireframes",
        col3Label: "UX/UI",
        col3Text: lang === 'fr' ? "Design System, Maquettage, Tests utilisateurs" : "Design System, Mockups, User testing"
      },
      images: {
        heroBg: `${import.meta.env.BASE_URL}photo%20ux%20ui/descriptionapp.jpg`,
      },
      slides: []
    },
    'p5': {
      subtitle: lang === 'fr' ? "FabLab & Prototypage Physique" : "FabLab & Physical Prototyping",
      title: lang === 'fr' ? "Matière & Maquette" : "Material & Making",
      headerDesc: lang === 'fr' ? "FabLab & Projets Personnels" : "FabLab & Personal Builds",
      contextTitle: lang === 'fr' ? "Introduction & Démarche" : "Introduction & Approach",
      contextText: lang === 'fr'
        ? "Dans le cadre de mes études, j'ai été amené à utiliser la matière et à créer dans un FabLab toutes sortes d'objets pour illustrer des projets et leur faire prendre vie. C'est également une pratique que je prolonge dans mes projets personnels : explorer les matériaux, façonner, imprimer en 3D, découper et assembler, pour montrer que je sais manier un peu tout et concrétiser chaque concept."
        : "Throughout my studies, I was led to work with physical materials and create in FabLabs all kinds of objects to illustrate projects and bring them to life. It is also an approach I pursue through personal projects: experimenting with diverse materials, shaping, 3D printing, laser cutting, and assembling, demonstrating versatility and the ability to turn any concept into reality.",
      galleryTitle: lang === 'fr' ? "Projets d'Atelier, FabLab & Maquettes" : "Workshop, FabLab & Model Projects",
      images: {
        heroBg: "https://drive.google.com/thumbnail?id=1z-ZZdWXI2DyLbJ_6nSgWxZaKrIDcejox&sz=w2000",
      },
      // =========================================================================
      // 4 PROJETS MAQUETTE GROUPÉS :
      // =========================================================================
      galleryGroups: [
        {
          id: 'daft-punk',
          number: '01',
          tag: lang === 'fr' ? "PROJET 01 • PROTOTYPAGE PHYSIQUE & FABLAB" : "PROJECT 01 • PHYSICAL PROTOTYPING & FABLAB",
          title: lang === 'fr' ? "Casque Daft Punk — Réplique & Finitions Atelier" : "Daft Punk Helmet — Workshop Replica & Finishes",
          description: lang === 'fr'
            ? "Conception et fabrication complète d'une réplique de casque au FabLab : modélisation et impression 3D, ponçage méticuleux des surfaces, application d'apprêt de carrosserie, chromage effet miroir et confection de la visière thermoformée fumée."
            : "Complete replica fabrication in the FabLab: 3D printing of shell parts, manual surface sanding, automotive primer, mirror chrome paint, and tinted thermoformed visor integration.",
          aspectRatio: 'aspect-[3/4]',
          gridCols: 'grid-cols-2 sm:grid-cols-3 xl:grid-cols-6',
          images: [
            {
              id: 'maquette-1',
              globalIndex: 0,
              image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3100.JPG`,
              title: lang === 'fr' ? "Préparation des coques & ponçage manuel" : "Shell preparation & manual sanding",
              projectTitle: lang === 'fr' ? "Casque Daft Punk" : "Daft Punk Helmet"
            },
            {
              id: 'maquette-2',
              globalIndex: 1,
              image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3137.JPG`,
              title: lang === 'fr' ? "Application de la première couche d'apprêt" : "First primer coat application",
              projectTitle: lang === 'fr' ? "Casque Daft Punk" : "Daft Punk Helmet"
            },
            {
              id: 'maquette-3',
              globalIndex: 2,
              image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3142.JPG`,
              title: lang === 'fr' ? "Finition des surfaces avant métallisation" : "Surface prep before metallization",
              projectTitle: lang === 'fr' ? "Casque Daft Punk" : "Daft Punk Helmet"
            },
            {
              id: 'maquette-4',
              globalIndex: 3,
              image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3145.JPG`,
              title: lang === 'fr' ? "Peinture métallisée chrome & oreilles latérales" : "Chrome metallic coat & side ear caps",
              projectTitle: lang === 'fr' ? "Casque Daft Punk" : "Daft Punk Helmet"
            },
            {
              id: 'maquette-5',
              globalIndex: 4,
              image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3204.JPG`,
              title: lang === 'fr' ? "Assemblage final & intégration de la visière fumée" : "Final assembly & tinted visor fitting",
              projectTitle: lang === 'fr' ? "Casque Daft Punk" : "Daft Punk Helmet"
            },
            {
              id: 'maquette-6',
              globalIndex: 5,
              image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3207.JPG`,
              title: lang === 'fr' ? "Casque Daft Punk achevé sur table de billard" : "Completed Daft Punk helmet showcase",
              projectTitle: lang === 'fr' ? "Casque Daft Punk" : "Daft Punk Helmet"
            }
          ]
        },
        {
          id: 'sculpture-matiere',
          number: '02',
          tag: lang === 'fr' ? "PROJET 02 • EXPÉRIMENTATION PLASTIQUE & ART DE LA MATIÈRE" : "PROJECT 02 • SCULPTURAL & MATERIAL EXPERIMENTATION",
          title: lang === 'fr' ? "Sculpture Organique — Apprentissage & Maîtrise de la Matière" : "Organic Sculpture — Material Mastery & Form Study",
          description: lang === 'fr'
            ? "Projet purement artistique dédié à l'apprentissage et à la manipulation de la matière brute : modelage d'un volume organique complexe en terre et résine, confrontation des textures minérales brutes et de surfaces métallisées, inclusion d'une forme aérodynamique laquée rouge vif et montage sur socle en bois massif."
            : "Artistic project focused on understanding and manipulating raw physical matter: organic sculpting in clay and resin, contrasting raw mineral textures against mirror metallics, inserting a bold red lacquered volume, and final mounting on a solid hardwood base.",
          aspectRatio: 'aspect-[3/4]',
          gridCols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
          images: [
            {
              id: 'maquette-7',
              globalIndex: 6,
              image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_6269.JPG`,
              title: lang === 'fr' ? "Modelage initial & recherche de volumes organiques" : "Initial modeling & organic volume study",
              projectTitle: lang === 'fr' ? "Sculpture Matière" : "Material Sculpture"
            },
            {
              id: 'maquette-8',
              globalIndex: 7,
              image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_6635.JPG`,
              title: lang === 'fr' ? "Travail d'atelier : métallisation & pièce rouge" : "Workshop stage: metallization & red insert",
              projectTitle: lang === 'fr' ? "Sculpture Matière" : "Material Sculpture"
            },
            {
              id: 'maquette-9',
              globalIndex: 8,
              image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_6641.JPG`,
              title: lang === 'fr' ? "Ajustement du volume central & contrastes" : "Central volume fitting & contrast balance",
              projectTitle: lang === 'fr' ? "Sculpture Matière" : "Material Sculpture"
            },
            {
              id: 'maquette-10',
              globalIndex: 9,
              image: `${import.meta.env.BASE_URL}photo%20maquette/75DDE74F-4374-4036-B43F-48AA2F8026F4.JPG`,
              title: lang === 'fr' ? "Montage sur socle bois en atelier" : "Mounting on solid wooden plinth",
              projectTitle: lang === 'fr' ? "Sculpture Matière" : "Material Sculpture"
            },
            {
              id: 'maquette-11',
              globalIndex: 10,
              image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_6709.jpg`,
              title: lang === 'fr' ? "Sculpture finale achevée en studio photo" : "Final completed sculpture in studio",
              projectTitle: lang === 'fr' ? "Sculpture Matière" : "Material Sculpture"
            }
          ]
        },
        {
          id: 'siege-creche',
          number: '03',
          tag: lang === 'fr' ? "PROJET 03 • ERGONOMIE & SANTÉ AU TRAVAIL" : "PROJECT 03 • ERGONOMICS & HEALTH AT WORK",
          title: lang === 'fr' ? "Siège Mobile Bas pour Crèches — Prévention du Mal de Dos" : "Mobile Low Stool for Daycare Staff — Back Pain Relief",
          description: lang === 'fr'
            ? "Conception et maquettage à échelle 1 d'un siège mobile bas dédié aux professionnelles de la petite enfance en crèche. Pensé pour lutter contre les troubles musculo-squelettiques (TMS) et soulager les douleurs lombaires lors des activités prolongées au sol : assise ergonomique en mousse haute résilience, garnissage textile robuste et base mobile compacte."
            : "Full-scale 1:1 prototype of an ergonomic low mobile seat created for nursery and daycare staff. Engineered to alleviate chronic back pain and prevent musculoskeletal disorders from prolonged floor-level postures: resilient foam cushioning, durable fabric upholstery, and compact multidirectional mobility.",
          aspectRatio: 'aspect-[3/4]',
          gridCols: 'grid-cols-1 sm:grid-cols-2 max-w-3xl',
          images: [
            {
              id: 'maquette-12',
              globalIndex: 11,
              image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_9153.JPG`,
              title: lang === 'fr' ? "Prototype échelle 1 : mousse & garnissage textile" : "1:1 Prototype: foam core & textile upholstery",
              projectTitle: lang === 'fr' ? "Siège Ergonomique Crèche" : "Daycare Ergonomic Seat"
            },
            {
              id: 'maquette-13',
              globalIndex: 12,
              image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_9156.JPG`,
              title: lang === 'fr' ? "Vue perspective de l'assise ergonomique mobile" : "Perspective view of the ergonomic mobile stool",
              projectTitle: lang === 'fr' ? "Siège Ergonomique Crèche" : "Daycare Ergonomic Seat"
            }
          ]
        },
        {
          id: 'salle-pause-handicap',
          number: '04',
          tag: lang === 'fr' ? "PROJET 04 • ARCHITECTURE D'INTÉRIEUR & INCLUSION" : "PROJECT 04 • INTERIOR ARCHITECTURE & INCLUSION",
          title: lang === 'fr' ? "Salle de Pause Inclusive — Accessibilité & Handicap" : "Inclusive Breakroom — Accessibility & Spatial Planning",
          description: lang === 'fr'
            ? "Projet d'architecture d'intérieur et d'aménagement d'une salle de pause adaptée aux personnes en situation de handicap : maquette architecturale à l'échelle 1/20 en carton plume, agencement de mobilier sur-mesure respectant les normes d'accessibilité PMR, et figurines découpées au laser pour visualiser les espaces de giration et l'ergonomie globale du lieu."
            : "Interior architecture and spatial planning for a breakroom fully accessible to individuals with disabilities: 1:20 scale foam-board model, bespoke accessible furniture layout adhering to mobility standards, and laser-cut scale figures testing wheelchair circulation and spatial ergonomics.",
          aspectRatio: 'aspect-[16/9]',
          gridCols: 'grid-cols-1 md:grid-cols-2 max-w-5xl',
          images: [
            {
              id: 'maquette-14',
              globalIndex: 13,
              image: `${import.meta.env.BASE_URL}photo%20maquette/10.jpg`,
              title: lang === 'fr' ? "Plan masse, cotations & maquette 1/20 en carton plume" : "Floor plan, dimensions & 1:20 foam board model",
              projectTitle: lang === 'fr' ? "Salle de Pause Accessible" : "Accessible Breakroom"
            },
            {
              id: 'maquette-15',
              globalIndex: 14,
              image: `${import.meta.env.BASE_URL}photo%20maquette/11.jpg`,
              title: lang === 'fr' ? "Vues détaillées des espaces de repos & circulation PMR" : "Detailed views of lounge areas & accessible circulation",
              projectTitle: lang === 'fr' ? "Salle de Pause Accessible" : "Accessible Breakroom"
            }
          ]
        }
      ],
      // Conservation de la liste globale pour l'indexation de la Lightbox :
      galleryImages: [
        {
          id: 'maquette-1',
          globalIndex: 0,
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3100.JPG`,
          title: lang === 'fr' ? "Préparation des coques & ponçage manuel" : "Shell preparation & manual sanding",
          projectTitle: lang === 'fr' ? "Casque Daft Punk" : "Daft Punk Helmet"
        },
        {
          id: 'maquette-2',
          globalIndex: 1,
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3137.JPG`,
          title: lang === 'fr' ? "Application de la première couche d'apprêt" : "First primer coat application",
          projectTitle: lang === 'fr' ? "Casque Daft Punk" : "Daft Punk Helmet"
        },
        {
          id: 'maquette-3',
          globalIndex: 2,
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3142.JPG`,
          title: lang === 'fr' ? "Finition des surfaces avant métallisation" : "Surface prep before metallization",
          projectTitle: lang === 'fr' ? "Casque Daft Punk" : "Daft Punk Helmet"
        },
        {
          id: 'maquette-4',
          globalIndex: 3,
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3145.JPG`,
          title: lang === 'fr' ? "Peinture métallisée chrome & oreilles latérales" : "Chrome metallic coat & side ear caps",
          projectTitle: lang === 'fr' ? "Casque Daft Punk" : "Daft Punk Helmet"
        },
        {
          id: 'maquette-5',
          globalIndex: 4,
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3204.JPG`,
          title: lang === 'fr' ? "Assemblage final & intégration de la visière fumée" : "Final assembly & tinted visor fitting",
          projectTitle: lang === 'fr' ? "Casque Daft Punk" : "Daft Punk Helmet"
        },
        {
          id: 'maquette-6',
          globalIndex: 5,
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_3207.JPG`,
          title: lang === 'fr' ? "Casque Daft Punk achevé sur table de billard" : "Completed Daft Punk helmet showcase",
          projectTitle: lang === 'fr' ? "Casque Daft Punk" : "Daft Punk Helmet"
        },
        {
          id: 'maquette-7',
          globalIndex: 6,
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_6269.JPG`,
          title: lang === 'fr' ? "Modelage initial & recherche de volumes organiques" : "Initial modeling & organic volume study",
          projectTitle: lang === 'fr' ? "Sculpture Matière" : "Material Sculpture"
        },
        {
          id: 'maquette-8',
          globalIndex: 7,
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_6635.JPG`,
          title: lang === 'fr' ? "Travail d'atelier : métallisation & pièce rouge" : "Workshop stage: metallization & red insert",
          projectTitle: lang === 'fr' ? "Sculpture Matière" : "Material Sculpture"
        },
        {
          id: 'maquette-9',
          globalIndex: 8,
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_6641.JPG`,
          title: lang === 'fr' ? "Ajustement du volume central & contrastes" : "Central volume fitting & contrast balance",
          projectTitle: lang === 'fr' ? "Sculpture Matière" : "Material Sculpture"
        },
        {
          id: 'maquette-10',
          globalIndex: 9,
          image: `${import.meta.env.BASE_URL}photo%20maquette/75DDE74F-4374-4036-B43F-48AA2F8026F4.JPG`,
          title: lang === 'fr' ? "Montage sur socle bois en atelier" : "Mounting on solid wooden plinth",
          projectTitle: lang === 'fr' ? "Sculpture Matière" : "Material Sculpture"
        },
        {
          id: 'maquette-11',
          globalIndex: 10,
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_6709.jpg`,
          title: lang === 'fr' ? "Sculpture finale achevée en studio photo" : "Final completed sculpture in studio",
          projectTitle: lang === 'fr' ? "Sculpture Matière" : "Material Sculpture"
        },
        {
          id: 'maquette-12',
          globalIndex: 11,
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_9153.JPG`,
          title: lang === 'fr' ? "Prototype échelle 1 : mousse & garnissage textile" : "1:1 Prototype: foam core & textile upholstery",
          projectTitle: lang === 'fr' ? "Siège Ergonomique Crèche" : "Daycare Ergonomic Seat"
        },
        {
          id: 'maquette-13',
          globalIndex: 12,
          image: `${import.meta.env.BASE_URL}photo%20maquette/IMG_9156.JPG`,
          title: lang === 'fr' ? "Vue perspective de l'assise ergonomique mobile" : "Perspective view of the ergonomic mobile stool",
          projectTitle: lang === 'fr' ? "Siège Ergonomique Crèche" : "Daycare Ergonomic Seat"
        },
        {
          id: 'maquette-14',
          globalIndex: 13,
          image: `${import.meta.env.BASE_URL}photo%20maquette/10.jpg`,
          title: lang === 'fr' ? "Plan masse, cotations & maquette 1/20 en carton plume" : "Floor plan, dimensions & 1:20 foam board model",
          projectTitle: lang === 'fr' ? "Salle de Pause Accessible" : "Accessible Breakroom"
        },
        {
          id: 'maquette-15',
          globalIndex: 14,
          image: `${import.meta.env.BASE_URL}photo%20maquette/11.jpg`,
          title: lang === 'fr' ? "Vues détaillées des espaces de repos & circulation PMR" : "Detailed views of lounge areas & accessible circulation",
          projectTitle: lang === 'fr' ? "Salle de Pause Accessible" : "Accessible Breakroom"
        }
      ]
    },
    'p6': {
      subtitle: "",
      title: lang === 'fr' ? "Création de Typo" : "Type Design",
      headerDesc: "",
      contextTitle: lang === 'fr' ? "Le Contexte & Le Défi" : "Context & Challenge",
      contextText: lang === 'fr'
        ? "La typographie est l'architecture invisible de tout bon design. Pour affiner mon œil et ma précision, je me suis lancé le défi de concevoir une police de caractère originale de A à Z."
        : "Typography is the invisible architecture of great design. To hone my eye and precision, I challenged myself to design an original typeface from scratch.",
      techTitle: lang === 'fr' ? "Compétences & Outils" : "Skills & Tools",
      skills: {
        col1Label: lang === 'fr' ? "Outils" : "Tools",
        col1Text: "Illustrator, Glyphs",
        col2Label: "Design",
        col2Text: lang === 'fr' ? "Dessin vectoriel, Typographie, Géométrie" : "Vector drawing, Typography, Geometry",
        col3Label: lang === 'fr' ? "Technique" : "Technical",
        col3Text: lang === 'fr' ? "Crénage (Kerning), Ajustements Optiques" : "Kerning, Optical Adjustments"
      },
      images: {
        heroBg: `${import.meta.env.BASE_URL}typo/slide_12.jpg`,
      },
      slides: [
        `${import.meta.env.BASE_URL}typo/slide_01.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_02.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_03.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_04.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_05.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_06.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_07.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_08.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_09.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_10.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_11.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_12.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_13.jpg`,
        `${import.meta.env.BASE_URL}typo/slide_14.jpg`,
      ]
    }
  };
  
  return data[id] || data['p1'];
}
