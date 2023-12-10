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
          <motion.h1
            initial={{ y: 250, opacity: 0, scaleX: 0 }}
            animate={{ y: 0, opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="title"
          >
             EXPERIENCES
          </motion.h1>
          <ExperiencesSection></ExperiencesSection>
        </div>
        <ProjectsSection></ProjectsSection>

    
      </div>
    </>
  );
}

export default AboutLayout;
