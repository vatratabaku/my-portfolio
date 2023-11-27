import "./css/projectsSection.css";
import currencyProjectSrc from "../assets/currencyProject.png";
import resumeSrc from "../assets/resumeSrc.png";
import library from "../assets/library.png";

function ProjectsSection() {
  return (
    <div className="projects-section">
      <h1 className="title">PROJECTS</h1>
      <div className="projects-cards">
        <div className="card">
          <div className="image">
            <img src={resumeSrc} alt="" />
          </div>

          <div className="textbox">
            <h2>Resume Builder App</h2>
            <div className="icons-row">
              <h5>REACT JS</h5>
            </div>
            <p>
              A real-time coaching app for students learning to paint. This app
              is my baby, designed and built on my own.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={currencyProjectSrc} alt="" />
          </div>
          <div className="textbox">
            <h2>Currency Converter App</h2>
            <div className="icons-row">
              <h5>REACT JS</h5>
              <h5>TAILWIND CSS</h5>
            </div>
            <p>
              A real-time coaching app for students learning to paint. This app
              is my baby, designed and built on my own.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProjectsSection;
