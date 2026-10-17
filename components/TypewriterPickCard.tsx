import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'motion/react';

interface TypewriterPickCardProps {
  text: string;
  subtext?: string;
  onComplete?: () => void;
}

export const TypewriterPickCard: React.FC<TypewriterPickCardProps> = ({
  text,
  subtext,
  onComplete,
}) => {
  const characters = useMemo(() => text.split(''), [text]);
  const [typedIndex, setTypedIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTypedIndex(0);
    setIsTyping(true);

    let charIdx = 0;
    const typeNext = () => {
      if (charIdx < text.length) {
        charIdx++;
        setTypedIndex(charIdx);
        setIsTyping(true);

        const char = text[charIdx - 1];
        let delay = 48 + (Math.random() * 12 - 6);
        if (char === ' ') delay = 75;

        timerRef.current = setTimeout(typeNext, delay);
      } else {
        setIsTyping(false);
        if (onComplete) onComplete();
      }
    };

    // Brief settle delay before typing begins
    timerRef.current = setTimeout(typeNext, 180);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, onComplete]);

  return (
    <motion.div
      key="pick-typewriter-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        filter: 'blur(8px)', 
        scale: 1.02, 
        transition: { duration: 0.6, ease: "easeOut" } 
      }}
      className="text-[#002FA7] font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center px-4 sm:px-6 flex flex-col items-center gap-2 md:gap-3 absolute top-20 xs:top-24 sm:top-28 md:top-auto md:bottom-28 z-[80] pointer-events-none select-none"
    >
      <div className="relative inline-flex items-center justify-center font-display font-bold leading-tight select-none">
        {characters.map((char, index) => {
          const isVisible = index < typedIndex;
          const isCursorStart = typedIndex === 0 && index === 0;
          const isCursorNormal = typedIndex > 0 && index === typedIndex - 1;
          const hasCursor = isCursorStart || isCursorNormal;
          const cursorPositionClass = isCursorStart ? 'left-0' : 'left-full';

          return (
            <span key={index} className="relative inline">
              <span className={isVisible ? 'opacity-100' : 'opacity-0'}>
                {char === ' ' ? '\u00A0' : char}
              </span>
              {hasCursor && (
                <span
                  className={`absolute ${cursorPositionClass} top-[0.1em] h-[0.85em] w-[2.5px] sm:w-[3.5px] md:w-[4px] bg-[#002FA7] rounded-[1px] pointer-events-none ${
                    isTyping ? 'opacity-100' : 'animate-cursor-blink'
                  }`}
                  aria-hidden="true"
                />
              )}
            </span>
          );
        })}
      </div>

      {subtext && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: !isTyping ? 1 : 0, y: !isTyping ? 0 : 6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:hidden font-mono text-[11px] uppercase tracking-[0.22em] text-[#002FA7]/60 font-medium"
        >
          {subtext}
        </motion.p>
      )}
    </motion.div>
  );
};
