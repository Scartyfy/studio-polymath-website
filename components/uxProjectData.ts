import { Language } from '../types';

export interface VerbatimItem {
  id: string;
  quote: {
    fr: string;
    en: string;
  };
  author?: {
    fr: string;
    en: string;
  };
}

export interface QuestionVerbatim {
  question: {
    fr: string;
    en: string;
  };
  subtext?: {
    fr: string;
    en: string;
  };
  verbatims: VerbatimItem[];
}

export interface GalleryPhoto {
  id: string;
  image: string;
  caption?: {
    fr: string;
    en: string;
  };
}

export interface UxProjectContent {
  header: {
    title: { fr: string; en: string };
    subtitle: { fr: string; en: string };
    headerDesc: { fr: string; en: string };
    heroImage: string;
    intro: {
      fr: string;
      en: string;
    };
  };
  fieldResearch: {
    title: { fr: string; en: string };
    subtitle: { fr: string; en: string };
    museums: Array<{
      name: string;
      location: string;
      details: { fr: string; en: string };
      sample: { fr: string; en: string };
    }>;
    stats: {
      totalParticipants: number;
      duration: string;
      methodology: {
        fr: string;
        en: string;
      };
      collectionFormat: {
        fr: string;
        en: string;
      };
    };
    slides: GalleryPhoto[];
    profiles: Array<{
      id: string;
      name: { fr: string; en: string };
      tag: { fr: string; en: string };
      desc: { fr: string; en: string };
    }>;
    questions: QuestionVerbatim[];
  };
  userJourney: {
    title: { fr: string; en: string };
    subtitle: { fr: string; en: string };
    intro: { fr: string; en: string };
    images: GalleryPhoto[];
  };
  inspirations: {
    title: { fr: string; en: string };
    subtitle: { fr: string; en: string };
    intro: { fr: string; en: string };
    images: GalleryPhoto[];
  };
  appPrototype: {
    title: { fr: string; en: string };
    subtitle: { fr: string; en: string };
    arborescence: {
      title: { fr: string; en: string };
      desc: { fr: string; en: string };
      image: string;
    };
    sketches: {
      title: { fr: string; en: string };
      desc: { fr: string; en: string };
      images: GalleryPhoto[];
    };
    mockups: {
      title: { fr: string; en: string };
      desc: { fr: string; en: string };
      images: GalleryPhoto[];
    };
    userTesting: {
      title: { fr: string; en: string };
      desc: { fr: string; en: string };
      image?: string;
      takeaways?: Array<{ fr: string; en: string }>;
    };
    usageScenario: {
      title: { fr: string; en: string };
      desc: { fr: string; en: string };
      images: GalleryPhoto[];
    };
  };
}

