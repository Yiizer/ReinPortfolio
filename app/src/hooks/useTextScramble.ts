"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#_0101";

interface UseTextScrambleOptions {
  speed?: number;
}

export function useTextScramble(
  originalText: string,
  options: UseTextScrambleOptions = {}
) {
  const { speed = 1 } = options;

  const [prevText, setPrevText] = useState(originalText);
  const [displayText, setDisplayText] = useState(originalText);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef<number | null>(null);

  // Synchronize when originalText prop changes without triggering cascading effect renders
  if (prevText !== originalText) {
    setPrevText(originalText);
    setDisplayText(originalText);
  }

  const scramble = useCallback(() => {
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = originalText.length * 3;

    const update = () => {
      iteration += speed;

      const next = originalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration / 3) {
            return originalText[index];
          }
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");

      setDisplayText(next);

      if (iteration < maxIterations) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        setDisplayText(originalText);
        setIsScrambling(false);
      }
    };

    frameRef.current = requestAnimationFrame(update);
  }, [originalText, speed]);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return { displayText, scramble, isScrambling };
}
