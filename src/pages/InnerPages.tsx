import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, CheckCircle2, AlertCircle, ArrowUpRight, Shield, Cpu, Footprints, Wrench, Eye } from 'lucide-react';
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
      
      {/* Corner Section Name Header - high in top-right corner */}
      {title && (
        <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 lg:right-12 z-40 pointer-events-none select-none text-right">
          {subtitle && <div className="page-subtitle text-right mb-0.5">{subtitle}</div>}
          <h1 className="page-title text-right">{title}</h1>
        </div>
      )}

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
            <p className="drop-shadow-sm">{t('projects.intro.p1')}</p>
            <p className="drop-shadow-sm">
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

        {/* Robot Presentation Showcase - In Order, visible upon scroll */}
        <div className="space-y-8 pt-8 sm:pt-16 border-t border-white/10">
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
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
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

        {/* Section: Joschka's Calgary Quadruped Research (Stage & R&D) */}
        <div className="space-y-6 border-t border-[var(--line-strong)] pt-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-light text-white mb-3">
              {t('projects.jo.title')}
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-light max-w-3xl leading-relaxed">
              {t('projects.jo.desc')}
            </p>
          </div>

          {/* Research images & documentation frame */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Primary image requested: IMG_20260813_094509_866.jpg */}
            <div className="lg:col-span-2 border border-[var(--line-strong)] bg-black overflow-hidden group flex flex-col justify-between">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-950 relative">
                <img 
                  src={`${import.meta.env.BASE_URL}robot/jo-expertise.jpg`}
                  alt="Joschka Mayer - Travaux et expertise robotique quadrupède"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest bg-black/80 px-2 py-0.5 border border-white/20 text-white/90">
                  JOSCHKA MAYER // CTO & EXPERTISE LOCOMOTION
                </div>
              </div>
              <div className="p-4 border-t border-[var(--line-strong)] bg-white/[0.015] font-mono text-xs text-white/80">
                Développement matériel et logiciel embarqué sur le robot quadrupède — Expertise issue des recherches menées à Calgary.
              </div>
            </div>

            {/* Technical skills card */}
            <div className="border border-[var(--line-strong)] bg-white/[0.02] p-6 space-y-4 font-mono text-xs flex flex-col justify-between">
              <div className="space-y-4">
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
              </div>
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