export const UX_PROJECT_DATA: UxProjectContent = {
  header: {
    title: {
      fr: "Maquette App UI",
      en: "UI App Prototype"
    },
    subtitle: {
      fr: "Expérience Visiteur & Enquête In Situ",
      en: "Visitor Experience & On-Site Study"
    },
    headerDesc: {
      fr: "Musée d'Orsay & Quai Branly",
      en: "Musée d'Orsay & Quai Branly"
    },
    heroImage: `${import.meta.env.BASE_URL}photo%20ux%20ui/descriptionapp.jpg`,
    intro: {
      fr: "Conception d'une maquette d'application mobile d'accompagnement muséal. Le projet s'appuie sur une enquête terrain menée au Musée d'Orsay et au Musée du Quai Branly à Paris, combinant observations spontanées, 23 entretiens in situ, cartographie du parcours et prototypage d'interface.",
      en: "Design of a museum companion mobile application. Grounded in field research at Musée d'Orsay and Musée du Quai Branly in Paris, blending spontaneous observations, 23 on-site interviews, user journey mapping, and prototype design."
    }
  },

  fieldResearch: {
    title: {
      fr: "Analyse Terrain & Entretiens In Situ",
      en: "Field Research & On-Site Interviews"
    },
    subtitle: {
      fr: "Immersion au Musée d'Orsay et au Musée du Quai Branly (Paris)",
      en: "Field study at Musée d'Orsay & Musée du Quai Branly (Paris)"
    },
    museums: [
      {
        name: "Musée d'Orsay",
        location: "Paris 7e",
        details: {
          fr: "8 binômes et 1 personne seule interviewés",
          en: "8 pairs and 1 solo visitor interviewed"
        },
        sample: {
          fr: "17 participants",
          en: "17 participants"
        }
      },
      {
        name: "Musée du Quai Branly",
        location: "Paris 7e",
        details: {
          fr: "1 trinôme, 1 binôme et 1 personne seule interviewés",
          en: "1 trio, 1 pair and 1 solo visitor interviewed"
        },
        sample: {
          fr: "6 participants",
          en: "6 participants"
        }
      }
    ],
    stats: {
      totalParticipants: 23,
      duration: "5 à 10 min",
      methodology: {
        fr: "Entretiens réalisés directement sur le lieu pendant le parcours de la visite, de manière informelle lors des pauses de repos (bancs, salons, mezzanines).",
        en: "Interviews conducted directly on-site during the museum visit, informally during resting breaks (benches, lounges, rest areas)."
      },
      collectionFormat: {
        fr: "Démarche non intrusive, aucun enregistrement audio pour favoriser la spontanéité totale et mettre les visiteurs à l'aise.",
        en: "Non-intrusive approach, no audio recording to ensure absolute spontaneity and put visitors at ease."
      }
    },
    // =========================================================================
    slides: [],
    profiles: [
      {
        id: "p-experts",
        name: {
          fr: "Experts & Étudiants",
          en: "Experts & Students"
        },
        tag: {
          fr: "Travail & Spécialisation",
          en: "Work & Academic Study"
        },
        desc: {
          fr: "Présents pour leur travail ou leurs études. Ils examinent les détails techniques, le style, les cartels et ont besoin d'informations pointues.",
          en: "Visiting for work or academic studies. Examining technical details, styles, plaques, and seeking precise context."
        }
      },
      {
        id: "p-social",
        name: {
          fr: "Visite Sociale",
          en: "Social Visit"
        },
        tag: {
          fr: "Divertissement & Partage",
          en: "Entertainment & Sharing"
        },
        desc: {
          fr: "Visite à deux, entre amis ou en famille. L'accent est mis sur le plaisir d'être ensemble, le partage d'émotions en direct et l'échange oral.",
          en: "Visiting in pairs, friends or family. Focused on togetherness, live impressions, and conversational exchange."
        }
      },
      {
        id: "p-habits",
        name: {
          fr: "Les Habitués",
          en: "Frequent Visitors"
        },
        tag: {
          fr: "Enrichissement Personnel",
          en: "Personal Enrichment"
        },
        desc: {
          fr: "Fréquentent régulièrement les musées par passion. Ils apprécient la contemplation, découvrent de nouvelles salles et approfondissent leur culture personnelle.",
          en: "Regular museum goers motivated by passion. Enjoy contemplation, wandering into new galleries, and personal culture."
        }
      },
      {
        id: "p-tourists",
        name: {
          fr: "Les Touristes",
          en: "Tourists"
        },
        tag: {
          fr: "Curiosité & Découverte",
          en: "Curiosity & Discovery"
        },
        desc: {
          fr: "Présents par curiosité pour voir les œuvres majeures de Paris. Rythme plus rapide, recherche d'un repérage simple sans surcharge d'informations.",
          en: "Visiting out of curiosity for major highlights. Faster pace, seeking intuitive navigation without information overload."
        }
      }
    ],
    // =========================================================================
    // QUESTIONS & VERBATIMS RECUEILLIS SUR LE TERRAIN
    // =========================================================================
    questions: [
      {
        question: {
          fr: "Pourquoi prenez-vous des photos ?",
          en: "Why do you take photos?"
        },
        subtext: {
          fr: "Comprendre le déclencheur de la prise de vue en cours de visite",
          en: "Understanding the trigger behind taking photos during visits"
        },
        verbatims: [
          {
            id: "v1-1",
            quote: {
              fr: "« Pour garder une trace rapide de ce qui m'a frappé, sinon j'ai l'impression d'oublier 90% de la visite une fois sorti. »",
              en: "“To keep a quick trace of what struck me, otherwise I feel like I forget 90% of the visit once outside.”"
            },
            author: {
              fr: "Visiteur en binôme — Musée d'Orsay",
              en: "Visitor in pair — Musée d'Orsay"
            }
          },
          {
            id: "v1-2",
            quote: {
              fr: "« Je prends l'œuvre en photo, puis tout de suite le petit cartel à côté pour ne pas perdre le titre et le nom de l'artiste. »",
              en: "“I snap a photo of the artwork, then immediately the little label beside it so I don't lose the title and artist name.”"
            },
            author: {
              fr: "Étudiante en art — Musée du Quai Branly",
              en: "Art student — Musée du Quai Branly"
            }
          }
        ]
      },
      {
        question: {
          fr: "Qu'en faites-vous ?",
          en: "What do you do with them?"
        },
        subtext: {
          fr: "L'usage réel des photos capturées une fois la visite terminée",
          en: "The actual fate of photos once the museum visit ends"
        },
        verbatims: [
          {
            id: "v2-1",
            quote: {
              fr: "« Honnêtement ? Elles restent dans ma pellicule avec des milliers d'autres clichés et je ne les regarde presque jamais. »",
              en: "“Honestly? They sit in my camera roll among thousands of photos and I almost never look at them again.”"
            },
            author: {
              fr: "Visiteur régulier — Musée d'Orsay",
              en: "Regular visitor — Musée d'Orsay"
            }
          },
          {
            id: "v2-2",
            quote: {
              fr: "« J'en partage deux ou trois en direct à mes proches sur WhatsApp ou en story, puis elles tombent dans l'oubli. »",
              en: "“I share two or three directly on WhatsApp or story to friends, and then they're forgotten.”"
            },
            author: {
              fr: "Visiteur en couple — Musée du Quai Branly",
              en: "Couple visitor — Musée du Quai Branly"
            }
          }
        ]
      },
      {
        question: {
          fr: "Lisez-vous les écrits ?",
          en: "Do you read the wall labels?"
        },
        subtext: {
          fr: "Rapport aux cartels, textes explicatifs et fiches de salle",
          en: "Relationship with labels, wall texts and explanatory panels"
        },
        verbatims: [
          {
            id: "v3-1",
            quote: {
              fr: "« Seulement les premières lignes si c'est court. Dès que c'est un gros pavé, mes yeux décrochent et j'ai mal aux pieds. »",
              en: "“Only the first few lines if it's short. As soon as it's a huge block of text, I lose focus and my feet hurt.”"
            },
            author: {
              fr: "Visiteur social — Musée d'Orsay",
              en: "Social visitor — Musée d'Orsay"
            }
          },
          {
            id: "v3-2",
            quote: {
              fr: "« S'il y a un groupe devant le cartel, je renonce. Je n'ai pas envie d'attendre pour déchiffrer un texte en petits caractères. »",
              en: "“If there is a crowd in front of the plaque, I give up. I don't want to wait just to decipher small print.”"
            },
            author: {
              fr: "Visiteur seul — Musée du Quai Branly",
              en: "Solo visitor — Musée du Quai Branly"
            }
          }
        ]
      },
      {
        question: {
          fr: "Comment faites-vous pour mémoriser les œuvres ?",
          en: "How do you memorize and retain artworks?"
        },
        subtext: {
          fr: "Mécanismes de rétention et souvenirs post-visite",
          en: "Retention mechanisms, memories and post-visit consolidation"
        },
        verbatims: [
          {
            id: "v4-1",
            quote: {
              fr: "« J'essaie de me concentrer sur une émotion ou un détail marquant, mais après deux heures dans les galeries, tout se mélange. »",
              en: "“I try to anchor an emotion or striking detail, but after two hours in the galleries, everything blends together.”"
            },
            author: {
              fr: "Visiteuse habituée — Musée d'Orsay",
              en: "Frequent visitor — Musée d'Orsay"
            }
          },
          {
            id: "v4-2",
            quote: {
              fr: "« Je me dis que mes photos m'aideront, mais sans repère ni fil conducteur, c'est impossible de refaire le fil de l'histoire. »",
              en: "“I tell myself my photos will help, but without structure or storyline, it's impossible to piece the experience back together.”"
            },
            author: {
              fr: "Visiteur en binôme — Musée du Quai Branly",
              en: "Pair visitor — Musée du Quai Branly"
            }
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 2. USER JOURNEY
  // =========================================================================
  userJourney: {
    title: {
      fr: "User Journey",
      en: "User Journey"
    },
    subtitle: {
      fr: "Cartographie du parcours — Avant, Pendant & Après la visite",
      en: "Journey mapping — Before, During & After the Visit"
    },
    intro: {
      fr: "Identification des étapes clés, des points de contact, des courbes émotionnelles et des opportunités identifiées sur le terrain.",
      en: "Mapping key milestones, touchpoints, emotional curves, and opportunities observed on-site."
    },
    images: [
      {
        id: "uj-1",
        image: `${import.meta.env.BASE_URL}photo%20ux%20ui/userjourney1.jpg`,
        caption: {
          fr: "Phase 1 : Avant la visite — Idée de visite & Organisation logistique",
          en: "Phase 1: Pre-Visit — Visit Idea & Logistics Planning"
        }
      },
      {
        id: "uj-2",
        image: `${import.meta.env.BASE_URL}photo%20ux%20ui/userjourney2.jpg`,
        caption: {
          fr: "Phase 2 : Pendant la visite (Début) — Arrivée, Orientation & Déambulation",
          en: "Phase 2: During Visit (Start) — Arrival, Orientation & Browsing"
        }
      },
      {
        id: "uj-3",
        image: `${import.meta.env.BASE_URL}photo%20ux%20ui/userjourney3.jpg`,
        caption: {
          fr: "Phase 2 : Pendant la visite (Milieu/Fin) — Fatigue & Sortie du musée",
          en: "Phase 2: During Visit (End) — Fatigue & Departure"
        }
      },
      {
        id: "uj-4",
        image: `${import.meta.env.BASE_URL}photo%20ux%20ui/userjiurney4.jpg`,
        caption: {
          fr: "Phase 3 : Après la visite — Retour immédiat & Ancrage mémoriel",
          en: "Phase 3: Post-Visit — Immediate Recall & Long-term Retention"
        }
      }
    ]
  },

  // =========================================================================
  // 3. INSPIRATIONS
  // =========================================================================
  inspirations: {
    title: {
      fr: "Inspirations",
      en: "Inspirations"
    },
    subtitle: {
      fr: "Moodboard visuel, architecture muséale & typographie",
      en: "Visual moodboard, museum architecture & typography"
    },
    intro: {
      fr: "Recherche iconographique et références graphiques : mécaniques de grattage ludique (FDJ), partage instantané (BeReal/Locket), gamification (DuoLingo) et sobriété suisse.",
      en: "Iconographic research and graphic benchmarks: scratch-off mechanics (FDJ), instant sharing (BeReal/Locket), gamification (DuoLingo), and Swiss typographic restraint."
    },
    images: []
  },

  // =========================================================================
  // 4. LA MAQUETTE DE NOTRE APPLICATION
  // =========================================================================
  appPrototype: {
    title: {
      fr: "La Maquette de l'Application",
      en: "Application Prototype"
    },
    subtitle: {
      fr: "Arborescence, sketchs, rendus UI et tests utilisateurs",
      en: "Site map, sketches, UI mockups, and user testing"
    },

    arborescence: {
      title: {
        fr: "Arborescence de l'Application",
        en: "Information Architecture"
      },
      desc: {
        fr: "Structure épurée articulée autour de 5 piliers : Accueil (carte à gratter & QCM), Ma galerie, Studio de jeux, Ajout d'amis et Compte.",
        en: "Clean structure articulated around 5 pillars: Home (scratch card & quiz), My gallery, Game studio, Friend add, and Account."
      },
      image: `${import.meta.env.BASE_URL}photo%20ux%20ui/arborecsence.jpg`
    },

    sketches: {
      title: {
        fr: "Planches de Sketch",
        en: "Sketching Boards"
      },
      desc: {
        fr: "Recherches exploratoires sur papier : cadrage des flux, ergonomie du pouce (one-thumb reach) et interactions de grattage tactile.",
        en: "Paper wireframes: exploring user flows, one-thumb ergonomic reach, and tactile scratch gestures prior to Figma execution."
      },
      images: [
        {
          id: "sk-1",
          image: `${import.meta.env.BASE_URL}photo%20ux%20ui/sketch1.jpg`,
          caption: {
            fr: "Planche 01 : Sketch et Idées — Cadrage des flux, navigation basse au pouce & iconographie",
            en: "Board 01: Sketch and Ideas — User flow layout, bottom thumb-reach navigation & icons"
          }
        },
        {
          id: "sk-2",
          image: `${import.meta.env.BASE_URL}photo%20ux%20ui/sketch2.jpg`,
          caption: {
            fr: "Planche 02 : Les Jeux — Gamification (Studio de jeux, Rat de Musée, IA ou Vrai ?)",
            en: "Board 02: Games & Gamification — Mini-game mechanics (Game studio, Museum Rat, AI vs Real)"
          }
        }
      ]
    },

    mockups: {
      title: {
        fr: "Rendus de Mise en Situation",
        en: "Contextual UI Mockups"
      },
      desc: {
        fr: "Deux planches de rendus haute-fidélité illustrant l'application en conditions réelles, ses écrans clés et les différents modes de jeux.",
        en: "Two high-fidelity mockup boards depicting the companion app held in real conditions and game studio modes."
      },
      images: [
        {
          id: "mk-1",
          image: `${import.meta.env.BASE_URL}photo%20ux%20ui/rendu1.jpg`,
          caption: {
            fr: "",
            en: ""
          }
        },
        {
          id: "mk-2",
          image: `${import.meta.env.BASE_URL}photo%20ux%20ui/rendu2.jpg`,
          caption: {
            fr: "",
            en: ""
          }
        }
      ]
    },

    userTesting: {
      title: {
        fr: "Test Utilisateur",
        en: "User Testing"
      },
      desc: {
        fr: "Expérimentations in situ en conditions réelles avec des utilisateurs sur l'application mobile : validation de l'ergonomie, clarté des flux de jeu et retours d'expérience.",
        en: "On-site user testing in real conditions with the mobile application: validating ergonomics, clarity of game flows, and experiential feedback."
      },
      image: `${import.meta.env.BASE_URL}photo%20ux%20ui/testutilisateurs.jpg`,
      takeaways: []
    },

    usageScenario: {
      title: {
        fr: "Scénario d'Usage Illustré",
        en: "Illustrated Usage Scenario"
      },
      desc: {
        fr: "Déroulement pas-à-pas de l'expérience d'un visiteur : de l'émerveillement au musée et la prise de photo in situ, jusqu'au rituel de grattage quotidien et l'ancrage mémoriel.",
        en: "Step-by-step visitor experience: from museum discovery and on-site photo capture to the daily scratch card ritual and memory consolidation."
      },
      images: [
        {
          id: "su-1",
          image: `${import.meta.env.BASE_URL}photo%20ux%20ui/scenariousage1.jpg`,
          caption: {
            fr: "",
            en: ""
          }
        },
        {
          id: "su-2",
          image: `${import.meta.env.BASE_URL}photo%20ux%20ui/scenariousage2.jpg`,
          caption: {
            fr: "",
            en: ""
          }
        }
      ]
    }
  }
};

