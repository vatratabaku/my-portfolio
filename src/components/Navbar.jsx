import { NavLink, Link } from "react-router-dom";
import "./css/Navbar.css";
import { useState } from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
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
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-link" : "link"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-link" : "link"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-link" : "link"
            }
            to="/project"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-link" : "link"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div
        style={{
          width: "130px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          transform: "rotate(90deg)",
          height: "190px",
        }}
      >
        <a
          href="https://www.linkedin.com/in/vatra-tabaku-a7366525b/"
          target="_blank"
          className="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a
          href="https://github.com/vatratabaku"
          target="_blank"
          className="github"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
