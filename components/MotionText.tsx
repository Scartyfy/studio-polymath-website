import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion } from 'motion/react';

interface MotionTextProps {
  text: string;
  onComplete: () => void;
}

export const MotionText: React.FC<MotionTextProps> = ({ text, onComplete }) => {
  const words = useMemo(() => text.split(' '), [text]);
  const [activeWordIdx, setActiveWordIdx] = useState(0);
  const [activeCharIdx, setActiveCharIdx] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setActiveWordIdx(0);
    setActiveCharIdx(0);
    setIsTyping(true);

    let wordIdx = 0;
    let charIdx = 0;

    const typeNext = () => {
      if (wordIdx < words.length) {
        const currentWord = words[wordIdx];
        if (charIdx < currentWord.length) {
          charIdx++;
          setActiveCharIdx(charIdx);
          setActiveWordIdx(wordIdx);
          setIsTyping(true);

          // Fast, crisp typewriter cadence
          const delay = 40 + (Math.random() * 10 - 5);
          timerRef.current = setTimeout(typeNext, delay);
        } else {
          // Word finished: brief carriage return pause before next word line
          if (wordIdx < words.length - 1) {
            wordIdx++;
            charIdx = 0;
            setActiveWordIdx(wordIdx);
            setActiveCharIdx(0);
            timerRef.current = setTimeout(typeNext, 120);
          } else {
            // All words complete
            setIsTyping(false);
            timerRef.current = setTimeout(() => {
              onComplete();
            }, 450); // Pause on completed typewriter text before Photoshop selection
          }
        }
      }
    };

    // Initial slight pause before typing starts
    timerRef.current = setTimeout(typeNext, 150);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [words, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[120] flex items-center justify-center pointer-events-none overflow-hidden select-none"
    >
      <div className="flex flex-col items-center justify-center gap-4 w-full px-4">
        {words.map((word, wIdx) => {
          const isPastWord = wIdx < activeWordIdx;
          const isCurrentWord = wIdx === activeWordIdx;
          const isFutureWord = wIdx > activeWordIdx;

          const chars = word.split('');

          return (
            <div key={wIdx} className="overflow-visible py-1 sm:py-2 w-full flex justify-center">
              <span className="relative inline-flex items-center justify-center font-display font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none text-white text-center">
                {chars.map((char, cIdx) => {
                  let isVisible = false;
                  if (isPastWord) isVisible = true;
                  else if (isCurrentWord) isVisible = cIdx < activeCharIdx;
                  else if (isFutureWord) isVisible = false;

                  const isCursorAtStart = isCurrentWord && activeCharIdx === 0 && cIdx === 0;
                  const isCursorNormal = isCurrentWord && activeCharIdx > 0 && cIdx === activeCharIdx - 1;
                  const hasCursor = isCursorAtStart || isCursorNormal;
                  const cursorPositionClass = isCursorAtStart ? 'left-0' : 'left-full';

                  return (
                    <span key={cIdx} className="relative inline">
                      <span className={isVisible ? 'opacity-100' : 'opacity-0'}>
                        {char}
                      </span>
                      {hasCursor && (
                        <span
                          className={`absolute ${cursorPositionClass} top-[0.08em] h-[0.84em] w-[3px] sm:w-[5px] md:w-[7px] lg:w-[9px] bg-white rounded-[1px] pointer-events-none ${
                            isTyping ? 'opacity-100' : 'animate-cursor-blink'
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  );
                })}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
