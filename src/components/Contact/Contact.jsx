import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Github, Linkedin } from "../Icons/Icons";
import { useFadeInView } from "../../hooks/usePortfolio";
import siteConfig from "../../config/siteConfig";
import styles from "./Contact.module.css";

const CONTACT_INFO = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\D/g, "")}`,
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: siteConfig.location,
    href: null,
  },
];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }
  return errors;
}

export default function Contact() {
  const { ref, inView } = useFadeInView(0.15);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // mailto fallback — opens email client
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

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
          className={styles.grid}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Contact info */}
          <div className={styles.infoSide}>
            <ul className={styles.infoList} aria-label="Contact information">
              {CONTACT_INFO.map(({ icon, label, value, href }) => (
                <li key={label} className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true">{icon}</span>
                  <div>
                    <span className={styles.infoLabel}>{label}</span>
                    {href ? (
                      <a href={href} className={styles.infoValue} aria-label={`${label}: ${value}`}>
                        {value}
                      </a>
                    ) : (
                      <span className={styles.infoValue}>{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.socials}>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label="Visit GitHub profile"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className={`card ${styles.formCard}`}>
            {submitted ? (
              <div className={styles.successMsg} role="status" aria-live="polite">
                <CheckCircle size={40} className={styles.successIcon} />
                <h3>Message sent!</h3>
                <p>
                  Your email client should have opened with the message pre-filled.
                  I&apos;ll get back to you soon.
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <h3 className={styles.formTitle}>Send a Message</h3>
                <p className={styles.formNote}>
                  This form opens your email client with the message pre-filled.
                </p>

                {/* Name */}
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                    placeholder="Your full name"
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? "name-err" : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <span id="name-err" className={styles.errMsg} role="alert">
                      <AlertCircle size={12} />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? "email-err" : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span id="email-err" className={styles.errMsg} role="alert">
                      <AlertCircle size={12} />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea} ${
                      errors.message ? styles.inputError : ""
                    }`}
                    placeholder="What would you like to discuss? (min. 20 characters)"
                    rows={5}
                    aria-required="true"
                    aria-describedby={errors.message ? "msg-err" : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span id="msg-err" className={styles.errMsg} role="alert">
                      <AlertCircle size={12} />
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
