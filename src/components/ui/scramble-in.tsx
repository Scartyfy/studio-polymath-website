import React, { useState, useEffect } from 'react';

interface ScrambleInProps {
  text: string;
  scrambleSpeed?: number;
  scrambledLetterCount?: number;
  className?: string;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function ScrambleIn({ 
  text, 
  scrambleSpeed = 30, 
  scrambledLetterCount = 4,
  className = '' 
}: ScrambleInProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!text) return;
    
    let frame = 0;
    const textLength = text.length;
    const totalFrames = 25;
    const step = textLength / totalFrames;

    const interval = setInterval(() => {
      frame++;
      const resolvedLength = Math.min(textLength, Math.floor(frame * step));
      if (resolvedLength >= textLength) {
        setDisplayText(text);
        clearInterval(interval);
        return;
      }

      const resolved = text.slice(0, resolvedLength);
      let scrambled = '';
      for (let i = 0; i < Math.min(scrambledLetterCount, textLength - resolvedLength); i++) {
        scrambled += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
      }
      setDisplayText(resolved + scrambled);
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [text, scrambleSpeed, scrambledLetterCount]);

  return <span className={className}>{displayText || text}</span>;
}
