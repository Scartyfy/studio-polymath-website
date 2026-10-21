import React, { useState } from 'react';
import { Navigation, Footer, CyberGrid } from '../components/Shared';
import { useNavigate } from 'react-router-dom';
import { LiquidButton } from '../components/ui/primitives-buttons-liquid';
import MotionButton from '../components/ui/motion-button';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { ScrambleIn } from '../components/ui/scramble-in';

const FooterLink = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => (
  <li className="relative group cursor-pointer inline-block overflow-hidden" onClick={onClick}>
    <span className="relative z-10 px-1 transition-colors duration-300 group-hover:text-black">{children}</span>
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transition-all duration-300 ease-out group-hover:h-full -z-0"></span>
  </li>
);

const TeamHeadsPreview = ({ onClick }: { onClick: () => void }) => {
  const members = [
    { name: "Alec MIGNOT", img: `${import.meta.env.BASE_URL}alecpp.jpeg` },
    { name: "Arthur CHAUVIN", img: `${import.meta.env.BASE_URL}arthurpp.jpeg` },
    { name: "Alann SAMSON", img: `${import.meta.env.BASE_URL}alannpp.jpeg` },
    { name: "Joschka MAYER", img: `${import.meta.env.BASE_URL}jopp.jpeg` },
  ];

  return (
    <div 
      onClick={onClick}
      className="grid grid-cols-2 gap-4 sm:gap-6 cursor-pointer"
    >
      {members.map((member, i) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-2xl"
        >
          <img 
            src={member.img} 
            alt={member.name} 
            className="w-full h-full object-cover grayscale contrast-[1.08] hover:grayscale-0 transition-all duration-500" 
          />
        </motion.div>
      ))}
    </div>
  );
};

