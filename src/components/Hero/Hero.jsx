import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Github, Linkedin } from "../Icons/Icons";
import { motion } from "framer-motion";
import siteConfig from "../../config/siteConfig";
import styles from "./Hero.module.css";

const FADE_UP = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/** First + last initials, used by the placeholder avatar until a real photo is added. */
function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          {/* Greeting */}
          <motion.p
            className={styles.greeting}
            initial="hidden"
            animate="visible"
            custom={0}
            variants={FADE_UP}
          >
            Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            className={styles.name}
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={FADE_UP}
          >
            Piyush Boldhane
          </motion.h1>

          {/* Headline */}
          <motion.h2
            className={styles.headline}
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={FADE_UP}
          >
            Computer Science Undergraduate
            <br />
            <span className={styles.headlineAccent}>Java Developer</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className={styles.tagline}
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={FADE_UP}
          >
            Computer Science undergraduate focused on Java, software development,
            databases, and building practical applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={styles.buttons}
            initial="hidden"
            animate="visible"
            custom={0.25}
            variants={FADE_UP}
          >
            <button
              onClick={scrollToProjects}
              className="btn btn-primary btn-lg"
              aria-label="View my projects section"
            >
              View My Projects
              <ArrowDown size={16} />
            </button>
            <a
              href={siteConfig.resumeDownloadUrl}
              download="Piyush_Boldhane_Resume.pdf"
              className="btn btn-secondary btn-lg"
              aria-label="Download my resume PDF"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className={styles.socials}
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={FADE_UP}
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Visit my GitHub profile"
            >
              <Github size={20} />
              GitHub
              <ExternalLink size={12} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Visit my LinkedIn profile"
            >
              <Linkedin size={20} />
              LinkedIn
              <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          className={styles.photoBlock}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={styles.photoGlow} aria-hidden="true" />
          <div className={styles.photoFrame}>
            {/*
              Placeholder avatar — replace with an <img src="/your-photo.jpg" alt="Piyush Boldhane" />
              inside .photoFrame once a real photo is available.
            */}
            <span className={styles.photoInitials} aria-hidden="true">
              {getInitials("Piyush Boldhane")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
