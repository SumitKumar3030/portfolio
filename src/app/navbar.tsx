import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#certifications">CERTIFICATION</a></li>
        <li>
          <a href="#contacts">CONTACTS</a>
        </li>
        <li>
          <a href="https://github.com/SumitKumar3030" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}
