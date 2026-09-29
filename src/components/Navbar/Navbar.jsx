import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, FileText } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useActiveSection } from "../../hooks/usePortfolio";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const SECTION_IDS = ["about", "skills", "projects", "experience", "education", "contact"];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route/hash change
  useEffect(() => {
    setMenuOpen(false);
  }, [activeSection]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Go to top — Piyush Boldhane"
        >
          <span className={styles.logoMono}>&lt;</span>
          <span className={styles.logoName}>PB</span>
          <span className={styles.logoMono}>/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.replace("#", "");
            return (
              <a
                key={href}
                href={href}
                className={`${styles.navLink} ${activeSection === id ? styles.active : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                aria-current={activeSection === id ? "page" : undefined}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            aria-label="View Resume PDF"
          >
            <FileText size={14} />
            Resume
          </a>
          <button
            onClick={toggleTheme}
            className={styles.themeBtn}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu toggle */}
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ href, label }) => {
          const id = href.replace("#", "");
          return (
            <a
              key={href}
              href={href}
              className={`${styles.mobileLink} ${activeSection === id ? styles.active : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(href);
              }}
              tabIndex={menuOpen ? 0 : -1}
            >
              {label}
            </a>
          );
        })}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.mobileLink} ${styles.mobileLinkAccent}`}
          tabIndex={menuOpen ? 0 : -1}
        >
          <FileText size={15} />
          View Resume
        </a>
      </nav>
    </header>
  );
}
