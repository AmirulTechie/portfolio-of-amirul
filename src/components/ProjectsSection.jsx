"use client";

const projects = [
  {
    image: "/tilevo.png",
    title: "Tilevo",
    tag: "TILES GALLERY PLATFORM",
    description:
      "A full-stack platform for showcasing and managing tile collections with intuitive browsing and search capabilities.",
    stack: ["Next.js", "MongoDB", "Tailwind", "+4"],
    links: {
      live: "https://tilevo.vercel.app/",
      github: "https://github.com/AmirulTechie/tilevo-client",
    },
  },
  {
    image: "/friendship.png",
    title: "FriendshipTracker",
    tag: "SOCIAL TRACKING APP",
    description:
      "Track and manage your friendships with activity logs, reminders, and relationship insights.",
    stack: ["React", "Express", "MongoDB", "+3"],
    links: {
      live: "https://keenkeeper-tracker-by-amirul.vercel.app/",
      github: "https://github.com/AmirulTechie/friendship-tracker",
    },
  },
  {
    image: "/digitools.png",
    title: "DigiTools",
    tag: "PRODUCTIVITY TOOLKIT",
    description:
      "A collection of essential digital tools bundled into one clean, fast, and accessible web app.",
    stack: ["React", "Node.js", "JWT", "+2"],
    links: {
      live: "https://digitools-react-spa-assignment.netlify.app/",
      github: "https://github.com/AmirulTechie/digiTools-react-assignment",
    },
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#080808] min-h-screen px-[5%] py-24"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* Section label */}
      <p
        className="text-white/30 text-[11px] tracking-[0.15em] uppercase m-0 mb-2"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        / SELECTED WORK
      </p>
      <div className="w-10 h-px bg-white/15 mb-10" />

      {/* Heading */}
      <h2 className="text-white text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.02em] m-0 mb-16">
        Building Digital Frontiers
      </h2>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col gap-5 group">
      {/* Image */}
      <div className="relative overflow-hidden bg-white/5 aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-white text-2xl font-bold m-0 mb-1">
            {project.title}
          </h3>
          <p
            className="text-white/30 text-[10px] tracking-[0.12em] uppercase m-0"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {project.tag}
          </p>
        </div>

        <p
          className="text-white/50 text-[13px] leading-[1.7] font-light m-0"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, j) => (
            <span
              key={j}
              className="border border-white/15 text-white/50 text-[10px] tracking-[0.08em] px-3 py-1 rounded-full"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 mt-1">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-white/55 hover:text-white text-[11px] tracking-[0.1em] uppercase no-underline transition-colors duration-200"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.5H2.5A1 1 0 001.5 2.5v9a1 1 0 001 1h9a1 1 0 001-1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M8.5 1.5H12.5V5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 7.5L12.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Live
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-white/55 hover:text-white text-[11px] tracking-[0.1em] uppercase no-underline transition-colors duration-200"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              Github
            </a>
          )}
          {project.links.frontend && (
            <a
              href={project.links.frontend}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-white/55 hover:text-white text-[11px] tracking-[0.1em] uppercase no-underline transition-colors duration-200"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M1 6l3-3-3-3M5 9h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              Frontend
            </a>
          )}
          {project.links.backend && (
            <a
              href={project.links.backend}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-white/55 hover:text-white text-[11px] tracking-[0.1em] uppercase no-underline transition-colors duration-200"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="1" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1 4h10" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="3.5" cy="2.5" r="0.5" fill="currentColor"/>
                <circle cx="5.5" cy="2.5" r="0.5" fill="currentColor"/>
              </svg>
              Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
}