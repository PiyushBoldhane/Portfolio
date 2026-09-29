/**
 * ============================================================
 * SITE CONFIGURATION — Update all your personal links here.
 * Never hard-code URLs anywhere else in the codebase.
 * ============================================================
 */

const siteConfig = {
  /** ── Personal Information ───────────────────────── */
  name: "Piyush Boldhane",
  headline: "Computer Science Undergraduate | Java Developer",
  tagline:
    "Building practical Java applications and developing strong foundations in software development, databases, and problem-solving.",
  email: "piyushboldhane@gmail.com",
  phone: "913-078-3213",
  location: "Nagpur, Maharashtra",

  /** ── Social / External Links ────────────────────── */
  github: "https://github.com/PiyushBoldhane",
  linkedin: "https://www.linkedin.com/in/PiyushBoldhane",

  /** ── Resume ─────────────────────────────────────── */
  // Placed at: public/resume.pdf (actual resume from your directory)
  resumeViewUrl: "/resume.pdf",
  resumeDownloadUrl: "/resume.pdf",

  /** ── SEO ─────────────────────────────────────────── */
  siteTitle: "Piyush Boldhane | Computer Science Undergraduate | Java Developer",
  siteDescription:
    "Portfolio of Piyush Boldhane, a Computer Science undergraduate focused on Java, software development, databases, and practical applications.",
  siteUrl: "https://piyushboldhane.dev", // 🔧 Update with your final custom domain if desired

  /** ── Project Repository / Demo Links ────────────── */
  projects: {
    movieRelay: {
      github: "https://github.com/PiyushBoldhane/MovieRelay",
      demo: null, // Set to URL string if a live demo exists, otherwise leave null
    },
    jvmVisualizer: {
      github: "https://github.com/PiyushBoldhane/JVM-Memory-Visualizer",
      demo: null,
    },
    gymManagement: {
      github: "https://github.com/PiyushBoldhane/Gym-Management-System",
      demo: null,
    },
  },
};

export default siteConfig;
