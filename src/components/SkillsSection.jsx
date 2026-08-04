"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TIERS = {
  core: { label: "Core", dot: "bg-green-400/80", text: "text-white/70" },
  comfortable: { label: "Comfortable", dot: "bg-sky-400/70", text: "text-white/55" },
  exploring: { label: "Exploring", dot: "bg-orange-300/70", text: "text-white/45" },
};

const skillCategories = [
  {
    id: "01",
    category: "Language",
    desc: "The foundation everything is built on.",
    skills: [
      { name: "HTML / CSS", tier: "core" },
      { name: "JavaScript", tier: "core" },
      { name: "TypeScript", tier: "comfortable" },
    ],
  },
  {
    id: "02",
    category: "Frontend",
    desc: "Where logic meets the user's eye.",
    skills: [
      { name: "React", tier: "core" },
      { name: "Next.js", tier: "comfortable" },
      { name: "Tailwind CSS", tier: "core" },
      { name: "Framer Motion", tier: "exploring" },
    ],
  },
  {
    id: "03",
    category: "Backend",
    desc: "The engine running under the hood.",
    skills: [
      { name: "Node.js", tier: "comfortable" },
      { name: "Express.js", tier: "comfortable" },
      { name: "JWT / Auth", tier: "comfortable" },
      { name: "REST API", tier: "comfortable" },
    ],
  },
  {
    id: "04",
    category: "Database",
    desc: "Storing and structuring data efficiently.",
    skills: [
      { name: "MongoDB", tier: "comfortable" },
      { name: "Mongoose", tier: "comfortable" },
      { name: "PostgreSQL", tier: "exploring" },
    ],
  },
  {
    id: "05",
    category: "Tools & Deployment",
    desc: "Shipping fast, deploying clean.",
    skills: [
      { name: "Git / GitHub", tier: "core" },
      { name: "Vercel", tier: "core" },
      { name: "Render", tier: "comfortable" },
      { name: "Figma", tier: "exploring" },
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
          className="text-white/45 text-[11px] tracking-[0.15em] uppercase m-0 mb-2 opacity-0"
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
          className="text-white/50 text-[13px] leading-[1.7] font-light m-0 mb-14 opacity-0"
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
                    className="text-white/35 text-[10px] tracking-[0.12em] uppercase m-0 mb-1"
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
                className="text-white/50 text-[11px] leading-[1.6] m-0"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {cat.desc}
              </p>

              {/* Skills */}
              <div className="flex flex-col gap-2.5">
                {cat.skills.map((skill, j) => {
                  const tier = TIERS[skill.tier];
                  return (
                    <div key={j} className="flex items-center justify-between">
                      <span
                        className="text-white/55 text-[11px] tracking-[0.04em]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`flex items-center gap-1.5 text-[9.5px] tracking-[0.1em] uppercase ${tier.text}`}
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${tier.dot}`} />
                        {tier.label}
                      </span>
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