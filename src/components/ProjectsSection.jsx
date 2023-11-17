import "./css/projectsSection.css"
import currencyProjectSrc from "../assets/currencyProject.png";
import resumeSrc from "../assets/resumeSrc.png"

function ProjectsSection() {
    return (
        <div className="projects-section">
        <h1 className="title">MY PROJECTS</h1>
        <div className="cards">
           <div className="card converterCurrency">
            {/* <img src={currencyProjectSrc} alt="" />
            <button>Show more</button>
            <p className="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste non ratione omnis beatae temporibus! </p> */}
           </div>
           <div className="card resume">
            {/* <img src={resumeSrc} alt="" />
            <button>Show more</button>
            <p className="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste non ratione omnis beatae temporibus! </p> */}
           </div>
           <div className="card furnitureApp">
            
           </div>
        
        </div>
      </div>
    );
}

export default ProjectsSection;