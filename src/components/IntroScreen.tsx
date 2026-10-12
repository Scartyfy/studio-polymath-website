import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasUnmounted, setHasUnmounted] = useState(false);

  useEffect(() => {
    // Lock body scroll while the intro screen is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Sequence:
    // 0s - 0.75s: Logo smoothly fades in with a refined subtle scale
    // 0.75s - 1.4s: Logo stays centered, crisp and minimalist
    // 1.4s+: Smooth upward "push" transition uncovering the website
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1400);

    // Allow user to click, tap or press any key to immediately trigger the push transition
    const handleSkip = () => {
      setIsVisible(false);
    };

    window.addEventListener('keydown', handleSkip);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleSkip);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Once exit animation finishes, remove completely from DOM
  if (hasUnmounted) {
    return null;
  }

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = '';
        setHasUnmounted(true);
      }}
    >
      {isVisible && (
        <motion.div
          key="intro-screen"
          initial={{ y: '0%' }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1], // Smooth luxury studio push curve
            },
          }}
          onClick={() => setIsVisible(false)}
          className="fixed inset-0 z-[99999] h-[100dvh] w-screen flex items-center justify-center bg-black cursor-pointer select-none overflow-hidden border-b border-white/10"
          style={{
            willChange: 'transform',
            boxShadow: '0 30px 60px -10px rgba(0, 0, 0, 0.95)',
          }}
          aria-label="Polymath Studio"
          role="dialog"
          aria-modal="true"
        >
          {/* Subtle atmospheric ambient glow in center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] rounded-full bg-white/[0.035] blur-2xl pointer-events-none" />
          </div>

          {/* Centered Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(5px)' }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            exit={{
              y: -50,
              opacity: 0.95,
              transition: {
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            className="relative z-10 flex flex-col items-center justify-center px-6"
          >
            <img
              src={`${import.meta.env.BASE_URL}LOGO.png`}
              alt="Polymath Studio"
              style={{ filter: 'invert(1)' }}
              className="w-[42vw] max-w-[130px] sm:max-w-[160px] md:max-w-[190px] lg:max-w-[210px] h-auto object-contain invert pointer-events-none select-none drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroScreen;
