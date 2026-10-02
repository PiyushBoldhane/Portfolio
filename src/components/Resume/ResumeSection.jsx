import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";
import { useFadeInView } from "../../hooks/usePortfolio";
import siteConfig from "../../config/siteConfig";
import styles from "./ResumeSection.module.css";

export default function ResumeSection() {
  const { ref, inView } = useFadeInView(0.2);

  return (
    <section id="resume" className={`section ${styles.resumeSection}`} aria-label="Resume">
      <div className="container">
        <motion.div
          ref={ref}
          className={`card ${styles.card}`}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={styles.iconBlock} aria-hidden="true">
            <FileText size={32} />
          </div>

          <div className={styles.textBlock}>
            <h2 className={styles.title}>Want the complete overview?</h2>
            <p className={styles.sub}>
              View or download my full resume for a detailed look at my education,
              skills, projects, and background.
            </p>
          </div>

          <div className={styles.actions}>
            <a
              href={siteConfig.resumeViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
              aria-label="View resume PDF in new tab"
            >
              <Eye size={16} />
              View Resume
            </a>
            <a
              href={siteConfig.resumeDownloadUrl}
              download="Piyush_Boldhane_Resume.pdf"
              className="btn btn-primary btn-lg"
              aria-label="Download resume PDF"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
