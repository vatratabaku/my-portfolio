import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


function Container({ href }) { 
  let text = "VATRA TABAKU  ";
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);


    setTimeout(() => {
      window.open(href, "_blank");
    }, 1000);
  };

 

  useEffect(() => {
    const typingAnimation = () => {
      if (currentIndex < text.length) {
        setTypedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setTypedText(''); // Reset the text to start typing again
        setCurrentIndex(0);
      }
    };

    const animationInterval = setInterval(typingAnimation, 280); // Adjust the typing speed (milliseconds per character) here

    return () => clearInterval(animationInterval);
  }, [currentIndex]);

  return (
    <div className="wraper">
      <div className="content">
        <motion.h1
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          data-text="VATRA TABAKU"
        >
        {typedText}
        </motion.h1>
        <motion.h4
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
         Frontend developer
        </motion.h4>
        <motion.h5
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
      I'm a Frontend Developer who loves creating great user experiences and interfaces. I work with HTML, CSS, JavaScript, and React JS. I'm skilled in using advanced tools like React Hooks, Context for handling props and managing complex states, the React Router Library for building dynamic Single Page Applications (SPA). Also I have experience with some other tools like tailwind css, sass, bootstrap, and basic concepts of typescript.

        </motion.h5>
        <motion.button
          className="button"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            ></path>
          </svg>

          <div className="text">Show More</div>
        </motion.button>
      </div>

    </div>
  );
}

export default Container;
