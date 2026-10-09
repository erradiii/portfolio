import { experiences } from "../data/portfolio";

function Experience() {
  return (
    <section className="section section-alt" id="experience">

      <div className="container">

        <div className="section-header">
          <p className="section-label">
            Experience
          </p>

          <h2>
            Education & experience
          </h2>
        </div>

        <div className="timeline">

          {experiences.map((experience, index) => (
            <div
              className="timeline-item"
              key={`${experience.title}-${index}`}
            >

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="timeline-date">
                  {experience.date}
                </span>

                <h3>
                  {experience.title}
                </h3>

                <h4>
                  {experience.company}
                </h4>

                <p>
                  {experience.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;