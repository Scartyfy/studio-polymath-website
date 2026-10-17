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
    // 0s - 0.75s: Logo fades in with a gentle micro-scale and soft focus reveal
    // 0.75s - 1.35s: Logo stays centered, crisp, minimal and elegant
    // 1.35s+: Cinematic smooth dissolve transition revealing the website seamlessly (no slide up)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1350);

    // Allow user to click, tap, scroll or press any key to immediately trigger the smooth transition
    const handleSkip = () => {
      setIsVisible(false);
    };

    window.addEventListener('keydown', handleSkip);
    window.addEventListener('wheel', handleSkip, { passive: true });
    window.addEventListener('touchstart', handleSkip, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleSkip);
      window.removeEventListener('wheel', handleSkip);
      window.removeEventListener('touchstart', handleSkip);
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
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: {
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1], // Silky cinematic ease-out curve
            },
          }}
          onClick={() => setIsVisible(false)}
          className={`fixed inset-0 z-[99999] h-[100dvh] w-screen flex items-center justify-center bg-black cursor-pointer select-none overflow-hidden ${
            !isVisible ? 'pointer-events-none' : ''
          }`}
          style={{
            willChange: 'opacity, transform',
          }}
          aria-label="Polymath Studio"
          role="dialog"
          aria-modal="true"
        >
          {/* Subtle atmospheric ambient glow in center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, ease: 'easeOut' },
            }}
            exit={{
              opacity: 0,
              scale: 1.25,
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[200px] sm:w-[260px] h-[200px] sm:h-[260px] rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />
          </motion.div>

          {/* Centered Logo Container with smooth cinematic emergence and dissolution */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(5px)' }}
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
              opacity: 0,
              scale: 1.08,
              filter: 'blur(8px)',
              transition: {
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="relative z-10 flex flex-col items-center justify-center px-6"
          >
            <img
              src={`${import.meta.env.BASE_URL}LOGO.png`}
              alt="Polymath Studio"
              style={{ filter: 'invert(1)' }}
              className="w-[38vw] max-w-[120px] sm:max-w-[145px] md:max-w-[170px] h-auto object-contain invert pointer-events-none select-none drop-shadow-[0_0_24px_rgba(255,255,255,0.18)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroScreen;
