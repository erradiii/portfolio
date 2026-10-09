import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { personalInfo } from "../data/portfolio";

function Contact() {
  return (
    <section
      className="section contact-section"
      id="contact"
    >

      <div className="container">

        <div className="contact-box">

          <p className="section-label">
            Contact
          </p>

          <h2>
            Let's work together.
          </h2>

          <p>
            I'm currently looking for internship opportunities in
            DevOps, Cloud, networking and software engineering.
          </p>

          <div className="contact-links">

            <a href={`mailto:${personalInfo.email}`}>
              <Mail size={20} />

              {personalInfo.email}
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={20} />

              LinkedIn

              <ArrowUpRight size={16} />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} />

              GitHub

              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;