'use client';

import styles from "@/styles/Resume.module.scss";
import data from "@/data/resumeData";
import Reveal from "@/components/Reveal";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("resume");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); 
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="resume" className={clsx(styles.wrap, { [styles.visible]: isVisible })} aria-label="Resume">
      <div className="container">
        <Reveal>
          <header className={styles.header}>
            <h2>{data.name}</h2>
            <p className={styles.headline}>{data.headline}</p>
            <p><a href={`mailto:${data.email}`}>{data.email}</a></p>
            <ul className={styles.links}>
              {data.links.map((l) => (
                <li key={l.url}><a href={l.url} target="_blank" rel="noreferrer">{l.label}</a></li>
              ))}
            </ul>
          </header>
        </Reveal>

        <Reveal>
          <section className={styles.section}>
            <h3>Summary</h3>
            <p>{data.summary}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className={styles.section}>
            <h3>Skills</h3>
            <ul className={styles.chips}>
              {data.skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className={styles.section}>
            <h3>Experience</h3>
            <div className={styles.timeline}>
              {data.experiences.map((xp, i) => (
                <article className={styles.item} key={i}>
                  <header>
                    <div className={styles.role}>{xp.title}</div>
                    <div className={styles.meta}>
                      <span className={styles.company}>{xp.company}</span>
                      <span className={styles.range}>{xp.start} — {xp.end}</span>
                    </div>
                  </header>
                  <ul>
                    {xp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className={styles.section}>
            <h3>Projects</h3>
            {data.projects.map((p, i) => (
              <article className={styles.item} key={i}>
                <header><div className={styles.role}>{p.name}</div></header>
                <p>{p.description}</p>
                {p.bullets && <ul>{p.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>}
              </article>
            ))}
          </section>
        </Reveal>

        <Reveal>
          <section className={styles.section}>
            <h3>Education</h3>
            {data.education.map((e, i) => (
              <article className={styles.item} key={i}>
                <header>
                  <div className={styles.role}>{e.degree}</div>
                  <div className={styles.meta}><span className={styles.company}>{e.school}</span></div>
                </header>
                {e.bullets && <ul>{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>}
              </article>
            ))}
          </section>
        </Reveal>

        <Reveal>
          <section className={styles.section}>
            <h3>Languages</h3>
            <ul className={styles.chips}>
              {data.languages.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </section>
        </Reveal>
      </div>
    </section>
  );
}
