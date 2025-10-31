import { FaReact, FaPython, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql } from "react-icons/si";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar";

type Project = {
  title: string;
  techStack?: string;
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
    title: "Sentiment Analysis for BlackCoffer",
    techStack: "Python, Pandas, Numpy, NLTK.",
    desc: "Analyzed articles to determine positive or negative sentiments using Python, Pandas, Numpy, and NLTK.",
    url: "https://github.com/SumitKumar3030/Sentiment-Analysis",
  },
  {
  title: "Portfolio Website",
  techStack: "Next.js, TypeScript, Tailwind CSS.",
  desc: "Personal portfolio built with Next.js and TypeScript to showcase my projects, experience, and skills. Styled with Tailwind CSS and deployed on Vercel.",
  url: "https://portfolio-three-iota-kh00uc8d7m.vercel.app/",
  },
  {
  title: "Weather Now",
  techStack: "React, OpenWeather API, JavaScript, CSS",
  desc: "A web application that shows real-time weather updates for any city using the OpenWeather API. It displays temperature, humidity, and weather conditions in a responsive interface.",
  url: "https://weather-now-liart-eta.vercel.app/",
  },
  {
    title: "Electronics eCommerce Store",
    techStack: "Next.js, MySQL, Node.js, Prisma.",
    desc: "Developed an e-commerce platform using Next.js and MySQL, improving loading time by 30% and integrating admin dashboard for seamless inventory management.",
    url: "https://github.com/yourusername/resume-builder",
  },
  {
    title: "Image Caption Generator using Deep Learning",
    techStack: "Python, TensorFlow, Keras, CNN, LSTM.",
    desc: "Created an image caption generator using deep learning techniques like CNN and LSTM, achieving 85% accuracy on test datasets.",
    url: "https://github.com/yourusername/resume-builder",
  },
  {
    title: "CRUD",
    techStack: "React.js,Node.js, SQl",
    desc: "A web application that allows users to perform Create, Read, Update, and Delete operations on a database using React.js for the frontend and SQL for the backend.",
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
    link: "https://coursera.org/share/066daa54675f85a782191ab118fe6fac"
  },
  {
    title: "Introduction to H2O using Python Infosys Springboard",
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
    <Navbar/>
    <main className={styles.main} id = "about">
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

    <section className={styles.section} id="techstack">
      <h2>Tech Stack</h2>
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


      <section className={styles.section} id ="skills">
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
      <section className={styles.section} id ="experience">
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

      <section className={styles.section} id = "projects">
        <h2>Projects</h2>
        <div className={styles.projects}>
          {projects.map((p) => (
            <div key={p.title} className={styles.card}>
              <h3>{p.title}</h3>
              {p.techStack && <p className={styles.techStack}><strong>Tech Stack:</strong> {p.techStack}</p>}
              <p>{p.desc}</p>
              <a href={p.url} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className={styles.section} id = "certifications">
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

      <section className={styles.section} id = "contacts">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="https://mail.google.com/mail/" target="_blank">
            stva3030@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="mailto:9671658070">
            +91 9671658070
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
