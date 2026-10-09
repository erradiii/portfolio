import { personalInfo } from "../data/portfolio";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container footer-container">

        <p>
          © {currentYear} {personalInfo.name}
        </p>

        <p>
          Built with React & deployed on AWS
        </p>

      </div>

    </footer>
  );
}

export default Footer;