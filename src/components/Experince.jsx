import "./css/experience.css";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Experience({ jobTitle, companyName, desc, date, techStack }) {
  const experienceControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".tech-stack");
      const elementTop = element.getBoundingClientRect().top;
      const offset = window.innerHeight * 0.8;

      if (elementTop < offset) {
        experienceControls.start({ opacity: 1, y: 0 });
      } else {
        experienceControls.start({ opacity: 0, y: 50 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ experienceControls]);

  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={experienceControls}
    transition={{ duration: 0.5 }}
      className="experience-section"
    >
      <h2>{date}</h2>
      <h2 className="company-name">{companyName}</h2>
      <h4>{jobTitle}</h4>
      <div className="icons-row">
        <h5>{techStack[0]}</h5>
        <h5>{techStack[1]}</h5>
        <h5>{techStack[2]}</h5>
        <h5>{techStack[3]}</h5>
        <h5>{techStack[4]}</h5>
        <h5>{techStack[5]}</h5>
      </div>
      <ul>
        <li>{desc[0]}</li>
        <li>{desc[1]}</li>
        <li>{desc[2]}</li>
      </ul>
    </motion.div>
  );
}

export default Experience;
