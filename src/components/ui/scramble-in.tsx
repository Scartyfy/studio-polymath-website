import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

interface ScrambleInProps {
  text: string;
  scrambleSpeed?: number;
  scrambledLetterCount?: number;
  className?: string;
  autoStart?: boolean;
  delay?: number;
  inViewMargin?: string;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export function ScrambleIn({ 
  text, 
  scrambleSpeed = 25, 
  scrambledLetterCount = 5,
  className = '',
  autoStart = false,
  delay = 0,
  inViewMargin = "0px 0px -20px 0px"
}: ScrambleInProps) {
  const [displayText, setDisplayText] = useState('\u00A0');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: inViewMargin as any });
  const hasRunOnceRef = useRef(false);

  const active = autoStart || isInView;

  useEffect(() => {
    if (!active) {
      setDisplayText('\u00A0');
      return;
    }

    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>;

    const startScramble = () => {
      let iteration = 0;
      const textLength = text.length;
      
      // Calculate step size so it takes ~1.5 - 2 seconds max
      const maxFrames = 1500 / scrambleSpeed; 
      const step = Math.max(1 / 2, textLength / maxFrames);

      interval = setInterval(() => {
        const resolvedText = text.substring(0, Math.floor(iteration));
        
        const remainingLength = Math.min(scrambledLetterCount, textLength - resolvedText.length);
        let scrambledText = '';
        for (let i = 0; i < remainingLength; i++) {
          scrambledText += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        }
        
        setDisplayText(resolvedText + scrambledText);
        
        if (iteration >= textLength) {
          clearInterval(interval);
          setDisplayText(text);
          hasRunOnceRef.current = true;
        }
        
        iteration += step;
      }, scrambleSpeed);
    };

    const effectiveDelay = hasRunOnceRef.current ? 0 : delay;

    if (effectiveDelay > 0) {
      timeout = setTimeout(startScramble, effectiveDelay);
    } else {
      startScramble();
    }

    return () => {
      if (timeout) clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [active, text, scrambleSpeed, scrambledLetterCount, delay]);

  return <span ref={ref} className={className}>{displayText}</span>;
}
