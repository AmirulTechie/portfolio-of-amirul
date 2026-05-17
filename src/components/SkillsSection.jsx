"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    id: "01",
    category: "Language",
    desc: "The foundation everything is built on.",
    skills: [
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 65 },
    ],
  },
  {
    id: "02",
    category: "Frontend",
    desc: "Where logic meets the user's eye.",
    skills: [
      { name: "React", level: 82 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Framer Motion", level: 60 },
    ],
  },
  {
    id: "03",
    category: "Backend",
    desc: "The engine running under the hood.",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 68 },
      { name: "JWT / Auth", level: 65 },
      { name: "REST API", level: 75 },
    ],
  },
  {
    id: "04",
    category: "Database",
    desc: "Storing and structuring data efficiently.",
    skills: [
      { name: "MongoDB", level: 72 },
      { name: "Mongoose", level: 70 },
      { name: "PostgreSQL", level: 50 },
    ],
  },
  {
    id: "05",
    category: "Tools & Deployment",
    desc: "Shipping fast, deploying clean.",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "Render", level: 70 },
      { name: "Figma", level: 60 },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const [dotProgress, setDotProgress] = useState(0);
  const labelRef = useRef(null);
  const underlineRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const cardsRef = useRef([]);
  const barsRef = useRef([]);

  useEffect(() => {
    // Scroll progress dot
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
      gsap.fromTo(labelRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: labelRef.current, start: "top 85%" } }
      );

      gsap.fromTo(underlineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: underlineRef.current, start: "top 85%" } }
      );

      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" } }
      );

      gsap.fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: subRef.current, start: "top 88%" } }
      );

      // Cards stagger in
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: cardsRef.current[0], start: "top 88%" } }
      );

      // Skill bars animate width on scroll
      barsRef.current.forEach((bar) => {
        if (!bar) return;
        const target = bar.dataset.level;
        gsap.fromTo(bar,
          { width: "0%" },
          { width: `${target}%`, duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: bar, start: "top 92%" } }
        );
      });
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
        {/* Label */}
        <p
          ref={labelRef}
          className="text-white/30 text-[11px] tracking-[0.15em] uppercase m-0 mb-2 opacity-0"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          / CAPABILITIES
        </p>
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

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-[#0f0f0f] border border-white/[0.07] p-5 flex flex-col gap-5 opacity-0 group hover:border-white/15 transition-colors duration-300"
            >
              {/* Card header */}
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="text-white/20 text-[10px] tracking-[0.12em] uppercase m-0 mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {cat.id}
                  </p>
                  <h3 className="text-white text-[1.1rem] font-bold m-0 tracking-[-0.01em]">
                    {cat.category}
                  </h3>
                </div>
                {/* Category icon dot */}
                <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-white/25 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </div>
              </div>

              {/* Desc */}
              <p
                className="text-white/25 text-[11px] leading-[1.6] m-0"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {cat.desc}
              </p>

              {/* Skill bars */}
              <div className="flex flex-col gap-3">
                {cat.skills.map((skill, j) => {
                  const barIndex = skillCategories
                    .slice(0, i)
                    .reduce((acc, c) => acc + c.skills.length, 0) + j;
                  return (
                    <div key={j} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span
                          className="text-white/55 text-[11px] tracking-[0.04em]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-white/20 text-[10px]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      {/* Track */}
                      <div className="w-full h-px bg-white/[0.08] relative overflow-hidden">
                        {/* Animated fill */}
                        <div
                          ref={(el) => (barsRef.current[barIndex] = el)}
                          data-level={skill.level}
                          className="absolute top-0 left-0 h-full bg-white/50"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}