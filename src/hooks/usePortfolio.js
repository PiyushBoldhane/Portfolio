import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

/** Animate section into view */
export function useFadeInView(threshold = 0.15) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });
  return { ref, inView };
}

/** Track active section while scrolling */
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] || "");

  useEffect(() => {
    const observers = new Map();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      obs.observe(el);
      observers.set(id, obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  return active;
}

/** Lock body scroll when modal is open */
export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);
}

/** Close on Escape key */
export function useEscapeKey(callback) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") callback();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [callback]);
}
