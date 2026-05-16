"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  {
    label: "Language",
    items: ["HTML/CSS", "JavaScript", "TypeScript"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "JWT", "REST API"],
  },
  {
    label: "Database",
    items: ["MongoDB", "Mongoose", "PostgreSQL"],
  },
  {
    label: "Tools & Deployment",
    items: ["Git", "GitHub", "Vercel", "Render", "Figma"],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const [dotProgress, setDotProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrolled = -rect.top;
      const total = sectionHeight - windowHeight;
      const progress = Math.min(Math.max(scrolled / total, 0), 1);
      setDotProgress(progress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative bg-[#080808] min-h-screen flex gap-8 px-[5%] py-24"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* Left scroll progress bar */}
      <div className="relative w-[2px] flex-shrink-0 self-stretch">
        {/* Track line */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-white/[0.08]" />
        {/* Moving dot */}
        <div
          className="absolute left-[-4px] w-[9px] h-[9px] rounded-full bg-white transition-[top] duration-100 linear"
          style={{
            top: `${dotProgress}%`,
            transform: "translateY(-50%)",
            boxShadow: "0 0 8px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.2)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 pl-8">
        {/* Section label */}
        <p
          className="text-white/30 text-[11px] tracking-[0.15em] uppercase m-0 mb-2"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          / CAPABILITIES
        </p>
        <div className="w-10 h-px bg-white/15 mb-10" />

        <h2 className="text-white text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-[-0.02em] m-0 mb-4">
          The Tech Orbit
        </h2>

        <p
          className="text-white/40 text-[13px] leading-[1.7] font-light m-0 mb-14"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          A constellation of my core technical proficiencies across the stack.
        </p>

        {/* Skills rows */}
        <div className="flex flex-col gap-6">
          {skills.map((row, i) => (
            <div
              key={i}
              className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[clamp(12px,1.5vw,15px)]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="text-white font-semibold whitespace-nowrap">
                {row.label}:
              </span>
              <span className="text-white/50 font-light">
                {row.items.map((item, j) => (
                  <span key={j}>
                    <span className="text-white/55">{item}</span>
                    {j < row.items.length - 1 && (
                      <span className="text-white/20"> · </span>
                    )}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}