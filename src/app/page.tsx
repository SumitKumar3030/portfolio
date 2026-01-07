import { FaReact, FaPython, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql } from "react-icons/si";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar";

type Project = {
  title: string;
  techStack?: string;
  desc: string;
  url: string;
  liveUrl?: string;
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
    title: "Sentiment Analysis for BlackCoffer",
    techStack: "Python, Pandas, Numpy, NLTK.",
    desc: "Analyzed articles to determine positive or negative sentiments using Python, Pandas, Numpy, and NLTK.",
    url: "https://github.com/SumitKumar3030/Sentiment-Analysis",
  },
  {
    title: "Portfolio Website",
    techStack: "Next.js, TypeScript, Tailwind CSS.",
    desc: "Personal portfolio built with Next.js and TypeScript to showcase my projects, experience, and skills. Styled with Tailwind CSS and deployed on Vercel.",
    url: "https://github.com/SumitKumar3030",
    liveUrl: "https://portfolio-three-iota-kh00uc8d7m.vercel.app/",
  },
  {
    title: "Weather Now",
    techStack: "React, OpenWeather API, JavaScript, CSS",
    desc: "A web application that shows real-time weather updates for any city using the OpenWeather API. It displays temperature, humidity, and weather conditions in a responsive interface.",
    url: "https://github.com/SumitKumar3030",
    liveUrl: "https://weather-now-liart-eta.vercel.app/",
  },
  {
    title: "Electronics eCommerce Store",
    techStack: "Next.js, MySQL, Node.js, Prisma.",
    desc: "Developed an e-commerce platform using Next.js and MySQL, improving loading time by 30% and integrating admin dashboard for seamless inventory management.",
    url: "https://github.com/SumitKumar3030",
  },
  {
    title: "Image Caption Generator using Deep Learning",
    techStack: "Python, TensorFlow, Keras, CNN, LSTM.",
    desc: "Created an image caption generator using deep learning techniques like CNN and LSTM, achieving 85% accuracy on test datasets.",
    url: "https://github.com/SumitKumar3030",
  },
  {
    title: "CRUD Application",
    techStack: "React.js, Node.js, SQL",
    desc: "A web application that allows users to perform Create, Read, Update, and Delete operations on a database using React.js for the frontend and SQL for the backend.",
    url: "https://github.com/SumitKumar3030",
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
    title: "Web Development",
    provider: "InternShala",
    link: "https://trainings.internshala.com/verify-certificate/?certificate_number=1EF0D84C-BA4D-8304-9EC6-DAF3BDD48FFB",
  },
  {
    title: "Angular, Typescript and Typescript Essentials",
    provider: "Infosys Springboard",
    link: "https://drive.google.com/drive/folders/1rDt1EGXYja08fTSZB7WBi7ovheXytsUV?usp=sharing",
  },
  {
    title: "Google Data Analytics",
    provider: "Coursera",
    link: "https://drive.google.com/drive/folders/105xAETxuIoSTFJfAqukZ39RgrpCgJAo6?usp=sharing",
  },
  {
    title: "Machine Learning",
    provider: "Coursera",
    link: "https://coursera.org/share/b722d35676ab812eda0f94b2dc52f4dc",
  },
  {
    title: "Computer Vision for Engineering and Science",
    provider: "Coursera",
    link: "https://coursera.org/share/066daa54675f85a782191ab118fe6fac",
  },
  {
    title: "Introduction to H2O using Python",
    provider: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1I6evni3hRpDaKf3sDdf1UgPRWPyLNjhg/view?usp=sharing",
  },
  {
    title: "Creative and Critical Thinking",
    provider: "Coursera",
    link: "https://drive.google.com/drive/folders/1CqhBla6lDDNXKjxPl4M3naCukZN1DScD?usp=sharing",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main} id="about">
        <header className={styles.header}>
          <Image
            src="/profile1.jpg"
            alt="Sumit Kumar - Full Stack Developer"
            width={110}
            height={110}
            className={styles.avatar}
            priority
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
          <h2>
            <span className={styles.emoji}>📖</span> Summary
          </h2>
          <p>
            I'm a passionate Full Stack Developer and Python Developer with hands-on
            experience in building web applications and analytical tools using
            modern technologies like Next.js, React, Node.js, Python, and SQL.
            I enjoy solving problems, learning new frameworks, and turning ideas
            into real-world digital solutions.
          </p>
        </section>

        {/* Tech Stack Section */}
        <section className={styles.section} id="techstack">
          <h2>
            <span className={styles.emoji}>⚡</span> Tech Stack
          </h2>
          <div className={styles.techIcons}>
            <FaReact title="React" />
            <SiNextdotjs title="Next.js" />
            <SiTypescript title="TypeScript" />
            <FaPython title="Python" />
            <FaNodeJs title="Node.js" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiPostgresql title="PostgreSQL" />
            <FaGitAlt title="Git" />
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.section} id="skills">
          <h2>
            <span className={styles.emoji}>🛠️</span> Skills
          </h2>
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
        <section className={styles.section} id="experience">
          <h2>
            <span className={styles.emoji}>💼</span> Experience
          </h2>
          <div className={styles.projects}>
            {experiences.map((exp) => (
              <div key={exp.role} className={styles.card}>
                <h3>{exp.role}</h3>
                <p className={styles.company}>
                  <strong>{exp.company}</strong> • {exp.duration}
                </p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className={styles.section} id="projects">
          <h2>
            <span className={styles.emoji}>🚀</span> Projects
          </h2>
          <div className={styles.projects}>
            {projects.map((p) => (
              <div key={p.title} className={styles.card}>
                <h3>{p.title}</h3>
                {p.techStack && (
                  <p className={styles.techStack}>
                    <strong>Tech Stack:</strong> {p.techStack}
                  </p>
                )}
                <p>{p.desc}</p>
                <div className={styles.projectLinks}>
                  <a href={p.url} target="_blank" rel="noreferrer" aria-label={`View ${p.title} on GitHub`}>
                    <FaGithub /> Code
                  </a>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" aria-label={`View live demo of ${p.title}`} className={styles.liveLink}>
                      🌐 Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className={styles.section} id="certifications">
          <h2>
            <span className={styles.emoji}>🏆</span> Certifications
          </h2>
          <ul className={styles.certList}>
            {certificates.map((c) => (
              <li key={c.title}>
                <span className={styles.certIcon}>📜</span>
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

        {/* Contact Section */}
        <section className={styles.section} id="contacts">
          <h2>
            <span className={styles.emoji}>📬</span> Contact
          </h2>
          <div className={styles.contactGrid}>
            <a href="mailto:stva3030@gmail.com" className={styles.contactItem}>
              <HiMail className={styles.contactIcon} />
              <span>stva3030@gmail.com</span>
            </a>
            <a href="tel:+919671658070" className={styles.contactItem}>
              <HiPhone className={styles.contactIcon} />
              <span>+91 9671658070</span>
            </a>
            <a href="https://github.com/SumitKumar3030" target="_blank" rel="noreferrer" className={styles.contactItem}>
              <FaGithub className={styles.contactIcon} />
              <span>github.com/SumitKumar3030</span>
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Sumit Kumar. Built with Next.js & TypeScript 💙</p>
        </footer>
      </main>
    </>
  );
}