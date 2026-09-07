"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ViewTransition {
  ready: Promise<void>;
  finished: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition: () => void;
}

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void | Promise<void>) => ViewTransition;
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (origin?: { clientX: number; clientY: number }) => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved && saved !== "dark") {
      requestAnimationFrame(() => {
        setThemeState(saved);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(saved);
      });
    }
  }, []);

  const applyThemeClasses = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  const toggleTheme = (origin?: { clientX: number; clientY: number }) => {
    if (isTransitioningRef.current) return;

    const next = theme === "dark" ? "light" : "dark";

    const doc = (
      typeof document !== "undefined" ? document : null
    ) as DocumentWithViewTransition | null;

    // Direct fallback if view transitions not supported or reduced motion preferred
    if (
      !doc?.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      applyThemeClasses(next);
      return;
    }

    const x = origin?.clientX ?? window.innerWidth / 2;
    const y = origin?.clientY ?? window.innerHeight / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    isTransitioningRef.current = true;
    document.documentElement.classList.add("theme-transitioning");

    try {
      const transition = doc.startViewTransition(() => {
        applyThemeClasses(next);
      });

      transition.ready
        .then(() => {
          const animation = document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 550,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );

          animation.finished.finally(() => {
            document.documentElement.classList.remove("theme-transitioning");
            isTransitioningRef.current = false;
          });
        })
        .catch(() => {
          document.documentElement.classList.remove("theme-transitioning");
          isTransitioningRef.current = false;
        });
    } catch {
      applyThemeClasses(next);
      document.documentElement.classList.remove("theme-transitioning");
      isTransitioningRef.current = false;
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme: applyThemeClasses }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
