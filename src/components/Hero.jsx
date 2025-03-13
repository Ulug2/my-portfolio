import { Link } from "react-router-dom";
import "./style/Hero.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Hero() {
return (
    <section className="hero">
        <div className="hero-content">
            <img src='./public/avatar.jpg' alt="Profile" className="profile-img" />
            <h2>Ulykbek Khairulla</h2>
            <h2>(he/him)</h2>
            <p>Software Engineer</p>
            <button className="email-btn" onClick={() => window.location.href = 'mailto:khaiul01@gettysburg.edu'}>Email me</button>
            <div className="social-icons">
                <a href="https://www.instagram.com/ulugbek.khairulla?igsh=MXN6ZzV1Z2ZvbjFtOA=="><i className="fab fa-instagram"></i></a>
                <a href="https://wa.me/15712835551"><i className="fab fa-whatsapp"></i></a>
                <a href="https://github.com/Ulug2"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/ulugbekkh/"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>

        <div className="about-content">
            <h2>About Me</h2>
            <p>
                I'm a Computer Science student at Gettysburg College,
                excited about turning ideas into real-world tech solutions.
                I'm on the lookout for a Software Engineering internship where I can grow,
                collaborate with passionate people, and dive into challenging projects. 
                I’m driven by a love for problem-solving, learning new tools, and making an impact through technology.
            </p>
            <div className="buttons">
                <Link to="/projects" className="btn">My Projects</Link>
                <Link to="/experience" className="btn">My Experience</Link>
                <Link to="/education" className="btn">My Education</Link>
            </div>
        </div>
    </section>
);
}

export default Hero;