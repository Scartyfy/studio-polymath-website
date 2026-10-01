import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

interface ScrambleInProps {
  text: string;
  scrambleSpeed?: number;
  scrambledLetterCount?: number;
  className?: string;
  autoStart?: boolean;
  inViewMargin?: string;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export function ScrambleIn({ 
  text, 
  scrambleSpeed = 25, 
  scrambledLetterCount = 5,
  className = '',
  autoStart = false,
  inViewMargin = "0px 0px -20px 0px"
}: ScrambleInProps) {
  const [displayText, setDisplayText] = useState('');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: inViewMargin as any });

  const active = autoStart || isInView;

  useEffect(() => {
    if (!active) {
      // Just in case it's not in view yet, keep it empty or with a space to keep height
      setDisplayText(' ');
      return;
    }

    let iteration = 0;
    const textLength = text.length;
    let interval: ReturnType<typeof setInterval>;
    
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
      }
      
      iteration += step;
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [active, text, scrambleSpeed, scrambledLetterCount]);

  return <span ref={ref} className={className}>{displayText}</span>;
}
