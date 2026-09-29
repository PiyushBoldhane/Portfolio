import { motion } from "framer-motion";
import { useFadeInView } from "../../hooks/usePortfolio";
import styles from "./Skills.module.css";

const SKILL_GROUPS = [
  {
    category: "Languages",
    skills: ["Java", "C"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL"],
  },
  {
    category: "Java Technologies",
    skills: ["JDBC", "Maven", "JavaFX", "Spring Boot"],
  },
  {
    category: "Core Concepts",
    skills: ["OOP", "Data Structures & Algorithms", "Problem-Solving"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code"],
  },
  {
    category: "Soft Skills",
    skills: ["Communication", "Teamwork"],
  },
];

const CONTAINER = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const CARD_ANIM = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Skills() {
  const { ref, inView } = useFadeInView(0.15);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with, grouped by category.
          </p>
        </div>

        <motion.div
          ref={ref}
          className={styles.grid}
          variants={CONTAINER}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {SKILL_GROUPS.map(({ category, skills }) => (
            <motion.div
              key={category}
              className={`card ${styles.groupCard}`}
              variants={CARD_ANIM}
            >
              <h3 className={styles.groupTitle}>{category}</h3>
              <div className={styles.tags}>
                {skills.map((skill) => (
                  <span key={skill} className={`tag ${styles.skillTag}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note — no fake percentages */}
        <p className={styles.note}>
          Skills listed reflect technologies I actively use. No artificial proficiency percentages.
        </p>
      </div>
    </section>
  );
}
