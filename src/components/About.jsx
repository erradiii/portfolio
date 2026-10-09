import { Cloud, Code2, Network } from "lucide-react";

function About() {
  return (
    <section className="section" id="about">

      <div className="container">

        <div className="section-header">
          <p className="section-label">About</p>

          <h2>
            A little about me
          </h2>
        </div>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I am an engineering student passionate about technology,
              particularly cloud infrastructure, DevOps, networking and
              software development.
            </p>

            <p>
              My projects allow me to combine software development with
              infrastructure concepts such as containers, CI/CD pipelines,
              Linux systems and cloud deployment.
            </p>

            <p>
              I am currently looking for an internship where I can contribute
              to real engineering projects while continuing to develop my
              technical and professional skills.
            </p>

          </div>

          <div className="about-cards">

            <div className="mini-card">
              <Cloud size={28} />

              <div>
                <h3>Cloud</h3>
                <p>AWS infrastructure and deployment</p>
              </div>
            </div>

            <div className="mini-card">
              <Code2 size={28} />

              <div>
                <h3>Software</h3>
                <p>Backend and web applications</p>
              </div>
            </div>

            <div className="mini-card">
              <Network size={28} />

              <div>
                <h3>Networking</h3>
                <p>Network and telecom technologies</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;