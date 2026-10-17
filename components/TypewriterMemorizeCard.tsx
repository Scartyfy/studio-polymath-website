import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'motion/react';

interface TypewriterMemorizeCardProps {
  text: string;
}

export const TypewriterMemorizeCard: React.FC<TypewriterMemorizeCardProps> = ({ text }) => {
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
        let delay = 42 + (Math.random() * 12 - 6);
        if (char === ' ') delay = 65;

        timerRef.current = setTimeout(typeNext, delay);
      } else {
        setIsTyping(false);
      }
    };

    // Settle delay before typing
    timerRef.current = setTimeout(typeNext, 120);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ 
        opacity: 0, 
        y: -15, 
        filter: 'blur(8px)',
        transition: { duration: 0.6, ease: "easeOut" } 
      }}
      className="fixed top-20 xs:top-24 sm:top-28 md:top-24 left-0 right-0 z-[100] pointer-events-none flex flex-col items-center justify-center px-6 select-none"
    >
      <div className="relative inline-flex items-center justify-center font-display font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight text-white leading-tight select-none">
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
                  className={`absolute ${cursorPositionClass} top-[0.1em] h-[0.85em] w-[2.5px] sm:w-[3.5px] md:w-[4px] bg-white rounded-[1px] pointer-events-none ${
                    isTyping ? 'opacity-100' : 'animate-cursor-blink'
                  }`}
                  aria-hidden="true"
                />
              )}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
};
