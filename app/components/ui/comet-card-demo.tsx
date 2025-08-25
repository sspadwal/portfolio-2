// components/ui/comet-card-demo.tsx
"use client";
import { CometCard } from "./comet-card";
import "./comet-card.css";

const projects = [
  {
    title: "DevMindAI Ai-Powered Platform",
    description:
      "A full-stack AI web app with secure auth, Gemini-powered content & image generation, and community features",
    techStack: [
      "PostgreSQL",
      "Express",
      "React",
      "Node.js",
      "Tailwind CSS",
      "OpenAI",
      "Gemini API",
    ],
    imageFile: "p1.webp",
    githubUrl: "https://github.com/sspadwal/DevMindAI.git",
    liveUrl: "https://devmindai.vercel.app/",
  },
  {
    title: "CloHaven Ecommerce Platform",
    description:
      "A full-stack MERN e-commerce website with product management, cart, checkout, secure payments, and admin dashboard.",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Stripe",
      "Material UI",
      "Admin Panel",
    ],
    imageFile: "p2.webp",
    githubUrl: "https://github.com/sspadwal/clohaven-client.git",
    liveUrl: "https://clohaven.vercel.app/",
  },
  {
    title: "Daily Task Manager",
    description:
      "To-Do List web app built on MERN stack, supporting add, update, delete tasks with token-based authentication.",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "CSS",
      "Responsive UI",
    ],
    imageFile: "p3.webp",
    githubUrl: "https://github.com/sspadwal/task-manager-client.git",
    liveUrl: "https://taskifyzone.vercel.app/",
  },
  {
    title: "World Atlas React App",
    description:
      "A React world explorer app with API integration, country details, sorting, routing, and a responsive UI.",
    techStack: [
      "React",
      "React Router",
      "JavaScript",
      "REST API",
      "Responsive UI",
    ],
    imageFile: "p4.webp",
    githubUrl: "https://github.com/sspadwal/worldatlas.git",
    liveUrl: "https://global-atlas.vercel.app/",
  },
  {
    title: "MERN Blog Platform",
    description:
      "Cross-device MERN blog application with secure login, CRUD functionality, and an interactive blogging community.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "CSS",
      "JWT",
      "REST API",
    ],
    imageFile: "p5.webp",
    githubUrl: "https://github.com/yourusername/social-media-dashboard",
    liveUrl: "#",
  },
  {
    title: "University Website",
    description:
      "Designed and developed a fully responsive university website using HTML, CSS, and JavaScript.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive UI",
      "UI/UX",
      "Web Development",
    ],
    imageFile: "p7.webp",
    githubUrl: "https://github.com/sspadwal/harvard-university.git",
    liveUrl: "https://harvardcamp.netlify.app/",
  },
];

export function CometCardDemo() {
  const handleButtonClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Function to get tech icon based on tech name
  const getTechIcon = (tech: string) => {
    const techName = tech.toLowerCase();
    if (techName.includes("react")) return "⚛️";
    if (techName.includes("node")) return "🟢";
    if (techName.includes("javascript")) return "🟨";
    if (techName.includes("mongodb")) return "🍃";
    if (techName.includes("postgresql") || techName.includes("postgres"))
      return "🐘";
    if (techName.includes("express")) return "⚡";
    if (techName.includes("css") || techName.includes("tailwind")) return "🎨";
    if (techName.includes("html")) return "📄";
    if (techName.includes("stripe")) return "💳";
    if (techName.includes("jwt")) return "🔐";
    if (techName.includes("api") || techName.includes("rest")) return "🔗";
    if (techName.includes("ui/ux") || techName.includes("design")) return "🎯";
    if (
      techName.includes("openai") ||
      techName.includes("gemini") ||
      techName.includes("ai")
    )
      return "🤖";
    return "💎";
  };

  return (
    <section id="projects" className="projects-section">
      {/* Projects Heading */}
      <div className="projects-heading-container">
        <h2 className="projects-main-heading">My Projects</h2>
        <p className="projects-subtitle">
          Explore my latest projects and creative solutions
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-wrapper">
            <CometCard>
              <div className="project-card">
                <div className="image-container">
                  <div className="image-wrapper">
                    <img
                      loading="lazy"
                      className="project-image"
                      alt={project.title}
                      src={`/assets/projects/${project.imageFile}`}
                    />
                  </div>
                </div>
                <div className="content-container">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Improved Tech Stack - Fixed 2x3 Grid Layout */}
                  <div className="tech-stack-container">
                    {project.techStack
                      .filter(tech => tech && tech.trim())
                      .slice(0, 6) // Exactly 6 items for 2x3 grid
                      .map((tech, i) => (
                        <div key={i} className="tech-item">
                          <span className="tech-icon">{getTechIcon(tech)}</span>
                          <span className="tech-name">{tech.trim()}</span>
                        </div>
                      ))}
                    {/* Fill empty cells if less than 6 items */}
                    {Array.from({
                      length: Math.max(
                        0,
                        6 -
                          project.techStack.filter(tech => tech && tech.trim())
                            .length
                      ),
                    }).map((_, i) => (
                      <div
                        key={`empty-${i}`}
                        className="tech-item"
                        style={{ opacity: 0, pointerEvents: "none" }}
                      >
                        <span className="tech-icon">💎</span>
                        <span className="tech-name">Placeholder</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <button
                      className="project-btn github-btn"
                      onClick={e => handleButtonClick(e, project.githubUrl)}
                    >
                      <svg
                        className="btn-icon"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </button>

                    <button
                      className="project-btn live-btn"
                      onClick={e => handleButtonClick(e, project.liveUrl)}
                    >
                      <svg
                        className="btn-icon"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                      </svg>
                      <span>Live</span>
                    </button>
                  </div>
                </div>
              </div>
            </CometCard>
          </div>
        ))}
      </div>
    </section>
  );
}
