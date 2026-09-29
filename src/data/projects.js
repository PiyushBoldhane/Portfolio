import siteConfig from "../config/siteConfig";

/**
 * ============================================================
 * PROJECT DATA — Edit project information here.
 * Add new projects by appending to this array.
 * ============================================================
 */

const projects = [
  {
    id: "movierelay",
    title: "MovieRelay",
    category: "Self-Hosted Movie Streaming Platform",
    shortDescription:
      "A self-hosted media streaming platform with byte-range streaming, concurrent downloads, and playback resume — built with Java Spring Boot.",
    technologies: ["Java", "Spring Boot", "TDLib / MTProto", "H2", "JavaScript"],
    features: [
      "Byte-range HTTP streaming — playback starts and seeks within files still downloading",
      "Concurrent download management",
      "Playback resume across sessions",
      "Custom JavaScript video player",
      "Library management interface",
      "Tested across laptop and mobile over a private network",
    ],
    github: siteConfig.projects.movieRelay.github,
    demo: siteConfig.projects.movieRelay.demo,
    details: {
      purpose:
        "Designed and built a self-hosted platform to stream and manage a personal media library, with a focus on practical backend engineering challenges like streaming large files efficiently.",
      whatIBuilt:
        "Full-stack media platform architecture including a Spring Boot backend, a custom JavaScript video player, and a library management UI.",
      technicalImplementation:
        "Implemented byte-range HTTP streaming so the video player can start playback and seek within files that are not yet fully downloaded. Designed the data flow, API endpoints, and frontend integration. Used H2 as an embedded database for session and library state.",
      challenges:
        "Identified and diagnosed a session-identifier bug that silently corrupted data during concurrent operations. Defined the fix, applied it, and verified the resolution through hands-on testing. Tested concurrent downloads, playback resume, and library management across devices on a private network.",
      aiNote:
        "This project used AI-assisted development for implementation. All architecture decisions, feature design, debugging, testing, and verification were performed hands-on.",
      highlights: [
        "Byte-range streaming for partial-file playback",
        "Bug diagnosis and verified fix of a session-identifier corruption issue",
        "Private-network cross-device testing (laptop + mobile)",
        "Concurrent download and playback resume validation",
        "Custom video player with seek and resume support",
      ],
    },
  },
  {
    id: "jvmvisualizer",
    title: "JVM Memory Visualizer",
    category: "Educational Desktop Application",
    shortDescription:
      "A JavaFX desktop application that simulates JVM memory execution and object lifecycle — stack, heap, references, GC, and String pool.",
    technologies: ["Java", "JavaFX", "Maven"],
    features: [
      "Stack frame visualization",
      "Heap object lifecycle simulation",
      "Reference tracking between stack and heap",
      "Garbage collection simulation",
      "String pool management",
      "Custom parser and simulation engine",
      "Step-by-step JVM memory snapshots",
    ],
    github: siteConfig.projects.jvmVisualizer.github,
    demo: siteConfig.projects.jvmVisualizer.demo,
    details: {
      purpose:
        "Built as an educational tool to visualize how the JVM manages memory — helping developers understand stack frames, heap allocation, references, and garbage collection through interactive step-by-step simulation.",
      whatIBuilt:
        "A JavaFX desktop application with a custom parser, simulation engine, and step-through visualization of JVM memory behavior.",
      technicalImplementation:
        "Implemented a parser that reads simple Java-like code snippets, a simulation engine that models memory state changes per statement, and a JavaFX UI that renders stack frames, heap objects, reference arrows, and GC events in real time.",
      challenges:
        "Modeling accurate reference relationships between stack and heap, and simulating garbage collection reachability correctly. Designed the simulation engine to produce discrete snapshots so users can step through memory states one instruction at a time.",
      highlights: [
        "Step-by-step JVM memory simulation",
        "Visual stack + heap + reference diagram",
        "Garbage collection reachability simulation",
        "String pool tracking",
        "Custom parser and simulation engine",
      ],
      diagramNote:
        "Visualizes the full JVM memory model: Stack → References → Heap → GC",
    },
  },
  {
    id: "gymmanagement",
    title: "Gym Management System",
    category: "Desktop Management Application",
    shortDescription:
      "A Java desktop application for gym management with role-based authentication, JDBC database connectivity, membership tracking, attendance, and reporting.",
    technologies: ["Java", "JavaFX", "JDBC", "Maven", "PostgreSQL"],
    features: [
      "Role-based authentication (admin / staff roles)",
      "JDBC database connectivity with PostgreSQL",
      "Membership management",
      "Attendance tracking",
      "Payment management",
      "Reporting module",
    ],
    github: siteConfig.projects.gymManagement.github,
    demo: siteConfig.projects.gymManagement.demo,
    details: {
      purpose:
        "Built a desktop application to manage gym operations end-to-end — from member registration and attendance to payment records and reports.",
      whatIBuilt:
        "A full JavaFX desktop application connected to a PostgreSQL database via JDBC, with a clean role-based access system and modular feature areas for each management function.",
      technicalImplementation:
        "Used JDBC for database connectivity and PostgreSQL for persistent storage. Implemented role-based authentication to separate admin and staff permissions. The UI is built with JavaFX and structured into distinct modules — membership, attendance, payments, and reporting — each backed by corresponding database operations.",
      challenges:
        "Designing a clean JDBC data access layer, enforcing role-based access at the application level, and keeping the UI responsive during database operations.",
      highlights: [
        "Role-based authentication (admin/staff)",
        "Full JDBC ↔ PostgreSQL integration",
        "Membership, attendance, and payment modules",
        "Reporting functionality",
        "Clean JavaFX UI with modular architecture",
      ],
      architecture:
        "JavaFX UI → Application Logic → JDBC → PostgreSQL",
    },
  },
];

export default projects;
