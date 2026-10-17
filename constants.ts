
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: { fr: "That's my jam", en: "That's my jam" },
    category: { fr: 'Entrepreneuriat', en: 'Entrepreneurship' },
    description: { 
      fr: 'Créer That\'s my jam a été mon épreuve du feu pour fusionner toutes mes expertises. De la structuration robuste de la base de données à la direction artistique, en passant par le design UX/UI, j\'ai piloté la création de ce produit de A à Z. Ce projet entrepreneurial m\'a confronté aux réalités du terrain : gérer les contraintes administratives, la comptabilité et la stratégie sociale, tout en maintenant une conception strictement centrée sur l\'utilisateur. C\'est la preuve que je peux non seulement concevoir un produit, mais aussi le faire naître et le diriger.',
      en: 'Creating That\'s my jam was my trial by fire to fuse all my expertise. From robust database structuring to art direction, through UX/UI design, I piloted the creation of this product from A to Z. This entrepreneurial project confronted me with the realities of the field: managing administrative constraints, accounting, and social strategy, while maintaining a strictly user-centered design. It\'s proof that I can not only design a product, but also bring it to life and direct it.'
    },
    image: 'https://drive.google.com/thumbnail?id=12Y1whGrGWg2l--aMALl6DM2Y_IJWkgoo&sz=w1000',
    gallery: []
  },
  {
    id: 'p2',
    title: { fr: 'Projet SNCF', en: 'SNCF Project' },
    category: { fr: 'Partenaire', en: 'Partner' },
    description: { 
      fr: 'Travailler avec un acteur majeur comme la SNCF exigeait une approche à la fois techniquement irréprochable et parfaitement adaptée aux besoins des utilisateurs finaux. Sur ce projet, j\'ai agi comme le trait d\'union entre l\'ingénierie pure et le design global. Mon bagage technique m\'a permis de comprendre et d\'intégrer les contraintes systémiques, tandis que ma vision de designer a garanti une solution finale ergonomique, fluide et orientée vers l\'humain.',
      en: 'Working with a major player like SNCF required an approach that was both technically impeccable and perfectly adapted to the needs of end users. On this project, I acted as the link between pure engineering and global design. My technical background allowed me to understand and integrate systemic constraints, while my designer vision guaranteed a final ergonomic, fluid, and human-oriented solution.'
    },
    image: 'https://drive.google.com/thumbnail?id=1lLITLZdFeR9_07zkoQxYjThbcnY7DTku&sz=w1000',
    gallery: []
  },
  {
    id: 'p3',
    title: { fr: 'Concept-car', en: 'Concept Car' },
    category: { fr: 'Design automobile', en: 'Automotive Design' },
    description: {
      fr: 'Exploration stylistique, morphologique et recherche aérodynamique. Présentation de deux concept cars d\'exception : Lobster Car et Porsche 754 Concept. Des esquisses manuelles d\'idéation jusqu\'aux visuels photographiques et planches de style.',
      en: 'Stylistic and morphological exploration with aerodynamic sculpting. Presentation of two concept cars: Lobster Car and Porsche 754 Concept. Spanning from hand sketches and ideation boards to photographic track visuals.'
    },
    image: './ppconceptcar.png',
    gallery: ['./IMG_4351.jpg', './car1.jpg', './car4.jpg', './car2.jpg', './car3.jpg', './car5.jpg', './1.jpg', './4.jpg', './2.jpg', './3.jpg']
  },
  {
    id: 'p4',
    title: { fr: 'Maquette APP UX/UI', en: 'UX/UI App Prototype' },
    category: { fr: 'Design Interface & Recherche', en: 'Interface Design & Research' },
    description: {
      fr: 'Conception d\'une application muséale mobile de bout en bout, ancrée dans une enquête terrain au Musée d\'Orsay et au Musée du Quai Branly (23 participants interviewés). De l\'analyse des verbatims au User Journey, jusqu\'aux sketchs, maquettes interactives et scénario d\'usage.',
      en: 'End-to-end design of a museum companion mobile app, grounded in field research at Musée d\'Orsay and Musée du Quai Branly (23 participants interviewed). From qualitative verbatim analysis and User Journey to sketching, UI mockups, and usage scenarios.'
    },
    image: './ux_cover.png',
    gallery: [],
    pdfUrl: 'https://drive.google.com/file/d/1jJGwkYIGr3go1w2FGDS6b6XGvN1AarIy/preview'
  },
  {
    id: 'p6',
    title: { fr: 'Création de Typo', en: 'Type Design' },
    category: { fr: 'Typographie', en: 'Typography' },
    description: {
      fr: 'La typographie est l\'intersection parfaite entre la rigueur mathématique et l\'expression artistique. La création de cette police de caractère originale témoigne de mon souci du détail et de ma patience. Chaque courbe, chaque espacement et chaque proportion ont été pensés pour créer un équilibre visuel cohérent. C\'est un exercice de précision extrême qui nourrit quotidiennement ma pratique du design d\'interface.',
      en: 'Typography is the perfect intersection between mathematical rigor and artistic expression. The creation of this original typeface bears witness to my attention to detail and patience. Every curve, spacing, and proportion was thought out to create a coherent visual balance. It is an exercise in extreme precision that fuels my interface design practice daily.'
    },
    image: 'https://drive.google.com/thumbnail?id=18wDDKBDGx9-iNKOM-WwpVAspPNVjrmfP&sz=w1000',
    gallery: [],
    pdfUrl: 'https://drive.google.com/file/d/1oD9b05hL91gJgi0PasOhIs1tbRs_LZjK/preview'
  },
  {
    id: 'p5',
    title: { fr: 'Matière & Maquette', en: 'Material & Making' },
    category: { fr: 'Prototypage Physique', en: 'Physical Prototyping' },
    description: {
      fr: 'Exploration de la matière et prototypage physique à travers 4 réalisations concrètes : réplique de casque Daft Punk au FabLab, sculpture artistique hybride, siège mobile ergonomique pour crèche et maquette 1/20 d\'une salle de pause adaptée aux personnes en situation de handicap.',
      en: 'Hands-on material exploration and physical prototyping across 4 tangible projects: FabLab Daft Punk helmet replica, hybrid organic sculpture, ergonomic mobile daycare stool, and 1:20 architectural model of an accessible breakroom.'
    },
    image: 'https://drive.google.com/thumbnail?id=1z-ZZdWXI2DyLbJ_6nSgWxZaKrIDcejox&sz=w1000',
    gallery: []
  }
];

export const INTRO_SCROLL_HEIGHT = 1200;
