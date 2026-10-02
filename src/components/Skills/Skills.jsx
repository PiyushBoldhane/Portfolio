import { motion } from "framer-motion";
import { Code2, Database, Layers, BrainCircuit, Wrench, Users, Plug } from "lucide-react";
import { DiJava, DiVisualstudio } from "react-icons/di";
import {
  SiC,
  SiPostgresql,
  SiApachemaven,
  SiSpringboot,
  SiGit,
  SiGithub,
  SiIntellijidea,
} from "react-icons/si";
import { useFadeInView } from "../../hooks/usePortfolio";
import styles from "./Skills.module.css";

/** Brand color per skill — used sparingly as a small accent on each tag's icon. */
const SKILL_ICONS = {
  Java: { icon: DiJava, color: "#f89820" },
  C: { icon: SiC, color: "#a8b9cc" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169e1" },
  JDBC: { icon: Plug, color: null },
  Maven: { icon: SiApachemaven, color: "#c71a36" },
  JavaFX: { icon: DiJava, color: "#f89820" },
  "Spring Boot": { icon: SiSpringboot, color: "#6db33f" },
  Git: { icon: SiGit, color: "#f05032" },
  GitHub: { icon: SiGithub, color: null },
  "IntelliJ IDEA": { icon: SiIntellijidea, color: "#fe315d" },
  "VS Code": { icon: DiVisualstudio, color: "#007acc" },
};

const SKILL_GROUPS = [
  {
    category: "Languages",
    icon: <Code2 size={18} />,
    skills: ["Java", "C"],
  },
  {
    category: "Database",
    icon: <Database size={18} />,
    skills: ["PostgreSQL"],
  },
  {
    category: "Java Technologies",
    icon: <Layers size={18} />,
    skills: ["JDBC", "Maven", "JavaFX", "Spring Boot"],
  },
  {
    category: "Core Concepts",
    icon: <BrainCircuit size={18} />,
    skills: ["OOP", "Data Structures & Algorithms", "Problem-Solving"],
  },
  {
    category: "Developer Tools",
    icon: <Wrench size={18} />,
    skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code"],
  },
  {
    category: "Soft Skills",
    icon: <Users size={18} />,
    skills: ["Communication", "Teamwork"],
  },
];

const CONTAINER = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const CARD_ANIM = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
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
          {SKILL_GROUPS.map(({ category, icon, skills }) => (
            <motion.div
              key={category}
              className={`card ${styles.groupCard}`}
              variants={CARD_ANIM}
            >
              <h3 className={styles.groupTitle}>
                <span className={styles.groupIcon} aria-hidden="true">{icon}</span>
                {category}
              </h3>
              <div className={styles.tags}>
                {skills.map((skill) => {
                  const iconData = SKILL_ICONS[skill];
                  const Icon = iconData?.icon;
                  return (
                    <span key={skill} className={`tag ${styles.skillTag}`}>
                      {Icon && (
                        <Icon
                          size={13}
                          style={iconData.color ? { color: iconData.color } : undefined}
                          aria-hidden="true"
                        />
                      )}
                      {skill}
                    </span>
                  );
                })}
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
