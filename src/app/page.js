"use client";

import { useState } from "react";

const skills = [
  "Python",
  "JavaScript",
  "SQL",
  "Data Structures & Algorithms",
  "React.js",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "NLTK",
  "HTML5",
  "CSS3",
  "MySQL",
  "Git",
  "GitHub",
  "VS Code",
  "MS Excel",
  "MS Word",
];

const projects = [
  {
    number: "01",
    title: "Water Quality Prediction Model",
    description:
      "Developed a predictive model using environmental and chemical parameters to predict water quality using machine learning techniques.",
    technologies: ["Python", "Scikit-Learn", "MySQL"],
  },
  {
    number: "02",
    title: "Python Inventory Management System",
    description:
      "Developed a Python application to track stock levels and product categories with backend logic and low-stock alerts using Object-Oriented Programming.",
    technologies: ["Python", "OOP"],
  },
  {
    number: "03",
    title: "SMS Spam Detection System",
    description:
      "Built a machine learning model for SMS classification using text preprocessing, feature extraction, and model training techniques.",
    technologies: ["Python", "NLTK", "Scikit-Learn"],
  },
  {
    number: "04",
    title: "Max Tech E-Commerce Web Application",
    description:
      "Created a responsive technology products website with Flexbox and Grid, including an interactive product catalog filtering feature using JavaScript.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
];

const education = [
  {
    year: "MCA",
    title: "Master of Computer Applications",
    college: "Krishnasamy College of Engineering",
    score: "Academic Score: 87%",
  },
  {
    year: "B.Sc",
    title: "Computer Science",
    college: "Annamalai University",
    score: "Academic Score: 81%",
  },
  {
    year: "HSC",
    title: "Higher Secondary Certificate",
    college: "State Board",
    score: "Academic Score: 80.6%",
  },
  {
    year: "SSLC",
    title: "Secondary School Leaving Certificate",
    college: "State Board",
    score: "Academic Score: 76%",
  },
];

const certifications = [
  "Python Full Stack with AI Tools – Accord Info Matrix",
  "Software Engineer Certification – HackerRank",
  "CSS Basic Certification – HackerRank",
  "Data Analytics and Visualization Workshop",
  "Flutter Development Workshop",
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className={darkMode ? "site dark-mode" : "site"}>

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo" onClick={closeMenu}>
            <span>G</span>
            Gayathri
          </a>

          <button
            className="menu-button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#education" onClick={closeMenu}>
              Education
            </a>

            <a href="#certifications" onClick={closeMenu}>
              Certifications
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <button
            className="theme-button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀" : "☾"}
          </button>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section id="home" className="hero">

        <div className="hero-background"></div>

        <div className="container hero-container">

          <div className="hero-content">

            <p className="hero-small-text">
              Hello, I&apos;m
            </p>

            <h1>
              Gayathri <span>R</span>
            </h1>

            <h2>
              Python Developer <span>&</span> Full-Stack Developer
            </h2>

            <p className="hero-description">
              MCA graduate skilled in Python development, SQL database
              management, and Full-Stack web fundamentals. Passionate about
              building practical software solutions and scalable applications.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                View My Work →
              </a>

              <a
                href="/resume/gayathriR.pdf"
                className="secondary-button"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/gayathriraja03"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/gayathri-r-134768433"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>


          {/* PROFILE IMAGE */}

          <div className="hero-card">

            <div className="profile-circle">
              <img
                src="/images/GayathriR.jpeg"
                alt="Gayathri R"
              />
            </div>

            <div className="hero-card-content">

              <span className="status-dot"></span>

              <span>
                Available for opportunities
              </span>

            </div>

          </div>

        </div>


        <div className="scroll-indicator">

          <span>
            Scroll to explore
          </span>

          <div>
            ↓
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section about-section"
      >

        <div className="container">

          <SectionTitle
            eyebrow="01 — ABOUT"
            title="A little about me"
            description="A quick introduction to my professional background and career goal."
          />

          <div className="about-grid">

            <div className="about-text">

              <p>
                I am a detail-oriented Master of Computer Applications (MCA)
                graduate with skills in Python development, SQL database
                management, and Full-Stack web fundamentals.
              </p>

              <p>
                I have practical experience developing machine learning
                models, implementing text processing pipelines, and building
                web applications.
              </p>

              <p>
                I am seeking an entry-level Python Developer or Full-Stack
                Developer role where I can apply software engineering
                practices and contribute to scalable applications.
              </p>

            </div>


            <div className="about-highlight">

              <div className="highlight-card">

                <span className="highlight-number">
                  87%
                </span>

                <span className="highlight-label">
                  MCA Academic Score
                </span>

              </div>


              <div className="highlight-card">

                <span className="highlight-number">
                  4
                </span>

                <span className="highlight-label">
                  Projects
                </span>

              </div>


              <div className="highlight-card">

                <span className="highlight-number">
                  5
                </span>

                <span className="highlight-label">
                  Certifications & Training
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="container">

          <SectionTitle
            eyebrow="02 — SKILLS"
            title="Technical toolkit"
            description="Technologies and tools used during my learning and project development."
          />

          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div
                className="skill-card"
                key={skill}
              >

                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>
                  {skill}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="container">

          <SectionTitle
            eyebrow="03 — PROJECTS"
            title="Things I&apos;ve built"
            description="A selection of academic and practical projects from my development journey."
          />

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.number}
              >

                <div className="project-top">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-arrow">
                    ↗
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="technology-list">

                  {project.technologies.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section
        id="education"
        className="section education-section"
      >

        <div className="container">

          <SectionTitle
            eyebrow="04 — EDUCATION"
            title="Academic journey"
            description="My educational background and academic achievements."
          />

          <div className="timeline">

            {education.map((item, index) => (

              <div
                className="timeline-item"
                key={item.year}
              >

                <div className="timeline-marker">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                <div className="timeline-content">

                  <span className="timeline-year">
                    {item.year}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.college}
                  </p>

                  <strong>
                    {item.score}
                  </strong>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}

      <section
        id="certifications"
        className="section certification-section"
      >

        <div className="container">

          <SectionTitle
            eyebrow="05 — CERTIFICATIONS"
            title="Certifications & training"
            description="Courses, certifications and workshops completed during my learning journey."
          />

          <div className="certification-list">

            {certifications.map(
              (certificate, index) => (

                <div
                  className="certificate-card"
                  key={certificate}
                >

                  <span className="certificate-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>
                    {certificate}
                  </p>

                  <span className="certificate-icon">
                    ↗
                  </span>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ================= CAREER CTA ================= */}

      <section className="career-section">

        <div className="container career-container">

          <div>

            <span className="section-eyebrow">
              LET&apos;S CONNECT
            </span>

            <h2>
              Ready to start my
              <br />
              <span>
                professional journey.
              </span>
            </h2>

            <p>
              I&apos;m currently looking for entry-level opportunities in
              Python Development and Full-Stack Development.
            </p>

          </div>

          <a
            href="#contact"
            className="primary-button large-button"
          >
            Get in Touch →
          </a>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="container">

          <SectionTitle
            eyebrow="06 — CONTACT"
            title="Let&apos;s talk"
            description="Feel free to connect with me regarding career opportunities or professional discussions."
          />


          <div className="contact-grid">


            <div className="contact-info">

              <a
                href="mailto:gayathrihari200@gmail.com"
                className="contact-card"
              >

                <span className="contact-label">
                  EMAIL
                </span>

                <span className="contact-value">
                  gayathrihari200@gmail.com
                </span>

              </a>


              <a
                href="tel:+916282130272"
                className="contact-card"
              >

                <span className="contact-label">
                  PHONE
                </span>

                <span className="contact-value">
                  +91 6282130272
                </span>

              </a>


              <a
                href="https://github.com/gayathriraja03"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >

                <span className="contact-label">
                  GITHUB
                </span>

                <span className="contact-value">
                  gayathriraja03 ↗
                </span>

              </a>


              <a
                href="https://www.linkedin.com/in/gayathri-r-134768433"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >

                <span className="contact-label">
                  LINKEDIN
                </span>

                <span className="contact-value">
                  Gayathri R ↗
                </span>

              </a>

            </div>


            <div className="contact-message">

              <div className="message-box">

                <span>
                  01
                </span>

                <p>
                  Open to opportunities where I can learn, contribute,
                  and grow as a software developer.
                </p>

              </div>


              <div className="message-box">

                <span>
                  02
                </span>

                <p>
                  Interested in Python development, Full-Stack development,
                  web applications, and software engineering.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container footer-container">

          <div>

            <a
              href="#home"
              className="footer-logo"
            >
              Gayathri<span>.</span>
            </a>

            <p>
              Python Developer • Full-Stack Developer
            </p>

          </div>


          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>


          <p className="copyright">
            © {new Date().getFullYear()} Gayathri R.
            All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}