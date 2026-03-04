import React from 'react';
import { useState, useEffect } from "react";
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { useTranslation } from "react-i18next";

function Index() {
 const [darkMode, setDarkMode] = useState(false);
 const { t } = useTranslation();


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            el.target.style.opacity = "1";
            el.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      ".timeline-item, .skill-card, .edu-card"
    );

    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(el);
    });

    return () => observer.disconnect(); // limpeza
  }, []);


  return (
  <div  className={`container ${darkMode ? "dark" : ""}`}>
    <nav className="nav">
      <div className="nav-logo">Helen<span>.</span>Oliveira</div>

     

      <ul className="nav-links">
        <li> 
          <LanguageSwitcher />
        </li>
        <li> <button className='button-darkmode' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? `☀️ ${t("light")}` : `🌙 ${t("dark")}`}
      </button></li>
        <li><a href="#about"> {t("about")}</a></li>
        <li><a href="#skills"> {t("skills")}</a></li>
        <li><a href="#experience"> {t("experience")}</a></li>
        <li><a href="#contact"> {t("contact")}</a></li>

      </ul>
    </nav>

<div class="hero">
  <div class="hero-text">
    <div class="hero-eyebrow">✦ {t("available")}</div>
    <h1 className="hero-name">
  Helen<br />
  Oliveira<span className="accent">.</span>
</h1>
    <p class="hero-role"> {t("role-description")}</p>
    <div class="hero-cta">
      
            <a 
            
        href="https://github.com/helensouz" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-primary"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
       {t("github")}
      </a>
        
     
      <a href="https://www.linkedin.com/in/hs-helensouza/" target="_blank" rel="noopener noreferrer" class="btn-ghost">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.226.79 24 1.77 24h20.46C23.2 24 24 23.226 24 22.273V1.727C24 .774 23.2 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.433c-1.12 0-2.03-.91-2.03-2.03 0-1.12.91-2.03 2.03-2.03 1.12 0 2.03.91 2.03 2.03 0 1.12-.91 2.03-2.03 2.03zM20.45 20.452h-3.5v-5.569c0-1.328-.03-3.037-1.85-3.037-1.85 0-2.13 1.445-2.13 2.94v5.666h-3.5V9h3.36v1.561h.05c.47-.89 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.331z"/>
    </svg>

      {t("linkedin")}
      
      </a>
    </div>
  </div>

  <div class="hero-visual">
    <div class="avatar-ring">
      <div class="avatar-inner">
        <img src="https://avatars.githubusercontent.com/u/65935692?s=400&u=078b83152fc15ed2cad61d2322f0de117af5c557&v=4" alt='profile'/>
      </div>
      <div class="badge badge-1"><span class="badge-dot"></span> Angular</div>
      <div class="badge badge-2"><span class="badge-dot"></span> Spring Boot</div>
      <div class="badge badge-3"><span class="badge-dot"></span> Node.js</div>
    </div>
  </div>
</div>


{/* skills */}
<section id="skills">
  <div class="section-label">{t("sectionStack.sectionTitle")}</div>
  <h2 class="section-title">{t("sectionStack.title")}</h2>
  <div class="skills-grid">
    <div class="skill-card"><div class="skill-icon">🅰️</div><div class="skill-name">Angular</div><div class="skill-type">{t("sectionStack.frontend")}</div></div>
    <div class="skill-card"><div class="skill-icon">🟩</div><div class="skill-name">Node.js</div><div class="skill-type">{t("sectionStack.backend")}</div></div>
    <div class="skill-card"><div class="skill-icon">🍃</div><div class="skill-name">Spring Boot</div><div class="skill-type">{t("sectionStack.backend")}</div></div>
    <div class="skill-card"><div class="skill-icon">🎨</div><div class="skill-name">CSS / SCSS</div><div class="skill-type">{t("sectionStack.Styling")}</div></div>
    <div class="skill-card"><div class="skill-icon">🟨</div><div class="skill-name">JavaScript</div><div class="skill-type">JavaScript</div></div>
    <div class="skill-card"><div class="skill-icon">☕</div><div class="skill-name">Java</div><div class="skill-type">Java</ div></ div>
    <div class="skill-card"><div class="skill-icon">🐙</div><div class="skill-name">Git / GitHub</div><div class="skill-type">{t("sectionStack.tools")}</div></div>
    <div class="skill-card"><div class="skill-icon">📬</div><div class="skill-name">Postman</div><div class="skill-type">{t("sectionStack.testing")}</div></div>
    <div class="skill-card"><div class="skill-icon">🧱</div><div class="skill-name">Material UI</div><div class="skill-type">{t("sectionStack.designSystem")}</div></div>
  </div>
