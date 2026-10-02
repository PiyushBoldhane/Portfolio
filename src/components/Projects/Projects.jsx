import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight, X } from "lucide-react";
import { Github } from "../Icons/Icons";
import { useFadeInView, useBodyScrollLock, useEscapeKey } from "../../hooks/usePortfolio";
import projects from "../../data/projects";
import styles from "./Projects.module.css";

const CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const CARD_ANIM = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Projects() {
  const { ref, inView } = useFadeInView(0.1);
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Practical applications built to solve real problems and deepen
            software development skills.
          </p>
        </div>

        <motion.div
          ref={ref}
          className={styles.grid}
          variants={CONTAINER}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDetails={() => setSelected(project)}
            />
          ))}
        </motion.div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProjectCard({ project, onDetails }) {
  return (
    <motion.article
      className={`card ${styles.card}`}
      variants={CARD_ANIM}
      aria-label={`Project: ${project.title}`}
    >
      {/* Header */}
      <div className={styles.cardHeader}>
        <span className={`tag tag-accent ${styles.categoryTag}`}>{project.category}</span>
      </div>

      {/* Title */}
      <h3 className={styles.cardTitle}>{project.title}</h3>

      {/* Short description */}
      <p className={styles.cardDesc}>{project.shortDescription}</p>

      {/* Tech stack */}
      <div className={styles.techStack} aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Key features */}
      <ul className={styles.featureList} aria-label="Key features">
        {project.features.slice(0, 3).map((f) => (
          <li key={f} className={styles.featureItem}>
            <ChevronRight size={13} className={styles.featureIcon} aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className={styles.cardActions}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={14} />
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
        <button
          onClick={onDetails}
          className="btn btn-secondary btn-sm"
          aria-label={`View details of ${project.title}`}
        >
          View Details
          <ChevronRight size={14} />
        </button>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }) {
  useBodyScrollLock(true);
  useEscapeKey(onClose);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeBtnRef.current?.focus();
    return () => previouslyFocused?.focus?.();
  }, []);

  return (
    <div
      className={styles.overlay}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${project.title}`}
    >
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Modal header */}
        <div className={styles.modalHeader}>
          <div>
            <span className={`tag tag-accent ${styles.categoryTag}`}>{project.category}</span>
            <h2 className={styles.modalTitle}>{project.title}</h2>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className={styles.closeBtn}
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal body */}
        <div className={styles.modalBody}>
          {/* Overview */}
          <Section title="Purpose">
            <p>{project.details.purpose}</p>
          </Section>

          <Section title="What I Built">
            <p>{project.details.whatIBuilt}</p>
          </Section>

          <Section title="Technical Implementation">
            <p>{project.details.technicalImplementation}</p>
          </Section>

          <Section title="Challenges &amp; Decisions">
            <p>{project.details.challenges}</p>
          </Section>

          {/* AI note (MovieRelay only) */}
          {project.details.aiNote && (
            <div className={styles.aiNote}>
              <span className={`tag tag-accent`}>Note</span>
              <p>{project.details.aiNote}</p>
            </div>
          )}

          {/* Highlights */}
          <Section title="Highlights">
            <ul className={styles.highlightList}>
              {project.details.highlights.map((h) => (
                <li key={h} className={styles.highlightItem}>
                  <ChevronRight size={13} className={styles.featureIcon} aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </Section>

          {/* Architecture diagram */}
          {project.details.architecture && (
            <Section title="Architecture">
              <ArchDiagram text={project.details.architecture} />
            </Section>
          )}

          {/* JVM diagram */}
          {project.details.diagramNote && (
            <Section title="Memory Model">
              <JVMDiagram />
            </Section>
          )}

          {/* Tech stack */}
          <Section title="Technologies">
            <div className={styles.techStack}>
              {project.technologies.map((t) => (
                <span key={t} className="tag tag-accent">
                  {t}
                </span>
              ))}
            </div>
          </Section>

          {/* Links */}
          <div className={styles.modalActions}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={16} />
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {!project.github && (
              <p className={styles.linkNote}>
                GitHub repository link — update in <code>src/config/siteConfig.js</code>
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      {children}
    </div>
  );
}

function ArchDiagram({ text }) {
  const layers = text.split("→").map((s) => s.trim());
  return (
    <div className={styles.archDiagram} aria-label="Architecture diagram">
      {layers.map((layer, i) => (
        <div key={layer}>
          <div className={styles.archBox}>{layer}</div>
          {i < layers.length - 1 && (
            <div className={styles.archArrow} aria-hidden="true">↓</div>
          )}
        </div>
      ))}
    </div>
  );
}

function JVMDiagram() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Step 1: Frame Push & Local Variable",
      code: "Person p1;",
      stack: "main() frame: [ p1: unassigned ]",
      ref: "No reference yet",
      heap: "No object allocated",
      gc: "Idle",
      explanation: "A new frame is pushed to the call stack. Local reference variable 'p1' is declared.",
    },
    {
      title: "Step 2: Object Allocation & Reference",
      code: "p1 = new Person(\"Piyush\");",
      stack: "main() frame: [ p1: → @0x4A2 ]",
      ref: "p1 points to Heap @0x4A2",
      heap: "Heap: { @0x4A2: Person(name=\"Piyush\") }",
      gc: "Active reference tracked (reachable)",
      explanation: "Memory is allocated in the Heap for Person. The reference address @0x4A2 is stored in the stack frame.",
    },
    {
      title: "Step 3: Reference Cleared (Unreachable)",
      code: "p1 = null;",
      stack: "main() frame: [ p1: null ]",
      ref: "Pointer severed (0 references)",
      heap: "Heap: { @0x4A2: Person [UNREACHABLE] }",
      gc: "Candidate for garbage collection",
      explanation: "Setting p1 to null removes the only reference to @0x4A2. The object remains in the heap but is no longer reachable.",
    },
    {
      title: "Step 4: Garbage Collection Simulation",
      code: "System.gc(); // simulated sweep",
      stack: "main() frame: [ p1: null ]",
      ref: "None",
      heap: "Heap: [ Memory reclaimed ]",
      gc: "Mark & Sweep complete: @0x4A2 reclaimed",
      explanation: "GC reachability analysis identifies @0x4A2 has no active roots. Memory is swept and reclaimed.",
    },
  ];

  const current = steps[step];

  return (
    <div className={styles.interactiveJvm} aria-label="Interactive JVM Memory Simulation">
      <div className={styles.jvmDisclaimer}>
        Educational Simulation Model — Illustrates memory behavior, not an actual JVM debugger.
      </div>

      {/* Step controls */}
      <div className={styles.simControls}>
        <div className={styles.simStepIndicator}>
          <span className="mono text-accent">Simulation Step {step + 1} of {steps.length}</span>
          <span className={styles.simStepTitle}>{current.title}</span>
        </div>
        <div className={styles.simBtnGroup}>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            aria-label="Previous step"
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
            disabled={step === steps.length - 1}
            aria-label="Next step"
          >
            Next Step
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => setStep(0)}
            aria-label="Reset simulation"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Code snippet line */}
      <div className={styles.simCodeBar}>
        <span className="mono text-muted">Instruction: </span>
        <code className="mono text-accent">{current.code}</code>
      </div>

      {/* Visual Memory Flow */}
      <div className={styles.jvmDiagram}>
        {/* Stack */}
        <div className={styles.jvmBox} style={{ borderColor: "#58a6ff" }}>
          <div className={styles.jvmBoxHeader}>
            <span className={styles.jvmLabel} style={{ color: "#58a6ff" }}>Stack</span>
            <span className={styles.jvmSubLabel}>Call Frames &amp; Locals</span>
          </div>
          <div className={styles.jvmStateText}>{current.stack}</div>
        </div>

        <div className={styles.archArrow} aria-hidden="true">↓</div>

        {/* References */}
        <div className={styles.jvmBox} style={{ borderColor: "#a5d6ff" }}>
          <div className={styles.jvmBoxHeader}>
            <span className={styles.jvmLabel} style={{ color: "#79c0ff" }}>References</span>
            <span className={styles.jvmSubLabel}>Pointers &amp; Tracking</span>
          </div>
          <div className={styles.jvmStateText}>{current.ref}</div>
        </div>

        <div className={styles.archArrow} aria-hidden="true">↓</div>

        {/* Heap */}
        <div className={styles.jvmBox} style={{ borderColor: "#bc8cff" }}>
          <div className={styles.jvmBoxHeader}>
            <span className={styles.jvmLabel} style={{ color: "#bc8cff" }}>Heap</span>
            <span className={styles.jvmSubLabel}>Objects &amp; String Pool</span>
          </div>
          <div className={styles.jvmStateText}>{current.heap}</div>
        </div>

        <div className={styles.archArrow} aria-hidden="true">↓</div>

        {/* Garbage Collector */}
        <div className={styles.jvmBox} style={{ borderColor: "#3fb950" }}>
          <div className={styles.jvmBoxHeader}>
            <span className={styles.jvmLabel} style={{ color: "#3fb950" }}>Garbage Collector</span>
            <span className={styles.jvmSubLabel}>Simulation Engine</span>
          </div>
          <div className={styles.jvmStateText}>{current.gc}</div>
        </div>
      </div>

      {/* Step explanation */}
      <div className={styles.simExplanation}>
        <span className="mono text-muted" style={{ fontSize: "0.75rem", display: "block", marginBottom: "4px" }}>
          BEHAVIOR SUMMARY:
        </span>
        <p style={{ margin: 0, fontSize: "0.875rem" }}>{current.explanation}</p>
      </div>
    </div>
  );
}
