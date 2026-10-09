import { skills } from "../data/portfolio";

function Skills() {
  return (
    <section className="section section-alt" id="skills">

      <div className="container">

        <div className="section-header">
          <p className="section-label">Skills</p>

          <h2>
            Technologies I work with
          </h2>
        </div>

        <div className="skills-grid">

          {skills.map((skillGroup) => (
            <div className="skill-card" key={skillGroup.title}>

              <h3>{skillGroup.title}</h3>

              <div className="skill-list">

                {skillGroup.items.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;