</section>

{/* experience */}
<section id="experience">
  <div class="section-label">{t("sectionExperience.sectionTitle")}</div>
  <h2 class="section-title">{t("sectionExperience.title")}</h2>

  <div class="timeline">


    <div class="timeline-item">
      <div class="timeline-period">Dec 2022 — {t("sectionExperience.Present")}</div>
      <div class="timeline-company">IBM Brasil · São Paulo, SP</div>
      <div class="timeline-role">{t("sectionExperience.Computer Operator — Mainframe Support")}</div>
      <div class="timeline-card">
        <ul>
          <li>{t("sectionExperience.computer-description-li")}</li>
          <li>{t("sectionExperience.computer-description-li2")}</li>
          <li>{t("sectionExperience.computer-description-li3")}</li>
          <li>{t("sectionExperience.computer-description-li4")}</li>
          <li>{t("sectionExperience.computer-description-li5")}</li>
          <li>{t("sectionExperience.computer-description-li6")}</li>
        </ul>
        <div class="tags">
          <span class="tag">Mainframe</span><span class="tag">JES2</span><span class="tag">DB2</span><span class="tag">CICS</span><span class="tag">JCL</span><span class="tag">ITIL</span><span class="tag">ServiceNow</span>
        </div>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-period">Jun 2022 — Dec 2022</div>
      <div class="timeline-company">IBM Brasil · São Paulo, SP</div>
      <div class="timeline-role">{t("sectionExperience.Front End Developer Intern")}</div>
      <div class="timeline-card">
        <ul>
          <li>{t("sectionExperience.intern-description-li")}</li>
          <li>{t("sectionExperience.intern-description-li2")}</li>
          <li>{t("sectionExperience.intern-description-li3")}</li>
          <li>{t("sectionExperience.intern-description-li4")}</li>
        </ul>
        <div class="tags">
          <span class="tag">Angular</span><span class="tag">CSS/SCSS</span><span class="tag">Angular Material</span><span class="tag">REST API</span><span class="tag">Git</span>
        </div>
      </div>
    </div>
 <div class="timeline-item">
      <div class="timeline-period">Feb 2022 — May 2022</div>
      <div class="timeline-company">BRAXXY Software &amp; Projetos · Barueri, SP</div>
      <div class="timeline-role">{t("sectionExperience.Full Stack Developer Jr")}</div>
      <div class="timeline-card">
        <ul>
          <li>{t("sectionExperience.fullstack-description-li")}</li>
          <li>{t("sectionExperience.fullstack-description-li2")}</li>
          <li>{t("sectionExperience.fullstack-description-li3")}</li>
        </ul>
        <div class="tags">
          <span class="tag">Angular</span><span class="tag">Vue.js</span><span class="tag">Spring Boot</span><span class="tag">Java</span><span class="tag">MongoDB</span><span class="tag">Postman</span>
        </div>
      </div>
    </div>

  </div>
</section>

{/* projects */}
<section id='projects'>
    <div className="section-label">{t("sectionProjects.sectionTitle")}</div>
    <h2 className='section-title'>{t("sectionProjects.title")}</h2>
</section>

<section id="about">
  <div class="section-label">{t("sectionAbout.sectionTitle")}</div>
  <h2 class="section-title">{t("sectionAbout.title")}</h2>
  <div class="about-grid">
    <div class="about-text">
      <p>{t("sectionAbout.description1")}</p>
     <br />
      <p>{t("sectionAbout.description2")}</p>
      <br />
      <p>{t("sectionAbout.description3")}</p>
    </div>
    <div>
     
      <div class="langs">
        <div class="lang-item">
          <div class="lang-label"><span>English</span><span style={{ color:"var(--rose-accent)"}} >{t("sectionAbout.englishLevel")}</span></div>
          <div class="lang-bar-bg"><div class="lang-bar" style={{ width: "70%" }}></div></div>
        </div>
      </div>
          
      
 <div class="education-item">
  <p>{t("sectionAbout.education")}</p>
  </div>

    <div class="edu-card">
        <div class="edu-icon">🎓</div>
        <div>
         
          <div class="edu-degree">Tecnólogo em Análise e Desenvolvimento de Sistemas</div>
          <div class="edu-school">Universidade Cruzeiro do Sul · São Paulo, SP</div>
        </div>
      </div>
    </div>
  </div>
</section>





<footer>
  <p>© 2026 Helen Souz ·  🩷 · São Paulo, Brasil</p>
</footer>


  </div>
 
);


}

export default Index

