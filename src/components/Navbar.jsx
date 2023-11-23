import { NavLink, Link } from "react-router-dom";
import "./css/Navbar.css";
import { useState } from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    console.log(isActive);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: "2%", opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <ul>
        <li>
          <img src={logo} alt="" />
        </li>
        <li>
          <Link className="active-links" onClick={handleClick} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="active-links" to="/about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li>
          <Link
            className={isActive ? "active-links" : "links"}
            to="/about"
            onClick={handleClick}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={isActive ? "active-links" : "links"}
            to="/contact"
            onClick={handleClick}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div
          style={{
            width: "180px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            transform: "rotate(90deg)",
            height: "210px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/vatra-tabaku-a7366525b/"
       
            onClick={handleClick}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://github.com/vatratabaku"
          
            onClick={handleClick}
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </div>
    </motion.nav>
  );
}

export default Navbar;
