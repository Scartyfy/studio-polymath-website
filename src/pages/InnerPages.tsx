import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, CheckCircle2, AlertCircle, ArrowUpRight, Shield, Cpu, Footprints, Wrench, Eye } from 'lucide-react';
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
    <PageLayout title={t('page.manifest.title')}>
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
      <div style={{ maxWidth: 620, width: '100%' }}>
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
    </PageLayout>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <PageLayout title={t('page.projects.title')}>
      <div className="w-full max-w-5xl mx-auto py-4 sm:py-8 space-y-16 sm:space-y-24">
        {/* Project Header */}
        <div>
          <div className="inline-flex items-center text-xs font-mono tracking-[0.25em] text-white/80 uppercase px-3.5 py-1.5 border border-[var(--line-strong)] bg-white/[0.02] mb-6">
            <span>{t('projects.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-8">
            {t('projects.main.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-white/80 font-light leading-relaxed border-t border-[var(--line-strong)] pt-8">
            <p>{t('projects.intro.p1')}</p>
            <p>{t('projects.intro.p2')}</p>
          </div>
        </div>

        {/* Robot Presentation Showcase - In Order */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--line-strong)] pb-3">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-white/70" />
              <span>{t('projects.night.badge')}</span>
            </div>
            <div className="font-mono text-[11px] text-[var(--text-dim)] uppercase tracking-wider">
              Capteurs Mobotix • Autonomie Tout-Terrain
            </div>
          </div>

          {/* 1st Image in Order: Gemini_Generated_Image_9y27vu9y27vu9y27.jpeg */}
          <div className="border border-[var(--line-strong)] bg-black overflow-hidden group">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full max-h-[580px] overflow-hidden bg-neutral-950">
              <img 
                src={`${import.meta.env.BASE_URL}robot/patrol-01.jpeg`}
                alt="Robot quadrupède autonome de patrouille Polymath"
                className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />

              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest uppercase bg-black/80 px-2.5 py-1 border border-white/20 text-white/90">
                [ 01 // VUE PRINCIPALE CAMPUS ]
              </div>
              <div className="absolute top-4 right-4 font-mono text-[10px] tracking-widest uppercase bg-black/80 px-2.5 py-1 border border-white/20 text-white/70 hidden sm:block">
                [ MOBOTIX VISION SYSTEM ]
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <div className="font-mono text-xs text-white/90 bg-black/80 backdrop-blur-sm p-3 border border-white/10 max-w-2xl">
                  {t('projects.gallery.img1')}
                  <div className="text-[11px] text-[var(--text-dim)] font-light mt-1">
                    {t('projects.night.caption')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd & 3rd Images in Order: Gemini_Generated_Image_r8ap09r8ap09r8ap.jpeg & Gemini_Generated_Image_m6ybzim6ybzim6yb.jpeg */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 2nd Image */}
            <div className="border border-[var(--line-strong)] bg-black overflow-hidden group flex flex-col justify-between">
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-950 relative">
                <img 
                  src={`${import.meta.env.BASE_URL}robot/patrol-02.jpeg`}
                  alt="Patrouille tout-terrain de nuit - Robot quadrupède"
                  className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest bg-black/80 px-2 py-0.5 border border-white/20 text-white/80">
                  02 // RONDE NOCTURNE
                </div>
              </div>
              <div className="p-4 border-t border-[var(--line-strong)] bg-white/[0.015] font-mono text-xs text-white/80">
                {t('projects.gallery.img2')}
              </div>
            </div>

            {/* 3rd Image */}
            <div className="border border-[var(--line-strong)] bg-black overflow-hidden group flex flex-col justify-between">
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-950 relative">
                <img 
                  src={`${import.meta.env.BASE_URL}robot/patrol-03.jpeg`}
                  alt="Insertion campus et design non anxiogène - Robot quadrupède"
                  className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest bg-black/80 px-2 py-0.5 border border-white/20 text-white/80">
                  03 // PRÉSENCE SÉCURISANTE
                </div>
              </div>
              <div className="p-4 border-t border-[var(--line-strong)] bg-white/[0.015] font-mono text-xs text-white/80">
                {t('projects.gallery.img3')}
              </div>
            </div>
          </div>

          {/* Dynamic locomotion video preview */}
          <div className="border border-[var(--line-strong)] bg-black overflow-hidden group">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--line-strong)] bg-white/[0.015] font-mono text-[11px] text-[var(--text-dim)] uppercase tracking-wider">
              <span>{t('projects.gallery.video')}</span>
              <span className="text-white/60">[ TÉLÉMÉTRIE EN DIRECT ]</span>
            </div>
            <div className="relative aspect-video w-full max-h-[380px] bg-neutral-950 flex items-center justify-center overflow-hidden">
              <video 
                src={`${import.meta.env.BASE_URL}dogpostit.mp4`}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </div>
        </div>

        {/* 4 Technical Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="p-5 border border-[var(--line-strong)] bg-white/[0.015]">
            <Footprints className="w-5 h-5 text-white/70 mb-3 stroke-[1.5]" />
            <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-2">{t('projects.pillar1.title')}</h4>
            <p className="text-xs text-[var(--text-dim)] font-light leading-relaxed">{t('projects.pillar1.desc')}</p>
          </div>
          <div className="p-5 border border-[var(--line-strong)] bg-white/[0.015]">
            <Shield className="w-5 h-5 text-white/70 mb-3 stroke-[1.5]" />
            <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-2">{t('projects.pillar2.title')}</h4>
            <p className="text-xs text-[var(--text-dim)] font-light leading-relaxed">{t('projects.pillar2.desc')}</p>
          </div>
          <div className="p-5 border border-[var(--line-strong)] bg-white/[0.015]">
            <Cpu className="w-5 h-5 text-white/70 mb-3 stroke-[1.5]" />
            <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-2">{t('projects.pillar3.title')}</h4>
            <p className="text-xs text-[var(--text-dim)] font-light leading-relaxed">{t('projects.pillar3.desc')}</p>
          </div>
          <div className="p-5 border border-[var(--line-strong)] bg-white/[0.015]">
            <Wrench className="w-5 h-5 text-white/70 mb-3 stroke-[1.5]" />
            <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-2">{t('projects.pillar4.title')}</h4>
            <p className="text-xs text-[var(--text-dim)] font-light leading-relaxed">{t('projects.pillar4.desc')}</p>
          </div>
        </div>

        {/* Section: Scale & Dimensioning Diagram (0.50m vs 1.80m) */}
        <div className="space-y-6 border-t border-[var(--line-strong)] pt-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-dimmer)] block mb-2">
              [ Ergonomie & Échelle Humaine ]
            </span>
            <h3 className="text-xl sm:text-2xl font-light text-white mb-3">
              {t('projects.scale.title')}
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-light max-w-2xl leading-relaxed">
              {t('projects.scale.desc')}
            </p>
          </div>

          {/* SVG Technical Dimensioning Diagram */}
          <div className="border border-[var(--line-strong)] bg-black/60 p-6 sm:p-10 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-3/5">
                <svg viewBox="0 0 500 220" className="w-full h-auto text-white select-none">
                  {/* Ground line */}
                  <line x1="20" y1="190" x2="480" y2="190" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="25" y="206" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace">SOL / GROUND REFERENCE</text>

                  {/* Human silhouette (1.80m = 160 units) */}
                  <g opacity="0.85">
                    {/* Head */}
                    <circle cx="110" cy="40" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    {/* Torso & legs */}
                    <path d="M 110 52 L 110 120 M 110 120 L 95 190 M 110 120 L 125 190 M 88 75 L 132 75" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Human Dimension line */}
                    <line x1="65" y1="28" x2="65" y2="190" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                    <line x1="60" y1="28" x2="70" y2="28" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                    <line x1="60" y1="190" x2="70" y2="190" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                    <text x="55" y="112" fill="#fff" fontSize="10" fontFamily="monospace" textAnchor="end">1,80 m</text>
                    <text x="110" y="16" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="monospace" textAnchor="middle">{t('projects.scale.human')}</text>
                  </g>

                  {/* Quadruped robot silhouette (0.50m = 44 units) */}
                  <g opacity="0.95">
                    {/* Chassis body */}
                    <rect x="270" y="146" width="110" height="24" rx="4" fill="rgba(255,255,255,0.06)" stroke="currentColor" strokeWidth="1.5" />
                    {/* Sensor head / camera mount */}
                    <polygon points="380,150 405,153 400,165 380,165" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
                    <circle cx="400" cy="158" r="3" fill="#ffffff" />
                    {/* Legs */}
                    <polyline points="280,170 270,182 275,190" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="295,170 302,180 300,190" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                    <polyline points="360,170 352,182 355,190" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="375,170 382,180 380,190" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />

                    {/* Robot Dimension line */}
                    <line x1="435" y1="146" x2="435" y2="190" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
                    <line x1="430" y1="146" x2="440" y2="146" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
                    <line x1="430" y1="190" x2="440" y2="190" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
                    <text x="448" y="172" fill="#ffffff" fontSize="10" fontFamily="monospace" textAnchor="start">0,50 m</text>
                    <text x="335" y="136" fill="rgba(255,255,255,0.9)" fontSize="10" fontFamily="monospace" textAnchor="middle">{t('projects.scale.robot')}</text>
                  </g>

                  {/* Horizontal visual alignment bar */}
                  <line x1="110" y1="146" x2="270" y2="146" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" strokeDasharray="2 2" />
                  <text x="190" y="142" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace" textAnchor="middle">HAUTEUR GARROT &lt; GENOU HUMAIN</text>
                </svg>
              </div>

              <div className="w-full md:w-2/5 font-mono text-xs text-white/70 space-y-3 border-t md:border-t-0 md:border-l border-[var(--line-strong)] pt-4 md:pt-0 md:pl-6">
                <div className="text-white uppercase tracking-widest font-medium">
                  {t('projects.scale.ratio')}
                </div>
                <p className="font-sans text-xs text-[var(--text-dim)] font-light leading-relaxed">
                  Hauteur réduite en dessous de la ligne d'horizon visuelle humaine : les usagers du campus perçoivent immédiatement un équipement utilitaire au sol, sans domination visuelle ni caractère intimidant.
                </p>
                <div className="text-[10px] text-white/60 bg-white/[0.02] border border-white/10 p-2">
                  ℹ️ {t('projects.scale.placeholder')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Joschka's Calgary Quadruped Research (Stage & R&D) */}
        <div className="space-y-6 border-t border-[var(--line-strong)] pt-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-dimmer)] block mb-2">
              [ Fondations Scientifiques & Systèmes ]
            </span>
            <h3 className="text-xl sm:text-2xl font-light text-white mb-3">
              {t('projects.jo.title')}
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-light max-w-3xl leading-relaxed">
              {t('projects.jo.desc')}
            </p>
          </div>

          {/* Research images & documentation frame */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 space-y-6">
              {/* Primary image requested: IMG_20260813_094509_866.jpg */}
              <div className="border border-[var(--line-strong)] bg-black overflow-hidden group">
                <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-950 relative">
                  <img 
                    src={`${import.meta.env.BASE_URL}robot/jo-expertise.jpg`}
                    alt="Joschka Mayer - Travaux et expertise robotique quadrupède"
                    className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest bg-black/80 px-2 py-0.5 border border-white/20 text-white/90">
                    JOSCHKA MAYER // CTO & EXPERTISE LOCOMOTION
                  </div>
                </div>
                <div className="p-4 border-t border-[var(--line-strong)] bg-white/[0.015] font-mono text-xs text-white/80">
                  Développement matériel et logiciel embarqué sur le robot quadrupède — Expertise issue des recherches menées à Calgary.
                </div>
              </div>

              {/* Secondary laboratory platform visual: imagejo.jpg */}
              <div className="border border-[var(--line-strong)] bg-black overflow-hidden group">
                <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-950 relative">
                  <img 
                    src={`${import.meta.env.BASE_URL}imagejo.jpg`}
                    alt="Plateforme expérimentale quadrupède à Calgary"
                    className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest bg-black/80 px-2 py-0.5 border border-white/20 text-white/80">
                    CALGARY LAB // BANCS DE TEST & DYNAMIQUE
                  </div>
                </div>
                <div className="p-4 border-t border-[var(--line-strong)] bg-white/[0.015] font-mono text-xs text-[var(--text-dim)]">
                  {t('projects.jo.caption')}
                </div>
              </div>
            </div>

            {/* Technical skills card */}
            <div className="border border-[var(--line-strong)] bg-white/[0.02] p-6 space-y-4 font-mono text-xs">
              <div className="text-white uppercase tracking-wider font-medium border-b border-[var(--line-strong)] pb-2">
                Compétences Embarquées
              </div>
              <ul className="space-y-3 text-[var(--text-dim)] font-light text-[11px] leading-relaxed">
                <li>• Architecture logicielle ROS / ROS 2</li>
                <li>• Contrôle cinématique et dynamique en boucle fermée</li>
                <li>• Algorithmes de marche et franchissement d'obstacles</li>
                <li>• Fusion de capteurs LiDAR, IMU et caméras embarquées</li>
                <li>• Traitement bord-machine faible latence</li>
                <li>• Conception de bancs d'essais et de transmission</li>
              </ul>
              <div className="pt-3 text-[10px] text-white/40 uppercase tracking-widest border-t border-[var(--line-strong)]">
                Laboratoire de recherche de Calgary (Canada)
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-[var(--line-strong)] pt-12 pb-8 flex flex-col items-center text-center">
          <h3 className="text-xl sm:text-2xl font-light text-white mb-3">
            {t('projects.cta.title')}
          </h3>
          <p className="text-sm text-[var(--text-dim)] font-light max-w-lg mb-8 leading-relaxed">
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
