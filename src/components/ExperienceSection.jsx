"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    date: "2026 — Present",
    role: "Freelance Web Developer",
    org: "SPKRHED Media Group LLC",
    desc: "Building the agency's client-facing marketing site from the ground up — structure, UI, and content, shipped as a paid freelance engagement.",
  },
  {
    date: "2025",
    role: "Freelance Web Developer",
    org: "Tparro",
    desc: "Designed and built an agency portfolio site for a friend's graphic design studio — my first real client-style project, unpaid but treated like production work.",
  },
  {
    date: "2025",
    role: "Full-Stack Web Development",
    org: "Programming Hero (Jhankar Mahbub)",
    desc: "Completed a zero-to-full-stack bootcamp — HTML/CSS through React, Node.js, Express, and MongoDB. The foundation everything since has been built on.",
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const underlineRef = useRef(null);
  const headingRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
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

      gsap.fromTo(itemsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: itemsRef.current[0], start: "top 88%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-[#080808] min-h-screen px-[5%] py-24"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <p
        ref={labelRef}
        className="text-white/45 text-[11px] tracking-[0.15em] uppercase m-0 mb-2 opacity-0"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        / EXPERIENCE
      </p>
      <div
        ref={underlineRef}
        className="w-10 h-px bg-white/15 mb-10"
        style={{ transform: "scaleX(0)", transformOrigin: "left" }}
      />

      <h2
        ref={headingRef}
        className="text-white text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.02em] m-0 mb-16 opacity-0"
      >
        The Road So Far
      </h2>

      <div className="max-w-3xl flex flex-col">
        {timeline.map((item, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className="relative pl-8 pb-12 last:pb-0 border-l border-white/10 last:border-transparent opacity-0"
          >
            {/* Marker dot */}
            <span className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-white/70" />

            <p
              className="text-white/45 text-[11px] tracking-[0.1em] uppercase m-0 mb-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {item.date}
            </p>
            <h3 className="text-white text-[1.2rem] font-bold m-0 mb-1 tracking-[-0.01em]">
              {item.role}
              <span className="text-white/40 font-normal"> — {item.org}</span>
            </h3>
            <p
              className="text-white/55 text-[13px] leading-[1.8] font-light m-0 max-w-xl"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
