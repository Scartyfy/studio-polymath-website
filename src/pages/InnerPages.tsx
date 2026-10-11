import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight, 
  Cpu, 
  ChevronDown, 
  ChevronRight,
  ShieldCheck, 
  Eye, 
  BatteryCharging, 
  Network, 
  Layers, 
  Activity, 
  Radio, 
  Building2, 
  Check, 
  ArrowRight, 
  Lock, 
  Sliders, 
  Scan, 
  Clock 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation, Footer } from '../components/Shared';
import { useLanguage } from '../LanguageContext';
import { LiquidButton } from '../components/ui/primitives-buttons-liquid';

function PageLayout({ 
  title, 
  subtitle, 
  bgElement, 
  children 
}: { 
  title?: string, 
  subtitle?: string, 
  bgElement?: React.ReactNode, 
  children: React.ReactNode 
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="page-layout relative overflow-hidden">
      {bgElement}
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="page-body relative z-10 pt-20 sm:pt-24 md:pt-28">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}

export function Manifest() {
  const { t } = useLanguage();
  return (
    <PageLayout title={t('page.manifest.title')}>
      <article className="max-w-3xl">
        {/* Lead declaration */}
        <div className="text-base sm:text-lg md:text-xl font-light text-white leading-relaxed border-b border-[var(--line-strong)] pb-8 mb-8">
          {t('manifest.p1')}
        </div>

        {/* Narrative blocks */}
        <div className="space-y-6 text-sm sm:text-base text-[var(--text-dim)] font-light leading-relaxed">
          <p>
            {(() => {
              const text = t('manifest.p2') || '';
              const dotIndex = text.indexOf('.');
              if (dotIndex !== -1) {
                return (
                  <>
                    <strong className="font-medium text-white tracking-wide">{text.slice(0, dotIndex + 1)}</strong>
                    {text.slice(dotIndex + 1)}
                  </>
                );
              }
              return text;
            })()}
          </p>

          {/* Highlight / Core Nature Thesis */}
          <div className="relative border-l-2 border-white pl-5 md:pl-6 py-2 my-8 bg-white/[0.02]">
            <p className="text-base sm:text-lg text-white font-normal leading-relaxed">
              {t('manifest.p3')}
            </p>
          </div>

          <p>
            {t('manifest.p4')}
          </p>

          <p>
            {t('manifest.p5')}
          </p>

          <p>
            {t('manifest.p6')}
          </p>
        </div>

        {/* Footer sign-off */}
        <div className="mt-16 pt-8 border-t border-[var(--line-strong)] flex justify-between items-center">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--text-dimmer)]">
            Polymath Studio — Design & Ingénierie
          </div>
        </div>
      </article>
    </PageLayout>
  );
}

