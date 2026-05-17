/* eslint-disable react/no-unescaped-entities */
/* app/not-found.jsx */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function NotFound() {
  const fourRef = useRef(null);
  const zeroRef = useRef(null);
  const four2Ref = useRef(null);
  const tagRef = useRef(null);
  const msgRef = useRef(null);
  const codeCardRef = useRef(null);
  const btnsRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Glow pulse behind 404
    gsap.to(glowRef.current, {
      opacity: 0.12,
      scale: 1.15,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // 404 digits: stagger drop in
    gsap.fromTo(
      [fourRef.current, zeroRef.current, four2Ref.current],
      { opacity: 0, y: -60, rotateX: 90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.1,
      }
    );

    // Tag line
    gsap.fromTo(
      tagRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.55 }
    );

    // Message
    gsap.fromTo(
      msgRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.7 }
    );

    // Code card
    gsap.fromTo(
      codeCardRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.85 }
    );

    // Buttons
    gsap.fromTo(
      btnsRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 1 }
    );

    // Floating code card
    gsap.to(codeCardRef.current, {
      y: -8,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.5,
    });
  }, []);

  return (
    <main
      className="relative min-h-screen bg-[#080808] flex flex-col items-center justify-center px-6 overflow-hidden"
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

      {/* Glow blob behind 404 */}
      <div
        ref={glowRef}
        className="absolute z-[0] w-[500px] h-[500px] rounded-full opacity-0"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center text-center gap-8">

        {/* 404 digits */}
        <div className="flex items-baseline gap-2 md:gap-4" style={{ perspective: "600px" }}>
          <span
            ref={fourRef}
            className="text-[clamp(7rem,20vw,14rem)] font-extrabold leading-none tracking-[-0.04em] text-white opacity-0 select-none"
            style={{ textShadow: "0 0 80px rgba(255,255,255,0.08)" }}
          >
            4
          </span>
          <span
            ref={zeroRef}
            className="text-[clamp(7rem,20vw,14rem)] font-extrabold leading-none tracking-[-0.04em] text-white/20 opacity-0 select-none"
            style={{ textShadow: "0 0 80px rgba(255,255,255,0.04)" }}
          >
            0
          </span>
          <span
            ref={four2Ref}
            className="text-[clamp(7rem,20vw,14rem)] font-extrabold leading-none tracking-[-0.04em] text-white opacity-0 select-none"
            style={{ textShadow: "0 0 80px rgba(255,255,255,0.08)" }}
          >
            4
          </span>
        </div>

        {/* Tag */}
        <p
          ref={tagRef}
          className="text-white/30 text-[11px] tracking-[0.2em] uppercase -mt-4 opacity-0"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          PAGE_NOT_FOUND
        </p>

        {/* Message */}
        <p
          ref={msgRef}
          className="text-white/50 text-[13px] leading-[1.8] font-light max-w-sm opacity-0"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Looks like this route doesn't exist.
          <br />
          It may have been moved, deleted, or never rendered.
        </p>

        {/* Code card */}
        <div
          ref={codeCardRef}
          className="bg-[#0f0f0f] border border-white/[0.07] px-5 py-4 text-left w-full max-w-xs opacity-0"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <p className="text-white/25 text-[9px] tracking-[0.1em] uppercase m-0 mb-3">
             CONSOLE.ERROR
          </p>
          <p className="m-0 text-[11px] leading-[1.8]">
            <span className="text-red-400/70">Error:</span>{" "}
            <span className="text-white/50">Route not matched</span>
          </p>
          <p className="m-0 text-[11px] leading-[1.8]">
            <span className="text-white/25">path:</span>{" "}
            <span className="text-orange-300/60">window.location.href</span>
          </p>
          <p className="m-0 text-[11px] leading-[1.8]">
            <span className="text-white/25">status:</span>{" "}
            <span className="text-red-400/70">404</span>
          </p>
          <p className="m-0 text-[11px] mt-2 text-white/20">
            at App.render {"(<anonymous>)"}
          </p>
        </div>

        {/* Buttons */}
        <div
          ref={btnsRef}
          className="flex gap-3 flex-wrap justify-center opacity-0"
        >
          <Link
            href="/"
            className="bg-white text-black px-7 py-3 text-[11.5px] font-bold tracking-[0.12em] uppercase no-underline hover:bg-white/90 transition-colors duration-200"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ← GO HOME
          </Link>
          <Link
            href="/#projects"
            className="border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-7 py-3 text-[11.5px] tracking-[0.12em] uppercase no-underline transition-all duration-200"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            VIEW WORK
          </Link>
        </div>

      </div>

      {/* Bottom label */}
      <p
        className="absolute bottom-6 text-white/15 text-[10px] tracking-[0.12em] uppercase z-[2]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        AMIRUL.DEV — 404
      </p>
    </main>
  );
}