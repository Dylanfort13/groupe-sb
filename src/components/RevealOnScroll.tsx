"use client";

import { useEffect, useRef, ReactNode } from "react";

type RevealType = "up" | "left" | "right" | "scale";

export default function RevealOnScroll({ children, className, type = "up", delay = 0 }: { children: ReactNode; className?: string; type?: RevealType; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const typeClass = type === "left" ? "reveal-left" : type === "right" ? "reveal-right" : type === "scale" ? "reveal-scale" : "reveal";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${typeClass} ${className ?? ""}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