export function Team() {
  const { t } = useLanguage();
  
  const FOUNDERS = [
    { 
      name: "Alec MIGNOT", 
      role: t('team.alec.role'), 
      bio: t('team.alec.bio'),
      skills: [
        { title: t('team.alec.skill1.title'), desc: t('team.alec.skill1.desc') },
        { title: t('team.alec.skill2.title'), desc: t('team.alec.skill2.desc') },
        { title: t('team.alec.skill3.title'), desc: t('team.alec.skill3.desc') },
        { title: t('team.alec.skill4.title'), desc: t('team.alec.skill4.desc') },
      ],
      linkedin: "https://www.linkedin.com/in/alec-mignot-40bb9430b/", 
      img: `${import.meta.env.BASE_URL}alecpp.jpeg` 
    },
    { 
      name: "Arthur CHAUVIN", 
      role: t('team.arthur.role'), 
      bio: t('team.arthur.bio'),
      skills: [
        { title: t('team.arthur.skill1.title'), desc: t('team.arthur.skill1.desc') },
        { title: t('team.arthur.skill2.title'), desc: t('team.arthur.skill2.desc') },
        { title: t('team.arthur.skill3.title'), desc: t('team.arthur.skill3.desc') },
        { title: t('team.arthur.skill4.title'), desc: t('team.arthur.skill4.desc') },
      ],
      linkedin: "https://www.linkedin.com/in/arthur-chauvin-b798042bb/", 
      img: `${import.meta.env.BASE_URL}arthurpp.jpeg` 
    },
    { 
      name: "Alann SAMSON", 
      role: t('team.alann.role'), 
      bio: t('team.alann.bio'),
      skills: [
        { title: t('team.alann.skill1.title'), desc: t('team.alann.skill1.desc') },
        { title: t('team.alann.skill2.title'), desc: t('team.alann.skill2.desc') },
        { title: t('team.alann.skill3.title'), desc: t('team.alann.skill3.desc') },
        { title: t('team.alann.skill4.title'), desc: t('team.alann.skill4.desc') },
      ],
      linkedin: "https://www.linkedin.com/in/alann-samson-1735512a1/", 
      img: `${import.meta.env.BASE_URL}alannpp.jpeg` 
    },
    { 
      name: "Joschka MAYER", 
      role: t('team.joschka.role'), 
      bio: t('team.joschka.bio'),
      skills: [
        { title: t('team.joschka.skill1.title'), desc: t('team.joschka.skill1.desc') },
        { title: t('team.joschka.skill2.title'), desc: t('team.joschka.skill2.desc') },
        { title: t('team.joschka.skill3.title'), desc: t('team.joschka.skill3.desc') },
        { title: t('team.joschka.skill4.title'), desc: t('team.joschka.skill4.desc') },
      ],
      linkedin: "https://www.linkedin.com/in/joschkamayer/", 
      img: `${import.meta.env.BASE_URL}jopp.jpeg` 
    },
  ];

  return (
    <PageLayout title={t('page.team.title')}>
      <div className="w-full flex flex-col justify-center items-center py-6 sm:py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 w-full max-w-5xl">
          {FOUNDERS.map((member, idx) => {
            const initials = member.name.split(' ').map(n => n[0]).join('');
            return (
              <div 
                key={idx} 
                className="flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header: Photo + Info */}
                  <div className="flex items-center gap-5 sm:gap-6 mb-5">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[var(--line-strong)] bg-white/[0.02] overflow-hidden shrink-0 relative transition-all duration-500 group-hover:border-white">
                      {member.img ? (
                        <img 
                          src={member.img} 
                          alt={member.name} 
                          className="w-full h-full object-cover grayscale contrast-[1.08] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                        />
                      ) : (
                        <span className="font-mono text-sm text-white/40 tracking-widest flex items-center justify-center w-full h-full">
                          {initials}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-light text-white tracking-wide mb-1 truncate">
                        {member.name}
                      </h3>
                      <div className="text-[var(--text-dim)] text-xs uppercase tracking-wider font-mono mb-2">
                        {member.role}
                      </div>
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--text-dimmer)] hover:text-white transition-colors pb-0.5 border-b border-transparent hover:border-white"
                      >
                        LinkedIn ↗
                      </a>
                    </div>
                  </div>

                  {/* Bio quote */}
                  <div className="border-l border-white/40 pl-4 py-1 my-5 text-sm sm:text-base text-white/90 font-light leading-relaxed italic">
                    « {member.bio} »
                  </div>

                  {/* Skills / Focus areas */}
                  <div className="space-y-3 pt-5 border-t border-[var(--line-strong)]">
                    {member.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="text-xs leading-relaxed">
                        <span className="font-mono text-white uppercase tracking-wider font-medium block mb-0.5 sm:inline sm:mr-2">
                          {skill.title} :
                        </span>
                        <span className="text-[var(--text-dim)] font-light">
                          {skill.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}

export function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isActivationSent, setIsActivationSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setStatus('error');
      setErrorMessage(t('form.required'));
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    setIsActivationSent(false);

    try {
      const response = await fetch('https://formsubmit.co/ajax/studiopolymath.contact@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim() || 'Visiteur du site',
          email: 'contact@polymath-studio.eu',
          _subject: subject.trim() 
            ? `[Polymath Studio] ${subject.trim()}` 
            : `[Polymath Studio] Nouveau message de ${name.trim() || 'Visiteur'}`,
          message: message.trim(),
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === 'true' || data.success === true))) {
        setStatus('success');
        setName('');
        setSubject('');
        setMessage('');
      } else if (data && data.message && data.message.toLowerCase().includes('activat')) {
        // FormSubmit sent initial activation email to studiopolymath.contact@gmail.com
        setStatus('success');
        setIsActivationSent(true);
        setName('');
        setSubject('');
        setMessage('');
      } else {
        setStatus('error');
        setErrorMessage(data?.message || t('form.error.desc'));
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage(t('form.error.desc'));
    }
  };

  return (
    <PageLayout title={t('page.contact.title')}>
      <div className="pt-6 sm:pt-10 md:pt-14 w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-24">
        <div style={{ maxWidth: 580, width: '100%' }}>
          {/* Direct email display */}
          <div className="mb-8 p-4 border border-[var(--line-strong)] bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2.5 text-white/80">
              <Mail className="w-4 h-4 text-white/60 shrink-0" />
              <span className="uppercase tracking-widest text-[var(--text-dim)]">{t('contact.direct')} :</span>
            </div>
            <a 
              href="mailto:studiopolymath.contact@gmail.com" 
              className="text-white hover:text-white/70 transition-colors uppercase tracking-wider underline underline-offset-4 decoration-white/30 truncate"
            >
              studiopolymath.contact@gmail.com
            </a>
          </div>

          {status === 'success' ? (
            <div className="p-8 border border-white/20 bg-white/[0.03] backdrop-blur-sm flex flex-col items-center text-center">
              <CheckCircle2 className="w-10 h-10 text-white mb-4 stroke-[1.5px]" />
              <h2 className="text-xl font-light text-white uppercase tracking-wider mb-2 font-mono">
                {t('form.success.title')}
              </h2>
              <p className="text-sm text-white/70 font-light leading-relaxed mb-4 max-w-md">
                {t('form.success.desc')}
              </p>
              {isActivationSent && (
                <div className="mb-6 p-3 border border-amber-400/30 bg-amber-950/20 text-amber-200 text-xs font-mono text-left max-w-md">
                  ℹ️ <strong>Première configuration :</strong> FormSubmit a envoyé un e-mail à <code>studiopolymath.contact@gmail.com</code> (vérifiez spams/promotions) contenant un bouton <em>"Activate Form"</em>. Cliquez dessus une fois pour autoriser la réception directe de tous vos messages !
                </div>
              )}
              <button 
                type="button" 
                onClick={() => setStatus('idle')}
                className="btn btn--ghost text-xs tracking-widest uppercase font-mono px-6 py-3 border border-white/20 hover:border-white transition-all"
              >
                {t('form.success.again')}
              </button>
            </div>
          ) : (
            <form className="form" style={{ marginTop: 0 }} onSubmit={handleSubmit}>
              {status === 'error' && (
                <div className="p-4 border border-red-500/30 bg-red-950/20 text-white/90 text-xs font-mono flex items-start gap-3 mb-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="flex-1 leading-relaxed">
                    <div>{errorMessage || t('form.error.desc')}</div>
                    <a 
                      href={`mailto:studiopolymath.contact@gmail.com?subject=${encodeURIComponent(subject || 'Polymath Studio Contact')}&body=${encodeURIComponent(message)}`}
                      className="underline hover:text-white mt-1.5 inline-block text-red-300"
                    >
                      studiopolymath.contact@gmail.com ↗
                    </a>
                  </div>
                </div>
              )}

              <label htmlFor="name" className="visually-hidden">{t('form.name')}</label>
              <input 
                type="text" 
                id="name" 
                className="form__input" 
                placeholder={t('form.name')} 
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={status === 'submitting'}
              />
              
              <label htmlFor="subject" className="visually-hidden">{t('form.subject')}</label>
              <input 
                type="text" 
                id="subject" 
                className="form__input" 
                placeholder={t('form.subject')} 
                value={subject}
                onChange={e => setSubject(e.target.value)}
                disabled={status === 'submitting'}
              />
              
              <label htmlFor="message" className="visually-hidden">{t('form.message')}</label>
              <textarea 
                id="message" 
                required
                rows={4}
                className="form__input resize-none" 
                placeholder={`${t('form.message')} *`} 
                value={message}
                onChange={e => setMessage(e.target.value)}
                disabled={status === 'submitting'}
              ></textarea>
              
              <button 
                type="submit" 
                className="btn btn--ghost" 
                style={{ marginTop: 16 }}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? t('form.sending') : t('form.submit')}
              </button>
            </form>
          )}
        </div>

        {/* Right Emblem Logo - pushed far right */}
        <div className="hidden lg:flex flex-1 justify-end items-center select-none pointer-events-none shrink-0 pr-4 xl:pr-12">
          <img 
            src={`${import.meta.env.BASE_URL}logosimple.png`} 
            alt="Polymath Studio" 
            className="w-64 md:w-80 lg:w-96 xl:w-[420px] h-auto object-contain opacity-60" 
          />
        </div>
      </div>
    </PageLayout>
  );
}

export function Projects() {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCap, setActiveCap] = useState<number>(0);
  const [activeMission, setActiveMission] = useState<number>(0);
  const [activeSite, setActiveSite] = useState<number>(0);
  const [supervisionView, setSupervisionView] = useState<'flow' | 'compare'>('flow');
  const [showFullContext, setShowFullContext] = useState<boolean>(false);

  const metrics = lang === 'FR' ? [
    { value: "200k – 260k €", label: "Coût annuel moyen économisé par poste de nuit & week-end", tag: "OPEX", detail: "Remplacement des rondes répétitives" },
    { value: "3 Heures", label: "Autonomie par cycle avec système de recharge express", tag: "ENDURANCE", detail: "Recharge rapide sur station d'accueil" },
    { value: "0 Donnée", label: "Aucun flux ne quitte votre réseau interne (confidentialité 100%)", tag: "SOUVERAINETÉ", detail: "Zéro cloud tiers, respect RGPD strict" },
    { value: "100%", label: "Navigation autonome sur herbe, escaliers, graviers et dénivelés", tag: "MOBILITÉ", detail: "Adapté à toutes les typologies campus" },
  ] : [
    { value: "€200k – €260k", label: "Annual cost savings per night & weekend guard post", tag: "OPEX", detail: "Relieving repetitive patrol shifts" },
    { value: "3 Hours", label: "Operational cycle endurance with express recharge", tag: "ENDURANCE", detail: "Rapid autonomous docking system" },
    { value: "0 Outbound", label: "Zero video feed leaves your sovereign private network", tag: "SOVEREIGNTY", detail: "Zero 3rd-party cloud, strict GDPR" },
    { value: "100%", label: "Autonomous navigation across grass, gravel, slopes and stairs", tag: "MOBILITY", detail: "Tailored to demanding campus grounds" },
  ];

  const capabilities = [
    { 
      title: t('projects.sheet.cap1.title'), 
      desc: t('projects.sheet.cap1.desc'), 
      tag: lang === 'FR' ? 'TOUS TERRAINS' : 'ALL-TERRAIN',
      badge: '100% AUTONOME',
      image: `${import.meta.env.BASE_URL}robot/patrol-01.jpeg`,
      specs: lang === 'FR' 
        ? ['Herbe, graviers, escaliers & dénivelés', 'Navigation dynamique intérieure & extérieure', 'Zéro intervention humaine requise']
        : ['Grass, gravel, staircases & slopes', 'Dynamic indoor & outdoor navigation', 'Zero human intervention required']
    },
    { 
      title: t('projects.sheet.cap2.title'), 
      desc: t('projects.sheet.cap2.desc'), 
      tag: lang === 'FR' ? 'MOBOTIX SOUVERAIN' : 'SOVEREIGN OPTICS',
      badge: 'ZÉRO BIOMÉTRIE',
      image: `${import.meta.env.BASE_URL}robot/patrol-02.jpeg`,
      specs: lang === 'FR'
        ? ['Capteur optique européen certifié Mobotix', 'Maîtrise totale des flux vidéo', 'Respect strict du RGPD sans biométrie']
        : ['Certified European Mobotix optical sensor', 'Total sovereign control over video feeds', 'Strict GDPR compliance without biometrics']
    },
    { 
      title: t('projects.sheet.cap3.title'), 
      desc: t('projects.sheet.cap3.desc'), 
      tag: lang === 'FR' ? 'TITANE & MODULAIRE' : 'MODULAR TITANIUM',
      badge: 'RÉPARABLE SUR SITE',
      image: `${import.meta.env.BASE_URL}robot/misealechelle.jpeg`,
      specs: lang === 'FR'
        ? ['Châssis haute résistance en titane léger', 'Pattes et batteries remplaçables sur site', 'Conçu en opposition à l\'obsolescence programmée']
        : ['Lightweight high-strength titanium chassis', 'Field-replaceable limbs & battery modules', 'Engineered to combat planned obsolescence']
    },
    { 
      title: t('projects.sheet.cap4.title'), 
      desc: t('projects.sheet.cap4.desc'), 
      tag: lang === 'FR' ? 'CHARGE EXPRESS' : 'RAPID CHARGE',
      badge: '3H PAR CYCLE',
      image: `${import.meta.env.BASE_URL}robot/patrol-03.jpeg`,
      specs: lang === 'FR'
        ? ['Objectif de 3 heures d\'autonomie continue', 'Système de recharge express sur station', 'Reprise automatisée des rondes programmées']
        : ['3-hour continuous operational endurance target', 'Express docking recharge station', 'Automated patrol resumption']
    },
    { 
      title: t('projects.sheet.cap5.title'), 
      desc: t('projects.sheet.cap5.desc'), 
      tag: lang === 'FR' ? 'ONVIF • MILESTONE' : 'ONVIF • MILESTONE',
      badge: 'PLUG & PLAY SOC',
      image: `${import.meta.env.BASE_URL}robot/jo-expertise.jpg`,
      specs: lang === 'FR'
        ? ['Intégration directe dans Milestone & Genetec', 'Conformité totale norme ouverte ONVIF', 'Contrôle direct depuis l\'écran habituel des agents']
        : ['Direct integration into Milestone & Genetec', 'Full open standard ONVIF compliance', 'Control from operators\' standard consoles']
    },
    { 
      title: t('projects.sheet.cap6.title'), 
      desc: t('projects.sheet.cap6.desc'), 
      tag: lang === 'FR' ? 'CHARTE NON ARMÉ' : 'UNARMED CHARTER',
      badge: 'CONFIANCE PUBLIQUE',
      image: `${import.meta.env.BASE_URL}robot/patrol-01.jpeg`,
      specs: lang === 'FR'
        ? ['Certifié strictement non armé via charte publique', 'Silhouette compacte et présence non anxiogène', 'Alliance ingénierie et design centré humain']
        : ['Publicly certified strictly unarmed charter', 'Compact silhouette, non-threatening presence', 'Human-centered union of engineering and design']
    },
  ];

  const missionModes = lang === 'FR' ? [
    {
      id: '01',
      title: 'Ronde Nocturne Autonome',
      period: '22h00 — 06h00',
      target: 'Espaces verts & allées isolées',
      action: 'Couverture continue des angles morts invisibles aux caméras fixes.',
      telemetry: { speed: '4.5 km/h', status: 'PATROUILLE NOMINALE', battery: '88%', vms: 'ONVIF CHIFFRÉ' }
    },
    {
      id: '02',
      title: 'Levée de Doute Express',
      period: 'Instantané (24/7)',
      target: 'Zone d\'alarme périmétrique',
      action: 'Intervention mobile rapide en terrain complexe sans exposer d\'agent.',
      telemetry: { speed: '8.0 km/h', status: 'INTERVENTION EXPRESS', battery: '94%', vms: 'FLUX DIRECT HD' }
    },
    {
      id: '03',
      title: 'Surveillance Périmètre Week-End',
      period: 'Samedi & Dimanche',
      target: 'Campus intégral (10 à 100 ha)',
      action: 'Soulagement des équipes de garde avec alternance patrouille et recharge express.',
      telemetry: { speed: '4.0 km/h', status: 'CYCLE AUTOMATISÉ', battery: '100%', vms: 'SOC ACTIF' }
    }
  ] : [
    {
      id: '01',
      title: 'Nocturnal Autonomous Patrol',
      period: '22:00 — 06:00',
      target: 'Green spaces & isolated paths',
      action: 'Continuous sweep of blind spots beyond stationary camera coverage.',
      telemetry: { speed: '4.5 km/h', status: 'PATROL NOMINAL', battery: '88%', vms: 'ONVIF ENCRYPTED' }
    },
    {
      id: '02',
      title: 'Rapid Alarm Verification',
      period: 'Instantaneous (24/7)',
      target: 'Triggered perimeter alert zone',
      action: 'Swift mobile response across irregular grounds without risking personnel.',
      telemetry: { speed: '8.0 km/h', status: 'RAPID DISPATCH', battery: '94%', vms: 'DIRECT HD FEED' }
    },
    {
      id: '03',
      title: 'Weekend Perimeter Sweep',
      period: 'Saturday & Sunday',
      target: 'Entire campus (10 to 100+ ha)',
      action: 'Relieving on-duty personnel via autonomous shifts and express charging.',
      telemetry: { speed: '4.0 km/h', status: 'AUTOMATED CYCLE', battery: '100%', vms: 'SOC ACTIVE' }
    }
  ];

  const facilitySites = lang === 'FR' ? [
    {
      id: '01',
      title: 'Campus Universitaires & Grandes Écoles',
      scope: '10 à 60+ Hectares',
      detail: 'Grands parcs ouverts, résidences étudiantes, allées arborées et escaliers extérieurs.',
      advantage: 'Présence mobile rassurante pour les étudiants et inspection des recoins sombres.'
    },
    {
      id: '02',
      title: 'Sièges Corporate & Centres R&D',
      scope: '5 à 40+ Hectares',
      detail: 'Parkings paysagers, cours intérieures et abords de bâtiments tertiaires sensibles.',
      advantage: 'Confidentialité totale des images sans aucune fuite vers des clouds tiers.'
    },
    {
      id: '03',
      title: 'Sites Industriels & Plateformes Logistiques',
      scope: '20 à 100+ Hectares',
      detail: 'Voies de circulation poids-lourds, entrepôts, zones de stockage et clôtures distantes.',
      advantage: 'Levée de doute instantanée sans obliger les agents à traverser le site à pied la nuit.'
    },
    {
      id: '04',
      title: 'Complexes Médicaux & Espaces Mixtes',
      scope: '10 à 50+ Hectares',
      detail: 'Espaces partagés nécessitant une surveillance continue mais non anxiogène.',
      advantage: 'Certifié non armé avec silhouette basse respectant la sérénité du public.'
    }
  ] : [
    {
      id: '01',
      title: 'University & Academic Campuses',
      scope: '10 to 60+ Hectares',
      detail: 'Expansive open parks, student residences, tree-lined walkways and outdoor stairways.',
      advantage: 'Reassuring mobile presence for students and elimination of dark nocturnal blind spots.'
    },
    {
      id: '02',
      title: 'Corporate Headquarters & R&D Hubs',
      scope: '5 to 40+ Hectares',
      detail: 'Landscaped parking grounds, inner courtyards and sensitive office perimeters.',
      advantage: 'Strict local privacy guaranteeing zero image leakage to third-party cloud servers.'
    },
    {
      id: '03',
      title: 'Industrial Sites & Logistics Hubs',
      scope: '20 to 100+ Hectares',
      detail: 'Heavy transport lanes, open warehouses, outdoor storage and distant fence perimeters.',
      advantage: 'Instant alarm verification without forcing lone guards into remote outdoor sectors.'
    },
    {
      id: '04',
      title: 'Healthcare & Mixed Public Grounds',
      scope: '10 to 50+ Hectares',
      detail: 'Shared spaces requiring constant surveillance without causing public anxiety.',
      advantage: 'Certified unarmed with a low, calm silhouette respecting public serenity.'
    }
  ];

  const faqs = [
    { 
      tag: lang === 'FR' ? 'OPÉRATIONNEL // HUMAIN' : 'OPERATIONS // PERSONNEL',
      summary: lang === 'FR' ? 'Louis soulage vos agents la nuit et inspecte les angles morts.' : 'Louis relieves guards during night shifts and covers blind spots.',
      q: t('projects.sheet.faq1.q'), 
      a: t('projects.sheet.faq1.a') 
    },
    { 
      tag: lang === 'FR' ? 'SOUVERAINETÉ // RGPD' : 'SOVEREIGNTY // GDPR',
      summary: lang === 'FR' ? 'Conçu en France sous droit français, zéro Cloud Act ni fuite de données.' : 'Engineered in France under EU privacy law, zero Cloud Act leakage.',
      q: t('projects.sheet.faq2.q'), 
      a: t('projects.sheet.faq2.a') 
    },
    { 
      tag: lang === 'FR' ? 'ÉCO-CONCEPTION // INVESTISSEMENT' : 'ECO-DESIGN // INVESTMENT',
      summary: lang === 'FR' ? 'Maintenance modulaire sur site, pièces remplaçables et mises à jour durables.' : 'Modular field maintenance, swappable components and lasting software.',
      q: t('projects.sheet.faq3.q'), 
      a: t('projects.sheet.faq3.a') 
    },
  ];

  const videoBackground = (
    <div className="absolute top-0 left-0 right-0 h-screen min-h-[720px] max-h-[1100px] overflow-hidden pointer-events-none z-0">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover opacity-85 sm:opacity-90"
      >
        <source src={`${import.meta.env.BASE_URL}robot/video-robot.mp4`} type="video/mp4" />
        <source src={`${import.meta.env.BASE_URL}PICS%20PROJET%20ROBOT/VIDEO%20ROBOT.mp4`} type="video/mp4" />
      </video>

      {/* Dégradé noir adouci : subtil et discret uniquement vers le bas */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 8%, rgba(0,0,0,0.15) 18%, transparent 32%)'
        }}
      />
    </div>
  );

  return (
    <PageLayout bgElement={videoBackground}>
      <div className="w-full max-w-5xl mx-auto py-2 sm:py-4 space-y-16 sm:space-y-24">
        {/* Project Header - Full viewport height so photo 1 only appears on scroll */}
        <div className="min-h-[80vh] sm:min-h-[86vh] flex flex-col justify-center pb-8 sm:pb-12">
          <div className="inline-flex items-center text-xs font-mono tracking-[0.25em] text-white/90 uppercase px-3.5 py-1.5 border border-white/20 bg-black/60 backdrop-blur-sm mb-6 w-fit">
            <span>{t('projects.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-8 drop-shadow-sm max-w-4xl">
            {t('projects.main.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-white/90 font-light leading-relaxed border-t border-white/20 pt-8">
            <p className="bg-black/35 backdrop-blur-sm p-4 border border-white/10">{t('projects.intro.p1')}</p>
            <p className="bg-black/35 backdrop-blur-sm p-4 border border-white/10">
              {(() => {
                const text = t('projects.intro.p2') || '';
                const targetFr = 'ingénieurs-designers';
                const targetEn = 'engineer-designers';
                const target = text.includes(targetFr) ? targetFr : text.includes(targetEn) ? targetEn : null;
                if (!target) return text;
                const parts = text.split(target);
                return (
                  <>
                    {parts[0]}
                    <Link 
                      to="/team" 
                      className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white hover:text-white transition-all cursor-pointer font-normal"
                    >
                      {target}
                    </Link>
                    {parts[1]}
                  </>
                );
              })()}
            </p>
          </div>
        </div>

        {/* Robot Presentation Showcase - Première image plein écran avec un grand effet vignette cinématique */}
        <div className="relative left-1/2 -translate-x-1/2 w-screen h-screen min-h-[650px] md:min-h-screen overflow-hidden bg-black my-8 sm:my-16">
          <div className="relative w-full h-full overflow-hidden">
            <img 
              src={`${import.meta.env.BASE_URL}robot/misealechelle.jpeg`}
              alt="Robot quadrupède autonome Polymath"
              className="w-full h-full object-cover object-center scale-[1.02]"
            />
            
            {/* Grand effet vignette cinématique adouci */}
            {/* 1. Vignette radiale douce du centre vers les bords */}
            <div 
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: 'radial-gradient(ellipse at center, transparent 28%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.95) 100%)'
              }}
            />

            {/* 2. Fondu haut et bas pour s'intégrer harmonieusement au fond noir */}
            <div 
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 6%, transparent 18%, transparent 82%, rgba(0,0,0,0.6) 94%, #000000 100%)'
              }}
            />

            {/* 3. Fondu latéral gauche et droite */}
            <div 
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.65) 100%)'
              }}
            />
          </div>
        </div>

        {/* Fiche Solution Détaillée // Pourquoi Louis pour votre campus ? */}
        <section className="space-y-20 pt-2 sm:pt-6">
          {/* En-tête de la fiche & Problématique avec Métriques Clés Dynamiques */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-white/80 uppercase px-3.5 py-1.5 border border-white/20 bg-white/[0.02]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t('projects.sheet.badge')}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight leading-snug max-w-4xl">
                {t('projects.sheet.title')}
              </h3>
            </div>

            {/* Grille de 4 Métriques Chiffrées Animées avec micro-indicateurs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.45)' }}
                  className="p-5 sm:p-6 border border-white/15 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group shadow-lg relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest">
                      {`[ ${metric.tag} ]`}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-mono text-xl sm:text-2xl font-normal text-white tracking-tight mb-2 group-hover:text-white transition-colors">
                      {metric.value}
                    </div>
                    <p className="text-[11px] sm:text-xs text-white/70 font-light leading-relaxed mb-3">
                      {metric.label}
                    </p>
                    <div className="pt-2 border-t border-white/10 font-mono text-[9px] text-white/40 uppercase tracking-wider">
                      {metric.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Vue structurée interactive pour aérer le texte (Défi / Coût / Solution) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 pt-2">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="p-5 sm:p-6 border border-white/15 bg-white/[0.015] hover:border-white/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-white/40 uppercase tracking-widest mb-3">
                    <AlertCircle className="w-3.5 h-3.5 text-white/50" />
                    <span>01 // Défi Campus</span>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-2">
                    {lang === 'FR' ? 'Angles morts des caméras fixes' : 'Blind spots of fixed cameras'}
                  </h4>
                  <p className="text-xs text-white/75 font-light leading-relaxed">
                    {lang === 'FR' 
                      ? 'Sur des dizaines d\'hectares, les caméras fixes ne peuvent pas tout couvrir. Les espaces ouverts laissent inévitablement des zones d\'ombre critiques.'
                      : 'Across sprawling acres, static cameras cannot see everywhere, leaving vulnerable gaps across outdoor sectors.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[10px] text-white/40 uppercase tracking-wider">
                  {lang === 'FR' ? 'Couverture incomplète' : 'Incomplete coverage'}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="p-5 sm:p-6 border border-white/15 bg-white/[0.015] hover:border-white/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-white/40 uppercase tracking-widest mb-3">
                    <Clock className="w-3.5 h-3.5 text-white/50" />
                    <span>02 // Tension Opérationnelle</span>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-2">
                    {lang === 'FR' ? '200k à 260k € HT / an par poste' : '€200k to €260k annual cost'}
                  </h4>
                  <p className="text-xs text-white/75 font-light leading-relaxed">
                    {lang === 'FR'
                      ? 'Mobiliser des agents de sécurité pour des rondes nocturnes répétitives et le week-end pèse lourdement sur les budgets et soumet les effectifs à une forte tension.'
                      : 'Staffing human guards for continuous night and weekend rounds is costly and subjects security teams to immense operational strain.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[10px] text-white/40 uppercase tracking-wider">
                  {lang === 'FR' ? 'Pression budgétaire & RH' : 'Budget & staff strain'}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.19 }}
                className="p-5 sm:p-6 border border-white/20 bg-white/[0.03] hover:border-white/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-white/60 uppercase tracking-widest mb-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    <span>03 // La Réponse Louis</span>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-2">
                    {lang === 'FR' ? 'Patrouille mobile & souveraine' : 'Mobile & sovereign patrol'}
                  </h4>
                  <p className="text-xs text-white/85 font-light leading-relaxed">
                    {lang === 'FR'
                      ? 'Premier robot quadrupède conçu en France par Polymath Studio. Il patrouille en toute autonomie là où vos caméras ne voient pas, de manière intégrée et souveraine.'
                      : 'Engineered in France by Polymath Studio. It autonomously patrols beyond fixed camera reach, delivering mobile, integrated, and sovereign security.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[10px] text-emerald-400/80 uppercase tracking-wider">
                  {lang === 'FR' ? 'Conçu en France' : 'Engineered in France'}
                </div>
              </motion.div>
            </div>

            {/* Accordéon texte complet pour lecture exhaustive sans encombrer la vue */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowFullContext(!showFullContext)}
                className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white uppercase tracking-wider py-1 cursor-pointer transition-colors"
              >
                <span>{showFullContext ? (lang === 'FR' ? '[-] Réduire le texte de cadrage' : '[-] Collapse full brief') : (lang === 'FR' ? '[+] Lire le texte de cadrage officiel' : '[+] Read official solution brief')}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showFullContext ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showFullContext && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 mt-3 border border-white/15 bg-white/[0.015] backdrop-blur-sm">
                      <p className="text-sm text-white/80 font-light leading-relaxed">
                        {t('projects.sheet.intro')}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Ce que sait faire Louis (L'approche Polymath Studio) - Hub Interactif avec Photos & Télémétrie */}
          <div className="space-y-8 pt-4">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-b border-white/15 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
            >
              <div>
                <span className="font-mono text-[11px] text-white/40 uppercase tracking-[0.2em] block mb-1">
                  {t('projects.sheet.approach.subtitle')}
                </span>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-light text-white tracking-tight">
                  {t('projects.sheet.approach.title')}
                </h4>
              </div>
              <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest px-2.5 py-1 border border-white/15 bg-white/[0.02]">
                6 Capacités Fondamentales
              </span>
            </motion.div>

            {/* Sélecteur d'onglets ergonomique et animé */}
            <div className="flex flex-wrap gap-2 pt-1 pb-2">
              {capabilities.map((cap, idx) => {
                const isActive = activeCap === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveCap(idx)}
                    className={`font-mono text-xs px-3.5 py-2.5 border transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                      isActive 
                        ? 'border-white bg-white text-black font-medium shadow-md' 
                        : 'border-white/15 bg-white/[0.02] text-white/70 hover:border-white/35 hover:text-white'
                    }`}
                  >
                    <span className={isActive ? 'text-black/60' : 'text-white/40'}>
                      {`0${idx + 1}`}
                    </span>
                    <span>{cap.title.split(' : ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Vitrine active détaillée avec photo de test & radar overlay */}
            <div className="border border-white/20 bg-white/[0.02] p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCap}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Colonne Gauche : Descriptif et spécifications clés */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-white/40 tracking-wider">
                        {`SPEC // 0${activeCap + 1}`}
                      </span>
                      <span className="font-mono text-[10px] text-white/80 uppercase px-2 py-0.5 border border-white/20 bg-white/[0.03]">
                        {capabilities[activeCap].tag}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-400 uppercase px-2 py-0.5 border border-emerald-400/30 bg-emerald-400/5">
                        {capabilities[activeCap].badge}
                      </span>
                    </div>

                    <h5 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                      {capabilities[activeCap].title}
                    </h5>

                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                      {capabilities[activeCap].desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      {capabilities[activeCap].specs.map((item, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-3 text-xs sm:text-sm text-white/70 font-light">
                          <Check className="w-3.5 h-3.5 text-white shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Colonne Droite : Cadre visuel photo avec overlay HUD télémétrique */}
                  <div className="lg:col-span-5 relative group">
                    <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/20 bg-black">
                      <img 
                        src={capabilities[activeCap].image} 
                        alt={capabilities[activeCap].title}
                        className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700" 
                      />

                      {/* Repères HUD & Télémétrie */}
                      <div className="absolute top-3 left-3 font-mono text-[9px] text-white/70 tracking-widest px-2 py-0.5 bg-black/70 backdrop-blur-sm border border-white/15">
                        HUD // LIVE_FEED
                      </div>

                      <div className="absolute bottom-3 right-3 font-mono text-[9px] text-white/70 tracking-widest px-2 py-0.5 bg-black/70 backdrop-blur-sm border border-white/15">
                        {`LOUIS_SYS // 0${activeCap + 1}`}
                      </div>

                      {/* Repères de coin */}
                      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-white/40" />
                      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-white/40" />

                      {/* Ligne de scan radar animée */}
                      <motion.div
                        animate={{ y: ['0%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                        className="absolute inset-x-0 h-[1px] bg-white/30 pointer-events-none"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Grille des 6 capacités pour survol et exploration rapide */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {capabilities.map((cap, idx) => {
                const isSelected = activeCap === idx;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    onClick={() => setActiveCap(idx)}
                    className={`p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                      isSelected 
                        ? 'border-white/50 bg-white/[0.04] shadow-lg' 
                        : 'border-white/10 bg-white/[0.015] hover:border-white/30 hover:bg-white/[0.03]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                          {`0${idx + 1} // SPÉCIFICATION`}
                        </span>
                        <span className="font-mono text-[9px] text-white/50 uppercase tracking-wider px-1.5 py-0.5 border border-white/10 bg-white/[0.02]">
                          {cap.tag}
                        </span>
                      </div>
                      <h5 className="text-sm sm:text-base font-medium text-white mb-2 group-hover:text-white transition-colors">
                        {cap.title}
                      </h5>
                      <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-3">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/40 group-hover:text-white transition-colors">
                      <span>{isSelected ? (lang === 'FR' ? 'Affichage actif' : 'Currently active') : (lang === 'FR' ? 'Explorer la spécification' : 'Inspect specification')}</span>
                      <ArrowRight className={`w-3 h-3 transition-transform ${isSelected ? 'translate-x-1 text-white' : ''}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Simulateur Interactif de Modes de Mission (Ajoute une dynamique animée et fluide) */}
          <div className="border border-white/15 bg-white/[0.02] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/15 pb-4">
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] text-white/40 uppercase tracking-widest block mb-1">
                  Simulation Opérationnelle
                </span>
                <h4 className="text-lg sm:text-xl font-light text-white tracking-tight">
                  {lang === 'FR' ? 'Scénarios de Patrouille en Conditions Réelles' : 'Field Mission Deployment Scenarios'}
                </h4>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ROUNDS_ENGINE // RUNNING</span>
              </div>
            </div>

            {/* Boutons sélecteurs de scénarios */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {missionModes.map((mission, idx) => {
                const isActive = activeMission === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveMission(idx)}
                    className={`p-4 text-left border transition-all cursor-pointer ${
                      isActive 
                        ? 'border-white bg-white/[0.06] text-white' 
                        : 'border-white/10 bg-white/[0.015] text-white/60 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">
                      {`MODE // ${mission.id}`}
                    </div>
                    <div className="text-sm font-medium text-white mb-1">
                      {mission.title}
                    </div>
                    <div className="font-mono text-[10px] text-white/50">
                      {mission.period}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Tableau de bord télémétrique animé du scénario actif */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMission}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="p-5 border border-white/10 bg-black/60 grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs"
              >
                <div>
                  <span className="text-white/40 block text-[10px] uppercase mb-1">Zone Couverte</span>
                  <span className="text-white font-medium">{missionModes[activeMission].target}</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase mb-1">Vitesse Ronde</span>
                  <span className="text-white font-medium">{missionModes[activeMission].telemetry.speed}</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase mb-1">Autonomie Batterie</span>
                  <span className="text-white font-medium">{missionModes[activeMission].telemetry.battery}</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase mb-1">Liaison VMS</span>
                  <span className="text-emerald-400 font-medium">{missionModes[activeMission].telemetry.vms}</span>
                </div>
                <div className="md:col-span-4 pt-3 border-t border-white/10 text-white/80 font-sans text-xs sm:text-sm font-light">
                  <span className="font-mono text-white/40 text-[11px] mr-2">[ACTION]</span>
                  {missionModes[activeMission].action}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Supervision Centralisée & Typologie des sites avec Pipeline & Matrice */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Boîte Principale Supervision */}
            <div className="p-6 sm:p-8 border border-white/15 bg-white/[0.015] hover:border-white/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] sm:text-[11px] text-white/40 uppercase tracking-widest">
                      Architecture // VMS & SOC
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest px-2 py-0.5 border border-emerald-400/20 bg-emerald-400/5">
                      Réseau Local Confiné
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    {t('projects.sheet.supervision.title')}
                  </h4>
                </div>

                {/* Switcher d'affichage Flux vs Comparatif */}
                <div className="flex items-center gap-1.5 p-1 border border-white/15 bg-black/40 font-mono text-[11px] w-fit">
                  <button
                    type="button"
                    onClick={() => setSupervisionView('flow')}
                    className={`px-3 py-1 cursor-pointer transition-colors ${
                      supervisionView === 'flow' ? 'bg-white text-black font-medium' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {lang === 'FR' ? 'Flux Réseau' : 'Network Flow'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSupervisionView('compare')}
                    className={`px-3 py-1 cursor-pointer transition-colors ${
                      supervisionView === 'compare' ? 'bg-white text-black font-medium' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {lang === 'FR' ? 'Souveraineté vs Cloud' : 'Sovereignty Matrix'}
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-8 max-w-4xl">
                {t('projects.sheet.supervision.desc')}
              </p>

              {supervisionView === 'flow' ? (
                /* Pipeline Animé de transmission des données sans aucune fuite cloud */
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-[11px]">
                    <div className="p-4 border border-white/15 bg-black/50 flex flex-col justify-between relative overflow-hidden">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/40 text-[9px] uppercase tracking-wider">01 // Émetteur</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-white font-medium text-xs">Robot Louis (Mobotix)</span>
                      <span className="text-white/50 text-[10px] mt-1 font-sans font-light">Optique haute définition, capteurs embarqués</span>
                    </div>

                    <div className="p-4 border border-white/15 bg-black/50 flex flex-col justify-between relative overflow-hidden">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/40 text-[9px] uppercase tracking-wider">02 // Canal Chiffré</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <span className="text-white font-medium text-xs">Norme ONVIF Ouverte</span>
                      <span className="text-white/50 text-[10px] mt-1 font-sans font-light">Réseau local sécurisé, zéro sortie cloud</span>
                    </div>

                    <div className="p-4 border border-white/15 bg-black/50 flex flex-col justify-between relative overflow-hidden">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/40 text-[9px] uppercase tracking-wider">03 // Supervision SOC</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-white font-medium text-xs">Milestone • Genetec</span>
                      <span className="text-white/50 text-[10px] mt-1 font-sans font-light">Levée de doute sur les écrans habituels</span>
                    </div>
                  </div>

                  {/* Ligne animée représentant le flux local confiné */}
                  <div className="p-3 border border-white/10 bg-white/[0.01] flex items-center justify-between font-mono text-[10px] text-white/50">
                    <span className="flex items-center gap-2">
                      <Lock className="w-3 h-3 text-emerald-400" />
                      <span>PERIMÈTRE CONFINÉ : AUCUN FLUX VIDÉO NE QUITTE VOTRE INFRASTRUCTURE PRIVÉE</span>
                    </span>
                    <span className="text-emerald-400 uppercase font-medium">100% SOUVERAIN</span>
                  </div>
                </div>
              ) : (
                /* Matrice comparative Souveraineté Polymath vs Solutions US / Asie */
                <div className="border border-white/15 overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="border-b border-white/15 bg-white/[0.04] text-[10px] uppercase text-white/50">
                        <th className="p-3.5">Critère</th>
                        <th className="p-3.5 text-white/40">Solutions Concurrentes (US / Asie)</th>
                        <th className="p-3.5 text-white font-medium bg-white/[0.03]">Louis (Polymath Studio)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 font-light">
                      <tr>
                        <td className="p-3.5 font-medium text-white">Flux Vidéo</td>
                        <td className="p-3.5 text-white/50">Serveurs distants / Cloud externe obligatoire</td>
                        <td className="p-3.5 text-white bg-white/[0.02] font-normal">100% Réseau Local Confiné (LAN)</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-white">Cadre Juridique</td>
                        <td className="p-3.5 text-white/50">Soumis au Cloud Act US ou télémétrie opaque</td>
                        <td className="p-3.5 text-white bg-white/[0.02] font-normal">Conçu en France, RGPD & droit français</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-white">Intégration Logicielle</td>
                        <td className="p-3.5 text-white/50">Application fermée imposée, coût de licence</td>
                        <td className="p-3.5 text-white bg-white/[0.02] font-normal">Norme ONVIF ouverte sur vos VMS existants</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-white">Biométrie & Éthique</td>
                        <td className="p-3.5 text-white/50">Reconnaissance faciale intrusive fréquente</td>
                        <td className="p-3.5 text-white bg-white/[0.02] font-normal">Zéro biométrie, certifié non armé</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Typologies des Sites // Pour quels sites ? */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/15 pb-3">
                <div>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                    Typologies Cibles
                  </span>
                  <h4 className="text-lg sm:text-xl font-light text-white tracking-tight">
                    {t('projects.sheet.sites.title')}
                  </h4>
                </div>
                <span className="font-mono text-[11px] text-white/50">
                  {t('projects.sheet.sites.desc')}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {facilitySites.map((site, idx) => {
                  const isSiteActive = activeSite === idx;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.4)' }}
                      onClick={() => setActiveSite(idx)}
                      className={`p-5 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                        isSiteActive 
                          ? 'border-white/40 bg-white/[0.04]' 
                          : 'border-white/10 bg-white/[0.015] hover:border-white/25 hover:bg-white/[0.025]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[10px] text-white/40">{`SITE // ${site.id}`}</span>
                          <span className="font-mono text-[9px] text-white/50 uppercase">{site.scope}</span>
                        </div>
                        <h5 className="text-sm font-medium text-white mb-2">{site.title}</h5>
                        <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                          {site.detail}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-white/10 font-mono text-[10px] text-white/60">
                        {site.advantage}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Questions fréquentes (FAQ) - Accordéon interactif épuré avec animations */}
          <div className="space-y-5 pt-4 border-t border-white/15">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="font-mono text-[11px] text-white/40 uppercase tracking-[0.2em] block mb-1">
                FAQ // Clarifications
              </span>
              <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                {t('projects.sheet.faq.title')}
              </h4>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`border transition-all duration-300 overflow-hidden ${
                      isOpen ? 'border-white/35 bg-white/[0.03]' : 'border-white/10 bg-white/[0.015] hover:border-white/25 hover:bg-white/[0.02]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="font-mono text-[10px] text-white/40 tracking-wider">
                          {faq.tag}
                        </span>
                        <span className="text-sm sm:text-base font-normal text-white group-hover:text-white/90 transition-colors">
                          {faq.q}
                        </span>
                      </div>
                      <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center shrink-0 group-hover:border-white/40 transition-colors">
                        <ChevronDown 
                          className={`w-3.5 h-3.5 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`}
                        />
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/5 space-y-3">
                            <div className="font-mono text-[11px] text-emerald-400/90 pl-1 border-l-2 border-emerald-400">
                              {faq.summary}
                            </div>
                            <div className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                              {faq.a}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section: Joschka's Calgary Quadruped Research (Stage & R&D) */}
        <div className="space-y-6 border-t border-[var(--line-strong)] pt-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-light text-white mb-3">
              {t('projects.jo.title')}
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-light max-w-3xl leading-relaxed">
              {(() => {
                const text = t('projects.jo.desc') || '';
                const target = 'Joschka Mayer';
                if (!text.includes(target)) return text;
                const parts = text.split(target);
                return (
                  <>
                    {parts[0]}
                    <Link 
                      to="/team" 
                      className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white hover:text-white transition-all cursor-pointer font-normal"
                    >
                      {target}
                    </Link>
                    {parts[1]}
                  </>
                );
              })()}
            </p>
          </div>

          {/* Research images & documentation frame - Mise en avant du tableau des compétences */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Primary image */}
            <div className="border border-[var(--line-strong)] bg-black overflow-hidden group h-full">
              <div className="aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-full w-full overflow-hidden bg-neutral-950 relative min-h-[300px]">
                <img 
                  src={`${import.meta.env.BASE_URL}robot/jo-expertise.jpg`}
                  alt="Travaux et expertise robotique quadrupède"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Technical skills card - Mis en avant */}
            <div className="border border-white/20 bg-white/[0.02] p-6 sm:p-8 space-y-6 font-mono text-xs flex flex-col justify-between shadow-xl">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <div className="text-white uppercase tracking-wider font-medium text-sm">
                    <span>{lang === 'FR' ? 'Tableau des Compétences' : 'Competencies Matrix'}</span>
                  </div>
                  <span className="text-[10px] tracking-widest text-white/50 uppercase border border-white/20 px-2 py-0.5">
                    R&D
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 border border-white/20 bg-white/[0.04] flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                    <span className="text-white text-xs font-medium tracking-wide">Reinforcement Learning</span>
                  </div>

                  <div className="p-3 border border-white/10 bg-white/[0.015] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                    <span className="text-white/90 text-xs font-light">Architecture logicielle ROS / ROS 2</span>
                  </div>

                  <div className="p-3 border border-white/10 bg-white/[0.015] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                    <span className="text-white/90 text-xs font-light">Fusion de capteurs LiDAR, IMU & caméras embarquées</span>
                  </div>

                  <div className="p-3 border border-white/10 bg-white/[0.015] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                    <span className="text-white/90 text-xs font-light">Traitement bord-machine temps réel faible latence</span>
                  </div>

                  <div className="p-3 border border-white/10 bg-white/[0.015] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                    <span className="text-white/90 text-xs font-light">Conception de bancs d'essais et de transmission</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-[var(--line-strong)] pt-14 pb-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center text-xs font-mono tracking-[0.25em] text-white/90 uppercase px-3.5 py-1.5 border border-white/20 bg-white/[0.03] mb-4">
            <span>{t('projects.cta.badge')}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-light text-white mb-3">
            {t('projects.cta.title')}
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-dim)] font-light max-w-xl mb-8 leading-relaxed">
            {t('projects.cta.desc')}
          </p>
          <LiquidButton 
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 border border-[var(--line-strong)] px-8 py-4 uppercase tracking-[0.15em] text-xs hover:text-black cursor-pointer overflow-hidden [--liquid-button-color:white] [--liquid-button-background-color:transparent]"
          >
            {t('projects.cta.button')} <ArrowUpRight className="w-4 h-4" />
          </LiquidButton>
        </div>
      </div>
    </PageLayout>
  );
}
