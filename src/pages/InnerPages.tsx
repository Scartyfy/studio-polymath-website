import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { Navigation, Footer } from '../components/Shared';
import { useLanguage } from '../LanguageContext';
import { LiquidButton } from '../components/ui/primitives-buttons-liquid';

function PageLayout({ title, subtitle, children }: { title: string, subtitle?: string, children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="page-layout">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="page-body">
        {subtitle && <div className="page-subtitle">{subtitle}</div>}
        <h1 className="page-title">{title}</h1>
        {children}
      </main>
      
      <Footer />
    </div>
  );
}

export function Manifest() {
  const { t } = useLanguage();
  return (
    <PageLayout title={t('page.manifest.title')} subtitle={t('page.manifest.subtitle')}>
      <article className="max-w-4xl">
        {/* Lead declaration */}
        <div className="text-xl sm:text-2xl md:text-3xl font-extralight text-white leading-relaxed tracking-tight border-b border-[var(--line-strong)] pb-10 mb-12">
          {t('manifest.p1')}
        </div>

        {/* Narrative blocks */}
        <div className="space-y-10 text-base sm:text-lg md:text-xl text-[var(--text-dim)] font-light leading-relaxed">
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
          <div className="relative border-l-2 border-white pl-6 md:pl-8 py-3 my-12 bg-white/[0.02]">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-dimmer)] block mb-2">[ Ligne de mire / Purpose ]</span>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-normal leading-relaxed">
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
        <div className="mt-20 pt-12 border-t border-[var(--line-strong)] flex justify-between items-center">
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
    { name: "Arthur CHAUVIN", role: t('team.role1'), linkedin: "https://www.linkedin.com/in/arthur-chauvin-b798042bb/", img: `${import.meta.env.BASE_URL}arthurpp.jpeg` },
    { name: "Alann SAMSON", role: t('team.role1'), linkedin: "https://www.linkedin.com/in/alann-samson-1735512a1/", img: `${import.meta.env.BASE_URL}alannpp.jpeg` },
    { name: "Joschka MAYER", role: t('team.role1'), linkedin: "https://www.linkedin.com/in/joschkamayer/", img: `${import.meta.env.BASE_URL}jopp.jpeg` },
    { name: "Alec MIGNOT", role: t('team.role1'), linkedin: "https://www.linkedin.com/in/alec-mignot-40bb9430b/", img: `${import.meta.env.BASE_URL}alecpp.jpeg` },
  ];

  return (
    <PageLayout title={t('page.team.title')}>
      <div className="w-full flex flex-col justify-center items-center py-6 sm:py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-14 w-full max-w-5xl justify-items-center items-start">
          {FOUNDERS.map((member, idx) => {
            const initials = member.name.split(' ').map(n => n[0]).join('');
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center w-full group"
              >
                {/* Photo frame centered on the horizontal axis */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border border-[var(--line-strong)] bg-white/[0.02] overflow-hidden relative mb-6 flex items-center justify-center transition-all duration-500 group-hover:border-white">
                  {member.img ? (
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale contrast-[1.08] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                  ) : (
                    <span className="font-mono text-xs sm:text-sm md:text-base text-white/40 tracking-widest group-hover:text-white transition-colors">
                      {initials}
                    </span>
                  )}
                </div>

                {/* Name */}
                <div className="text-base sm:text-lg md:text-xl font-light tracking-wide text-white mb-1.5 whitespace-nowrap">
                  {member.name}
                </div>

                {/* Role */}
                <div className="text-[var(--text-dim)] text-xs uppercase tracking-widest font-mono mb-3">
                  {member.role}
                </div>

                {/* LinkedIn */}
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-dimmer)] hover:text-white transition-colors pb-0.5 border-b border-transparent hover:border-white"
                >
                  LinkedIn ↗
                </a>
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

    try {
      const response = await fetch('https://formsubmit.co/ajax/studiopolymathe.contact@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim() || 'Visiteur du site',
          email: 'contact.visiteur@studiopolymathe.com',
          _subject: subject.trim() 
            ? `[Polymath Studio] ${subject.trim()}` 
            : `[Polymath Studio] Nouveau message de ${name.trim() || 'Visiteur'}`,
          message: message.trim(),
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === 'true' || (data.message && data.message.includes('Activate'))))) {
        setStatus('success');
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
      <div style={{ maxWidth: 620, width: '100%' }}>
        {/* Direct email display */}
        <div className="mb-8 p-4 border border-[var(--line-strong)] bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2.5 text-white/80">
            <Mail className="w-4 h-4 text-white/60 shrink-0" />
            <span className="uppercase tracking-widest text-[var(--text-dim)]">{t('contact.direct')} :</span>
          </div>
          <a 
            href="mailto:studiopolymathe.contact@gmail.com" 
            className="text-white hover:text-white/70 transition-colors uppercase tracking-wider underline underline-offset-4 decoration-white/30 truncate"
          >
            studiopolymathe.contact@gmail.com
          </a>
        </div>

        {status === 'success' ? (
          <div className="p-8 border border-white/20 bg-white/[0.03] backdrop-blur-sm flex flex-col items-center text-center">
            <CheckCircle2 className="w-10 h-10 text-white mb-4 stroke-[1.5px]" />
            <h2 className="text-xl font-light text-white uppercase tracking-wider mb-2 font-mono">
              {t('form.success.title')}
            </h2>
            <p className="text-sm text-white/70 font-light leading-relaxed mb-8 max-w-md">
              {t('form.success.desc')}
            </p>
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
                    href={`mailto:studiopolymathe.contact@gmail.com?subject=${encodeURIComponent(subject || 'Polymath Studio Contact')}&body=${encodeURIComponent(message)}`}
                    className="underline hover:text-white mt-1.5 inline-block text-red-300"
                  >
                    studiopolymathe.contact@gmail.com ↗
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
    </PageLayout>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <PageLayout title={t('page.projects.title')} subtitle={t('page.projects.subtitle')}>
      <div className="w-full max-w-5xl mx-auto space-y-16 py-6 sm:py-10">
        {/* Intro */}
        <p className="text-xl sm:text-2xl text-[var(--text-dim)] font-light leading-relaxed max-w-3xl border-b border-[var(--line-strong)] pb-10">
          {t('projects.intro')}
        </p>

        {/* Featured Project Showcase */}
        <div className="border border-[var(--line-strong)] bg-black/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 relative group overflow-hidden">
          {/* Tech Corner Crosses */}
          <div className="absolute top-2 left-2 text-[10px] font-mono text-white/30 tracking-widest pointer-events-none">[+]</div>
          <div className="absolute top-2 right-2 text-[10px] font-mono text-white/30 tracking-widest pointer-events-none">[+]</div>
          <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/30 tracking-widest pointer-events-none">[+]</div>
          <div className="absolute bottom-2 right-2 text-[10px] font-mono text-white/30 tracking-widest pointer-events-none">[+]</div>

          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--line-strong)]">
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.2em] text-white uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t('projects.featured.badge')}</span>
            </div>
            <div className="text-[11px] font-mono text-[var(--text-dim)] tracking-widest uppercase">
              ROBOTARIUM // UGV-DIV // DEV.LAB
            </div>
          </div>

          {/* Grid with image and details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="relative border border-[var(--line-strong)] overflow-hidden aspect-[16/10] bg-neutral-950 group/img">
                <img 
                  src={`${import.meta.env.BASE_URL}imagejo.jpg`} 
                  alt="Polymath Studio - Robotarium" 
                  className="w-full h-full object-cover grayscale contrast-[1.1] brightness-90 group-hover/img:grayscale-0 group-hover/img:scale-[1.02] transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-white/80 bg-black/70 backdrop-blur-sm px-3 py-1.5 border border-white/10">
                  <span>ROBOTARIUM // UGV DIV</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block"></span>
                    {t('projects.featured.status')}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="text-[var(--text-dim)] uppercase tracking-[0.15em] text-xs font-mono mb-3">
                {t('projects.featured.subtitle')}
              </div>
              <h3 className="text-2xl md:text-3xl font-light mb-4 lowercase leading-tight">
                {t('projects.featured.title')}
              </h3>
              <p className="text-[var(--text-dim)] text-base md:text-lg leading-relaxed mb-6">
                {t('projects.featured.desc')}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 text-[11px] font-mono uppercase text-white/70">
                <span className="px-2.5 py-1 border border-[var(--line-strong)] bg-white/5">
                  Lab: Robotarium
                </span>
                <span className="px-2.5 py-1 border border-[var(--line-strong)] bg-white/5">
                  Suspension Testing
                </span>
                <span className="px-2.5 py-1 border border-[var(--line-strong)] bg-white/5">
                  Dynamic Actuators
                </span>
              </div>

              <div>
                <LiquidButton 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 border border-[var(--line-strong)] px-6 py-3 uppercase tracking-[0.15em] text-xs hover:text-black cursor-pointer overflow-hidden [--liquid-button-color:white] [--liquid-button-background-color:transparent]"
                >
                  {t('home.project.link')} <ArrowUpRight className="w-4 h-4" />
                </LiquidButton>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Exploration cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {[
            {
              num: "01",
              title: t('projects.card1.title'),
              desc: t('projects.card1.desc'),
              tag: t('projects.card1.tag')
            },
            {
              num: "02",
              title: t('projects.card2.title'),
              desc: t('projects.card2.desc'),
              tag: t('projects.card2.tag')
            },
            {
              num: "03",
              title: t('projects.card3.title'),
              desc: t('projects.card3.desc'),
              tag: t('projects.card3.tag')
            }
          ].map((item, idx) => (
            <div key={idx} className="border border-[var(--line-strong)] bg-white/[0.015] p-6 flex flex-col justify-between hover:border-white transition-colors duration-300">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono uppercase text-[var(--text-dimmer)] mb-4">
                  <span>{item.num} //</span>
                  <span>{item.tag}</span>
                </div>
                <h4 className="text-lg font-light text-white mb-3 lowercase">
                  {item.title}
                </h4>
                <p className="text-sm text-[var(--text-dim)] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
