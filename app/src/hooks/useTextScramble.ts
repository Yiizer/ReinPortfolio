"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#_0101";

interface UseTextScrambleOptions {
  speed?: number; // frame skip / speed multiplier
  autoTriggerOnMount?: boolean;
}

export function useTextScramble(
  originalText: string,
  options: UseTextScrambleOptions = {}
) {
  const { speed = 1, autoTriggerOnMount = false } = options;
  const [displayText, setDisplayText] = useState(originalText);
  const frameRef = useRef<number | null>(null);
  const isScramblingRef = useRef(false);

  const scramble = useCallback(() => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

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
        isScramblingRef.current = false;
      }
    };

    frameRef.current = requestAnimationFrame(update);
  }, [originalText, speed]);

  useEffect(() => {
    setDisplayText(originalText);
    if (autoTriggerOnMount) {
      scramble();
    }
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [originalText, autoTriggerOnMount, scramble]);

  return { displayText, scramble, isScrambling: isScramblingRef.current };
}

