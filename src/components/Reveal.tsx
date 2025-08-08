
"use client";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import styles from "@/styles/Reveal.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Reveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.in);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={clsx(styles.reveal, className)}>
      {children}
    </div>
  );
}
