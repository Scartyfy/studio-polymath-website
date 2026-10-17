
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Deck } from './components/Deck';
import { ProjectList } from './components/ProjectList';
import { MagneticCursor } from './components/ui/magnetic-cursor';
import { MotionText } from './components/MotionText';
import { PhotoshopTransition } from './components/PhotoshopTransition';
import { PROJECTS, INTRO_SCROLL_HEIGHT } from './constants';
import { ViewState, Language, Project } from './types';
import { GooeyText } from './components/ui/gooey-text-morphing';
import { TextRoll } from './components/ui/text-roll-navigation';
import { AnimatedLayerButton } from './components/ui/button';
import MotionButton from './components/ui/motion-button';
import { MenuToggleIcon } from './components/ui/menu-toggle-icon';
import { PortfolioCube } from './components/PortfolioCube';
import { TypewriterExperience } from './components/TypewriterExperience';
import { TypewriterPickCard } from './components/TypewriterPickCard';
import { TypewriterMemorizeCard } from './components/TypewriterMemorizeCard';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewState, setViewState] = useState<ViewState>(ViewState.INTRO);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showMotionText, setShowMotionText] = useState(false);
  const [showPhotoshopTransition, setShowPhotoshopTransition] = useState(false);
  const [showMemorizeText, setShowMemorizeText] = useState(false);
  const [introStep, setIntroStep] = useState<'WELCOME' | 'EXPANDING_WHITE' | 'SHOW_TEXT' | 'PICK_CARD'>('WELCOME');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (viewState !== ViewState.INTRO) return;
      const scrollY = window.scrollY;
      const maxScroll = INTRO_SCROLL_HEIGHT - window.innerHeight;
      setScrollProgress(Math.min(Math.max(scrollY / maxScroll, 0), 1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewState]);

  const handleCardSelect = () => {
    setViewState(ViewState.REVEALING);
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (viewState === ViewState.REVEALING) {
      // Show memorize text after the card has flipped
      const memorizeTimer = setTimeout(() => {
        setShowMemorizeText(true);
      }, 700);

      const transitionTimer = setTimeout(() => {
        setShowMemorizeText(false);
        
        // Step 1: Slide card up
        setViewState(ViewState.PROJECTS);
        
        // Step 2: Show text after card has started moving up
        const textTimer = setTimeout(() => {
          document.body.style.overflow = 'hidden'; 
          setShowMotionText(true);
        }, 100); 
        
        return () => clearTimeout(textTimer);
      }, 3300); // Allow complete typewriter animation and reading time
      
      return () => {
        clearTimeout(memorizeTimer);
        clearTimeout(transitionTimer);
      };
    } else if (viewState === ViewState.INTRO) {
      setShowProjects(false);
      setShowMotionText(false);
      setShowMemorizeText(false);
    }
  }, [viewState]);

  const handleMotionComplete = () => {
    setShowMotionText(false);
    setShowPhotoshopTransition(true);
  };

  const handlePhotoshopComplete = () => {
    setShowPhotoshopTransition(false);
    setShowProjects(true);
    document.body.style.overflow = '';
  };

  const handleDownloadCV = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const fileUrl = `${import.meta.env.BASE_URL}cv.pdf`;
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("Network error");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "CV_Arthur_Chauvin.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
    } catch {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "CV_Arthur_Chauvin.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    }
  };

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const nav = {
    fr: { 
      work: "PROJETS", 
      about: "À PROPOS", 
      skills: "COMPÉTENCES", 
      contact: "CONTACT", 
      scroll: "DÉFILER", 
      pick: "Choisissez une carte", 
      menu: "MENU", 
      close: "FERMER",
      introTop: "INGÉNIEUR",
      introBottom: "DESIGNEUR*",
      experiencePart1: "Le design n'est pas ce que l'on voit, c'est la façon dont on regarde.",
      experiencePart2: "Et parce qu'une vision s'assimile mieux quand elle se vit, je vous propose une courte expérience"
    },
    en: { 
      work: "WORK", 
      about: "ABOUT", 
      skills: "SKILLS", 
      contact: "CONTACT", 
      scroll: "SCROLL", 
      pick: "Pick a card", 
      menu: "MENU", 
      close: "CLOSE",
      introTop: "ENGINEER",
      introBottom: "DESIGNER*",
      experiencePart1: "Design is not what you see, it's the way you look at it.",
      experiencePart2: "And because a vision is best understood when experienced, I invite you to a short experience"
    }
  }[lang];

  const isWhiteBg = introStep !== 'WELCOME' && viewState !== ViewState.PROJECTS && viewState !== ViewState.REVEALING;

  return (
    <MagneticCursor
      magneticFactor={0.55}
      cursorSize={40}
      blendMode="normal"
      lerpAmount={1}
    >
      <div className="w-full min-h-screen text-white relative selection:bg-white selection:text-[#002FA7]"
        style={{ 
          height: viewState === ViewState.INTRO ? '100vh' : 'auto',
          overflow: viewState === ViewState.INTRO ? 'hidden' : ''
        }}
      >
        <AnimatePresence>
        {showMotionText && (
          <MotionText 
            text={lang === 'fr' ? "VOICI QUELQUES PROJETS" : "HERE ARE SOME PROJECTS"} 
            onComplete={handleMotionComplete} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPhotoshopTransition && (
          <PhotoshopTransition 
            text={lang === 'fr' ? "VOICI QUELQUES PROJETS" : "HERE ARE SOME PROJECTS"} 
            onComplete={handlePhotoshopComplete} 
            onStartSlide={() => {
              setShowProjects(true);
              document.body.style.overflow = '';
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMemorizeText && (
          <TypewriterMemorizeCard 
            text={lang === 'fr' ? "RETENEZ BIEN CETTE CARTE" : "MEMORIZE THIS CARD"} 
          />
        )}
      </AnimatePresence>

      {/* LOGO - TOP LEFT (Point to AC Transformation) */}
      <div className="fixed top-6 left-5 md:left-6 z-[110] flex items-center justify-center min-w-[40px] min-h-[40px]">
        <div className="relative flex items-center justify-center w-full h-full">
          {/* THE POINT */}
          <div className={`absolute transition-all duration-[1200ms] cubic-bezier(0.23, 1, 0.32, 1) rounded-full ${isWhiteBg ? 'bg-[#002FA7]' : 'bg-white'}
            ${viewState === ViewState.INTRO ? 'w-1.5 h-1.5 opacity-100 scale-100' : 'w-1.5 h-1.5 opacity-0 scale-[2] blur-md'}
          `}></div>
          
          {/* THE TEXT AC */}
          <span className={`font-display font-bold text-lg md:text-xl tracking-tighter transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) ${isWhiteBg ? 'text-[#002FA7]' : 'text-white'}
            ${viewState === ViewState.INTRO ? 'opacity-0 scale-95 blur-sm pointer-events-none' : 'opacity-100 scale-100 blur-0 delay-[200ms]'}
          `}>
            AC
          </span>
        </div>
      </div>

      {/* QUICK ACCESS BUTTONS - Only shown in intro and not during project modal */}
      {!isProjectOpen && viewState !== ViewState.PROJECTS && (
        <>
          {/* CV DOWNLOAD BUTTON - Bottom Left (Intro, shifted up and right) */}
          <div className="fixed bottom-8 left-8 md:bottom-11 md:left-11 z-[9999] transition-opacity duration-500">
            <a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              download="CV_Arthur_Chauvin.pdf"
              onClick={handleDownloadCV}
              className="group flex flex-col gap-2 items-center text-center cursor-pointer select-none"
              data-magnetic
              data-magnetic-no-pull
              title={lang === 'fr' ? "Télécharger mon CV (PDF)" : "Download my CV (PDF)"}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full border flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
                isWhiteBg 
                  ? 'border-[#002FA7]/20 group-hover:bg-[#002FA7] group-hover:border-[#002FA7]' 
                  : 'border-white/20 group-hover:bg-white group-hover:border-white'
              }`}>
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  isWhiteBg 
                    ? 'text-[#002FA7]/70 group-hover:text-white' 
                    : 'text-white/70 group-hover:text-[#002FA7]'
                }`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </div>
              <span className={`text-[9px] uppercase font-bold tracking-[0.2em] transition-colors duration-300 ${
                isWhiteBg 
                  ? 'text-[#002FA7]/60 group-hover:text-[#002FA7]' 
                  : 'text-white/50 group-hover:text-white'
              }`}>
                CV
              </span>
            </a>
          </div>
        </>
      )}

      {/* LANGUAGE TOGGLE - ACCESSIBLE EVERYWHERE INCLUDING PROJECT MODALS */}
      <div className={`fixed transition-all duration-500 z-[510] flex flex-col items-center group/lang ${
        isProjectOpen 
          ? 'top-6 right-20 md:top-8 md:right-28' 
          : 'top-6 right-4 md:right-6'
      }`}>
         <button 
            onClick={toggleLang} 
            className={`group relative flex flex-col items-center gap-0 overflow-hidden h-[34px] px-3.5 transition-all duration-300 rounded-full ${
              isProjectOpen
                ? 'bg-black/80 hover:bg-black text-white border border-white/20 shadow-md backdrop-blur-md'
                : isWhiteBg 
                  ? 'hover:bg-[#002FA7]/5 hover:border-[#002FA7]/10 border border-transparent' 
                  : 'hover:bg-white/5 hover:border-white/10 border border-transparent'
            }`}
            data-magnetic
            title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
         >
            <div className={`flex flex-col items-center transition-transform duration-600 cubic-bezier(0.76, 0, 0.24, 1) ${lang === 'en' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                <span className={`font-mono text-[10px] font-bold tracking-[0.2em] h-[34px] flex items-center transition-colors duration-300 ${
                  isProjectOpen 
                    ? 'text-white' 
                    : isWhiteBg 
                      ? 'text-[#002FA7]/60 group-hover/lang:text-[#002FA7]' 
                      : 'text-white/60 group-hover/lang:text-white'
                }`}>FR</span>
                <span className={`font-mono text-[10px] font-bold tracking-[0.2em] h-[34px] flex items-center transition-colors duration-300 ${
                  isProjectOpen 
                    ? 'text-white' 
                    : isWhiteBg 
                      ? 'text-[#002FA7]/60 group-hover/lang:text-[#002FA7]' 
                      : 'text-white/60 group-hover/lang:text-white'
                }`}>EN</span>
            </div>
         </button>
         <div className={`w-1 h-1 rounded-full mt-1.5 transition-all duration-500 group-hover/lang:scale-125 animate-pulse-light ${
           isProjectOpen 
             ? 'bg-white' 
             : isWhiteBg 
               ? 'bg-[#002FA7]' 
               : 'bg-white'
         }`}></div>
      </div>

      {viewState === ViewState.PROJECTS && !isProjectOpen && (
        <>
            {/* MENU BUTTON */}
            <div className="fixed top-6 right-20 z-[100]">
                <button className="group flex items-center gap-3 cursor-pointer p-2 rounded-full" onClick={() => setMenuOpen(!menuOpen)} data-magnetic data-magnetic-no-pull>
                    <span className="text-[10px] tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {menuOpen ? nav.close : nav.menu}
                    </span>
                    <MenuToggleIcon open={menuOpen} className="w-8 h-8 text-white" duration={500} />
                </button>
            </div>
            <div className={`fixed inset-0 z-[95] bg-[#002FA7] flex items-center justify-center transition-opacity duration-500 ease-in-out ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center gap-12 text-center">
                    {['work', 'about', 'skills', 'contact'].map(id => (
                        <button key={id} onClick={() => scrollToSection(id)} className="group relative block cursor-pointer select-none" data-magnetic data-magnetic-no-pull>
                            <TextRoll center className="font-display font-bold text-5xl md:text-7xl tracking-tighter text-white transition-colors">
                                {nav[id as keyof typeof nav]}
                            </TextRoll>
                        </button>
                    ))}
                </div>
            </div>
        </>
      )}

      {/* INTRO TEXT RIGHT */}
      <div className={`fixed right-6 bottom-6 md:right-8 md:bottom-8 z-[110] transition-opacity duration-1000 hidden md:block ${viewState === ViewState.INTRO && introStep === 'WELCOME' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <p className={`font-mono text-[8px] tracking-[0.3em] uppercase text-white`}>
          {lang === 'fr' ? "ARTHUR CHAUVIN PORTFOLIO — TOUS DROITS RÉSERVÉS © 2026" : "ARTHUR CHAUVIN PORTFOLIO — ALL RIGHTS RESERVED © 2026"}
        </p>
      </div>

      {/* Main Container */}
      <div className="w-full flex flex-col items-center">
        {/* Intro Text (Centered above button on mobile, left-aligned on desktop) */}
        <div className="fixed inset-0 flex items-center justify-center md:justify-start px-4 sm:px-8 md:px-16 pointer-events-none z-50"
            style={{ 
              opacity: viewState !== ViewState.INTRO || introStep === 'PICK_CARD' ? 0 : 1, 
              transition: 'all 0.5s linear' 
            }}>
            <div className="w-full md:flex-1 flex justify-center md:justify-start -translate-y-[84px] xs:-translate-y-[88px] sm:-translate-y-[96px] md:translate-y-0 transition-transform duration-300">
                <div className="transition-all duration-75 ease-out w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[600px] flex justify-center md:justify-start">
                    <GooeyText
                    texts={[nav.introTop, nav.introBottom]}
                    morphTime={0.75}
                    cooldownTime={1.25}
                    className="h-[60px] xs:h-[70px] sm:h-[80px] md:h-[160px] w-full flex items-center justify-center md:justify-start"
                    textClassName="font-display font-bold tracking-tighter text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center md:text-left left-0 w-full md:w-auto text-white"
                  />
                </div>
            </div>
            {/* Empty divs to balance the flex layout so the center is perfectly centered if needed, but since button is in another container, we just need to align text left */}
        </div>
        
        {/* Welcome Button (Centered in the middle on mobile and desktop) */}
        <div className={`fixed inset-0 flex items-center justify-center z-[60] pointer-events-none transition-all duration-1000 ease-in-out ${viewState === ViewState.INTRO && introStep === 'WELCOME' ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`relative flex flex-col md:flex-row items-center justify-center mt-0 ${viewState === ViewState.INTRO && introStep === 'WELCOME' ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <MotionButton
                    label="Portfolio"
                    onClick={() => {
                        setIntroStep('EXPANDING_WHITE');
                        window.scrollTo(0, 0);
                        
                        setTimeout(() => {
                            setIntroStep('SHOW_TEXT');
                        }, 400);
                    }}
                />
            </div>
        </div>

        {/* Vitruvian Man (Homme de Vitruve) - Hidden on mobile (< md) */}
        <div 
          className={`fixed right-0 hidden md:flex w-[26vw] md:w-[24.5vw] lg:w-[26vw] xl:w-[26vw] h-screen overflow-hidden items-center justify-start z-[55] pointer-events-none transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1) ${
            viewState === ViewState.INTRO && introStep === 'WELCOME' 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-[15vw] pointer-events-none'
          }`}
        >
            <PortfolioCube />
        </div>

        {/* Expanding White Square */}
        <div 
          className={`fixed inset-0 z-[70] flex items-center justify-center pointer-events-none transition-opacity duration-1000 ${viewState === ViewState.PROJECTS || viewState === ViewState.REVEALING ? 'opacity-0' : 'opacity-100'}`}
        >
          <motion.div 
            initial={{ width: '192px', height: '56px', borderRadius: '28px', opacity: 0 }}
            animate={{ 
              width: introStep !== 'WELCOME' ? '200vmax' : '192px',
              height: introStep !== 'WELCOME' ? '200vmax' : '56px',
              borderRadius: introStep !== 'WELCOME' ? '150px' : '28px',
              opacity: introStep !== 'WELCOME' ? 1 : 0
            }}
            transition={{ 
              duration: 1.5, 
              ease: [0.83, 0, 0.17, 1],
              opacity: { duration: 0.01 }
            }}
            className="bg-white absolute"
          />
        </div>

        {/* Experience Text & Pick Card Text */}
        <div className={`fixed inset-0 z-[80] flex flex-col items-center justify-center pointer-events-none`}>
          <AnimatePresence>
            {introStep === 'SHOW_TEXT' && (
              <TypewriterExperience
                line1={nav.experiencePart1}
                line2={nav.experiencePart2}
                onComplete={() => setIntroStep('PICK_CARD')}
              />
            )}
            {introStep === 'PICK_CARD' && viewState === ViewState.INTRO && (
              <TypewriterPickCard
                text={nav.pick}
                subtext={lang === 'fr' ? 'Touchez une carte pour révéler' : 'Tap a card to reveal'}
              />
            )}
          </AnimatePresence>
        </div>

        <div className={`fixed inset-0 flex items-center justify-center z-[75] ${viewState === ViewState.REVEALING || viewState === ViewState.PROJECTS || viewState === ViewState.TRANSITIONING ? 'pointer-events-none' : ''} ${introStep === 'WELCOME' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
             <Deck scrollProgress={introStep === 'PICK_CARD' ? 1 : 0} viewState={viewState} onCardSelect={handleCardSelect} />
        </div>

        {(viewState === ViewState.PROJECTS || viewState === ViewState.TRANSITIONING) && (
            <div className={`w-full min-h-screen pt-0 z-10 ${showProjects ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <ProjectList 
                  projects={PROJECTS} 
                  lang={lang} 
                  onProjectStateChange={setIsProjectOpen} 
                  isReady={showProjects} 
                  initialProject={selectedProjectForModal} 
                />
            </div>
        )}
      </div>
      </div>
    </MagneticCursor>
  );
};
