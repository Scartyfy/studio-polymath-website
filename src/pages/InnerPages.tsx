import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, CheckCircle2, AlertCircle, ArrowUpRight, ArrowLeft, ArrowUp, Cpu, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { Navigation, Footer } from '../components/Shared';
import { useLanguage } from '../LanguageContext';
import { LiquidButton } from '../components/ui/primitives-buttons-liquid';

export function PageLayout({ 
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
      <div className="w-full flex flex-col items-center justify-center">
        <article className="max-w-3xl w-full mx-auto text-center">
          {/* Pavé de texte épuré centré */}
          <div className="space-y-6 text-sm sm:text-base text-white/85 font-light leading-relaxed text-center">
            <p>{t('manifest.p1')}</p>
            <p>{t('manifest.p2')}</p>
            <p>{t('manifest.p3')}</p>
            <p>{t('manifest.p4')}</p>
            <p>{t('manifest.p5')}</p>
            <p>{t('manifest.p6')}</p>
          </div>

          {/* Conclusion / Signoff */}
          <div className="mt-16 pt-8 border-t border-[var(--line-strong)] space-y-1.5 flex flex-col items-center text-center">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white font-medium">
              {t('manifest.conclusion1')}
            </p>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[var(--text-dimmer)]">
              {t('manifest.conclusion2')}
            </p>
          </div>
        </article>
      </div>
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
                        LinkedIn<span className="hidden md:inline"> ↗</span>
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
                  ℹ️ <strong>{t('form.activation.title')}</strong> {t('form.activation.desc')}
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
                      studiopolymath.contact@gmail.com
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

const STATUS_ITEMS = [
  { k: 's2', st: 'done' },
  { k: 's6', st: 'done' },
  { k: 's3', st: 'done' },
  { k: 's4', st: 'doing' },
  { k: 's5', st: 'next' },
] as const;

/* Frise d'avancement : une barre se remplit au scroll et allume les points un à un */
function StatusTimeline({ t }: { t: (k: string) => string }) {
  const ref = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [tops, setTops] = useState<number[]>([]);
  const [lit, setLit] = useState(0);
  const lastLit = STATUS_ITEMS.map((i) => i.st).lastIndexOf('doing');

  useEffect(() => {
    const measure = () => {
      if (!ref.current) return;
      const base = ref.current.getBoundingClientRect().top;
      setTops(dotRefs.current.map((d) => (d ? d.getBoundingClientRect().top - base + d.offsetHeight / 2 : 0)));
    };
    measure();
    window.addEventListener('resize', measure);
    const id = window.setTimeout(measure, 600);
    return () => { window.removeEventListener('resize', measure); window.clearTimeout(id); };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  const target = tops[lastLit] ?? 0;
  const fill = useTransform(scrollYProgress, [0, 0.9], [0, target], { clamp: true });
  useMotionValueEvent(fill, 'change', (v) => {
    setLit(tops.filter((tp, i) => i <= lastLit && v >= tp - 2).length);
  });

  return (
    <div ref={ref} className="relative ml-2 space-y-6">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/15" />
      <motion.div className="absolute left-0 top-0 w-px bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ height: fill }} />
      {STATUS_ITEMS.map(({ k, st }, i) => {
        const on = i < lit;
        return (
          <div key={k} className="relative pl-7 sm:pl-9">
            <span
              ref={(el) => { dotRefs.current[i] = el; }}
              className={`absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full border transition-all duration-500 ${
                on
                  ? st === 'doing'
                    ? 'bg-black border-white shadow-[0_0_10px_rgba(255,255,255,0.9)] animate-pulse'
                    : 'bg-white border-white shadow-[0_0_10px_rgba(255,255,255,0.7)]'
                  : 'bg-black border-white/30'
              }`}
            />
            <div className={`transition-opacity duration-500 ${on || st === 'next' ? 'opacity-100' : 'opacity-35'}`}>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h4 className={`text-base sm:text-lg ${st === 'next' ? 'text-white/60' : 'text-white'} font-normal`}>{t(`v2.${k}.t`)}</h4>
                <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${
                  st === 'done' ? 'border-white/40 text-white/80' : st === 'doing' ? 'border-white text-white' : 'border-white/15 text-white/40'
                }`}>
                  {t(`v2.status.${st}`)}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed max-w-2xl">{t(`v2.${k}.d`)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const ECO_CLIENTS = [
  { name: 'Saur', logo: 'saur.png', tag: 'validated', h: 'h-14 sm:h-16' },
  { name: 'Parc Spirou Provence', logo: 'spirou.png', tag: 'interest', h: 'h-16 sm:h-20' },
  { name: 'RAID — Police nationale', logo: 'raid.png', tag: 'interest', h: 'h-16 sm:h-20' },
] as const;

/* Mobotix : logo, chiffres, puis sous-branche des clients, et le robot Louis qui fait le lien */
function MobotixEcosystem({ t }: { t: (k: string) => string }) {
  const base = import.meta.env.BASE_URL;
  const view = { once: true, amount: 0.3 } as const;
  return (
    <div className="space-y-10">
      {/* En-tête Mobotix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-4">
          <motion.img
            src={`${base}partners/mobotix.png`}
            alt="Mobotix"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.6 }}
            className="h-9 sm:h-11 w-auto"
          />
          <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">{t('v2.mbx.title')}</h3>
          <p className="text-sm sm:text-base text-white/75 font-light">{t('v2.mbx.lead')}</p>
          <p className="text-sm sm:text-base text-white/65 font-light leading-relaxed max-w-xl border-l-2 border-white/50 pl-4">{t('v2.mbx.desc')}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map((n) => (
            <div key={n} className="border border-white/10 p-5">
              <div className="text-3xl sm:text-4xl font-light text-white tracking-tight whitespace-nowrap">{t(`v2.mbx.n${n}`)}</div>
              <div className="text-xs sm:text-sm text-white/55 font-light mt-1">{t(`v2.mbx.l${n}`)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sous-branche : clients de Mobotix  →  Louis */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-stretch border-t border-white/10 pt-10">
        {/* Clients */}
        <div className="relative">
          <div className="font-mono text-[11px] text-white/40 uppercase tracking-[0.2em] mb-5">{t('v2.eco.clients')}</div>
          <div className="relative pl-7">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={view}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute left-0 top-0 bottom-6 w-px bg-white/40 origin-top"
            />
            <div className="space-y-4">
              {ECO_CLIENTS.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={view}
                  transition={{ duration: 0.55, delay: 0.5 + i * 0.25 }}
                  className="relative flex flex-col sm:flex-row items-center gap-3 sm:gap-5 border border-white/10 bg-black/40 px-5 py-4 hover:border-white/30 transition-colors"
                >
                  <span className="absolute -left-7 top-1/2 w-7 h-px bg-white/40" />
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={view}
                    transition={{ delay: 0.7 + i * 0.25, type: 'spring', stiffness: 300 }}
                    className="absolute -left-[9px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"
                  />
                  <div className="w-28 sm:w-32 shrink-0 flex items-center justify-center">
                    <img src={`${base}partners/${c.logo}`} alt={c.name} className={`${c.h} w-auto max-w-full object-contain`} loading="lazy" />
                  </div>
                  <span className={`sm:ml-auto font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border whitespace-nowrap ${
                    c.tag === 'validated' ? 'border-white/60 text-white' : 'border-white/20 text-white/55'
                  }`}>
                    {t(`v2.eco.tag.${c.tag === 'validated' ? 'validated' : 'interest'}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <p className="text-xs sm:text-sm text-white/55 font-light leading-relaxed mt-5 max-w-md">{t('v2.eco.need')}</p>
        </div>

        {/* Connecteur animé : Louis répond au besoin des clients */}
        <div className="flex flex-col items-center justify-center gap-3 py-2 lg:px-2 text-white/70">
          <span className="font-mono text-[10px] uppercase tracking-widest text-center max-w-[9rem]">{t('v2.eco.arrow2')}</span>
          <div className="lg:hidden relative w-px h-16 bg-white/25 overflow-hidden">
            <motion.span className="absolute left-[-3px] w-2 h-2 rounded-full bg-white"
              animate={{ y: [64, 0], opacity: [0, 1, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
          </div>
          <ArrowUp className="lg:hidden w-4 h-4" />
          <div className="hidden lg:block relative h-px w-24 bg-white/25 overflow-hidden">
            <motion.span className="absolute top-[-3px] w-2 h-2 rounded-full bg-white"
              animate={{ x: [96, 0], opacity: [0, 1, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
          </div>
          <ArrowLeft className="hidden lg:block w-4 h-4" />
        </div>

        {/* Polymath / Louis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={view}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border border-white/25 bg-white/[0.03] p-5 sm:p-6 flex flex-col justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <img src={`${base}logo_simple.png`} alt="Polymath Studio" className="h-8 w-auto" loading="lazy" />
            <span className="text-white/40 text-lg font-light">+</span>
            <img src={`${base}partners/mobotix.png`} alt="Mobotix" className="h-4 sm:h-5 w-auto" loading="lazy" />
            <span className="ml-auto font-mono text-[11px] text-white/60 uppercase tracking-[0.18em]">{t('v2.eco.polymath')}</span>
          </div>
          <div className="aspect-[16/10] overflow-hidden bg-white">
            <img src={`${base}robot/robot2.jpg`} alt="Louis" className="w-full h-full object-contain" loading="lazy" />
          </div>
          <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">{t('v2.eco.polymath.d')}</p>
        </motion.div>
      </div>
    </div>
  );
}

export function Projects() {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: t('projects.sheet.faq1.q'), a: t('projects.sheet.faq1.a') },
    { q: t('projects.sheet.faq2.q'), a: t('projects.sheet.faq2.a') },
    { q: t('projects.sheet.faq3.q'), a: t('projects.sheet.faq3.a') },
  ];

  const videoBackground = (
    <div className="absolute top-0 left-0 right-0 h-screen min-h-[720px] max-h-[1100px] overflow-hidden pointer-events-none z-0">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover opacity-75 sm:opacity-80"
      >
        <source src={`${import.meta.env.BASE_URL}robot/video-robot.mp4`} type="video/mp4" />
        <source src={`${import.meta.env.BASE_URL}PICS%20PROJET%20ROBOT/VIDEO%20ROBOT.mp4`} type="video/mp4" />
      </video>

      {/* Voile tamisé très léger */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

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

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-8 drop-shadow-sm max-w-4xl">
            {t('projects.main.title')}
          </h1>

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
              src={`${import.meta.env.BASE_URL}robot/robot1.jpg`}
              alt="Louis, robot quadrupède de patrouille autonome conçu par Polymath Studio"
              className="w-full h-full object-cover object-[40%_center] scale-[1.02]"
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

            {/* Annotation animée épurée au scroll : Ligne technique pointant le robot Louis */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="absolute z-20 pointer-events-none"
              style={{
                left: '40.5%',
                top: '50%'
              }}
            >
              <div className="relative">
                {/* 1. Point discret sur le robot */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]" />
                </div>

                {/* 2. Ligne technique SVG ultra-fine vers la droite et le bas (Desktop) */}
                <div className="hidden sm:block absolute overflow-visible pointer-events-none" style={{ top: '0px', left: '0px', width: '130px', height: '35px' }}>
                  <svg width="130" height="35" viewBox="0 -35 130 35" className="overflow-visible" style={{ marginTop: "-35px" }}>
                    <motion.path 
                      d="M 0,0 L 40,-28 L 120,-28"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.75)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    />
                  </svg>
                </div>

                {/* 2bis. Ligne technique SVG vers la droite et le bas (Mobile) */}
                <div className="sm:hidden absolute overflow-visible pointer-events-none" style={{ top: '0px', left: '0px', width: '70px', height: '30px' }}>
                  <svg width="70" height="30" viewBox="0 -30 70 30" className="overflow-visible" style={{ marginTop: "-30px" }}>
                    <motion.path 
                      d="M 0,0 L 22,-18 L 55,-18"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.75)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    />
                  </svg>
                </div>

                {/* 3. Texte épuré au maximum : "Louis, le robot de surveillance français" */}
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -translate-y-1/2 pointer-events-auto"
                  style={{
                    top: '-28px',
                    left: '126px'
                  }}
                >
                  <div className="hidden sm:inline-flex items-center text-xs md:text-sm tracking-wide text-white whitespace-nowrap px-2.5 py-1 bg-black/60 backdrop-blur-sm border border-white/15">
                    <span className="font-medium text-white">Louis</span>
                    <span className="text-white/80 font-light">
                      {t('projects.callout.desc')}
                    </span>
                  </div>
                </motion.div>

                {/* 3bis. Version mobile épurée */}
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="sm:hidden absolute -translate-y-1/2 pointer-events-auto"
                  style={{
                    top: '-18px',
                    left: '60px'
                  }}
                >
                  <div className="inline-block text-[11px] leading-tight tracking-wide text-white w-[150px] px-2 py-1 bg-black/60 backdrop-blur-sm border border-white/15">
                    <span className="font-medium text-white">Louis</span>
                    <span className="text-white/80 font-light">
                      {t('projects.callout.desc')}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <section className="space-y-20 sm:space-y-28 pt-2 sm:pt-6">
          {/* Avancement : où en est le projet */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center text-[10px] sm:text-xs font-mono tracking-[0.25em] text-white/70 uppercase px-3.5 py-1.5 border border-white/20 bg-white/[0.02]">
                {t('v2.status.badge')}
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">{t('v2.status.title')}</h3>
              <p className="text-sm sm:text-base text-white/70 font-light max-w-2xl">{t('v2.status.sub')}</p>
            </div>
            <StatusTimeline t={t} />
          </div>

          {/* Partenaire Mobotix + écosystème */}
          <MobotixEcosystem t={t} />

          {/* Le problème */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center border-y border-white/15 py-12 sm:py-16">
            <div className="space-y-6">
              <div className="font-mono text-[11px] text-white/40 uppercase tracking-[0.2em]">{t('v2.problem.badge')}</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-snug">{t('v2.problem.lead')}</h3>
              <ul className="space-y-4 text-sm sm:text-base font-light text-white/75">
                <li className="border-l-2 border-white/60 pl-4"><span className="text-white font-normal">{t('v2.problem.t1')}</span> : {t('v2.problem.d1')}</li>
                <li className="border-l-2 border-white/60 pl-4"><span className="text-white font-normal">{t('v2.problem.t2')}</span> : {t('v2.problem.d2')}</li>
              </ul>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight">{t('v2.problem.num')}</div>
              <div className="text-base sm:text-lg text-white/60 font-light mt-2">{t('v2.problem.unit')}</div>
              <div className="text-[11px] sm:text-xs text-white/35 font-light mt-3">{t('v2.problem.src')}</div>
            </div>
          </div>

          {/* Ce que fait Louis */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="font-mono text-[11px] text-white/40 uppercase tracking-[0.2em]">{t('v2.does.badge')}</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight max-w-3xl leading-snug">{t('v2.does.title')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[1, 2, 3].map((n) => (
                <div key={n} className="p-6 sm:p-7 border border-white/10 bg-white/[0.015]">
                  <div className="font-mono text-[10px] sm:text-[11px] text-white/40 uppercase tracking-widest mb-3">{`0${n}`}</div>
                  <h5 className="text-lg font-medium text-white mb-2.5">{t(`v2.does.t${n}`)}</h5>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">{t(`v2.does.d${n}`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture modulaire */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="font-mono text-[11px] text-white/40 uppercase tracking-[0.2em]">{t('v2.arch.badge')}</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">{t('v2.arch.title')}</h3>
              <p className="text-sm sm:text-base text-white/70 font-light max-w-2xl">{t('v2.arch.sub')}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
              <figure className="lg:col-span-3 border border-white/15 bg-white overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}robot/robot4.jpg`}
                  alt={t('v2.arch.caption')}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </figure>
              <div className="lg:col-span-2 space-y-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="p-4 sm:p-5 border border-white/10 bg-white/[0.015]">
                    <h5 className="text-sm sm:text-base font-medium text-white mb-1">{t(`v2.arch.m${n}.t`)}</h5>
                    <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">{t(`v2.arch.m${n}.d`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Idéation */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="font-mono text-[11px] text-white/40 uppercase tracking-[0.2em]">{t('v2.idea.badge')}</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">{t('v2.idea.title')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { src: 'robot3.jpg', c: 'v2.idea.c2' },
                { src: 'robot2.jpg', c: 'v2.idea.c3' },
              ].map((it) => (
                <figure key={it.src} className="space-y-3">
                  <div className="aspect-[4/3] overflow-hidden border border-white/15 bg-neutral-950">
                    <img
                      src={`${import.meta.env.BASE_URL}robot/${it.src}`}
                      alt={t(it.c)}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="font-mono text-[11px] text-white/50 uppercase tracking-wider">{t(it.c)}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Pourquoi Louis */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">{t('v2.why.title')}</h3>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white">{t('v2.why.sub')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 md:divide-x md:divide-white/20">
              <div className="md:pr-10 border-t border-white/25 pt-5 opacity-70">
                <div className="font-mono text-[11px] text-white/50 uppercase tracking-widest mb-2">{t('v2.why.others')}</div>
                <h4 className="text-xl font-medium text-white/80 mb-4">{t('v2.why.others.t')}</h4>
                <ul className="space-y-2 text-sm text-white/60 font-light list-disc pl-5">
                  {[1, 2, 3, 4].map((n) => <li key={n}>{t(`v2.why.o${n}`)}</li>)}
                </ul>
              </div>
              <div className="md:pl-10 border-t border-white pt-5">
                <div className="font-mono text-[11px] text-white uppercase tracking-widest mb-2">{t('v2.why.us')}</div>
                <h4 className="text-xl font-medium text-white mb-4">{t('v2.why.us.t')}</h4>
                <ul className="space-y-2 text-sm text-white/90 font-light list-disc pl-5">
                  {[1, 2, 3, 4].map((n) => <li key={n}>{t(`v2.why.u${n}`)}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Questions fréquentes (FAQ) - Accordéon interactif épuré */}
          <div className="space-y-4 pt-4 border-t border-white/15">
            <div className="mb-4">
              <span className="font-mono text-[11px] text-white/40 uppercase tracking-[0.2em] block mb-1">
                {t('projects.sheet.faq_badge')}
              </span>
              <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                {t('projects.sheet.faq.title')}
              </h4>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-white/10 bg-white/[0.015] hover:border-white/25 transition-colors overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="text-sm sm:text-base font-normal text-white">
                        {faq.q}
                      </span>
                      <ChevronDown 
                        className={`w-4 h-4 text-white/50 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/5 text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pourquoi nous : légitimité de l'équipe + CTO */}
        <div className="space-y-14 border-t border-[var(--line-strong)] pt-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="font-mono text-[11px] text-white/40 uppercase tracking-[0.2em]">{t('v2.us.badge')}</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">{t('v2.us.title')}</h3>
            </div>
            <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed max-w-3xl">{t('v2.us.p')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {['alann', 'alec', 'arthur', 'joschka'].map((m, i) => (
                <motion.div
                  key={m}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-white/10 bg-white/[0.015] p-5"
                >
                  <div className="text-base font-medium text-white capitalize mb-1.5">{m}</div>
                  <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">{t(`v2.us.${m}`)}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-white/55 font-light">{t('v2.us.cyb')}</p>
          </div>

          {/* CTO : version condensée */}
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-6 md:gap-10 items-center">
            <div className="border border-[var(--line-strong)] bg-black overflow-hidden group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src={`${import.meta.env.BASE_URL}robot/jo-expertise.jpg`}
                  alt={t('projects.jo.img_alt')}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-light text-white">{t('projects.jo.title')}</h4>
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
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
              <div className="flex flex-wrap gap-2 pt-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span key={n} className="font-mono text-[10px] sm:text-[11px] text-white/70 border border-white/15 px-2.5 py-1">
                    {t(`projects.skills.skill${n}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-[var(--line-strong)] pt-14 pb-8 flex flex-col items-center text-center">
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
