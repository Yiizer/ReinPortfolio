"use client";

import { useTextScramble } from "@/hooks/useTextScramble";

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3";
}

export default function ScrambleText({
  text,
  className = "",
  as: Component = "span",
}: ScrambleTextProps) {
  const { displayText, scramble } = useTextScramble(text);

  return (
    <Component
      onMouseEnter={scramble}
      className={`inline-block font-mono select-none ${className}`}
    >
      {displayText}
    </Component>
  );
}