const TimelineRow = ({ 
  number, 
  title, 
  subtitle, 
  desc, 
  linkText, 
  onClick, 
  isRight, 
  isLast,
  bgVideo,
  rightContent
}: { 
  number: string, 
  title: string, 
  subtitle: string, 
  desc: string, 
  linkText: string, 
  onClick: () => void, 
  isRight?: boolean, 
  isLast?: boolean,
  bgVideo?: string,
  rightContent?: React.ReactNode
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const squareProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const lineProgress = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

  return (
    <div 
      ref={ref} 
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative ${
        bgVideo 
          ? 'min-h-[85vh] md:min-h-screen pt-20 sm:pt-28 md:pt-36 pb-20 sm:pb-28' 
          : 'pb-20 sm:pb-28'
      } ${number !== '01' ? 'mt-16 md:mt-0' : ''}`}
    >
      {/* Background Video plein écran collé à l'image du dessus avec dégradé noir partant du bas */}
      {bgVideo && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full min-h-[85vh] md:min-h-screen overflow-hidden pointer-events-none z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-80 md:opacity-85"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          {/* Dégradé noir qui part du bas */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, #000000 0%, rgba(0,0,0,0.95) 15%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.2) 65%, transparent 100%)'
            }}
          />
          {/* Voile sombre gauche pour assurer un contraste net et élégant sur le texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
        </div>
      )}

      {/* Connecting Line (Moved to row level so it correctly measures height) */}
      <div 
        className="absolute left-[calc(50%+0.5px)] w-[1px] bg-[var(--line-strong)] -translate-x-1/2 hidden md:block z-10"
        style={{
          top: bgVideo ? '112px' : '62px',
          bottom: isLast ? '-128px' : '-176px'
        }}
      >
        <motion.div className="w-full bg-white origin-top" style={{ scaleY: lineProgress, height: '100%' }} />
      </div>

      {/* Point Square */}
      <div 
        className="absolute left-[calc(50%+0.5px)] -translate-x-1/2 hidden md:flex flex-col items-center z-20 w-[14px] h-[14px]"
        style={{ top: bgVideo ? '98px' : '48px' }}
      >
        {/* Background Square */}
        <div className="w-full h-full bg-black border border-[var(--line-strong)] absolute top-0" />
        
        {/* Animated Square Tracing */}
        <svg width="14" height="14" viewBox="0 0 14 14" className="absolute top-0 z-20">
          <motion.path d="M 7,0.5 L 13.5,0.5 L 13.5,13.5 L 7,13.5" fill="none" stroke="white" strokeWidth="1" style={{ pathLength: squareProgress }} />
          <motion.path d="M 7,0.5 L 0.5,0.5 L 0.5,13.5 L 7,13.5" fill="none" stroke="white" strokeWidth="1" style={{ pathLength: squareProgress }} />
        </svg>
      </div>

      {/* Colonne de texte */}
      <div className={`relative z-10 ${isRight ? "md:col-start-2 md:pl-24" : "md:pr-12 lg:pr-24"}`}>
        <div className="text-[var(--text-dim)] uppercase tracking-[0.1em] text-sm mb-4">{number} / {subtitle}</div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-8 drop-shadow-md whitespace-nowrap">
          <ScrambleIn text={title} />
        </h2>
        <p className="text-[var(--text-dim)] text-lg leading-relaxed mb-8 drop-shadow-sm max-w-xl">
          {desc}
        </p>
        <LiquidButton 
          onClick={onClick}
          className="inline-flex items-center gap-2 border border-[var(--line-strong)] px-8 py-4 uppercase tracking-[0.15em] text-sm hover:text-black cursor-pointer overflow-hidden [--liquid-button-color:white] [--liquid-button-background-color:transparent]"
        >
          {linkText} <ArrowUpRight className="w-4 h-4" />
        </LiquidButton>
      </div>

      {/* Contenu à droite (ex: 4 têtes animées dans "Qui sommes-nous ?") */}
      {!isRight && rightContent && (
        <div className="relative z-10 md:col-start-2 md:pl-6 lg:pl-12 flex justify-center items-center">
          {rightContent}
        </div>
      )}
    </div>
  );
};

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <main>
      {/* FIXED BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <CyberGrid />
        
        {/* Top Left Logo has been removed in favor of the centered title */}
        <div className="absolute inset-0 z-[-1] bg-black overflow-hidden">
          {/* Background image container with bleed (-inset-24) to avoid showing borders when shifted */}
          <div className="absolute -inset-24 -translate-y-16 md:-translate-y-[110px]">
            <img src={`${import.meta.env.BASE_URL}mur10.jpeg`} alt="Background" className="w-full h-full object-cover opacity-80" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12 lg:p-20 -translate-y-9 md:-translate-y-[72px]">
            <video 
              className="w-full max-w-3xl h-auto aspect-video saturate-[1.25] contrast-[1.05]"
              style={{
                /* Balanced horizontal radius and vertical height */
                maskImage: 'radial-gradient(ellipse 44% 50% at 50% 50%, black 64%, transparent 98%)',
                WebkitMaskImage: 'radial-gradient(ellipse 44% 50% at 50% 50%, black 64%, transparent 98%)'
              }}
              src={`${import.meta.env.BASE_URL}animpostit.mp4`}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="hero__scrim absolute inset-0"></div>
        </div>

        {/* Main Hero Content - Fixed Title (Tags moved to top cell) */}
        <div className="absolute top-[calc(80px+(30vh-80px)/2)] md:top-[calc(80px+(25vh-80px)/2)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-[var(--gutter)] text-center flex flex-col items-center">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-[var(--text-dim)] uppercase tracking-[0.2em] text-xs font-mono">
            <span>{t('hero.tag1')}</span>
            <span className="hidden md:block w-1 h-1 bg-[var(--text-dimmer)] rounded-full"></span>
            <span>{t('hero.tag2')}</span>
            <span className="hidden md:block w-1 h-1 bg-[var(--text-dimmer)] rounded-full"></span>
            <span>{t('hero.tag3')}</span>
          </div>
        </div>
      </div>

      {/* SCROLLABLE FOREGROUND */}
      <div className="relative z-10">
        <section className="hero bg-transparent">
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

          {/* Spacer for hero flex layout since content is now fixed */}
          <div className="flex-1 pointer-events-none"></div>

          {/* Transition Band (New taller banner with rotated image) */}
          <div 
            className="relative z-40 bg-black border-t border-[var(--line-strong)] min-h-[25vh] md:min-h-[35vh] py-8 md:py-12 px-4 md:px-8 flex items-center justify-between pointer-events-auto cursor-pointer group overflow-hidden"
            onClick={() => {
              try {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              } catch {
                window.scrollTo(0, window.innerHeight);
              }
            }}
          >
            {/* Background Image Rotated - no hover lighting effect */}
            <div className="absolute top-1/2 left-1/2 w-[100vh] h-[100vw] -translate-x-1/2 -translate-y-1/2 -rotate-90 z-0">
              <img src={`${import.meta.env.BASE_URL}metal.jpg`} className="w-full h-full object-cover opacity-60" alt="Scroll Background" />
            </div>
            
            {/* Scrim/Overlay to ensure readability */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Translating Text inside Transition Band */}
            <div className="relative z-20 max-w-xl md:max-w-2xl text-white" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug text-white uppercase group-hover:text-white transition-colors duration-300 tracking-tight min-h-[1.25em]">
                <ScrambleIn text={t('manifest.scroll.part1')} autoStart delay={2000} />
              </p>
              <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug text-white uppercase group-hover:text-white transition-colors duration-300 tracking-tight min-h-[1.25em]">
                <ScrambleIn text={t('manifest.scroll.part2')} autoStart delay={2200} />
              </p>
            </div>
            
            {/* Motion Button "Explore" with Arrow Down-Left */}
            <div className="relative z-20 flex items-center shrink-0 ml-4">
              <MotionButton 
                label={t('home.explore')} 
                shape="angular"
                icon={<ArrowDownLeft className="text-black w-6 h-6 stroke-[1.5px]" />}
                onClick={() => {
                  try {
                    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                  } catch {
                    window.scrollTo(0, window.innerHeight);
                  }
                }}
                classes="border border-white/20 bg-transparent w-44 sm:w-48 rounded-none"
              />
            </div>
          </div>
        </section>

        {/* Scrollable Content */}
        <div className="relative z-40">
          <section className="relative z-10 bg-black text-white overflow-hidden">
            <div className="relative max-w-6xl mx-auto px-[var(--gutter)] pb-32 pt-0 flex flex-col gap-32">
              
              <TimelineRow 
                number="01"
                subtitle={t('home.timeline3.subtitle')}
                title={t('home.timeline3.title')}
                desc={t('home.timeline3.desc')}
                linkText={t('home.timeline3.link')}
                onClick={() => navigate('/projects')}
                bgVideo={`${import.meta.env.BASE_URL}presrobot.mp4`}
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
                subtitle={t('home.timeline1.subtitle')}
                title={t('home.timeline1.title')}
                desc={t('home.timeline1.desc')}
                linkText={t('home.timeline1.link')}
                onClick={() => navigate('/team')}
                rightContent={<TeamHeadsPreview onClick={() => navigate('/team')} />}
              />
              <TimelineRow 
                number="04"
                subtitle={t('home.timeline4.subtitle')}
                title={t('home.timeline4.title')}
                desc={t('home.timeline4.desc')}
                linkText={t('home.timeline4.link')}
                onClick={() => navigate('/contact')}
                isRight
                isLast
              />
              
            </div>
          </section>


          {/* Sticky footer */}
          <div className="sticky z-0 bottom-0 left-0 w-full h-[36vh] md:h-[40vh] min-h-[220px] md:min-h-[260px] bg-black border-t border-[var(--line-strong)] flex justify-center items-center overflow-hidden">
            {/* Background Image Rotated */}
            <div className="absolute top-1/2 left-1/2 w-[36vh] md:w-[40vh] h-[100vw] -translate-x-1/2 -translate-y-1/2 -rotate-90 z-0">
              <img src={`${import.meta.env.BASE_URL}mur.jpg`} className="w-full h-full object-cover" alt="Footer Background" />
            </div>
            
            <div className="relative w-full h-full flex justify-end px-[var(--gutter)] pt-6 sm:pt-8 md:pt-10 text-white items-start z-10">
              <div className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-base md:text-lg text-white relative z-10">
                <ul className="flex flex-col gap-2 items-end">
                  <FooterLink onClick={() => navigate('/')}>{t('footer.home')}</FooterLink>
                  <FooterLink onClick={() => navigate('/projects')}>{t('footer.projects')}</FooterLink>
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

              {/* Emblem Logo replacing polymath studio text */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-8 md:left-12 pointer-events-none z-10 select-none">
                <img 
                  src={`${import.meta.env.BASE_URL}logosimple.png`} 
                  alt="Polymath Studio" 
                  className="w-20 sm:w-28 md:w-36 h-auto object-contain opacity-60" 
                />
              </div>

              {/* Copyrights and Legal Mentions (Bottom Right of Footer) */}
              <div className="absolute bottom-3 sm:bottom-4 right-4 sm:right-8 text-right text-white/50 text-[10px] md:text-xs font-mono uppercase tracking-widest leading-relaxed pointer-events-auto">
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
