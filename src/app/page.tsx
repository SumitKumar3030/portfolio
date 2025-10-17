import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar";

type Project = {
  title: string;
  desc: string;
  url: string;
};

type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

type Certificate = {
  title: string;
  provider: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Cancer & Diet App",
    desc: "Next.js + Prisma + PostgreSQL — Personalized diet plans for cancer patients.",
    url: "https://yourproject1.vercel.app",
  },
  {
    title: "Resume Builder",
    desc: "React app to create and download resumes as PDFs.",
    url: "https://github.com/yourusername/resume-builder",
  },
  {
    title: "E-commerce API",
    desc: "Node.js + Express + PostgreSQL REST API.",
    url: "https://github.com/yourusername/ecommerce-api",
  },
];

const experiences: Experience[] = [
  {
    role: "Web Development Intern",
    company: "InternShala",
    duration: "June 2022 - July 2022",
    description:
      "Built responsive web pages using HTML, CSS, and JavaScript. Improved UI performance and collaborated with mentors to enhance project delivery.",
  },
  {
    role: "Java Development Intern",
    company: "Wipro",
    duration: "Jan 2023 - Mar 2023",
    description:
      "Learned and implemented core & advanced Java concepts with real-world examples. Completed assessments and earned certification upon successful tests.",
  },
];

const certificates: Certificate[] = [
  {
    title: "Google Data Analytics",
    provider: "Coursera",
    link: "https://www.coursera.org/professional-certificates/google-data-analytics",
  },
  {
    title: "Machine Learning",
    provider: "Coursera",
  },
  {
    title: "Digital Marketing & E-commerce",
    provider: "Google",
  },
  {
    title: "Creative and Critical Thinking",
    provider: "Coursera",
  },
];

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
      <header className={styles.header}>
        <Image
          src="/profile.jpg"
          alt="Sumit Kumar"
          width={110}
          height={110}
          className={styles.avatar}
        />
        <div>
          <h1>Sumit Kumar</h1>
          <p className={styles.role}>
            Full Stack Developer • Python • React • Next.js • Node • SQL 
          </p>
        </div>
      </header>

      {/* Summary Section */}
      <section className={styles.section}>
        <h2>Summary</h2>
        <p>
          I'm a passionate Full Stack Developer and Python Developer with hands-on
          experience in building web applications and analytical tools using
          modern technologies like Next.js, React, Node.js, Python, and SQL.
          I enjoy solving problems, learning new frameworks, and turning ideas
          into real-world digital solutions.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Skills</h2>
        <ul className={styles.skills}>
          {[
            "Python",
            "HTML",
            "CSS / Tailwind",
            "JavaScript / TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "PostgreSQL, SQL",
            "Prisma",
          ].map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Experience Section */}
      <section className={styles.section}>
        <h2>Experience</h2>
        <div className={styles.projects}>
          {experiences.map((exp) => (
            <div key={exp.role} className={styles.card}>
              <h3>{exp.role}</h3>
              <p>
                <strong>{exp.company}</strong> — {exp.duration}
              </p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          {projects.map((p) => (
            <div key={p.title} className={styles.card}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.url} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className={styles.section}>
        <h2>Certifications</h2>
        <ul className={styles.certList}>
          {certificates.map((c) => (
            <li key={c.title}>
              {c.link ? (
                <a href={c.link} target="_blank" rel="noreferrer">
                  {c.title} - {c.provider}
                </a>
              ) : (
                `${c.title} - ${c.provider}`
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:stva3030@gmail.com">
            stva3030@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/SumitKumar3030" target="_blank">
            github.com/SumitKumar3030
          </a>
        </p>
      </section>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Sumit Kumar
      </footer>
    </main>
    </>
  );
}
