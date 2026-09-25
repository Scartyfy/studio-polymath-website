import React, { useState } from 'react';
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
            <strong className="font-medium text-white tracking-wide">{t('manifest.p2').split('.')[0]}.</strong>
            {t('manifest.p2').substring(t('manifest.p2').indexOf('.') + 1)}
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
    { name: "Alann SAMSON", role: t('team.role1'), linkedin: "https://www.linkedin.com/in/alann-samson-1735512a1/", img: "" },
    { name: "Joschka MAYER", role: t('team.role1'), linkedin: "https://www.linkedin.com/in/joschkamayer/", img: "" },
    { name: "Alec MIGNOT", role: t('team.role1'), linkedin: "https://www.linkedin.com/in/alec-mignot-40bb9430b/", img: "" },
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
  return (
    <PageLayout title={t('page.contact.title')}>
      <form className="form" style={{ marginTop: 0, maxWidth: 620 }} onSubmit={e => e.preventDefault()}>
         <label htmlFor="name" className="visually-hidden">{t('form.name')}</label>
         <input type="text" id="name" className="form__input" placeholder={t('form.name')} />
         
         <label htmlFor="email" className="visually-hidden">{t('form.email')}</label>
         <input type="email" id="email" className="form__input" placeholder={t('form.email')} />
         
         <label htmlFor="subject" className="visually-hidden">{t('form.subject')}</label>
         <input type="text" id="subject" className="form__input" placeholder={t('form.subject')} />
         
         <label htmlFor="message" className="visually-hidden">{t('form.message')}</label>
         <textarea id="message" className="form__input" placeholder={t('form.message')}></textarea>
         
         <button type="submit" className="btn btn--ghost" style={{ marginTop: 16 }}>{t('form.submit')}</button>
      </form>
    </PageLayout>
  );
}
