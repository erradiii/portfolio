import {
  ArrowRight,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { personalInfo } from "../data/portfolio";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-small">
            Hello, I'm
          </p>

          <h1>
            {personalInfo.name}
          </h1>

          <h2>
            {personalInfo.title}
          </h2>

          <p className="hero-specialization">
            {personalInfo.specialization}
          </p>

          <p className="hero-description">
            {personalInfo.description}
          </p>

          <div className="hero-status">
            <span className="status-dot"></span>
            {personalInfo.internship}
          </div>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="button primary-button"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/cv.pdf"
              className="button secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
              <Download size={18} />
            </a>

          </div>

          <div className="hero-socials">

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>

          </div>

        </div>

        <div className="hero-card">

          <div className="terminal">

            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-body">

              <p>
                <span className="terminal-symbol">$</span>{" "}
                whoami
              </p>

              <p className="terminal-result">
                Engineering Student at ENSA SAFI
              </p>

              <p>
                <span className="terminal-symbol">$</span>{" "}
                focus
              </p>

              <p className="terminal-result">
                DevOps + Cloud + Sortware
              </p>

              <p>
                <span className="terminal-symbol">$</span>{" "}
                status
              </p>

              <p className="terminal-success">
                Available for internship ✓
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;