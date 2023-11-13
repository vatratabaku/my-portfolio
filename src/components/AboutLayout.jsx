import Navbar from "./Navbar";
import Experience from "./Experince";
import "./css/aboutLayout.css";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 0,
    jobTitle: "Programming Instructor",
    companyName: "jCoders Academy",
    desc: "Enhanced coding skills while teaching multiple programming languages and improved communication abilities to help students understand complex concepts.",
    date: "May 2023 - Present",
  },
  {
    id: 1,
    jobTitle: "Assistant Trainer",
    companyName: "jCoders Academy",
    desc: "Enhanced coding skills while teaching multiple programming languages and improved communication abilities to help students understand complex concepts.",
    date: "Nov 2022 - Present",
  },
  {
    id: 3,
    jobTitle: "Intern/Frontend Developer",
    companyName: "System Alfa Tech - Pejë",
    desc: "Enhanced coding skills while teaching multiple programming languages and improved communication abilities to help students understand complex concepts.",
    date: "Dec 2021 - Jul 2022",
  },
];

function AboutLayout() {
  return (
    <div>
      <div className="about-container">
        <Navbar></Navbar>
        <div className="first-row">
          <motion.h1
            initial={{ y: 250, opacity: 0, scaleX: 0, fontSize: "40px" }}
            animate={{ y: 0, opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="title"
          >
            MY EXPERIENCES
          </motion.h1>

          <div className="experiences">
            {experiences.map((experience) => {
              return (
                <Experience
                  key={experience.id}
                  desc={experience.desc}
                  date={experience.date}
                  jobTitle={experience.jobTitle}
                  companyName={experience.companyName}
                ></Experience>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        Vatra
      </div>
    </div>
  );
}

export default AboutLayout;
