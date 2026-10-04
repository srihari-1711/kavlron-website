"use client";

import { useEffect, useRef } from "react";

export default function AnimatedMarkdown({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const headings = containerRef.current.querySelectorAll("h2, h3, h4");
    
    // Set initial state
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    headings.forEach((heading) => {
      heading.classList.add("opacity-0", "translate-y-4", "transition-all", "duration-700", "ease-out");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-4");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px" }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [html]);

  return (
    <div 
      ref={containerRef}
      className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-accent-amber hover:prose-a:text-white transition-colors"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
