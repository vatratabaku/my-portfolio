import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.png";
import "./css/Navbar.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: "2%", opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.3 }}
    >
      <ul>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.9 }}
        >
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-link" : "link"
            }
            to="/"
          >
            Home
          </NavLink>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-link" : "link"
            }
            to="/about"
          >
            About
          </NavLink>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1, delay: 0.6 }}
        >
          <HashLink
            smooth
            to="/about/#projectsSection"
            activeClassName="active-link"
            inactiveClassName="link"
          >
            Projects
          </HashLink>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.12, delay: 0.6 }}
        >
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active-link" : "link"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </motion.li>
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
        <motion.a
          href="https://www.linkedin.com/in/vatra-tabaku-a7366525b/"
          target="_blank"
          className="linkedin"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.14, delay: 0.6 }}
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </motion.a>
        <motion.a
          href="https://github.com/vatratabaku"
          target="_blank"
          className="github"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
