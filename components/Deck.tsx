import React, { useMemo, useState, useEffect } from 'react';
import { ViewState } from '../types';

interface DeckProps {
  scrollProgress: number;
  viewState: ViewState;
  onCardSelect: () => void;
}

export const Deck: React.FC<DeckProps> = ({ scrollProgress, viewState, onCardSelect }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZooming, setIsZooming] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [windowWidth, setWindowWidth] = useState(() => typeof window !== 'undefined' ? window.innerWidth : 390);
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (viewState === ViewState.REVEALING) {
      // Step 1: Flip the card immediately
      setIsFlipped(true);

      // Step 2: Transform/Zoom after a short delay to allow the flip to be visible
      const zoomTimer = setTimeout(() => {
        setIsZooming(true);
      }, 700); 
      
      return () => {
        clearTimeout(zoomTimer);
      };
    } else {
      setIsZooming(false);
      setIsFlipped(false);
    }
  }, [viewState]);

  const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);
  const spreadRaw = (viewState === ViewState.INTRO || viewState === ViewState.REVEALING) ? easeOutCubic(scrollProgress) : 0;
  const spread = Math.min(spreadRaw * 1.1, 1);
  const isInteractive = viewState === ViewState.INTRO && scrollProgress > 0.5;

  const numberOfCards = 5;
  const centerIndex = 2;
  const cards = useMemo(() => Array.from({ length: numberOfCards }), [numberOfCards]);

  const activeIndex = viewState === ViewState.REVEALING ? selectedIndex : hoveredIndex;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Subtle Atmospheric Frame */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${viewState === ViewState.INTRO ? 'opacity-20' : 'opacity-0'}`}>
        <div className="absolute left-[10%] bottom-0 w-[40vw] h-[60vh] border-l-[0.5px] border-t-[0.5px] border-white/20 rounded-tr-[200px] transform rotate-[10deg]"></div>
        <div className="absolute right-[10%] bottom-0 w-[40vw] h-[60vh] border-r-[0.5px] border-t-[0.5px] border-white/20 rounded-tl-[200px] transform rotate-[-10deg]"></div>
      </div>

      <div className="relative w-[120px] h-[175px] xs:w-[130px] xs:h-[190px] sm:w-56 sm:h-[315px] md:w-64 md:h-[360px]">
        {cards.map((_, index) => {
          const offsetBase = (index - centerIndex);
          
          // Responsive 2D Spread - Gentle fan on mobile, clean horizontal distribution on desktop
          const mobileSpacing = Math.min(Math.max((windowWidth - 136) / 4, 46), 62);
          const spreadSpacing = isMobile ? mobileSpacing : 280;
          const spreadX = offsetBase * spreadSpacing * spread;
          const spreadY = isMobile ? Math.pow(Math.abs(offsetBase), 1.4) * 8 * spread : 0; 
          const spreadRotateZ = isMobile ? offsetBase * 6.5 * spread : 0; 

          const isHovered = activeIndex === index;
          
          // Hover/active effect: Pure 2D elevation, subtle scale, no 3D forward push (z=0)
          const hoverY = (isInteractive && isHovered) ? (isMobile ? -24 : -36) : 0; 
          const hoverScale = (isInteractive && isHovered) ? (isMobile ? 1.06 : 1.04) : 1;

          let x = spreadX;
          let y = spreadY + hoverY;
          let r = (isInteractive && isHovered) ? 0 : spreadRotateZ;
          let s = hoverScale;
          let rotateY = 0;
          let opacity = 1;
          let transitionOverride = '';

          if (viewState === ViewState.REVEALING || viewState === ViewState.PROJECTS) {
            if (isHovered) {
              x = 0;
              y = viewState === ViewState.PROJECTS ? -1200 : 0;
              rotateY = isFlipped ? 180 : 0; 
              s = isMobile ? 1.18 : 1.15; 
              r = 0;
              opacity = viewState === ViewState.PROJECTS ? 0 : 1;
              transitionOverride = viewState === ViewState.PROJECTS 
                ? 'all 3000ms cubic-bezier(0.2, 1, 0.2, 1)'
                : (isZooming ? 'all 1600ms cubic-bezier(0.16, 1, 0.3, 1)' : 'all 800ms cubic-bezier(0.23, 1, 0.32, 1)');
            } else {
              // Unselected cards smoothly fade out without flying off screen
              x = spreadX; 
              y = spreadY + 40;
              opacity = 0;
              s = 0.95;
              transitionOverride = 'all 450ms cubic-bezier(0.16, 1, 0.3, 1)';
            }
          } else if (viewState === ViewState.INTRO) {
            if (scrollProgress === 0) {
              // Initial state: Cards stacked neatly in the center in 2D
              x = 0;
              y = 16;
              r = 0;
              s = 0.98;
              opacity = 0;
              transitionOverride = 'none';
            } else if (scrollProgress === 1 && !isHovered) {
              // Classic croupier card dealing animation: smoothly slides out from center with slight stagger
              const delay = Math.abs(offsetBase) * 75;
              transitionOverride = `all 850ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;
            }
          }

          const defaultTransition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';

          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full select-none
                ${isInteractive ? 'cursor-pointer touch-manipulation' : ''}
              `}
              style={{
                transform: `translateX(${x}px) translateY(${y}px) rotate(${r}deg) scale(${s})`,
                zIndex: isHovered ? 50 : 10 - Math.abs(offsetBase), 
                opacity: opacity,
                pointerEvents: isInteractive ? 'auto' : 'none', 
                transition: transitionOverride || (isInteractive ? defaultTransition : 'all 850ms cubic-bezier(0.16, 1, 0.3, 1)')
              }}
              onMouseEnter={() => { if (isInteractive) setHoveredIndex(index); }}
              onMouseLeave={() => { if (isInteractive && activeIndex === index) setHoveredIndex(null); }}
              onTouchStart={() => { if (isInteractive) setHoveredIndex(index); }}
              onClick={() => {
                if (isInteractive) {
                  setSelectedIndex(index);
                  setHoveredIndex(index);
                  if (isMobile) {
                    setTimeout(() => {
                      onCardSelect();
                    }, 120);
                  } else {
                    onCardSelect();
                  }
                }
              }}
            >
              {/* Card Container (flip wrapper) */}
              <div 
                className="w-full h-full relative"
                style={{ 
                  transform: `rotateY(${rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 900ms cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              >
                {/* Card Back - 2D Flat Graphic Design, No drop shadow */}
                <div className="absolute inset-0 backface-hidden rounded-xl sm:rounded-2xl overflow-hidden bg-[#002480] border-2 sm:border-[3px] border-white">
                  <div className="w-full h-full p-1.5 sm:p-2 relative z-10">
                    <div className="w-full h-full rounded-lg sm:rounded-xl flex items-center justify-center relative border-2 sm:border-[3px] border-white">
                      <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 sm:border-[3px] border-white rounded-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Front (Revelation) - Ace of Spades - 2D Flat Graphic Design, No drop shadow */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-xl sm:rounded-2xl overflow-hidden flex flex-col justify-between p-2.5 sm:p-3 md:p-4 border-2 sm:border-[3px] border-[#002FA7] bg-white transition-colors duration-1000"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <div className="flex flex-col items-center self-start z-10">
                    <div className="relative">
                      <span className="font-display font-bold text-lg sm:text-xl md:text-2xl leading-none transition-colors duration-1000 text-[#002FA7]">A</span>
                    </div>
                    <div className="relative mt-0.5">
                      <span className="text-[12px] sm:text-[15px] md:text-[18px] transition-colors duration-1000 text-[#002FA7]">♠</span>
                    </div>
                  </div>

                  {/* Central Spade - Clean Flat 2D Graphic */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className={`relative transition-all duration-1000 ${viewState !== ViewState.INTRO ? 'scale-100' : 'scale-75'}`}>
                      <span className="text-4xl sm:text-5xl md:text-6xl transition-all duration-1000 text-[#002FA7]">
                        ♠
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center self-end transform rotate-180 z-10">
                    <div className="relative">
                      <span className="font-display font-bold text-lg sm:text-xl md:text-2xl leading-none transition-colors duration-1000 text-[#002FA7]">A</span>
                    </div>
                    <div className="relative mt-0.5">
                      <span className="text-[12px] sm:text-[15px] md:text-[18px] transition-colors duration-1000 text-[#002FA7]">♠</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
