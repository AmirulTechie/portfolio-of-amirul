"use client";

import { useState, useEffect } from "react";

const TERMINAL_LINES = [
  "Initializing secure handshake...",
  "Status: Available for opportunities.",
  "./initiate_contact.sh",
];

export default function ConnectSection() {
  const [visibleLines, setVisibleLines] = useState([]);

  // Typewriter effect for terminal lines
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < TERMINAL_LINES.length) {
        setVisibleLines((prev) => [...prev, TERMINAL_LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="connect"
      className="bg-[#080808] min-h-screen flex flex-col items-center justify-center px-[5%] py-24"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* Section label */}
      <p className="text-white/45 text-[11px] tracking-[0.15em] uppercase mb-10 text-center">
        / CONNECT
      </p>

      {/* Terminal card */}
      <div className="w-full max-w-2xl bg-[#0f0f0f] border border-white/[0.08] rounded-lg overflow-hidden">

        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#0a0a0a]">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-white/40 text-[10px] tracking-[0.1em]">
            ≥_ AMIRUL@CONNECT:~
          </span>
          <div className="w-12" />
        </div>

        <div className="p-6 flex flex-col gap-6">
          {/* Terminal output lines */}
          <div className="flex flex-col gap-2">
            {visibleLines.map((line, i) => (
              <p key={i} className="m-0 text-[13px] leading-relaxed">
                <span className="text-white/45">guest@system:~$</span>{" "}
                <span className={i === 2 ? "text-white/80" : "text-white/55"}>
                  {line}
                </span>
              </p>
            ))}
            {visibleLines.length === TERMINAL_LINES.length && (
              <p className="m-0 text-[13px]">
                <span className="text-white/45">guest@system:~$</span>{" "}
                <span className="inline-block w-2 h-3.5 bg-white/60 animate-pulse align-middle" />
              </p>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.06]" />

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <a
              href="mailto:amirulislam.office28@gmail.com"
              className="flex items-center gap-2 text-white/50 hover:text-white/70 text-[11px] tracking-[0.06em] no-underline transition-colors duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              amirulislam.office28@gmail.com
            </a>
            <a
              href="tel:+8801993567044"
              className="flex items-center gap-2 text-white/50 hover:text-white/70 text-[11px] tracking-[0.06em] no-underline transition-colors duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +880 1993 567044
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.06]" />

          {/* Footer: social icons + submit */}
          <div className="flex items-center justify-between">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {/* GitHub */}
              <a href="https://github.com/AmirulTechie" target="_blank" rel="noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/amirultechie" target="_blank" rel="noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:amirulislam.office28@gmail.com"
                className="text-white/40 hover:text-white transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </a>
              {/* Phone */}
              <a href="tel:+8801993567044"
                className="text-white/40 hover:text-white transition-colors duration-200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>
              {/* Resume / download */}
              <a href="/amirul-islam-resume.pdf" download
                className="text-white/40 hover:text-white transition-colors duration-200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v13M7 11l5 5 5-5" />
                  <path d="M3 19h18" />
                </svg>
              </a>
            </div>

            {/* Send button */}
            <a
              href="mailto:amirulislam.office28@gmail.com?subject=Let's%20talk"
              className="flex items-center gap-2 border border-white/25 hover:border-white/60 hover:bg-white/5 text-white text-[11px] tracking-[0.12em] uppercase px-5 py-2.5 transition-all duration-200 no-underline"
            >
              [ SEND_MESSAGE ]
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22 11 13 2 9l20-7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}