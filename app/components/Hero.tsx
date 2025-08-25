"use client";

import React from "react";
import TextType from "./TextType";
import { motion } from "framer-motion";
import "./Hero.css";

// Enhanced Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.8,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      duration: 0.8,
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      {/* Enhanced background pattern */}
      <div className="hero-background-pattern"></div>

      {/* Enhanced floating elements */}
      <div className="floating-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="floating-element element-4"></div>
        <div className="floating-element element-5"></div>
      </div>

      {/* Additional particle effects */}
      <div className="particle-effects">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`particle particle-${i + 1}`}
            style={{
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {/* Text content */}
          <div className="hero-text-content">
            {/* Intro */}
            <motion.div variants={slideInLeft} className="hero-intro">
              <motion.span
                className="hero-wave"
                animate={{
                  rotate: [0, 10, -10, 5, -5, 0],
                  scale: [1, 1.1, 1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                role="img"
                aria-label="Waving hand"
              >
                👋
              </motion.span>
              <motion.p className="hero-intro-text">Hi, I Am</motion.p>
            </motion.div>

            {/* Name */}
            <motion.h1 className="hero-name" variants={item}>
              <motion.span
                className="hero-name-gradient"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Shailesh Padwal
              </motion.span>
            </motion.h1>

            {/* Roles */}
            <motion.div className="hero-roles" variants={item}>
              <TextType
                text={[
                  "Full Stack Developer",
                  "Frontend Engineer",
                  "Frontend Web Developer",
                  "UI/UX Specialist",
                ]}
                as="div"
                typingSpeed={50}
                deletingSpeed={30}
                pauseDuration={1500}
                loop={true}
                showCursor={true}
                cursorCharacter="⎢"
                cursorClassName="text-cursor"
                className="type-text"
                textColors={[
                  "role-color-1",
                  "role-color-2",
                  "role-color-3",
                  "role-color-4",
                ]}
                style={{
                  transition: "color 0.5s ease-in-out",
                }}
                aria-live="polite"
              />
            </motion.div>

            {/* Description */}
            <motion.div variants={item} className="hero-description-wrapper">
              <motion.p
                className="hero-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                I build exceptional digital experiences with modern web
                technologies. Focused on creating intuitive, performant, and
                accessible applications that make a lasting impact.
              </motion.p>
            </motion.div>

            {/* Buttons */}
            <motion.div className="hero-buttons-mobile" variants={item}>
              {/* Download CV button */}
              <motion.a
                href="/assets/Shailesh_Padwal_Resume.pdf"
                download
                className="hero-primary-btn"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 35px -5px rgba(124, 58, 237, 0.6)",
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                }}
                whileTap={{
                  scale: 0.95,
                  boxShadow: "0 5px 15px -5px rgba(124, 58, 237, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="Download CV"
              >
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="download-icon"
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
                <span>Download CV</span>
                <div className="btn-hover-effect"></div>
              </motion.a>

              {/* View Projects button (scrolls) */}
              <motion.a
                href="#projects"
                className="hero-secondary-btn"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(124, 58, 237, 0.15)",
                  borderColor: "#8b5cf6",
                  boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="View projects"
              >
                <span>View Projects</span>
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Right side image / Lanyard */}
          <motion.div className="hero-image-container" variants={item}>
            <div className="hero-image-wrapper">
              <div className="animated-blob"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
