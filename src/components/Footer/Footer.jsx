import { Mail } from "lucide-react";
import { Github, Linkedin } from "../Icons/Icons";
import siteConfig from "../../config/siteConfig";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Logo + tagline */}
        <div className={styles.brand}>
          <a
            href="#hero"
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Back to top"
          >
            <span className={styles.logoMono}>&lt;</span>
            <span>PB</span>
            <span className={styles.logoMono}>/&gt;</span>
          </a>
          <p className={styles.tagline}>
            Computer Science undergraduate building practical Java applications.
          </p>
        </div>

        {/* Nav links */}
        <nav className={styles.nav} aria-label="Footer navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                handleClick(href);
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social links */}
        <div className={styles.socials}>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="GitHub profile"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className={styles.socialIcon}
            aria-label={`Email ${siteConfig.email}`}
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {year} Piyush Boldhane. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
