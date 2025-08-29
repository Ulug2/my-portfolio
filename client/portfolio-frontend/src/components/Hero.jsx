import "./style/Hero.css";
import myEbalo from './assets/myEbalo.png'
import { DiJavascript1, DiReact, DiPython, DiCss3, DiHtml5, DiMongodb, DiNodejs, DiDatabase, DiJava } from 'react-icons/di';
import { SiTypescript, SiExpress, SiFirebase, SiNumpy, SiPandas, SiGit, SiGithub } from 'react-icons/si';
import Projects from "./Projects"
import Education from "./Education"
import Experience from "./Experience"

function Hero() {
  return (
    <div className="hero">
      <nav className="nav-bar">
        <h3><span className="my-name">ULYKBEK</span>KHAIRULLA</h3>
        <div className="nav-links">
          <button>About</button>
          <button>Skills</button>
          <button>Projects</button>
          <button>Education</button>
          <button>Experience</button>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ulugbekkh/" target="_blank" rel="noopener noreferrer">
            <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="https://github.com/Ulug2" target="_blank" rel="noopener noreferrer">
            <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Github
          </a>
          <a className="email-btn" href="mailto:khaiul01@gettysburg.edu">
            <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.58l9.615-6.759h.749c.904 0 1.636.732 1.636 1.636z"/>
            </svg>
            Contact me
          </a>
        </div>
      </nav>
      <div className="main-page">
        <div className="hero-content">
          <div className="hero-text-content">
            <h3>Hello, I am</h3>
            <h1>{"< Ulykbek"}</h1>
            <h1>{"Khairulla />"}</h1>
            <h2>Fullstack Developer</h2>
            <p>YEARS OF<br/>EXPERIENCE</p>
            <p>PROJECTS COMPLETED<br/>AROUND THE WORLD</p>
          </div>
          <img src={myEbalo} className="my-ebalo" alt="Profile"/>
        </div>

        <div className="about-content">
          <div>
            <h2>aboutMe()</h2>
            <p>
              I'm a Computer Science student at Gettysburg College, excited about
              turning ideas into real-world tech solutions. I'm on the lookout for a
              Software Engineering internship where I can grow, collaborate with
              passionate people, and dive into challenging projects. I'm driven by a
              love for problem-solving, learning new tools, and making an impact
              through technology.
            </p>
          </div>
          <div>
            <div className="card">
              <div className="card-content">
                <h3>Fullstack Developer</h3>
                <div className="card-link">Projects</div>
              </div>
              <div className="card-icon">{"</>"}</div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>Freelancer</h3>
                <div className="card-link">Hire me!</div>
              </div>
              <div className="card-icon">{"{ }"}</div>
            </div>
          </div>
        </div>
        <div className="skills-content">
          <h2>skills()</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <DiJava/>
              <h4>Java</h4>
            </div>
            <div className="skill-item">
              <DiJavascript1/>
              <h4>JavaScript</h4>
            </div>
            <div className="skill-item">
              <SiTypescript/>
              <h4>TypeScript</h4>
            </div>
            <div className="skill-item">
              <DiHtml5/>
              <h4>HTML5</h4>
            </div>
            <div className="skill-item">
              <DiCss3/>
              <h4>CSS3</h4>
            </div>
            <div className="skill-item">
              <DiReact/>
              <h4>React</h4>
            </div>
            <div className="skill-item">
              <SiExpress/>
              <h4>Express.js</h4>
            </div>
            <div className="skill-item">
              <DiNodejs/>
              <h4>Node.js</h4>
            </div>
            <div className="skill-item">
              <DiPython/>
              <h4>Python</h4>
            </div>
            <div className="skill-item">
              <SiNumpy/>
              <h4>NumPy</h4>
            </div>
            <div className="skill-item">
              <SiPandas/>
              <h4>Pandas</h4>
            </div>
            <div className="skill-item">
              <DiMongodb/>
              <h4>MongoDB</h4>
            </div>
            <div className="skill-item">
              <SiFirebase/>
              <h4>Firebase</h4>
            </div>
            <div className="skill-item">
              <DiDatabase/>
              <h4>Database</h4>
            </div>
            <div className="skill-item">
              <SiGit/>
              <h4>Git</h4>
            </div>
            <div className="skill-item">
              <SiGithub/>
              <h4>GitHub</h4>
            </div>
          </div>
        </div>
        <Projects/>
        <Education/>
        <Experience/>
      </div>
      
    </div>
  );
}

export default Hero;