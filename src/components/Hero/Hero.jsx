import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Github, Linkedin } from "../Icons/Icons";
import { motion } from "framer-motion";
import siteConfig from "../../config/siteConfig";
import styles from "./Hero.module.css";

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      {/* Subtle grid background */}
      <div className={styles.gridBg} aria-hidden="true" />
      {/* Accent glow blobs */}
      <div className={styles.blobLeft} aria-hidden="true" />
      <div className={styles.blobRight} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          {/* Status pill */}
          <motion.div
            className={styles.statusPill}
            initial="hidden"
            animate="visible"
            custom={0}
            variants={FADE_UP}
          >
            <span className={styles.statusDot} aria-hidden="true" />
            <span className="mono" style={{ fontSize: "0.8rem" }}>
              Open to internship opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className={styles.greeting}
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={FADE_UP}
          >
            Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            className={styles.name}
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={FADE_UP}
          >
            Piyush Boldhane
          </motion.h1>

          {/* Headline */}
          <motion.h2
            className={styles.headline}
            initial="hidden"
            animate="visible"
            custom={0.3}
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
            custom={0.4}
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
            custom={0.5}
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
            custom={0.6}
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

        {/* Terminal card */}
        <motion.div
          className={styles.terminalWrapper}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          aria-hidden="true"
        >
          <TerminalCard />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <div className={styles.scrollLine} />
        <span className="mono text-muted" style={{ fontSize: "0.7rem" }}>
          scroll
        </span>
      </motion.div>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className={styles.terminal}>
      {/* Terminal title bar */}
      <div className={styles.terminalBar}>
        <div className={styles.terminalDots}>
          <span style={{ background: "#ff5f57" }} />
          <span style={{ background: "#ffbd2e" }} />
          <span style={{ background: "#28c840" }} />
        </div>
        <span className={`${styles.terminalTitle} mono`}>~/piyush-boldhane</span>
      </div>

      {/* Terminal body */}
      <div className={styles.terminalBody}>
        <div className={styles.terminalLine}>
          <span className={styles.prompt}>$</span>
          <span className={styles.cmd}> whoami</span>
        </div>
        <div className={styles.terminalOutput}>
          <span className={styles.key}>name</span>
          <span className={styles.colon}>: </span>
          <span className={styles.val}>&quot;Piyush Boldhane&quot;</span>
        </div>
        <div className={styles.terminalOutput}>
          <span className={styles.key}>role</span>
          <span className={styles.colon}>: </span>
          <span className={styles.val}>&quot;CS Undergraduate&quot;</span>
        </div>
        <div className={styles.terminalOutput}>
          <span className={styles.key}>focus</span>
          <span className={styles.colon}>: </span>
          <span className={styles.val}>[&quot;Java&quot;, &quot;Databases&quot;, &quot;Backend&quot;]</span>
        </div>
        <div className={styles.terminalOutput}>
          <span className={styles.key}>cgpa</span>
          <span className={styles.colon}>: </span>
          <span className={styles.valNum}>8.76</span>
        </div>
        <div className={styles.terminalOutput}>
          <span className={styles.key}>status</span>
          <span className={styles.colon}>: </span>
          <span className={styles.valGreen}>&quot;Open to opportunities&quot;</span>
        </div>

        <div className={`${styles.terminalLine} ${styles.mt}`}>
          <span className={styles.prompt}>$</span>
          <span className={styles.cmd}> ls projects/</span>
        </div>
        <div className={styles.terminalOutput}>
          <span className={styles.dir}>MovieRelay</span>
          {"  "}
          <span className={styles.dir}>JVM-Visualizer</span>
          {"  "}
          <span className={styles.dir}>GymMS</span>
        </div>

        <div className={`${styles.terminalLine} ${styles.mt}`}>
          <span className={styles.prompt}>$</span>
          <span className={styles.cursor}>▌</span>
        </div>
      </div>
    </div>
  );
}
