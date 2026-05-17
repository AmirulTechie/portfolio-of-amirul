/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "3", label: "Projects Shipped" },
  { value: "5+", label: "Tech Stack" },
  { value: "2025", label: "Started Coding" },
];

const traits = [
  { icon: "⌥", label: "UI Focused" },
  { icon: "⚙", label: "Problem Solver" },
  { icon: "◈", label: "Clean Code" },
  { icon: "▸", label: "Fast Learner" },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const underlineRef = useRef(null);
  const headingRef = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);
  const statsRef = useRef([]);
  const traitsRef = useRef([]);
  const codeCardRef = useRef(null);

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

      gsap.fromTo([p1Ref.current, p2Ref.current, p3Ref.current],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: p1Ref.current, start: "top 88%" } }
      );

      gsap.fromTo(statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: statsRef.current[0], start: "top 90%" } }
      );

      gsap.fromTo(traitsRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: traitsRef.current[0], start: "top 90%" } }
      );

      gsap.fromTo(codeCardRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: codeCardRef.current, start: "top 85%" } }
      );

      // Subtle float on code card
      gsap.to(codeCardRef.current, {
        y: -8,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#080808] min-h-screen px-[5%] py-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* Left: Text */}
      <div className="flex-1 flex flex-col">
        <p
          ref={labelRef}
          className="text-white/30 text-[11px] tracking-[0.15em] uppercase m-0 mb-2 opacity-0"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          02 / ABOUT
        </p>
        <div
          ref={underlineRef}
          className="w-10 h-px bg-white/15 mb-10"
          style={{ transform: "scaleX(0)", transformOrigin: "left" }}
        />

        <h2
          ref={headingRef}
          className="text-white text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.02em] m-0 mb-8 opacity-0"
        >
          The Dev
          <br />
          <span className="text-white/35 font-normal">Behind the Screen.</span>
        </h2>

        <div className="flex flex-col gap-5 mb-10">
          <p
            ref={p1Ref}
            className="text-white/55 text-[13.5px] leading-[1.85] font-light m-0 opacity-0"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            I didn't start coding in college or follow the traditional route. In{" "}
            <span className="text-white/80">2025</span>, I made a deliberate
            decision — to escape the 9-to-5 grind and build something on my own
            terms. That decision led me down the rabbit hole of web development,
            and I haven't looked back since.
          </p>
          <p
            ref={p2Ref}
            className="text-white/55 text-[13.5px] leading-[1.85] font-light m-0 opacity-0"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            I gravitate toward{" "}
            <span className="text-white/80">UI work and problem solving</span> —
            the kind of work where design meets logic. There's something
            satisfying about turning a blank screen into an interface that feels
            intuitive, fast, and clean. Every pixel has a reason. Every
            component has a purpose.
          </p>
          <p
            ref={p3Ref}
            className="text-white/55 text-[13.5px] leading-[1.85] font-light m-0 opacity-0"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Outside of code, I'm usually deep in a game or a book — both train
            the same muscle:{" "}
            <span className="text-white/80">strategic thinking</span>. Whether
            it's figuring out the next move in a game or absorbing a new
            perspective from a book, I'm always looking for patterns and better
            ways to approach problems.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mb-10 flex-wrap">
          {stats.map((s, i) => (
            <div
              key={i}
              ref={(el) => (statsRef.current[i] = el)}
              className="flex flex-col gap-1 opacity-0"
            >
              <span className="text-white text-[2rem] font-bold tracking-[-0.02em]">
                {s.value}
              </span>
              <span
                className="text-white/30 text-[10px] tracking-[0.12em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Trait tags */}
        <div className="flex flex-wrap gap-2">
          {traits.map((t, i) => (
            <div
              key={i}
              ref={(el) => (traitsRef.current[i] = el)}
              className="flex items-center gap-2 border border-white/10 px-4 py-2 opacity-0"
            >
              <span className="text-white/30 text-[12px]">{t.icon}</span>
              <span
                className="text-white/50 text-[11px] tracking-[0.08em]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Code block */}
      <div
        ref={codeCardRef}
        className="w-full lg:w-[38%] flex-shrink-0 flex flex-col gap-4 opacity-0"
      >
        {/* about.js code card */}
        <div
          className="bg-[#0f0f0f] border border-white/[0.07] overflow-hidden"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {/* Card title bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05] bg-[#0a0a0a]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-white/20 text-[10px] tracking-[0.08em]">
              about.js
            </span>
            <div className="w-10" />
          </div>

          {/* Code content */}
          <div className="p-5 text-[12px] leading-[1.9]">
            <p className="m-0 text-white/20">about.js</p>
            <p className="m-0 mt-2">
              <span className="text-sky-400/70">const</span>{" "}
              <span className="text-white/70">amirul</span>{" "}
              <span className="text-white/30">=</span>{" "}
              <span className="text-white/30">{"{"}</span>
            </p>
            <div className="pl-5 flex flex-col">
              <p className="m-0">
                <span className="text-white/40">role</span>
                <span className="text-white/20">:</span>{" "}
                <span className="text-orange-300/70">"Frontend Developer"</span>
                <span className="text-white/20">,</span>
              </p>
              <p className="m-0">
                <span className="text-white/40">location</span>
                <span className="text-white/20">:</span>{" "}
                <span className="text-orange-300/70">"Dhaka, Bangladesh"</span>
                <span className="text-white/20">,</span>
              </p>
              <p className="m-0">
                <span className="text-white/40">started</span>
                <span className="text-white/20">:</span>{" "}
                <span className="text-sky-400/70">2025</span>
                <span className="text-white/20">,</span>
              </p>
              <p className="m-0">
                <span className="text-white/40">enjoys</span>
                <span className="text-white/20">:</span>{" "}
                <span className="text-white/20">[</span>
                <span className="text-orange-300/70">"UI Work"</span>
                <span className="text-white/20">,</span>{" "}
                <span className="text-orange-300/70">"Problem Solving"</span>
                <span className="text-white/20">],</span>
              </p>
              <p className="m-0">
                <span className="text-white/40">hobbies</span>
                <span className="text-white/20">:</span>{" "}
                <span className="text-white/20">[</span>
                <span className="text-orange-300/70">"Gaming"</span>
                <span className="text-white/20">,</span>{" "}
                <span className="text-orange-300/70">"Reading"</span>
                <span className="text-white/20">],</span>
              </p>
              <p className="m-0">
                <span className="text-white/40">available</span>
                <span className="text-white/20">:</span>{" "}
                <span className="text-green-400/70">true</span>
                <span className="text-white/20">,</span>
              </p>
            </div>
            <p className="m-0">
              <span className="text-white/30">{"}"}</span>
            </p>

            {/* Blinking cursor */}
            <p className="m-0 mt-2 text-white/20">
              &gt;{" "}
              <span className="inline-block w-2 h-3.5 bg-white/40 animate-pulse align-middle" />
            </p>
          </div>
        </div>

        {/* Currently card */}
        <div
          className="border border-white/[0.07] bg-[#0f0f0f] p-4"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <p className="text-white/25 text-[9px] tracking-[0.12em] uppercase m-0 mb-3">
            CURRENTLY
          </p>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
              <span className="text-white/55 text-[11px]">Learning Next.js deeply</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/70 flex-shrink-0" />
              <span className="text-white/55 text-[11px]">Building portfolio projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
              <span className="text-white/55 text-[11px]">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}