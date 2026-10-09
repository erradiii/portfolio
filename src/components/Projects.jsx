import {
  ExternalLink,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";

import { projects } from "../data/portfolio";

function Projects() {
  return (
    <section className="section" id="projects">

      <div className="container">

        <div className="section-header">

          <p className="section-label">
            Projects
          </p>

          <h2>
            Selected projects
          </h2>

          <p>
            A few projects that represent my interests in software,
            cloud and infrastructure.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.title}
            >

              <div>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">

                  {project.technologies.map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                </div>

              </div>

              <div className="project-links">

                {project.github !== "#" && (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={18} />

                    Code
                  </a>

                )}

                {project.demo !== "#" && (

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={18} />

                    Live Demo
                  </a>

                )}

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;