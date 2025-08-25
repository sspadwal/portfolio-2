"use client";
import React, { useRef, useEffect, useState, useMemo, useId } from "react";
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Technologies",
            skills: [
                { name: "HTML", iconPath: "/assets/svg/html.svg", color: "#E34C26" },
                { name: "CSS", iconPath: "/assets/svg/css.svg", color: "#1572B6" },
                { name: "JavaScript", iconPath: "/assets/svg/javascript.svg", color: "#F0DB4F" },
                { name: "Bootstrap", iconPath: "/assets/svg/bootstrap.svg", color: "#7952B3" },
                { name: "Material UI", iconPath: "/assets/svg/material-ui.svg", color: "#007FFF" },
                { name: "Tailwind CSS", iconPath: "/assets/svg/tailwind-css.svg", color: "#38B2AC" },
                { name: "React", iconPath: "/assets/svg/react.svg", color: "#61DAFB" },
            ]
        },
        {
            title: "Databases I Use",
            skills: [
                { name: "MongoDB", iconPath: "/assets/svg/mongodb.svg", color: "#47A248" },
                { name: "PostgreSQL", iconPath: "/assets/svg/pgsql.svg", color: "#336791" },
                { name: "MySQL", iconPath: "/assets/svg/mysql.svg", color: "#4479A1" },
            ]
        },
        {
            title: "Backend & Runtime",
            skills: [
                { name: "Node.js", iconPath: "/assets/svg/nodejs.svg", color: "#339933" },
                { name: "Express", iconPath: "/assets/svg/express.svg", color: "#000000" },
                { name: "Next.js", iconPath: "/assets/svg/nextjs.svg", color: "#000000" },
                { name: "TypeScript", iconPath: "/assets/svg/typescript.svg", color: "#3178C6" },
            ]
        }
    ];

    return (
        <section className="skills-section">
            <div className="skills-container">
                <h2 className="skills-heading">
                    My <span className="skills-heading-gradient">Skills</span>
                </h2>

                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="skills-category">
                        <div className="category-header">
                            <h3 className="category-title">
                                {category.title}
                            </h3>
                        </div>
                        <SkillsCurvedLoop skills={category.skills} />
                            <span style={{color:"black"}}>{catIndex}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

const SkillsCurvedLoop = ({ skills, speed = 1.5, curveAmount = 80, direction = "left" }) => {
    const measureRef = useRef(null);
    const pathRef = useRef(null);
    const [spacing, setSpacing] = useState(0);
    const [offset, setOffset] = useState(0);
    const uid = useId();
    const pathId = `skills-curve-${uid}`;
    const pathD = `M-200,60 Q720,${60 + curveAmount} 1640,60`;

    // Create skills string with proper spacing
    const skillsText = useMemo(() => {
        return skills.map(skill => skill.name).join(' • ') + ' • ';
    }, [skills]);

    const totalSkillsText = useMemo(() => {
        if (!spacing) return skillsText;
        const repeatCount = Math.ceil(1800 / spacing) + 2;
        return Array(repeatCount).fill(skillsText).join('');
    }, [skillsText, spacing]);

    const ready = spacing > 0;

    useEffect(() => {
        if (measureRef.current) {
            setSpacing(measureRef.current.getComputedTextLength());
        }
    }, [skillsText]);

    useEffect(() => {
        if (!spacing) return;
        if (pathRef.current) {
            const initial = -spacing;
            setOffset(initial);
        }
    }, [spacing]);

    useEffect(() => {
        if (!spacing || !ready) return;
        let frame = 0;
        const step = () => {
            const delta = direction === "right" ? speed : -speed;
            let newOffset = offset + delta;

            const wrapPoint = spacing;
            if (newOffset <= -wrapPoint) newOffset += wrapPoint;
            if (newOffset > 0) newOffset -= wrapPoint;

            setOffset(newOffset);
            frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [spacing, speed, ready, offset, direction]);

    return (
        <div className="skills-curved-loop">
            <svg className="skills-curve-svg" viewBox="0 0 1440 160">
                <text
                    ref={measureRef}
                    style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
                    className="skills-text-measure"
                >
                    {skillsText}
                </text>
                <defs>
                    <path
                        ref={pathRef}
                        id={pathId}
                        d={pathD}
                        fill="none"
                        stroke="transparent"
                    />
                </defs>
                {ready && (
                    <text className="skills-curve-text">
                        <textPath 
                            href={`#${pathId}`} 
                            startOffset={offset + "px"}
                        >
                            {totalSkillsText}
                        </textPath>
                    </text>
                )}
            </svg>
            
            {/* Skill icons overlay */}
            <div className="skills-icons-overlay">
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="skill-icon-container"
                        style={{
                            '--skill-color': skill.color,
                            '--skill-border': `${skill.color}40`,
                            animationDelay: `${index * 0.2}s`
                        }}
                    >
                        <div className="skill-icon-wrapper">
                            <img
                                src={skill.iconPath}
                                alt={skill.name}
                                className="skill-icon-curved"
                                loading="lazy"
                            />
                        </div>
                        <div className="skill-name-tooltip">
                            {skill.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;