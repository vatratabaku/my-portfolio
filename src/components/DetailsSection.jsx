import "../components/css/detailsSection.css";
import TechStack from "../components/TechStack";
// import lottie from "../assets/lottie.gif";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import animationImage from "../assets/animationImage.json";
import animation from "../assets/animation.json";
import hero from "../assets/hero.json";

function DetailsSection() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const h1Controls = useAnimation();
  const aboutContentControls = useAnimation();

  useEffect(() => {
    h1Controls.start({ opacity: 1, x: 0 });
    aboutContentControls.start({ opacity: 1, y: 0 });
  }, [h1Controls, aboutContentControls]);

  useEffect(() => {
    if (inView) {
      aboutContentControls.start({ opacity: 1, y: 0 });
    } else {
      aboutContentControls.start({ opacity: 0, y: 20 });
    }
  }, [inView, aboutContentControls]);

  return (
    <div className="details-container">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, x: -30 }}
        animate={h1Controls}
        transition={{ duration: 0.3 }}
      >
        ABOUT ME
      </motion.h1>
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={aboutContentControls}
          className="text-container"
        >
          <p>
            Hey! 👋 I'm Vatra Tabaku, a React.js developer passionate about
            building intuitive web applications. <br /> <br /> I bring a wealth
            of expertise in crafting engaging and seamless user experiences
            through a robust skill set that includes HTML, CSS, and JavaScript.
            My proficiency extends to the cutting-edge framework of React JS,
            where I have mastered advanced concepts such as hooks, context, and
            React Router to create dynamic and efficient Single Page
            Applications (SPA). <br /> <br /> I'm eager to contribute to dynamic
            projects and be part of a new team, I would love to extends my
            knowledge in programming, and for more advanced concepts
            experiences.
            <br /> <br /> Projects: Counter App, Resume Builder App, Currency
            Converter App, Alea Furniture, Blog Posts, Weather App, Cosmetic
            Website etc.
          </p>
        </motion.div>

        <div style={{width: "580px", height:"450px", padding: "10px", paddingRight: "15px"}}>
          <Lottie width={500} height={500} animationData={hero} />
        </div>
      </div>
    </div>
  );
}

export default DetailsSection;
