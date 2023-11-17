import Navbar from "./Navbar";
import "./css/aboutLayout.css";
import { motion } from "framer-motion";
import ExperiencesSection from "./ExperiencesSection";
import ProjectsSection from "./ProjectsSection";

function AboutLayout() {
  return (
    <>
      <div className="about-container">
        <Navbar></Navbar>
        <div className="first-row">
          <motion.h1
            initial={{ y: 250, opacity: 0, scaleX: 0 }}
            animate={{ y: 0, opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="title"
          >
            MY EXPERIENCES
          </motion.h1>
          <ExperiencesSection></ExperiencesSection>
        </div>
        <ProjectsSection></ProjectsSection>
      </div>
    </>
  );
}

export default AboutLayout;
