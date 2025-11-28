"use client";

import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { HiDownload } from "react-icons/hi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <a href="#about" className={styles.logo}>
          SK<span className={styles.logoDot}>.</span>
        </a>
        <ul className={styles.navList}>
          <li>
            <a href="#experience">💼 Experience</a>
          </li>
          <li>
            <a href="#projects">🚀 Projects</a>
          </li>
          <li>
            <a href="#certifications">🏆 Certifications</a>
          </li>
          <li>
            <a href="#contacts">📬 Contact</a>
          </li>
          <li>
            <a
              href="https://github.com/SumitKumar3030"
              target="_blank"
              rel="noreferrer"
              className={styles.githubLink}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </li>

         <li>
  <a
    href="https://www.linkedin.com/in/sumit-kumar-dev3/"
    target="_blank"
    rel="noreferrer"
    className={styles.linkedinLink}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6C1.1 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 5 2.12 5 3.5H4.98ZM0.5 8H4.5V24H0.5V8ZM9 8H13V10.2H13.06C13.59 9.18 14.91 8 16.96 8C21.07 8 22 10.64 22 14.36V24H18V15.33C18 13.27 17.96 10.79 15.5 10.79C13 10.79 12.62 12.98 12.62 15.18V24H9V8Z" />
    </svg>
    LinkedIn
  </a>
</li>

          {/* Resume Download Button */}
          <li>
            <a
              href="/Resume_Sumitkumar.pdf"
              download="Sumit_Kumar_Resume.pdf"
              className={styles.resumeBtn}
            >
              <HiDownload /> Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}