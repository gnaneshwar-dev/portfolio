import React, { useEffect ,useState  } from "react";
import { ReactTyped } from "react-typed";
import { FaMoon, FaSun, FaBars, FaTimes, FaArrowUp } from "react-icons/fa";import AOS from "aos";
import 'devicon/devicon.min.css';
import "aos/dist/aos.css";
import './index.css';

const App = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.classList.add(`${savedTheme}-mode`);
    const handleScrollBtn = () => {
      setShowTopBtn(window.scrollY > 300);
    };


    const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"];
    const handleScrollSection = () => {
      const scrollPos = window.scrollY + 65; // offset for navbar height
      let currentSection = "home";
      for (let sec of sections) {
        const elem = document.getElementById(sec);
        if (elem && elem.offsetTop <= scrollPos) {
          currentSection = sec;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollBtn);
    window.addEventListener("scroll", handleScrollSection);

    return () => {
      window.removeEventListener("scroll", handleScrollBtn);
      window.removeEventListener("scroll", handleScrollSection);
    };
  }, []);

    useEffect(() => {
    // Smooth scroll with offset
    const links = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        const yOffset = -60; // navbar height offset
        const y = targetElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      if (menuOpen) setMenuOpen(false);
    };
    links.forEach((link) => link.addEventListener("click", handleClick));
    return () => links.forEach((link) => link.removeEventListener("click", handleClick));
  }, [menuOpen]);

    useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.remove(`${theme}-mode`);
    document.body.classList.add(`${newTheme}-mode`);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <header className="navbar">
        <h1>Gnaneshwar Guruvali</h1>
          <nav className={`nav-right ${menuOpen ? "open" : ""}`}>
            <ul>
            {["home", "about", "skills", "experience", "projects", "education", "contact"].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={handleNavClick}
                    className={activeSection === section ? "active" : ""}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
          <button className="dark-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>
        </nav>

         <button
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </header>

       {menuOpen && (
        <div
          className="nav-overlay show"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <section id="home">
        <div className="typing-section">
        <h2 className="typed-wrapper">
          <ReactTyped
            strings={[
              "Hi, I'm Gnaneshwar Guruvali",
              "Full-stack developer specializing in web and AI.",
              "Building modern apps and intelligent tools.",
              "Always learning, always building something new."
            ]}
            typeSpeed={60}       // typing speed per char
            backSpeed={40}       // deleting speed per char
            backDelay={1500}     // pause before deleting
            smartBackspace={true} // only delete what differs between sentences
            showCursor
            cursorChar="|"
            loop
          />
        </h2>
        </div>
       <p>
        Full-Stack Developer with 2+ years of experience delivering scalable web solutions and integrating AI capabilities to enhance user experiences.
      </p>

        <a href="/Guruvali Gnaneshwar_resume.pdf" download className="resume-btn">Download My Resume</a>
      </section>

      <section id="about" className="container" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          A self-motivated and enthusiastic Full Stack Developer with proven experience in designing and developing dynamic, scalable web and mobile applications.
        </p>
        <p>
          Proficient in modern front-end and back-end technologies, with a focus on building performant, maintainable systems.
        </p>
        <p>
          Known for optimizing complex systems, driving feature development, and contributing effectively in fast-paced, agile teams.
        </p>

      </section>

      <section id="skills" className="container" data-aos="fade-up">
        <h2>Skills</h2>
        <div className="skills-grid">
          <span className="chip"><i className="devicon-react-original colored"></i> React</span>
          <span className="chip"><i className="devicon-angularjs-plain colored"></i> Angular</span>
           <span className="chip"><i className="devicon-html5-plain colored"></i> HTML</span>
          <span className="chip"><i className="devicon-css3-plain colored"></i> CSS</span>
          <span className="chip"><i className="devicon-javascript-plain colored"></i> JavaScript</span>
          <span className="chip"><i className="devicon-typescript-plain colored"></i> TypeScript</span>
          <span className="chip"><i className="devicon-jquery-plain colored"></i> jQuery</span>
          <span className="chip"><i className="devicon-python-plain colored"></i> Python</span>
          <span className="chip"><i className="devicon-django-plain colored"></i> Django</span>
          <span className="chip"><i className="devicon-php-plain colored"></i> PHP</span>
          <span className="chip"><i className="devicon-laravel-plain colored"></i> Laravel</span>
          <span className="chip"><i className="devicon-codeigniter-plain colored"></i> CodeIgniter</span>
          <span className="chip"><i className="devicon-nodejs-plain colored"></i> Node.js</span>
          <span className="chip"><i className="devicon-mysql-plain colored"></i> MySQL</span>
          <span class="chip"><i class="devicon-vscode-plain colored"></i> VS Code</span>
          <span class="chip"><i class="devicon-postman-plain colored"></i>Postman</span>
          <span class="chip"><i class="devicon-git-plain colored"></i> Git</span>
        </div>
      </section>

      <section id="experience" className="container" data-aos="fade-up">
        <h2>Work Experience</h2>
        <div className="project-card">
          <h3>Software Engineer – VMC Technologies Pvt Ltd</h3>
          <p><em>June 2023 – Present | Bangalore, India</em></p>
          <ul>
           <li>Boosted system efficiency by optimizing database queries, reducing page load time by 30%.</li>
            <li>Designed and implemented the MCUBE Big Basket lead management system with bulk assignment and granular role-based access control.</li>
            <li>Integrated Vodafone APIs to automate outbound call workflows, significantly enhancing team productivity.</li>
            <li>Developed and maintained master panels, real-time reporting modules, and comprehensive admin controls.</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="container" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card" data-aos="zoom-in">
            <h3>SYNTHEON - AI Call Analytics</h3>
            <p>Built an AI-driven call analytics system using Python, Django, and Laravel, enabling emotion detection, sentiment analysis, and keyword extraction. Integrated real-time speech-to-text and NLP, with visual reports and REST APIs for seamless frontend-backend communication.</p>
          </div>
          <div className="project-card" data-aos="zoom-in">
            <h3>MCUBE BIG BASKET PANEL</h3>
            <p>Developed a robust lead management platform with Angular and CodeIgniter, featuring dashboards, role-based access, CSV imports, and performance-optimized queries. Enabled detailed reporting and dynamic lead assignment.</p>
          </div>
          <div className="project-card" data-aos="zoom-in">
            <h3>MCUBE MASTER PANEL</h3>
            <p>Led enhancements and maintenance of the MCUBE Master Panel, resolving bugs, optimizing performance, and implementing user-requested features. Ensured smooth operation and scalability with structured code and clear documentation.</p>
          </div>
          <div className="project-card" data-aos="zoom-in">
            <h3>Vodafone API Integration</h3>
            <p>Integrated Vodafone’s API into the MCUBE panel to automate outbound call initiation with mobile CLI support. Streamlined communication workflows and ensured reliable deployment through team collaboration and comprehensive documentation.</p>
          </div>
        </div>
      </section>

      <section id="education" className="container" data-aos="fade-up">
        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>B.Tech – Electronics & Communication Engineering</h3>
              <span className="timeline-date">2019 – 2023</span>
              <p>Sree Venkateswara College of Engineering</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p><strong>Email:</strong> <a href="mailto:guruvalignaneshwar@gmail.com">guruvalignaneshwar@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+917780787875">+91 7780787875</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/gnaneshwar-guruvali-a71146229" target="_blank" rel="noopener noreferrer">linkedin.com/in/gnaneshwar-guruvali</a></p>
      </section>
      {showTopBtn && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default App;

