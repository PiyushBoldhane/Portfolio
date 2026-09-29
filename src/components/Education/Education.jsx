import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useFadeInView } from "../../hooks/usePortfolio";
import styles from "./Education.module.css";

const EDUCATION = [
  {
    id: "sbjain",
    institution: "SB Jain Institute of Technology, Management & Research",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2023 – 2027",
    score: "CGPA: 8.76",
    status: "Ongoing — 4th Year",
    primary: true,
  },
  {
    id: "tejaswani",
    institution: "Tejaswani Junior College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2023",
    score: "88.50%",
    status: "Completed",
    primary: false,
  },
  {
    id: "wonderland",
    institution: "Wonderland High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2021",
    score: "61%",
    status: "Completed",
    primary: false,
  },
];

const CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const ITEM_ANIM = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Education() {
  const { ref, inView } = useFadeInView(0.15);

  return (
    <section id="education" className={`section ${styles.educationSection}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <motion.div
          ref={ref}
          className={styles.grid}
          variants={CONTAINER}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          aria-label="Education history"
        >
          {EDUCATION.map((edu) => (
            <motion.article
              key={edu.id}
              className={`card ${styles.card} ${edu.primary ? styles.primary : ""}`}
              variants={ITEM_ANIM}
              aria-label={`${edu.degree} — ${edu.institution}`}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                <GraduationCap size={22} />
              </div>

              <div className={styles.body}>
                <div className={styles.top}>
                  <div>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                  </div>
                  <time className={styles.period}>{edu.period}</time>
                </div>

                <div className={styles.meta}>
                  <span className={`tag ${edu.primary ? "tag-accent" : ""}`}>{edu.score}</span>
                  <span className={`tag ${styles.statusTag}`}>{edu.status}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
