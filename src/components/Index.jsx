import React from 'react';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';


function Index() {
 const [darkMode, setDarkMode] = useState(false);

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
        <li> <button className='button-darkmode' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
    </nav>

<div class="hero">
  <div class="hero-text">
    <div class="hero-eyebrow">✦ Available for Jr Developer roles | SP 📍 </div>
    <h1 className="hero-name">
  Helen<br />
  Souz<span className="accent">.</span>
</h1>
    <p class="hero-role">Full Stack Developer with hands-on experience in <strong>Angular, Node.js, Spring Boot</strong> and modern web technologies — passionate about building elegant, scalable applications.</p>
    <div class="hero-cta">
      
            <a 
            
        href="https://github.com/helensouz" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-primary"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        Meu GitHub
      </a>
        
     
      <a href="#experience" class="btn-ghost">View Experience ↓</a>
    </div>
  </div>

  <div class="hero-visual">
    <div class="avatar-ring">
      <div class="avatar-inner">
        <img src='https://avatars.githubusercontent.com/u/65935692?s=400&u=078b83152fc15ed2cad61d2322f0de117af5c557&v=4'></img>
      </div>
      <div class="badge badge-1"><span class="badge-dot"></span> Angular</div>
      <div class="badge badge-2"><span class="badge-dot"></span> Spring Boot</div>
      <div class="badge badge-3"><span class="badge-dot"></span> Node.js</div>
    </div>
  </div>
</div>


{/* skills */}
<section id="skills">
  <div class="section-label">Tech Stack</div>
  <h2 class="section-title">Skills &amp; Technologies</h2>
  <div class="skills-grid">
    <div class="skill-card"><div class="skill-icon">🅰️</div><div class="skill-name">Angular</div><div class="skill-type">Frontend</div></div>
    <div class="skill-card"><div class="skill-icon">🟩</div><div class="skill-name">Node.js</div><div class="skill-type">Backend</div></div>
    <div class="skill-card"><div class="skill-icon">🍃</div><div class="skill-name">Spring Boot</div><div class="skill-type">Backend</div></div>
    <div class="skill-card"><div class="skill-icon">🎨</div><div class="skill-name">CSS / SCSS</div><div class="skill-type">Styling</div></div>
    <div class="skill-card"><div class="skill-icon">🟨</div><div class="skill-name">JavaScript</div><div class="skill-type">Language</div></div>
    <div class="skill-card"><div class="skill-icon">☕</div><div class="skill-name">Java</div><div class="skill-type">Language</div></div>
    <div class="skill-card"><div class="skill-icon">🟢</div><div class="skill-name">Vue.js</div><div class="skill-type">Frontend</div></div>
    <div class="skill-card"><div class="skill-icon">🍃</div><div class="skill-name">MongoDB</div><div class="skill-type">Database</div></div>
    <div class="skill-card"><div class="skill-icon">🔗</div><div class="skill-name">REST APIs</div><div class="skill-type">Integration</div></div>
    <div class="skill-card"><div class="skill-icon">🐙</div><div class="skill-name">Git / GitHub</div><div class="skill-type">Versioning</div></div>
    <div class="skill-card"><div class="skill-icon">📬</div><div class="skill-name">Postman</div><div class="skill-type">Testing</div></div>
    <div class="skill-card"><div class="skill-icon">🧱</div><div class="skill-name">Material UI</div><div class="skill-type">Design System</div></div>
  </div>
</section>

{/* experience */}
<section id="experience">
  <div class="section-label">Career</div>
  <h2 class="section-title">Experience</h2>

  <div class="timeline">


    <div class="timeline-item">
      <div class="timeline-period">Dec 2022 — Present</div>
      <div class="timeline-company">IBM Brasil · São Paulo, SP</div>
      <div class="timeline-role">Computer Operator — Mainframe Support</div>
      <div class="timeline-card">
        <ul>
          <li>Real-time monitoring of critical subsystems: JES2, VTAM, TCP/IP, DB2, and CICS — including console message verification and return code/ABEND analysis.</li>
          <li>Operational failure recovery: log and dump evidence collection, escalation to second-level teams, and direct technical support.</li>
          <li>Computational resource management: print queue control, dataset allocation, job submission and reprocessing.</li>
          <li>Support in maintenance windows, IPL, updates and planned changes following ITIL procedures.</li>
          <li>Hands-on with TSO/ISPF, SDSF, JCL, z/OSMF, System Z, and IBM i (AS/400) environments.</li>
          <li>Monitoring tools: Jira, OCM, ServiceNow, operational dashboards, and proprietary consoles.</li>
        </ul>
        <div class="tags">
          <span class="tag">Mainframe</span><span class="tag">JES2</span><span class="tag">DB2</span><span class="tag">CICS</span><span class="tag">JCL</span><span class="tag">ITIL</span><span class="tag">ServiceNow</span>
        </div>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-period">Jun 2022 — Dec 2022</div>
      <div class="timeline-company">IBM Brasil · São Paulo, SP</div>
      <div class="timeline-role">Front End Developer Intern</div>
      <div class="timeline-card">
        <ul>
          <li>Created reusable, modular Angular components ensuring maintainability, scalability, and code standardization.</li>
          <li>Applied custom styles with CSS and SCSS using Angular Material, delivering modern, accessible, and responsive UIs.</li>
          <li>Frontend-backend integration using REST APIs, observables, and Angular services for state management and dynamic UI updates.</li>
          <li>Applied best practices in architecture, Git versioning, endpoint consumption, payload standardization, and basic interface testing.</li>
        </ul>
        <div class="tags">
          <span class="tag">Angular</span><span class="tag">CSS/SCSS</span><span class="tag">Angular Material</span><span class="tag">REST API</span><span class="tag">Git</span>
        </div>
      </div>
    </div>
 <div class="timeline-item">
      <div class="timeline-period">Feb 2022 — May 2022</div>
      <div class="timeline-company">BRAXXY Software &amp; Projetos · Barueri, SP</div>
      <div class="timeline-role">Full Stack Developer Jr</div>
      <div class="timeline-card">
        <ul>
          <li>Developed features using Angular and Vue.js on the frontend, integrated with Java and Spring Boot services on the backend, with MongoDB for data storage.</li>
          <li>Consumed internal APIs and ensured efficient, scalable data integration using Postman for HTTP request testing and validation.</li>
          <li>Built dynamic interfaces with reusable components, styled with CSS, SCSS and Angular Material — delivering modern, responsive, and intuitive experiences.</li>
        </ul>
        <div class="tags">
          <span class="tag">Angular</span><span class="tag">Vue.js</span><span class="tag">Spring Boot</span><span class="tag">Java</span><span class="tag">MongoDB</span><span class="tag">Postman</span>
        </div>
      </div>
    </div>

  </div>
</section>


<section id="about">
  <div class="section-label">About Me</div>
  <h2 class="section-title">Who I am</h2>
  <div class="about-grid">
    <div class="about-text">
      <p>I'm a <strong>Full Stack Developer</strong> based in São Paulo, currently working as a Computer Operator at IBM Brasil while actively seeking my next opportunity as a <strong>Junior Developer</strong>.</p>
     <br />
      <p>With experience spanning <strong>Angular, Vue.js, Node.js, Spring Boot, Java, and MongoDB</strong>, I bring both frontend creativity and backend structure to the products I build. I'm passionate about clean code, great UX, and continuous learning.</p>
      <br />
      <p>My background in enterprise environments (IBM) has given me strong discipline around processes, documentation, and collaboration — skills I bring directly into development work.</p>
    </div>
    <div>
      <p 
      style={{
        fontSize:"0.85rem", 
        fontWeight:"600", 
        MarginBottom:"1.2rem",
         color:"var(--text)"  }}>Languages</p>
      <div class="langs">
        <div class="lang-item">
          <div class="lang-label"><span>Portuguese</span><span style={{ color: "var(--rose-accent)" }}> Native </span></div>
          <div class="lang-bar-bg"><div class="lang-bar" style={{ Width:"100%" }}></div></div>
        </div>
        <div class="lang-item">
          <div class="lang-label"><span>English</span><span style={{ color:"var(--rose-accent)"}} >Conversation and written</span></div>
          <div class="lang-bar-bg"><div class="lang-bar" style={{ width: "70%" }}></div></div>
        </div>
      </div>
 
<p
  style={{
    fontSize: "0.85rem",
    fontWeight: 600,
    marginTop: "2rem",
    marginBottom: "1.2rem",
    color: "var(--text)"
  }}
>
  Education
</p>      <div class="edu-card">
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

