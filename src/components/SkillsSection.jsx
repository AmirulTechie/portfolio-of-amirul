"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  const labelRef = useRef(null);
  const underlineRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const skillRowsRef = useRef([]);

  useEffect(() => {
    // --- Scroll progress dot ---
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

    const ctx = gsap.context(() => {
      // --- Section label ---
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: labelRef.current,
            start: "top 85%",
          },
        }
      );

      // --- Underline width reveal ---
      gsap.fromTo(
        underlineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: underlineRef.current,
            start: "top 85%",
          },
        }
      );

      // --- Heading ---
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      // --- Subheading ---
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subRef.current,
            start: "top 88%",
          },
        }
      );

      // --- Skill rows staggered ---
      gsap.fromTo(
        skillRowsRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: skillRowsRef.current[0],
            start: "top 88%",
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
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
        <div className="absolute top-0 bottom-0 left-0 w-px bg-white/[0.08]" />
        <div
          className="absolute left-[-4px] w-[9px] h-[9px] rounded-full bg-white"
          style={{
            top: `${dotProgress}%`,
            transform: "translateY(-50%)",
            transition: "top 0.1s linear",
            boxShadow: "0 0 8px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.2)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 pl-8">
        {/* Section label */}
        <p
          ref={labelRef}
          className="text-white/30 text-[11px] tracking-[0.15em] uppercase m-0 mb-2 opacity-0"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          / CAPABILITIES
        </p>

        {/* Underline */}
        <div
          ref={underlineRef}
          className="w-10 h-px bg-white/15 mb-10"
          style={{ transform: "scaleX(0)", transformOrigin: "left" }}
        />

        <h2
          ref={headingRef}
          className="text-white text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-[-0.02em] m-0 mb-4 opacity-0"
        >
          The Tech Orbit
        </h2>

        <p
          ref={subRef}
          className="text-white/40 text-[13px] leading-[1.7] font-light m-0 mb-14 opacity-0"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          A constellation of my core technical proficiencies across the stack.
        </p>

        {/* Skills rows */}
        <div className="flex flex-col gap-6">
          {skills.map((row, i) => (
            <div
              key={i}
              ref={(el) => (skillRowsRef.current[i] = el)}
              className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[clamp(12px,1.5vw,15px)] opacity-0"
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