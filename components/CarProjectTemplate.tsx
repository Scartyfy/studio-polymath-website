import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'motion/react';
import { Language } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CONCEPT_CARS } from './carProjectData';

interface CarProjectTemplateProps {
  lang: Language;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
  onClose?: () => void;
}

const RevealTitle = ({ children }: { children: string; key?: React.Key }) => {
  return (
    <div className="overflow-hidden inline-block pr-2 pb-4 -mb-4">
      <motion.div
        initial={{ y: "110%", rotate: 5 }}
        whileInView={{ y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="origin-top-left inline-block"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const CarProjectTemplate: React.FC<CarProjectTemplateProps> = ({
  lang,
  scrollContainerRef,
  onClose,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<{ src: string; title: string; concept: string } | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    container: scrollContainerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  const heroImageY = useTransform(smoothProgress, [0, 0.2], ["0%", "25%"]);
  const heroImageScale = useTransform(smoothProgress, [0, 0.2], [1, 1.08]);
  const heroTextY = useTransform(smoothProgress, [0, 0.2], ["0%", "40%"]);

  // All images flattened sequentially across both concepts (without /4.jpg)
  const allImagesList = [
    { src: './IMG_4351.jpg', title: 'CONCEPT CARS — Études de Proportions & Design', concept: 'Concept Cars' },
    { src: './car1.jpg', title: 'LOBSTER CAR — Affiche & Manifeste de Style', concept: 'Lobster Car' },
    { src: './car2.jpg', title: 'LOBSTER CAR — Rendu Dynamique & Aérodynamique', concept: 'Lobster Car' },
    { src: './car4.jpg', title: 'LOBSTER CAR', concept: 'Lobster Car' },
    { src: './car3.jpg', title: 'LOBSTER CAR — Poste de Pilotage & Ergonomie', concept: 'Lobster Car' },
    { src: './car5.jpg', title: 'LOBSTER CAR — Vue Arrière & Signature Lumineuse', concept: 'Lobster Car' },
    { src: './1.jpg', title: 'PORSCHE 754 — Planche Stylistique & Manifeste', concept: 'Porsche 754 Concept' },
    { src: './2.jpg', title: 'PORSCHE 754 — Spa-Francorchamps · Vues Dynamique & Aérienne', concept: 'Porsche 754 Concept' },
    { src: './3.jpg', title: 'PORSCHE 754 — Spa-Francorchamps · Raidillon & Perspective Sol', concept: 'Porsche 754 Concept' },
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowRight') {
        if (allImagesList.length > 0) {
          const next = (lightboxIdx + 1) % allImagesList.length;
          setLightboxIdx(next);
          setLightbox(allImagesList[next]);
        }
      } else if (e.key === 'ArrowLeft') {
        if (allImagesList.length > 0) {
          const prev = (lightboxIdx - 1 + allImagesList.length) % allImagesList.length;
          setLightboxIdx(prev);
          setLightbox(allImagesList[prev]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, lightboxIdx, allImagesList]);

  // Listen for global close-lightbox event (from top-right close button)
  useEffect(() => {
    if (!lightbox) return;
    const handleCloseEvent = () => setLightbox(null);
    window.addEventListener('close-lightbox', handleCloseEvent);
    return () => window.removeEventListener('close-lightbox', handleCloseEvent);
  }, [lightbox]);

  const openLightbox = (currentSrc: string) => {
    const found = allImagesList.findIndex((i) => i.src === currentSrc);
    const idx = found >= 0 ? found : 0;
    setLightboxIdx(idx);
    setLightbox(allImagesList[idx]);
  };

  const t = {
    fr: {
      projectBadge: "P/03 — Project",
      headerDesc: "Design Automobile & Concept Cars",
      title: "Concept Cars",
      subtitle: "",
      contextLabel: "Contexte",
      contextText: "J'ai toujours aimé l'automobile et tout particulièrement l'esthétique automobile. Je me suis donc essayé à concevoir deux concept cars qui reflètent ma sensibilité pour les lignes pures, l'aérodynamique et le design de caractère.",
      posterTag: "Affiche & Manifeste",
      sketchTag: "Recherche & Croquis Préparatoires",
      photosTag: "Visuels Photographiques",
      backToPortfolio: "Retour au portfolio",
      trackSessionsTag: "Essais Circuit · Validation Aérodynamique",
      trackLocationTag: "Circuit de Spa-Francorchamps · 07:00 AM",
      quotesHeading: "Intentions de Style",
      featuresHeading: "Architecture & Éléments Clés"
    },
    en: {
      projectBadge: "P/03 — Project",
      headerDesc: "Automotive Design & Concept Cars",
      title: "Concept Cars",
      subtitle: "",
      contextLabel: "Context",
      contextText: "I have always loved cars and specifically automotive aesthetics. I set out to design two concept cars reflecting my passion for pure lines, aerodynamics, and distinctive styling.",
      posterTag: "Styling Poster & Manifesto",
      sketchTag: "Styling Sketches & Ideation",
      photosTag: "Photographic Visuals",
      backToPortfolio: "Back to portfolio",
      trackSessionsTag: "Track Sessions · Aerodynamic Validation",
      trackLocationTag: "Spa-Francorchamps Circuit · 07:00 AM",
      quotesHeading: "Styling Intentions",
      featuresHeading: "Architecture & Key Features"
    },
  }[lang];

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#F5F5F3] text-[#002FA7] min-h-screen relative font-sans selection:bg-[#002FA7] selection:text-white"
    >
      {/* Global Noise Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.04] mix-blend-darken" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* ========================================================================= */}
      {/* 1. BRUTALIST HERO SECTION (STRUCTURE IDENTIQUE AUX AUTRES PROJETS)        */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-screen pt-2 md:pt-4 pb-12 px-4 md:px-8 flex flex-col justify-between overflow-hidden">
        <div className="w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative pointer-events-none pt-12 md:pt-16">
            
            {/* Number + Arrow */}
            <div className="md:col-span-3 flex flex-col gap-8 md:gap-20">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight overflow-hidden pb-2 -mb-2">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block font-display"
                >
                  {t.projectBadge}
                </motion.span>
              </h2>
              
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="hidden md:block w-20 h-20 origin-center"
              >
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path d="M10 10 L80 80" stroke="#002FA7" strokeWidth="6" />
                  <path
                    d="M85 30 L85 85 L30 85"
                    stroke="#002FA7"
                    strokeWidth="6"
                    fill="none"
                    strokeLinejoin="miter"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Header Category Description */}
            <div className="md:col-span-4 mt-8 md:mt-0">
              <h3 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-medium tracking-tight font-display">
                {t.headerDesc
                  .split(" & ")
                  .map((line: string, i: number, arr: any[]) => (
                    <div key={i} className="overflow-hidden pb-1 -mb-1">
                      <motion.div
                        initial={{ y: "110%", clipPath: "inset(0 0 100% 0)" }}
                        animate={{ y: 0, clipPath: "inset(0 0 0% 0)" }}
                        transition={{
                          delay: 0.1 * i + 0.5,
                          duration: 1.2,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                      >
                        {line}
                        {i < arr.length - 1 && <>&nbsp;&amp;</>}
                      </motion.div>
                    </div>
                  ))}
              </h3>
            </div>

            <div className="md:col-span-5 flex justify-start md:justify-end mt-4 md:mt-0" />
          </div>
        </div>

        {/* Massive Title */}
        <motion.div
          style={{ y: heroTextY }}
          className="w-full text-right mt-8 sm:mt-12 md:-mt-12 md:mb-4 relative z-20 mix-blend-difference text-white pointer-events-none"
        >
          <h1 className="text-4xl sm:text-6xl md:text-[12vw] lg:text-[13vw] font-display font-medium tracking-tighter leading-[0.85] md:leading-[0.8] uppercase break-normal md:whitespace-nowrap">
            {t.title.split(" ").map((word: string, i: number) => (
              <RevealTitle key={i}>{word}</RevealTitle>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-[4vw] align-top ml-2 inline-block text-white mix-blend-normal"
            >
              ©
            </motion.span>
          </h1>
        </motion.div>

        {/* Bottom Content & Main Banner (BORDS DROITS, SANS ARRONDI) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16 md:mt-0 items-stretch flex-grow z-10 relative">
          
          {/* Left Metadata Column */}
          <div className="md:col-span-3 flex flex-col justify-start pt-4 md:pt-8 pb-0 md:pb-4 text-[#002FA7]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest mb-2 md:mb-4">
                {t.contextLabel}
              </h4>
              <p className="text-base md:text-lg pr-4 md:pr-8 leading-relaxed max-w-sm font-light">
                {t.contextText}
              </p>
            </motion.div>
          </div>

          {/* Large Hero Banner : cadrée sur l'image */}
          <div className="md:col-span-9 relative w-full h-full flex items-end">
            <motion.div
              initial={{
                clipPath: "inset(100% 0 0 0)",
              }}
              animate={{
                clipPath: "inset(0% 0 0 0)",
              }}
              transition={{
                delay: 0.2,
                duration: 1.4,
                ease: [0.76, 0, 0.24, 1],
              }}
              onClick={() => openLightbox('./IMG_4351.jpg')}
              className="w-full aspect-[16/10] md:aspect-[21/9] relative z-20 overflow-hidden rounded-none border border-[#002FA7]/15 bg-[#121622] shadow-sm cursor-zoom-in group"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 1.0,
                  ease: [0.76, 0, 0.24, 1],
                }}
                src="./IMG_4351.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = './car1.jpg';
                }}
                alt="Automotive Design"
                className="w-full h-full object-cover object-center contrast-[1.02] rounded-none select-none transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORPS DU PROJET : LES 2 CONCEPTS RÉUNIS TOUT À LA SUITE                */}
      {/*    AUCUN CROPPAGE : TOUTES LES IMAGES SONT AFFICHÉES EN FORMAT INTÉGRAL  */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-32 md:space-y-44">
        {CONCEPT_CARS.map((car, cIdx) => (
          <article key={car.id} className="relative">
            
            {/* Titre minimaliste du Concept */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 pb-6 mb-12 md:mb-16 border-b border-[#002FA7]/15">
              <div className="flex items-baseline gap-4 md:gap-6">
                <span className="font-mono text-sm md:text-base font-bold text-[#002FA7]/50">
                  0{cIdx + 1}
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium uppercase tracking-tight text-[#002FA7]">
                  {car.name}
                </h2>
              </div>
              <span className="font-mono text-xs md:text-sm text-[#002FA7]/70 uppercase tracking-wider font-medium">
                {car.tagline[lang]}
              </span>
            </div>

            {/* TRAITEMENT SPÉCIFIQUE CONCEPT 02 : PORSCHE 754 CONCEPT */}
            {car.id === 'concept-2' ? (
              <div className="space-y-16 md:space-y-24">
                
                {/* Image 1 : Planche Stylistique & Explication */}
                <section>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                    
                    {/* Colonne Image 1 */}
                    <div 
                      className="lg:col-span-8 cursor-zoom-in group"
                      onClick={() => openLightbox(car.poster.image)}
                    >
                      <div className="w-full bg-[#EAE8E3]/50 p-2 md:p-4 border border-[#002FA7]/10 shadow-sm transition-opacity duration-300 group-hover:opacity-95">
                        <img
                          src={car.poster.image}
                          alt="Porsche 754 Concept"
                          className="w-full h-auto object-contain select-none rounded-none"
                          loading="eager"
                        />
                      </div>
                    </div>

                    {/* Colonne Texte épuré expliquant la démarche */}
                    <div className="lg:col-span-4 flex flex-col justify-start space-y-4">
                      <h3 className="text-2xl md:text-3xl font-display font-medium uppercase text-[#002FA7] tracking-tight">
                        PORSCHE 754 CONCEPT
                      </h3>

                      <p className="text-base md:text-lg font-light text-[#002FA7]/90 leading-relaxed">
                        {car.poster.description[lang]}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Images 2 & 3 : Essais Circuit Spa-Francorchamps */}
                <section className="border-t border-[#002FA7]/15 pt-12 md:pt-16">
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-display font-medium uppercase text-[#002FA7] tracking-tight">
                      CIRCUIT DE SPA-FRANCORCHAMPS · 07:00 AM
                    </h3>
                  </div>

                  {/* 2 Grandes Planches Photographiques posées côte à côte */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    
                    {/* Image 2 : Vues Dynamique & Aérienne */}
                    <div 
                      className="w-full cursor-zoom-in group"
                      onClick={() => openLightbox(car.photos[0]?.image || './2.jpg')}
                    >
                      <div className="w-full bg-[#111622] p-2 md:p-3 border border-[#002FA7]/15 transition-transform duration-500 group-hover:scale-[1.01]">
                        <img
                          src={car.photos[0]?.image || './2.jpg'}
                          alt="Porsche 754 Spa-Francorchamps"
                          className="w-full h-auto object-contain select-none rounded-none"
                          loading="eager"
                        />
                      </div>
                    </div>

                    {/* Image 3 : Raidillon & Perspective Sol */}
                    <div 
                      className="w-full cursor-zoom-in group"
                      onClick={() => openLightbox(car.photos[1]?.image || './3.jpg')}
                    >
                      <div className="w-full bg-[#111622] p-2 md:p-3 border border-[#002FA7]/15 transition-transform duration-500 group-hover:scale-[1.01]">
                        <img
                          src={car.photos[1]?.image || './3.jpg'}
                          alt="Porsche 754 Spa-Francorchamps"
                          className="w-full h-auto object-contain select-none rounded-none"
                          loading="eager"
                        />
                      </div>
                    </div>

                  </div>
                </section>

              </div>
            ) : (
              /* STRUCTURE CONCEPT 01 : LOBSTER CAR */
              <div className="space-y-16 md:space-y-24">
                {/* A. Les deux premières images côte à côte */}
                <section>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
                    
                    {/* Image 1 : car1.jpg */}
                    <div 
                      onClick={() => openLightbox(car.poster.image)}
                      className="w-full cursor-zoom-in group"
                    >
                      <div className="w-full bg-[#EAE8E3]/50 p-2 md:p-3 border border-[#002FA7]/15 shadow-sm transition-transform duration-300 group-hover:scale-[1.01]">
                        <img
                          src={car.poster.image}
                          alt={`${car.name}`}
                          className="w-full h-auto object-contain rounded-none select-none"
                          loading="eager"
                        />
                      </div>
                    </div>

                    {/* Image 2 : car2.jpg */}
                    <div 
                      onClick={() => openLightbox('./car2.jpg')}
                      className="w-full cursor-zoom-in group"
                    >
                      <div className="w-full bg-[#111622] p-2 md:p-3 border border-[#002FA7]/15 shadow-sm transition-transform duration-300 group-hover:scale-[1.01]">
                        <img
                          src="./car2.jpg"
                          alt={`${car.name}`}
                          className="w-full h-auto object-contain rounded-none select-none"
                          loading="eager"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Petit texte épuré sous les deux premières images */}
                  <div className="mt-6 pt-4 border-t border-[#002FA7]/15">
                    <p className="text-base md:text-lg font-light text-[#002FA7]/90 leading-relaxed max-w-3xl">
                      {car.poster.description[lang]}
                    </p>
                  </div>
                </section>

                {/* B. Troisième image (esquisses) avec le texte juste à côté */}
                <section className="border-t border-[#002FA7]/15 pt-12 md:pt-16">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                    <div 
                      className="lg:col-span-8 cursor-zoom-in group"
                      onClick={() => openLightbox(car.sketch.image)}
                    >
                      <div className="w-full bg-[#EAE8E3]/40 p-2 md:p-4 border border-[#002FA7]/15 shadow-sm transition-transform duration-300 group-hover:scale-[1.008]">
                        <img
                          src={car.sketch.image}
                          alt="Styling Sketches"
                          className="w-full h-auto object-contain rounded-none select-none"
                          loading="eager"
                        />
                      </div>
                    </div>

                    {/* Texte à côté de la troisième image */}
                    <div className="lg:col-span-4 flex flex-col justify-start">
                      <p className="text-base font-light text-[#002FA7]/85 leading-relaxed">
                        {car.sketch.text[lang]}
                      </p>
                    </div>
                  </div>
                </section>

                {/* C. Visuels Photographiques restants (car3.jpg et car5.jpg) */}
                <section className="border-t border-[#002FA7]/15 pt-12 md:pt-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {car.photos
                      .filter((photo) => photo.image !== './car2.jpg' && photo.image !== '/car2.jpg')
                      .map((photo) => (
                        <div
                          key={photo.id}
                          onClick={() => openLightbox(photo.image)}
                          className="w-full cursor-zoom-in group"
                        >
                          <div className="w-full overflow-hidden bg-[#111622] p-2 md:p-3 border border-[#002FA7]/15 transition-transform duration-500 group-hover:scale-[1.01]">
                            <img
                              src={photo.image}
                              alt={car.name}
                              className="w-full h-auto object-contain rounded-none select-none"
                              loading="eager"
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </section>
              </div>
            )}

          </article>
        ))}
      </main>

      {/* ========================================================================= */}
      {/* 3. VISIONNEUSE PLEIN ÉCRAN MINIMALISTE (TOUTES LES PHOTOS SANS ARRONDI)    */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            data-lightbox-active="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-8 cursor-zoom-out select-none"
            onClick={() => setLightbox(null)}
          >
            {/* Image principale sans bord rond */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <motion.img
                key={lightbox.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={lightbox.src}
                alt={lightbox.title}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[92vh] max-w-[95vw] object-contain rounded-none select-none cursor-default"
              />

              {allImagesList.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const prev = (lightboxIdx - 1 + allImagesList.length) % allImagesList.length;
                      setLightboxIdx(prev);
                      setLightbox(allImagesList[prev]);
                    }}
                    className="absolute left-2 md:left-6 w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors rounded-none z-30"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const next = (lightboxIdx + 1) % allImagesList.length;
                      setLightboxIdx(next);
                      setLightbox(allImagesList[next]);
                    }}
                    className="absolute right-2 md:right-6 w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors rounded-none z-30"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 4. PIED DE PAGE ÉPURÉ                                                     */}
      {/* ========================================================================= */}
      <footer className="w-full py-16 md:py-20 border-t border-[#002FA7]/15 flex flex-col items-center justify-center bg-[#F5F5F3] text-center px-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#002FA7]/40 font-medium">
          Arthur Chauvin — Concept Cars © 2026
        </span>
      </footer>
    </div>
  );
};
