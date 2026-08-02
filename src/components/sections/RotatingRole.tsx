"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { personal } from "@/data/personal";

const phrases = [
  "Desenvolvedor Java",
  "Desenvolvedor Back-end",
  "Desenvolvedor Full Stack",
  "Java | Spring Boot | APIs REST",
  "Node.js | React | Banco de Dados",
  "Estudante de Análise e Desenvolvimento de Sistemas",
];

const TYPE_SPEED = 55;
const DELETE_SPEED = 28;
const PAUSE = 1800;
const DELETE_PAUSE = 300;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export function RotatingRole() {
  const [text, setText] = useState("");
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );

  useEffect(() => {
    if (reduceMotion) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const phrase = phrases[phraseIndex];

      if (!deleting) {
        charIndex += 1;
        setText(phrase.slice(0, charIndex));
        if (charIndex === phrase.length) {
          deleting = true;
          timeout = setTimeout(tick, PAUSE);
          return;
        }
        timeout = setTimeout(tick, TYPE_SPEED);
        return;
      }

      charIndex -= 1;
      setText(phrase.slice(0, charIndex));
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timeout = setTimeout(tick, DELETE_PAUSE);
        return;
      }
      timeout = setTimeout(tick, DELETE_SPEED);
    };

    timeout = setTimeout(tick, DELETE_PAUSE);
    return () => clearTimeout(timeout);
  }, [reduceMotion]);

  const visibleText = reduceMotion ? personal.role : text;

  return (
    <p className="mt-3 min-h-14 font-mono text-base sm:min-h-8 sm:text-lg">
      <span
        aria-hidden="true"
        className="bg-gradient-to-r from-primary via-primary-light to-amber-400 bg-clip-text text-transparent"
      >
        {visibleText}
      </span>
      {!reduceMotion ? (
        <span
          aria-hidden="true"
          className="animate-hero-cursor ml-1 inline-block h-[1em] w-[2px] align-middle bg-primary"
        />
      ) : null}
      <span className="sr-only">{personal.role}</span>
    </p>
  );
}
