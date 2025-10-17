import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#certifications">CERTIFICATION</a></li>
        <li>
          <a href="mailto:stva3030@gmail.com">Email</a>
        </li>
        <li>
          <a href="tel:+919671658070">Phone</a>
        </li>
        <li>
          <a href="https://github.com/SumitKumar3030" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
      <div className={styles.about}>
        <p>
          I'm a passionate Full Stack Developer and Python Developer with hands-on experience in building web applications and analytical tools using modern technologies like Next.js, React, Node.js, Python, and SQL.
        </p>
      </div>
    </nav>
  );
}
