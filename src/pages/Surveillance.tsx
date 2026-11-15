import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageLayout } from './InnerPages';
import { useLanguage } from '../LanguageContext';
import seo from '../seo.json';

type Faq = { q: string; a: string };
type Content = {
  h1: string;
  intro: string;
  sections: { title: string; text: string }[];
  faqTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  moreLink: string;
};

const CONTENT: Record<'FR' | 'EN', Content> = {
  FR: {
    h1: 'Robot de surveillance autonome : Louis, le chien robot de patrouille',
    intro:
      "Louis est le premier robot de surveillance quadrupède de patrouille autonome développé en France par Polymath Studio. Ce chien robot est conçu pour sécuriser les grands sites ouverts : campus, sites de recherche, sites industriels et tertiaires.",
    sections: [
      {
        title: 'Pourquoi un robot de surveillance ?',
        text:
          "Sur des campus de plusieurs dizaines d'hectares, les caméras fixes laissent inévitablement des angles morts. Mobiliser des agents de sécurité pour les rondes de nuit et de week-end représente un coût important (de 200 k€ à 260 k€ HT par an pour un poste standard) et pèse lourdement sur les équipes. Louis patrouille de façon autonome sur vos terrains : une réponse mobile, discrète et souveraine là où la surveillance statique atteint ses limites.",
      },
      {
        title: 'Un chien robot quadrupède, pensé pour les personnes',
        text:
          "Louis est un robot quadrupède de 0,50 m de hauteur, face à une silhouette humaine de 1,80 m. Son profil bas et peu intimidant évite d'inquiéter étudiants et personnels lors des patrouilles nocturnes. Il intègre la technologie Mobotix et est conçu pour être mobile, sobre, modulaire et respectueux des personnes.",
      },
      {
        title: 'Un robot de surveillance européen et souverain',
        text:
          "Contrairement aux plateformes américaines (soumises au Cloud Act) ou aux matériels asiatiques à la télémétrie opaque, Louis est conçu en France et soumis au droit français et européen (RGPD). Le matériel et le logiciel sont locaux, pour un périmètre de confiance strict, et interopérables avec vos infrastructures existantes.",
      },
      {
        title: 'Durable et réparable',
        text:
          "Louis est conçu pour être entretenu sur site de façon modulaire et mis à jour en continu, afin d'éviter l'obsolescence précoce et de réduire les déchets technologiques.",
      },
    ],
    faqTitle: 'Questions fréquentes sur le robot de surveillance',
    ctaTitle: 'Déployer Louis sur votre site ?',
    ctaText:
      "Nous cherchons des financements et des partenaires (universités, campus de recherche, sites d'entreprise) pour déployer des pilotes de patrouille autonome.",
    ctaButton: 'Contacter notre équipe',
    moreLink: 'Voir la fiche complète du projet Louis',
  },
  EN: {
    h1: 'Autonomous surveillance robot: Louis, the patrol robot dog',
    intro:
      'Louis is the first autonomous quadruped surveillance patrol robot developed in France by Polymath Studio. This robot dog is designed to secure large open sites: campuses, research sites, industrial and commercial facilities.',
    sections: [
      {
        title: 'Why a surveillance robot?',
        text:
          'Across campuses spanning dozens of hectares, stationary cameras inevitably leave blind spots. Deploying security personnel for night and weekend patrols is costly (€200k to €260k excl. VAT per year for a standard station) and places strain on teams. Louis patrols your grounds autonomously: a mobile, discreet and sovereign answer where static surveillance reaches its limits.',
      },
      {
        title: 'A quadruped robot dog designed for people',
        text:
          'Louis is a quadruped robot standing 0.50 m tall, against a 1.80 m human silhouette. Its low, unintimidating profile avoids alarming students and staff during night patrols. It integrates Mobotix technology and is designed to be mobile, restrained, modular and respectful of people.',
      },
      {
        title: 'A European, sovereign surveillance robot',
        text:
          'Unlike American platforms (bound by the Cloud Act) or hardware with opaque telemetry, Louis is engineered in France and subject to French and European privacy law (GDPR). Hardware and software are local, for a strict trust perimeter, and interoperable with your existing infrastructure.',
      },
      {
        title: 'Sustainable and serviceable',
        text:
          'Louis is built for modular field servicing and continuous software upgrades, avoiding early obsolescence and reducing technological waste.',
      },
    ],
    faqTitle: 'Frequently asked questions about the surveillance robot',
    ctaTitle: 'Deploy Louis on your site?',
    ctaText:
      'We are seeking funding and partners (universities, research campuses, corporate facilities) to deploy autonomous patrol pilots.',
    ctaButton: 'Contact our team',
    moreLink: 'See the full Louis project page',
  },
};

export function Surveillance() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];
  const faqs = (seo.routes['/robot-de-surveillance'] as unknown as Record<'FR' | 'EN', { faq: Faq[] }>)[lang].faq;

  return (
    <PageLayout title={c.h1}>
      <article className="max-w-3xl w-full mx-auto space-y-12 pb-8">
        <header className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight leading-tight">{c.h1}</h2>
          <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed">{c.intro}</p>
        </header>

        {c.sections.map((s) => (
          <section key={s.title} className="space-y-3">
            <h2 className="text-lg sm:text-xl font-light text-white uppercase tracking-wider font-mono">{s.title}</h2>
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">{s.text}</p>
          </section>
        ))}

        <section className="space-y-6">
          <h2 className="text-lg sm:text-xl font-light text-white uppercase tracking-wider font-mono">{c.faqTitle}</h2>
          <dl className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-t border-[var(--line-strong)] pt-4">
                <dt className="text-sm sm:text-base text-white font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm sm:text-base text-white/75 font-light leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-[var(--line-strong)] pt-8 space-y-4">
          <h2 className="text-lg sm:text-xl font-light text-white uppercase tracking-wider font-mono">{c.ctaTitle}</h2>
          <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">{c.ctaText}</p>
          <div className="flex flex-wrap gap-6 text-sm uppercase tracking-[0.15em]">
            <Link to="/contact" className="inline-flex items-center gap-2 border border-[var(--line-strong)] px-6 py-3 hover:bg-white hover:text-black transition-colors">
              {c.ctaButton} <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 px-2 py-3 text-white/70 hover:text-white transition-colors">
              {c.moreLink} <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
