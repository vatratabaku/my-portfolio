import Navbar from "./Navbar";
import "./css/aboutLayout.css";
import { motion } from "framer-motion";
import ExperiencesSection from "./ExperiencesSection";
import ProjectsSection from "./ProjectsSection";
import DetailsSection from "./DetailsSection";

function AboutLayout() {
  return (
    <>
      <div className="about-container">
        <Navbar></Navbar>
       <DetailsSection></DetailsSection>
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
