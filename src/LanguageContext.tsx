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
    'home.timeline3.subtitle': 'Network',
    'home.timeline3.title': 'Contact',
    'home.timeline3.desc': 'Initiate the dialogue. Send us your requests or projects, our team will study each proposal carefully.',
    'home.timeline3.link': 'Read more',
    'quote.text': '« I did not know I was dreaming. It was human vocabulary that taught me. »',
    'quote.author': '— Isaac Asimov, Robot Dreams',
    'footer.home': 'Home',
    'footer.manifest': 'Manifesto',
    'footer.team': 'Team',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal Mentions & Copyrights',
    'footer.rights': '© 2026 Polymath Studio. All rights reserved.',
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
    'home.timeline3.subtitle': 'Réseau',
    'home.timeline3.title': 'Contact',
    'home.timeline3.desc': 'Initiez le dialogue. Transmettez-nous vos requêtes ou vos projets, notre équipe étudiera chaque proposition avec attention.',
    'home.timeline3.link': 'En savoir plus',
    'quote.text': '« Je ne savais pas que je rêvais. C\'est le vocabulaire humain qui me l\'a appris. »',
    'quote.author': '— Isaac Asimov, Le Robot qui rêvait',
    'footer.home': 'Accueil',
    'footer.manifest': 'Manifeste',
    'footer.team': 'Équipe',
    'footer.contact': 'Contact',
    'footer.legal': 'Mentions légales & Copyrights',
    'footer.rights': '© 2026 Polymath Studio. Tous droits réservés.',
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
  const [lang, setLang] = useState<Language>('FR');

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations.FR?.[key] ?? translations.EN?.[key] ?? key;
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
