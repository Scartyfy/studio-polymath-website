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
  const { t, lang } = useLanguage();
  return (
    <PageLayout title={t('page.manifest.title')}>
      <article className="max-w-4xl mx-auto border border-white/15 bg-neutral-950/40 backdrop-blur-sm p-6 sm:p-10 md:p-14 text-white relative">
        {/* Document Header Bar */}
        <header className="border-b border-white/15 pb-8 mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-white/50 tracking-[0.2em] uppercase">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white inline-block"></span>
              <span>DOC. REF // PMS-MNF-2026.01</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span>PARIS • FR</span>
              <span className="text-white/20">/</span>
              <span className="text-white/90 border border-white/20 px-2.5 py-0.5 bg-white/[0.04]">
                {lang === 'FR' ? 'PUBLICATION OFFICIELLE' : 'OFFICIAL RECORD'}
              </span>
            </div>
          </div>

          <div className="pt-2">
            <div className="font-mono text-[11px] text-white/50 tracking-[0.25em] uppercase mb-2">
              POLYMATH STUDIO // DÉPARTEMENT R&D & DESIGN GLOBAL
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight leading-tight">
              {lang === 'FR' ? 'Traité pour une Robotique Cognitive & Durable' : 'Treatise on Cognitive & Sustainable Robotics'}
            </h2>
          </div>

          {/* Institutional metadata table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 font-mono text-[11px]">
            <div>
              <span className="text-white/40 block uppercase tracking-wider text-[9px] mb-1">
                {lang === 'FR' ? 'Enregistrement' : 'Registry ID'}
              </span>
              <span className="text-white/90">REG-2026 / Q1</span>
            </div>
            <div>
              <span className="text-white/40 block uppercase tracking-wider text-[9px] mb-1">
                {lang === 'FR' ? 'Classification' : 'Classification'}
              </span>
              <span className="text-white/90">
                {lang === 'FR' ? 'Charte Fondatrice' : 'Founding Charter'}
              </span>
            </div>
            <div>
              <span className="text-white/40 block uppercase tracking-wider text-[9px] mb-1">
                {lang === 'FR' ? 'Collège' : 'Signatories'}
              </span>
              <span className="text-white/90">
                {lang === 'FR' ? 'Ingénieurs-Designers' : 'Engineer-Designers'}
              </span>
            </div>
            <div>
              <span className="text-white/40 block uppercase tracking-wider text-[9px] mb-1">
                {lang === 'FR' ? 'Diffusion' : 'Distribution'}
              </span>
              <span className="text-white/90">
                {lang === 'FR' ? 'Libre • Publique' : 'Open • Public'}
              </span>
            </div>
          </div>
        </header>

        {/* Structured Articles */}
        <div className="space-y-12 text-sm sm:text-base text-white/80 font-light leading-relaxed">
          {/* Article 01 */}
          <section className="space-y-3">
            <div className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase">
              {lang === 'FR' ? 'ARTICLE 01 // DU PIVOT TECHNOLOGIQUE' : 'ARTICLE 01 // THE TECHNOLOGICAL PIVOT'}
            </div>
            <div className="text-base sm:text-lg md:text-xl font-light text-white leading-relaxed pt-1">
              {t('manifest.p1')}
            </div>
          </section>

          {/* Article 02 */}
          <section className="space-y-3 pt-6 border-t border-white/10">
            <div className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase">
              {lang === 'FR' ? 'ARTICLE 02 // MISSION & COLLECTIF INGÉNIEUR-DESIGNER' : 'ARTICLE 02 // MISSION & THE ENGINEER-DESIGNER COLLECTIVE'}
            </div>
            <p className="pt-1">
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
          </section>

          {/* Article 03 (Central Thesis box) */}
          <section className="space-y-3 pt-6 border-t border-white/10">
            <div className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase">
              {lang === 'FR' ? 'ARTICLE 03 // DE LA NATURE COMME AXE CENTRAL' : 'ARTICLE 03 // NATURE AS THE FOCAL POINT'}
            </div>
            <div className="border border-white/20 bg-white/[0.02] p-5 sm:p-7 relative my-4">
              <span className="absolute top-2 right-3 font-mono text-[9px] uppercase tracking-widest text-white/30">
                THESIS // 03.A
              </span>
              <p className="text-base sm:text-lg text-white font-normal leading-relaxed">
                {t('manifest.p3')}
              </p>
            </div>
          </section>

          {/* Article 04 */}
          <section className="space-y-3 pt-6 border-t border-white/10">
            <div className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase">
              {lang === 'FR' ? 'ARTICLE 04 // FINALITÉ CONTRE LE CONSUMÉRISME' : 'ARTICLE 04 // PURPOSE VS CONSUMERISM'}
            </div>
            <p className="pt-1">
              {t('manifest.p4')}
            </p>
          </section>

          {/* Article 05 */}
          <section className="space-y-3 pt-6 border-t border-white/10">
            <div className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase">
              {lang === 'FR' ? 'ARTICLE 05 // MATÉRIALITÉ & MODULARITÉ MATÉRIELLE' : 'ARTICLE 05 // SUSTAINABLE HARDWARE & MODULARITY'}
            </div>
            <p className="pt-1">
              {t('manifest.p5')}
            </p>
          </section>

          {/* Article 06 */}
          <section className="space-y-3 pt-6 border-t border-white/10">
            <div className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase">
              {lang === 'FR' ? 'ARTICLE 06 // FENÊTRE D\'OPPORTUNITÉ HISTORIQUE' : 'ARTICLE 06 // WINDOW OF OPPORTUNITY IN ROBOTICS'}
            </div>
            <p className="pt-1">
              {t('manifest.p6')}
            </p>
          </section>
        </div>

        {/* Signatures & Certification Block */}
        <footer className="mt-16 pt-10 border-t border-white/20 space-y-8">
          <div className="font-mono text-xs text-white/50 uppercase tracking-[0.2em]">
            {lang === 'FR' ? 'COLLÈGE DES SIGNATAIRES // FONDATEURS DU STUDIO' : 'SIGNATORY BOARD // STUDIO FOUNDERS'}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-white/10 p-3.5 bg-white/[0.01]">
              <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Signataire 01</div>
              <div className="text-sm font-medium text-white mt-1">Alec MIGNOT</div>
              <div className="font-mono text-[10px] text-white/50 tracking-wider">Chief Architect</div>
            </div>
            <div className="border border-white/10 p-3.5 bg-white/[0.01]">
              <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Signataire 02</div>
              <div className="text-sm font-medium text-white mt-1">Arthur CHAUVIN</div>
              <div className="font-mono text-[10px] text-white/50 tracking-wider">Chief Design Officer</div>
            </div>
            <div className="border border-white/10 p-3.5 bg-white/[0.01]">
              <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Signataire 03</div>
              <div className="text-sm font-medium text-white mt-1">Alann SAMSON</div>
              <div className="font-mono text-[10px] text-white/50 tracking-wider">Lead Mechanical Eng.</div>
            </div>
            <div className="border border-white/10 p-3.5 bg-white/[0.01]">
              <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Signataire 04</div>
              <div className="text-sm font-medium text-white mt-1">Joschka MAYER</div>
              <div className="font-mono text-[10px] text-white/50 tracking-wider">Chief Technology Officer</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-white/10 font-mono text-[11px] text-white/40">
            <div>
              <span>ENREGISTRÉ AU REGISTRE DU STUDIO // PARIS</span>
            </div>
            <div className="tracking-widest uppercase text-white/60">
              CERTIFIÉ CONFORME • 2026
            </div>
          </div>
        </footer>
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
  const { t, lang } = useLanguage();
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

        {/* Robot Presentation Showcase - In Order, visible upon scroll */}
        <div className="space-y-8 pt-8 sm:pt-16 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--line-strong)] pb-3">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-white/70" />
              <span>{t('projects.night.badge')}</span>
            </div>
            <div className="font-mono text-[11px] text-[var(--text-dim)] uppercase tracking-wider">
              Compatibilité VMS • Autonomie Tout-Terrain
            </div>
          </div>

          {/* 1st Image: misealechelle.jpeg - sans aucune annotation et en plus gros */}
          <div className="border border-[var(--line-strong)] bg-black overflow-hidden group -mx-2 sm:-mx-6 md:-mx-10 lg:-mx-14 shadow-2xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
              <img 
                src={`${import.meta.env.BASE_URL}robot/misealechelle.jpeg`}
                alt="Robot quadrupède autonome Polymath - mise à l'échelle"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
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
                  <div className="text-white uppercase tracking-wider font-medium text-sm flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-white/80" />
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
