import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "../Icons/Icons";
import { useFadeInView } from "../../hooks/usePortfolio";
import siteConfig from "../../config/siteConfig";
import styles from "./Contact.module.css";

const CONTACT_CARDS = [
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\D/g, "")}`,
    external: false,
  },
  {
    icon: <Linkedin size={22} />,
    label: "LinkedIn",
    value: "PiyushBoldhane",
    href: siteConfig.linkedin,
    external: true,
  },
  {
    icon: <Github size={22} />,
    label: "GitHub",
    value: "PiyushBoldhane",
    href: siteConfig.github,
    external: true,
  },
];

export default function Contact() {
  const { ref, inView } = useFadeInView(0.15);

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, a project idea, or just
            want to say hi — my inbox is open.
          </p>
        </div>

        <motion.div
          ref={ref}
          className={styles.wrapper}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className={styles.locationLine}>
            <MapPin size={15} aria-hidden="true" />
            {siteConfig.location}
          </p>

          <div className={styles.cardGrid} aria-label="Contact information">
            {CONTACT_CARDS.map(({ icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`card ${styles.infoCard}`}
                aria-label={`${label}: ${value}`}
              >
                <span className={styles.infoIcon} aria-hidden="true">{icon}</span>
                <span className={styles.infoText}>
                  <span className={styles.infoLabel}>{label}</span>
                  <span className={styles.infoValue}>{value}</span>
                </span>
                <ArrowUpRight size={18} className={styles.infoArrow} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
