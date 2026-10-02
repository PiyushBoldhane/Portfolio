import { motion } from "framer-motion";
import { Code2, Database, Terminal, BookOpen } from "lucide-react";
import { useFadeInView } from "../../hooks/usePortfolio";
import styles from "./About.module.css";

const FOCUSED_ON = [
  { icon: <Code2 size={15} />, label: "Java Development" },
  { icon: <Database size={15} />, label: "PostgreSQL & Databases" },
  { icon: <Terminal size={15} />, label: "Backend Development" },
  { icon: <BookOpen size={15} />, label: "Data Structures & Algorithms" },
  { icon: <Code2 size={15} />, label: "OOP Principles" },
];

export default function About() {
  const { ref, inView } = useFadeInView(0.2);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About</span>
          <h2 className="section-title">A bit about me</h2>
        </div>

        <div ref={ref} className={styles.grid}>
          {/* Text */}
          <motion.div
            className={styles.textSide}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className={styles.para}>
              I&apos;m a Computer Science undergraduate at{" "}
              <strong>SB Jain Institute of Technology, Management &amp; Research</strong>,
              pursuing my B.Tech in Computer Science &amp; Engineering, with a CGPA of{" "}
              <strong className={styles.accentText}>8.76</strong>.
            </p>
            <p className={styles.para}>
              My primary focus is{" "}
              <strong className={styles.accentText}>Java</strong> — building practical desktop
              and backend applications using OOP principles, JDBC, and PostgreSQL. I enjoy working
              through real engineering challenges: designing data flows, debugging issues
              methodically, and building things that actually work.
            </p>
            <p className={styles.para}>
              I&apos;ve built projects ranging from a self-hosted media streaming platform with
              byte-range HTTP streaming to an educational JVM memory simulator and a full-featured
              gym management system with role-based access and database integration. Every project
              has taught me something concrete about software development.
            </p>
            <p className={styles.para}>
              I&apos;m actively growing my foundations in software development, databases, and
              problem-solving — and I&apos;m looking for opportunities where I can contribute,
              learn from experienced developers, and build real things.
            </p>
          </motion.div>

          {/* Currently focused on */}
          <motion.div
            className={styles.sideSide}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className={styles.focusCard}>
              <div className={styles.focusHeader}>
                <Terminal size={15} className={styles.focusIcon} />
                <span className="mono" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  currently_focused_on.json
                </span>
              </div>
              <ul className={styles.focusList} aria-label="Currently focused on">
                {FOCUSED_ON.map(({ icon, label }) => (
                  <li key={label} className={styles.focusItem}>
                    <span className={styles.focusItemIcon}>{icon}</span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span className={styles.statNum}>8.76</span>
                <span className={styles.statLabel}>CGPA</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLabel}>Projects Built</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>2027</span>
                <span className={styles.statLabel}>Graduating</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>Java</span>
                <span className={styles.statLabel}>Primary Language</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
