/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroBanner() {
  const imgRef = useRef(null);
  const chip1Ref = useRef(null);
  const chip2Ref = useRef(null);
  const chip3Ref = useRef(null);
  const chip4Ref = useRef(null);
  const label1Ref = useRef(null);
  const label2Ref = useRef(null);
  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);

  useEffect(() => {
    // --- Mouse parallax on image ---
    const handleMouseMove = (e) => {
      if (!imgRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      gsap.to(imgRef.current, {
        x,
        y,
        scale: 1.04,
        duration: 0.6,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // --- Entry animations ---
    gsap.fromTo(tagRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.1 });
    gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.25 });
    gsap.fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.4 });
    gsap.fromTo(btnsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.55 });

    // --- Chip floating animations (all offset so they never sync) ---
    gsap.to(chip1Ref.current, { y: -10, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1 });
    gsap.to(chip2Ref.current, { y: 12, x: -4, duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5 });
    gsap.to(chip3Ref.current, { y: -8, x: 5, duration: 3.1, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
    gsap.to(chip4Ref.current, { y: 8, duration: 2.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.8 });

    // --- Labels pulse ---
    gsap.to([label1Ref.current, label2Ref.current], {
      opacity: 0.45,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.8,
    });

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative min-h-screen bg-[#080808] flex items-center justify-between px-[6%] overflow-hidden gap-8 flex-col md:flex-row pt-24 md:pt-0"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "128px",
        }}
      />

      {/* Left: Text */}
      <div className="relative z-[2] max-w-[520px] flex flex-col gap-6 text-center md:text-left items-center md:items-start">
        <p
          ref={tagRef}
          className="text-white/45 text-[11px] tracking-[0.1em] uppercase m-0 opacity-0"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          // FULL_STACK_DEVELOPER
        </p>

        <h1
          ref={headingRef}
          className="m-0 text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.02em] opacity-0"
        >
          <span className="text-white/45 font-normal">Building</span>
          <br />
          <span className="text-white/45 font-normal">Clean </span>
          <span className="text-white font-extrabold">Products.</span>
        </h1>

        <p
          ref={subRef}
          className="m-0 text-[13px] leading-[1.8] text-white/50 font-light opacity-0"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Full-Stack Developer with a frontend focus — fast UIs, clean code,
          <br className="hidden md:block" />
          and APIs that don't get in the way.
        </p>

        <div
          ref={btnsRef}
          className="flex gap-3 flex-wrap justify-center md:justify-start opacity-0"
        >
          <a
            href="#projects"
            className="bg-white text-black px-7 py-3 text-[11.5px] font-bold tracking-[0.12em] uppercase no-underline hover:bg-white/90 transition-colors duration-200"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            EXPLORE WORK &nbsp;→
          </a>
          <a
            href="#connect"
            className="border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-7 py-3 text-[11.5px] tracking-[0.12em] uppercase no-underline transition-all duration-200"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            LET'S TALK
          </a>
        </div>
      </div>

      {/* Right: Image area */}
      <div className="relative z-[2] w-full md:w-[45%] h-105 md:h-[80vh] max-h-155 shrink-0">

        {/* Chip 1 — top left: component render count */}
        <div
          ref={chip1Ref}
          className="absolute top-[8%] left-[-4%] bg-[#141414]/90 border border-white/[0.08] backdrop-blur-md px-3 py-2 z-[3] hidden md:block"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="text-white/28 text-[9px] tracking-[0.08em] block mb-0.5">// COMPONENT</span>
          <span className="text-white/60 text-[11px] tracking-[0.04em]">
            &lt;Hero{" "}
            <span className="text-white/35">render</span>=
            <span className="text-green-400/80">true</span>{" "}
            /&gt;
          </span>
        </div>

        {/* Chip 2 — code card: styling snippet */}
        <div
          ref={chip2Ref}
          className="absolute top-[20%] left-[3%] bg-[#0e0e0e]/90 border border-white/[0.07] backdrop-blur-md p-3 w-[190px] z-[4] hidden md:block"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <p className="text-white/28 text-[9px] tracking-[0.08em] m-0 mb-2">
            // STYLES.CSS
          </p>
          <div className="flex flex-col gap-0.5">
            <span className="text-white/50 text-[10.5px]">
              <span className="text-white/32">display:</span>{" "}
              <span className="text-sky-400/70">flex</span>;
            </span>
            <span className="text-white/50 text-[10.5px]">
              <span className="text-white/32">gap:</span>{" "}
              <span className="text-orange-300/70">1rem</span>;
            </span>
            <span className="text-white/50 text-[10.5px]">
              <span className="text-white/32">border-radius:</span>{" "}
              <span className="text-orange-300/70">8px</span>;
            </span>
          </div>
        </div>

        {/* Image wrapper */}
        <div className="absolute bottom-0 right-[5%] w-[75%] h-[92%] overflow-hidden">
          <img
            ref={imgRef}
            src="/amirul-islam.png"
            alt="Amirul Islam"
            className="w-full h-full object-cover object-top transition-none"
            style={{ filter: "grayscale(100%) contrast(1.15) brightness(0.9)" }}
          />
          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 55%, #080808 100%), linear-gradient(to left, transparent 60%, #080808 100%)",
            }}
          />
        </div>

        {/* Chip 3 — bottom right: performance score */}
        <div
          ref={chip3Ref}
          className="absolute bottom-[18%] right-[-3%] bg-[#141414]/90 border border-white/[0.08] backdrop-blur-md px-3 py-2 z-[3] hidden md:block"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="text-white/28 text-[9px] tracking-[0.08em] block mb-1">// LIGHTHOUSE</span>
          <span className="text-white/55 text-[11px] block">
            performance:{" "}
            <span className="text-green-400/80">98</span>
          </span>
          <span className="text-white/55 text-[11px] block">
            accessibility:{" "}
            <span className="text-green-400/80">100</span>
          </span>
        </div>

        {/* Chip 4 — mid right: bundle size */}
        <div
          ref={chip4Ref}
          className="absolute top-[52%] right-[-1%] bg-[#0e0e0e]/90 border border-white/[0.07] backdrop-blur-md px-3 py-1.5 z-[3] hidden md:block"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="text-white/28 text-[9px] tracking-[0.08em] block mb-0.5">bundle.js</span>
          <span className="text-white/55 text-[11px]">
            <span className="text-sky-400/70">42kb</span>{" "}
            <span className="text-white/28">gzipped</span>
          </span>
        </div>

        {/* Labels */}
        <span
          ref={label1Ref}
          className="absolute bottom-[4%] left-[8%] text-white/24 text-[9.5px] tracking-[0.1em] uppercase z-[3]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          ▣ Tailwind CSS
        </span>
        <span
          ref={label2Ref}
          className="absolute bottom-[4%] right-[2%] text-white/24 text-[9.5px] tracking-[0.1em] uppercase z-[3]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          NEXT.JS_ENGINEER
        </span>
      </div>
    </section>
  );
}