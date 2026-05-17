"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Connect", href: "#connect" },
];

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 5) {
        // scrolling down
        setVisible(false);
        setMenuOpen(false);
      } else if (currentY < lastScrollY.current - 5) {
        // scrolling up
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          flex items-center justify-between
          px-6 md:px-10 h-16
          transition-all duration-300 ease-in-out
          ${visible ? "translate-y-0" : "-translate-y-full"}
          
        `}
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black text-xs font-bold tracking-tight">
            A
          </div>
          <span className="text-white text-sm font-semibold uppercase tracking-widest">
            Amirul.
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white/60 hover:text-white text-[13px] tracking-wider no-underline transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Download CV */}
<a href="/amirul-islam-resume.pdf" download
  className="glow-btn hidden md:flex items-center gap-2 border border-white/25 hover:border-white/60 hover:bg-white/5 text-white text-[11px] uppercase tracking-widest px-4 py-2 transition-all duration-200 no-underline"
>
  <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
    <rect x="0.5" y="0.5" width="10" height="12" rx="1.5" stroke="white" strokeOpacity="0.7" />
    <line x1="2.5" y1="4.5" x2="8.5" y2="4.5" stroke="white" strokeOpacity="0.7" />
    <line x1="2.5" y1="6.5" x2="8.5" y2="6.5" stroke="white" strokeOpacity="0.7" />
    <line x1="2.5" y1="8.5" x2="5.5" y2="8.5" stroke="white" strokeOpacity="0.7" />
  </svg>
  [ Download_CV ]
</a>
        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <span
            className="block w-[22px] h-[1.5px] bg-white transition-all duration-200"
            style={{
              transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-[22px] h-[1.5px] bg-white transition-all duration-200"
            style={{
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? "scaleX(0)" : "none",
            }}
          />
          <span
            className="block w-[22px] h-[1.5px] bg-white transition-all duration-200"
            style={{
              transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-16 left-0 right-0 z-40
          bg-black/95 backdrop-blur-md border-b border-white/[0.08]
          flex flex-col gap-5 px-6 py-6
          transition-all duration-300 ease-in-out
          md:hidden
          ${menuOpen && visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-white/70 hover:text-white text-sm tracking-wider no-underline transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        <a
          href="/cv.pdf"
          download
          className="self-start border border-white/20 text-white text-[11px] uppercase tracking-widest px-4 py-2 mt-1 no-underline"
        >
          [ Download_CV ]
        </a>
      </div>
    </>
  );
}