import Navbar from "./Navbar";
import "./css/aboutLayout.css";
import ExperiencesSection from "./ExperiencesSection";
import ProjectsSection from "./ProjectsSection";
import DetailsSection from "./DetailsSection";
import TechStack from "./TechStack";

function AboutLayout() {

  return (
    <>
      <div className="about-container">
        <Navbar></Navbar>
       <DetailsSection></DetailsSection>
       <TechStack></TechStack>
        <div className="first-row">
          <h1
            className="title"
          >
             EXPERIENCES
          </h1>
          <ExperiencesSection></ExperiencesSection>
        </div>
        <ProjectsSection></ProjectsSection>    
      </div>
    </>
  );
}

export default AboutLayout;
