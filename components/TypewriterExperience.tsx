import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'motion/react';

interface TypewriterExperienceProps {
  line1: string;
  line2: string;
  onComplete: () => void;
}

export const TypewriterExperience: React.FC<TypewriterExperienceProps> = ({
  line1,
  line2,
  onComplete,
}) => {
  const fullText = useMemo(() => `${line1}\n${line2}`, [line1, line2]);
  const characters = useMemo(() => fullText.split(''), [fullText]);

  const [typedIndex, setTypedIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const completedRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Fast forward on user click
  const handleFastForward = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (typedIndex < characters.length) {
      // Reveal the entire text block immediately
      setTypedIndex(characters.length);
      setIsTyping(false);

      // Brief dwell before advancing
      timerRef.current = setTimeout(() => {
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete();
        }
      }, 1200);
    } else {
      // Already complete, advance immediately
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete();
      }
    }
  };

  useEffect(() => {
    completedRef.current = false;
    setTypedIndex(0);
    setIsTyping(true);

    let charIdx = 0;

    const typeNext = () => {
      if (charIdx < fullText.length) {
        charIdx++;
        setTypedIndex(charIdx);
        setIsTyping(true);

        const char = fullText[charIdx - 1];
        let delay = 26 + (Math.random() * 8 - 4);
        if (char === ',') delay = 200;
        else if (char === '.') delay = 350;
        else if (char === '\n') delay = 480;
        else if (char === ' ') delay = 40;

        timerRef.current = setTimeout(typeNext, delay);
      } else {
        // Typing finished
        setIsTyping(false);
        // Reading dwell to absorb the complete text block
        timerRef.current = setTimeout(() => {
          if (!completedRef.current) {
            completedRef.current = true;
            onComplete();
          }
        }, 2500);
      }
    };

    // Initial settle delay after white circle expansion
    timerRef.current = setTimeout(typeNext, 350);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [fullText, onComplete]);

  return (
    <motion.div
      key="typewriter-experience"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ 
        opacity: 0, 
        filter: 'blur(12px)', 
        scale: 1.04, 
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6 sm:px-12 md:px-16 z-[80]"
    >
      <div 
        onClick={handleFastForward}
        className="w-full max-w-3xl lg:max-w-4xl flex flex-col items-center justify-center cursor-pointer pointer-events-auto select-none py-8"
        title="Cliquez pour afficher la suite"
      >
        {/* Solid, fixed block of text (Pavé de texte) with static word positions */}
        <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#002FA7] tracking-tight leading-[1.3] text-center select-none">
          {characters.map((char, index) => {
            if (char === '\n') {
              return <br key={index} className="block my-2" />;
            }

            const isVisible = index < typedIndex;

            // Cursor placement rules:
            // 1. At start (typedIndex === 0): cursor blinks at index 0 (left-0)
            // 2. Normal characters: cursor sits at left-full of index (typedIndex - 1)
            // 3. Right after newline: cursor sits at left-0 of index (typedIndex)
            const isCursorStart = typedIndex === 0 && index === 0;
            const isCursorNormal = typedIndex > 0 && index === typedIndex - 1 && char !== '\n';
            const isCursorAfterNewline = 
              typedIndex > 0 && 
              typedIndex < characters.length && 
              characters[typedIndex - 1] === '\n' && 
              index === typedIndex;

            const hasCursor = isCursorStart || isCursorNormal || isCursorAfterNewline;
            const cursorPositionClass = (isCursorStart || isCursorAfterNewline) ? 'left-0' : 'left-full';

            return (
              <span key={index} className="relative inline">
                <span className={isVisible ? 'opacity-100' : 'opacity-0'}>
                  {char}
                </span>
                {hasCursor && (
                  <span
                    className={`absolute ${cursorPositionClass} top-[0.12em] h-[0.82em] w-[2.5px] sm:w-[3.5px] md:w-[4px] bg-[#002FA7] rounded-[1px] pointer-events-none ${
                      isTyping ? 'opacity-100' : 'animate-cursor-blink'
                    }`}
                    aria-hidden="true"
                  />
                )}
              </span>
            );
          })}
        </p>
      </div>
    </motion.div>
  );
};
