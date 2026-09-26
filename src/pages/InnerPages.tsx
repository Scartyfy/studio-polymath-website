import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { Navigation, Footer } from '../components/Shared';
import { useLanguage } from '../LanguageContext';

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
    { name: "Arthur CHAUVIN", role: t('team.role1'), linkedin: "https://www.linkedin.com/in/arthur-chauvin-b798042bb/", img: "" },
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
