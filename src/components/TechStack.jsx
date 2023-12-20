import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faSass,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import "../components/css/techStack.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function TechStack() {
  const h1Controls = useAnimation();
  const iconsControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".tech-stack");
      const elementTop = element.getBoundingClientRect().top;
      const offset = window.innerHeight * 0.8;

      if (elementTop < offset) {
        h1Controls.start({ opacity: 1, x: 0 });
        iconsControls.start({ opacity: 1, y: 0 });
      } else {
        h1Controls.start({ opacity: 0, x: -50 });
        iconsControls.start({ opacity: 0, y: 30 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [h1Controls, iconsControls]);

  return (
    <div className="tech-stack">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={h1Controls}
        transition={{ duration: 0.3 }}
      >
        TECH STACK
      </motion.h1>
      <motion.div
        initial={{opacity: 0, y: 30 }}
        animate={iconsControls}
        transition={{ duration: 0.4, delay: 0.3}}
        className="icons"
      >
        <FontAwesomeIcon className="icon" icon={faHtml5} />
        <FontAwesomeIcon className="icon" icon={faCss3Alt} />
        <FontAwesomeIcon className="icon" icon={faJs} />
        <FontAwesomeIcon className="icon" icon={faReact} />
        <FontAwesomeIcon className="icon" icon={faSass} />
        <FontAwesomeIcon className="icon" icon={faBootstrap} />
      </motion.div>
    </div>
  );
}

export default TechStack;
