
"use client";

import styles from "@/styles/Hero.module.scss";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("hero");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top < -40) {
        el.classList.add(styles.still);
      } else {
        el.classList.remove(styles.still);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className={styles.hero} aria-label="Intro">
      <div className={styles.inner}>
        <h1 className={styles.type}>
          <span>Hello, Welcome to Kay&apos;s World! </span>
        </h1>
        <p className={styles.subtitle}>
          Fullstack Engineer — Python · FastAPI · TypeScript · Next.js · Azure
        </p>
        <div className={styles.scrollHint} aria-hidden>
          <span>Scroll</span>
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
            <path d="M12 19l-7-7 1.41-1.41L12 16.17l5.59-5.58L19 12l-7 7z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
