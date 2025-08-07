"use client";

import Image from "next/image";
import styles from "@/app/page.module.scss";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export default function Home() {
  const introText = "Hello, Welcome to Kay's World.";
  const typingEffect = useTypingEffect(introText, 100);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Header</h1>
      </header>
      <main className={styles.main}>
        <h1>
          {typingEffect}
          <span className={styles.cursor}>|</span>
        </h1>
      </main>
      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
}
