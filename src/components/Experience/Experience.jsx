import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useFadeInView } from "../../hooks/usePortfolio";
import styles from "./Experience.module.css";

const EXPERIENCE = [
  {
    id: "revat",
    organization: "Revat Network",
    role: "C/C++ Training Program",
    period: "Dec 2023 – Feb 2024",
    type: "Training",
    description: [
      "Completed hands-on training in C and C++ programming fundamentals.",
      "Practiced procedural and object-oriented programming concepts through coding assignments.",
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useFadeInView(0.2);

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Background</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Training programs and practical coding experience.
          </p>
        </div>

        <motion.div
          ref={ref}
          className={styles.timeline}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          aria-label="Experience timeline"
        >
          {EXPERIENCE.map((exp) => (
            <article key={exp.id} className={styles.item}>
              <div className={styles.lineCol} aria-hidden="true">
                <div className={styles.dot} />
                <div className={styles.line} />
              </div>

              <div className={`card ${styles.card}`}>
                <div className={styles.cardTop}>
                  <div>
                    <span className={`tag ${styles.typeTag}`}>{exp.type}</span>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.org}>
                      <BookOpen size={14} aria-hidden="true" />
                      {exp.organization}
                    </p>
                  </div>
                  <time className={styles.period} dateTime={exp.period}>
                    {exp.period}
                  </time>
                </div>

                <ul className={styles.descList} aria-label="Description">
                  {exp.description.map((line) => (
                    <li key={line} className={styles.descItem}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
