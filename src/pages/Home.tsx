import React, { useState } from 'react';
import { Navigation, CyberGrid } from '../components/Shared';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { ScrambleIn } from '../components/ui/scramble-in';

const FooterLink = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => (
  <li className="relative group cursor-pointer inline-block overflow-hidden" onClick={onClick}>
    <span className="relative z-10 px-1 transition-colors duration-300 group-hover:text-black">{children}</span>
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transition-all duration-300 ease-out group-hover:h-full -z-0"></span>
  </li>
);

const TimelineRow = ({ number, title, subtitle, desc, linkText, onClick, isRight, isLast }: { number: string, title: string, subtitle: string, desc: string, linkText: string, onClick: () => void, isRight?: boolean, isLast?: boolean }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative ${number !== '01' ? 'mt-16 md:mt-0' : ''}`}>
      {/* Connecting Line */}
      <div 
        className="absolute left-[calc(50%+0.5px)] w-[1px] bg-white/20 -translate-x-1/2 hidden md:block z-0"
        style={{
          top: '62px',
          bottom: isLast ? '-128px' : '-176px'
        }}
      >
        <div className="w-full bg-white origin-top h-full opacity-40" />
      </div>

      {/* Point Square */}
      <div className="absolute left-[calc(50%+0.5px)] top-12 -translate-x-1/2 hidden md:flex flex-col items-center z-10 w-[14px] h-[14px]">
        <div className="w-full h-full bg-black border border-white" />
      </div>

      <div className={isRight ? "md:col-start-2 md:pl-24" : "md:pr-24"}>
        <div className="text-[var(--text-dim)] uppercase tracking-[0.15em] text-xs md:text-sm font-mono mb-4">{number} / {subtitle}</div>
        <h2 className="text-3xl md:text-5xl font-light mb-6 lowercase">{title}</h2>
        <p className="text-[var(--text-dim)] text-base md:text-lg leading-relaxed mb-8">
          <ScrambleIn text={desc} />
        </p>
        <button 
          onClick={onClick}
          className="inline-flex items-center gap-2 border border-white/30 px-8 py-3.5 uppercase tracking-[0.15em] text-xs md:text-sm font-mono text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
        >
          {linkText} <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, lang } = useLanguage();

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Top Navigation */}
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* FIXED HERO BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <CyberGrid />
        
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          {/* Background image container */}
          <div className="absolute -inset-24 -translate-y-16 md:-translate-y-[110px]">
            <img src="/mur10.jpeg" alt="Background" className="w-full h-full object-cover opacity-60" />
          </div>

          {/* Centered video */}
          <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16 lg:p-32 -translate-y-9 md:-translate-y-[72px]">
            <video 
              className="w-full max-w-2xl h-auto aspect-video saturate-[1.25] contrast-[1.05]"
              style={{
                maskImage: 'radial-gradient(ellipse closest-side at 50% 55%, black 45%, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(ellipse closest-side at 50% 55%, black 45%, transparent 90%)'
              }}
              src="/polymath-video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="hero__scrim absolute inset-0"></div>
        </div>
      </div>

      {/* SCROLLABLE FOREGROUND */}
      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-0">
          {/* Hero Center Title & Studio Statement */}
          <div className="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-8 py-16 pointer-events-auto">
            {/* High-Tech Tags */}
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-white/70 uppercase tracking-[0.22em] text-[11px] md:text-xs font-mono mb-8 bg-black/40 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/10">
              <span>{t('hero.tag1')}</span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>{t('hero.tag2')}</span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>{t('hero.tag3')}</span>
            </div>

            {/* Studio Big Title */}
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-extralight tracking-tighter text-white mb-6 uppercase select-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
              POLYMATH
            </h1>

            {/* Subtitle statement */}
            <p className="max-w-xl text-sm sm:text-base md:text-lg font-light text-white/90 tracking-[0.25em] uppercase font-mono bg-black/30 backdrop-blur-xs px-4 py-1.5">
              {lang === 'FR' ? 'Nous faisons de la robotique' : 'We build robotics'}
            </p>
          </div>

          {/* Transition Band (Banner with rotated image) */}
          <div 
            className="relative z-40 bg-black border-t border-[var(--line-strong)] min-h-[22vh] md:min-h-[30vh] py-10 px-6 md:px-12 flex items-center justify-between pointer-events-auto cursor-pointer group overflow-hidden"
            onClick={() => {
              try {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              } catch {
                window.scrollTo(0, window.innerHeight);
              }
            }}
          >
            {/* Background Image Rotated */}
            <div className="absolute top-1/2 left-1/2 w-[100vh] h-[100vw] -translate-x-1/2 -translate-y-1/2 -rotate-90 z-0">
              <img src="/metal.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" alt="Scroll Background" />
            </div>
            
            {/* Scrim/Overlay to ensure readability */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Translating Text inside Transition Band */}
            <div className="relative z-20 max-w-[320px] md:max-w-2xl text-white font-mono">
              <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed text-white/90 uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                <ScrambleIn text={t('manifest.scroll')} />
              </p>
            </div>
            
            {/* Arrow Down-Left */}
            <div className="relative z-20 flex items-center justify-center p-3 sm:p-4 border border-white/30 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300 ml-4 shrink-0">
              <ArrowDownLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 stroke-[1.5px]" />
            </div>
          </div>
        </section>

        {/* Scrollable Content */}
        <div className="relative z-40">
          <section className="relative z-10 bg-black text-white">
            {/* Subtle Dot Pattern Background */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{ 
                backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px)', 
                backgroundSize: '24px 24px'
              }} 
            />
            
            <div className="relative max-w-6xl mx-auto px-[var(--gutter)] pb-32 pt-20 flex flex-col gap-32">
              
              <TimelineRow 
                number="01"
                subtitle={t('home.timeline1.subtitle')}
                title={t('home.timeline1.title')}
                desc={t('home.timeline1.desc')}
                linkText={t('home.timeline1.link')}
                onClick={() => navigate('/team')}
              />
              <TimelineRow 
                number="02"
                subtitle={t('home.timeline2.subtitle')}
                title={t('home.timeline2.title')}
                desc={t('home.timeline2.desc')}
                linkText={t('home.timeline2.link')}
                onClick={() => navigate('/manifest')}
                isRight
              />
              <TimelineRow 
                number="03"
                subtitle={t('home.timeline3.subtitle')}
                title={t('home.timeline3.title')}
                desc={t('home.timeline3.desc')}
                linkText={t('home.timeline3.link')}
                onClick={() => navigate('/contact')}
                isLast
              />
              
            </div>
          </section>

          {/* Bottom Transition Band (Quote) */}
          <div className="relative z-40 bg-black border-t border-[var(--line-strong)] h-[25vh] md:h-[35vh] py-12 px-6 md:px-12 flex items-center justify-between pointer-events-auto group overflow-hidden">
            {/* Background Image Rotated */}
            <div className="absolute top-1/2 left-1/2 w-[100vh] h-[100vw] -translate-x-1/2 -translate-y-1/2 -rotate-90 z-0">
              <img src="/metal.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" alt="Scroll Background Bottom" />
            </div>
            {/* Scrim/Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Quote Text */}
            <div className="relative z-20 max-w-[320px] md:max-w-lg text-white font-mono">
              <p className="text-sm md:text-base font-light leading-relaxed text-white/90 uppercase group-hover:text-white transition-colors duration-300">
                {t('quote.text')}
                <br /><br />
                <span className="text-xs md:text-sm text-white/60 tracking-widest lowercase">{t('quote.author')}</span>
              </p>
            </div>
          </div>

          {/* Sticky footer */}
          <div className="sticky z-0 bottom-0 left-0 w-full h-[75vh] md:h-[65vh] bg-black border-t border-[var(--line-strong)] flex justify-center items-center overflow-hidden">
            {/* Background Image Rotated */}
            <div className="absolute top-1/2 left-1/2 w-[75vh] md:w-[65vh] h-[100vw] -translate-x-1/2 -translate-y-1/2 -rotate-90 z-0">
              <img src="/mur.jpg" className="w-full h-full object-cover" alt="Footer Background" />
            </div>
            
            <div className="relative w-full h-full flex justify-end px-[var(--gutter)] pt-[15vh] text-white items-start z-10">
              <div className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl text-white relative z-10 font-mono">
                <ul className="flex flex-col gap-2 items-end">
                  <FooterLink onClick={() => navigate('/')}>{t('footer.home')}</FooterLink>
                  <FooterLink onClick={() => navigate('/manifest')}>{t('footer.manifest')}</FooterLink>
                  <FooterLink onClick={() => navigate('/team')}>{t('footer.team')}</FooterLink>
                </ul>
                <ul className="flex flex-col gap-2 items-end">
                  <FooterLink onClick={() => navigate('/contact')}>{t('footer.contact')}</FooterLink>
                  <li className="relative group cursor-pointer inline-block overflow-hidden">
                    <a 
                      href="https://www.tiktok.com/@polymath.studio" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="relative z-10 px-1 block transition-colors duration-300 group-hover:text-black"
                    >
                      TikTok
                    </a>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transition-all duration-300 ease-out group-hover:h-full -z-0"></span>
                  </li>
                </ul>
              </div>

              <h2 className="absolute bottom-0 left-[-1vw] translate-y-[2%] text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] text-white/30 font-bold lowercase tracking-tighter leading-[0.85] pointer-events-none flex flex-col font-mono select-none">
                <span>polymath</span>
                <span>studio</span>
              </h2>

              {/* Copyrights and Legal Mentions (Bottom Right of Footer) */}
              <div className="absolute bottom-4 right-4 text-right text-white/60 text-[10px] md:text-xs font-mono uppercase tracking-widest leading-relaxed pointer-events-auto">
                <span>{t('footer.rights')}</span><br />
                <span className="cursor-pointer hover:text-white transition-colors" onClick={() => navigate('/manifest')}>{t('footer.legal')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
