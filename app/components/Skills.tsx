"use client";
import React from "react";
import "./Skills.css";

export const allSkills = [
  // Frontend Technologies
  {
    name: "HTML",
    iconPath: "/assets/svg/html.svg",
    color: "#E34C26",
    id: "_1",
  },
  { name: "CSS", iconPath: "/assets/svg/css.svg", color: "#1572B6", id: "_2" },
  {
    name: "JavaScript",
    iconPath: "/assets/svg/javascript.svg",
    color: "#F0DB4F",
    id: "_3",
  },
  {
    name: "Bootstrap",
    iconPath: "/assets/svg/bootstrap.svg",
    color: "#7952B3",
    id: "_4",
  },
  {
    name: "Material UI",
    iconPath: "/assets/svg/material-ui.svg",
    color: "#007FFF",
    id: "_5",
  },
  {
    name: "Tailwind CSS",
    iconPath: "/assets/svg/tailwind-css.svg",
    color: "#38B2AC",
    id: "_6",
  },
  {
    name: "React",
    iconPath: "/assets/svg/react.svg",
    color: "#61DAFB",
    id: "_7",
  },

  // Databases
  {
    name: "MongoDB",
    iconPath: "/assets/svg/mongodb.svg",
    color: "#47A248",
    id: "_8",
  },
  {
    name: "PostgreSQL",
    iconPath: "/assets/svg/pgsql.svg",
    color: "#336791",
    id: "_9",
  },
  {
    name: "MySQL",
    iconPath: "/assets/svg/mysql.svg",
    color: "#4479A1",
    id: "_10",
  },

  // Backend & Runtime
  {
    name: "Node.js",
    iconPath: "/assets/svg/nodejs.svg",
    color: "#339933",
    id: "_11",
  },
  {
    name: "Express",
    iconPath: "/assets/svg/express.svg",
    color: "#000000",
    glowColor: "#FFFFFF",
    tooltipBg: "#FFFFFF",
    tooltipText: "#000000",
    id: "_12",
  },
  {
    name: "TypeScript",
    iconPath: "/assets/svg/typescript.svg",
    color: "#3178C6",
    id: "_14",
  },
  {
    name: "Next.js",
    iconPath: "/assets/svg/nextjs.svg",
    color: "#000000",
    glowColor: "#FFFFFF",
    tooltipBg: "#FFFFFF",
    tooltipText: "#000000",
    id: "_13",
  },
];

const skillCategories = [
  {
    title: "Frontend",
    skills: allSkills.filter(skill =>
      [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Material UI",
        "Tailwind CSS",
        "React",
      ].includes(skill.name)
    ),
  },
  {
    title: "Backend",
    skills: allSkills.filter(skill =>
      ["Node.js", "Express", "Next.js", "TypeScript"].includes(skill.name)
    ),
  },
  {
    title: "Databases",
    skills: allSkills.filter(skill =>
      ["MongoDB", "PostgreSQL", "MySQL"].includes(skill.name)
    ),
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h1 className="skills-title">
            My <span className="skills-title-gradient">Skills</span>
          </h1>
        </div>

        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skills-category">
            <div className="category-header">
              <h3 className="category-title">{category.title}</h3>
            </div>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className={`skill-wrapper ${
                    skill.id === "_12" || skill.id === "_13"
                      ? "white-glow-icon"
                      : ""
                  }`}
                  style={
                    {
                      "--glow-color": skill.glowColor || skill.color,
                      "--border-color": `${skill.glowColor || skill.color}80`,
                      "--tooltip-color": skill.tooltipText || "#FFFFFF",
                      "--tooltip-bg": skill.tooltipBg || skill.color,
                      "--skill-color": skill.color,
                    } as React.CSSProperties
                  }
                >
                  <div className="glow-box">
                    <div className="skill-icon-container">
                      <div className="glass-effect-overlay"></div>
                      <img
                        src={skill.iconPath}
                        alt={skill.name}
                        className={`skill-icon ${skill.id}`}
                        loading="eager"
                        onError={e => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "/assets/svg/default-icon.svg";
                          console.error(
                            `Failed to load icon: ${skill.iconPath}`
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="tooltip">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
