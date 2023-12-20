import "./css/projectsSection.css";
import { motion } from "framer-motion";
import currencySrc from "../assets/currencyConverterSrc.png";
import resumeSrc from "../assets/resumeSrc.png";
import furnitureSrc from "../assets/furnitureSrc.png";
import blogPostSrc from "../assets/blogPostSrc.png";
import counterSrc from "../assets/counterSrc.png";
import searchSortSrc from "../assets/Search&Sort.png";
import weatherSrc from "../assets/weatherSrc.png";
import cosmeticSrc from "../assets/cosmeticSrc.png";


function ProjectsSection() {
 


  return (
    <div className="projects-section" id="projectsSection">
      <h1 className="title">PROJECTS</h1>
      <div className="projects-cards">
        <div className="card">
          <div className="image">
            <img src={resumeSrc} alt="" />
          </div>

          <div className="textbox">
            <h2>Resume Builder App</h2>
            <div className="icons-row">
              <h5>REACT JS</h5>
            </div>
            <p>
              A real-time coaching app for students learning to paint. This app
              is my baby, designed and built on my own.
              <a className="demo-link" href="https://vatratabaku.github.io/Search-and-Sort-App/">    View Demo »</a>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={currencySrc} alt="" />
          </div>
          <div className="textbox">
            <h2>Currency Converter App</h2>
            <div className="icons-row">
              <h5>REACT JS</h5>
              <h5>TAILWIND CSS</h5>
            </div>
            <p>
              A real-time coaching app for students learning to paint. This app
              is my baby, designed and built on my own.
              <a className="demo-link" href="https://vatratabaku.github.io/Search-and-Sort-App/">    View Demo »</a>
            </p>
          </div>
        </div>
      </div>
      <div className="projects-cards">
        <div className="card">
          <div className="image">
            <img src={furnitureSrc} alt="" />
          </div>

          <div className="textbox">
            <h2> ALEA Furniture</h2>
            <div className="icons-row">
              <h5>HTML</h5>
              <h5>CSS</h5>
            </div>
            <p>
              A real-time coaching app for students learning to paint. This app
              is my baby, designed and built on my own.
              <a className="demo-link" href="https://vatratabaku.github.io/Search-and-Sort-App/">    View Demo »</a>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={blogPostSrc} alt="" />
          </div>
          <div className="textbox">
            <h2>Blog Posts App</h2>
            <div className="icons-row">
              <h5>HTML</h5>
              <h5>CSS</h5>
              <h5>JAVASCRIPT</h5>
            </div>
            <p>
              A real-time coaching app for students learning to paint. This app
              is my baby, designed and built on my own.
              <a className="demo-link" href="https://vatratabaku.github.io/Blog-Posts/">    View Demo »</a>
            </p>
          </div>
        </div>
      </div>
      <div className="projects-cards">
        <div className="card">
          <div className="image">
            <img src={counterSrc} alt="" />
          </div>

          <div className="textbox">
            <h2>Counter App</h2>
            <div className="icons-row">
              <h5>REACT JS</h5>
            </div>
            <p>
              A real-time coaching app for students learning to paint. This app
              is my baby, designed and built on my own.
              <a className="demo-link" href="https://vatratabaku.github.io/Search-and-Sort-App/">    View Demo »</a>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={searchSortSrc} alt="" />
          </div>
          <div className="textbox">
            <h2>Search and Sort App</h2>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="icons-row"
            >
              <h5>HTML</h5>
              <h5> CSS</h5>
              <h5>JAVASCRIPT</h5>
            </motion.div>
            <p>
              A real-time coaching app for students learning to paint. This app
              is my baby, designed and built on my own. 
              <a className="demo-link" href="https://vatratabaku.github.io/Search-and-Sort-App/">    View Demo »</a>
            </p>
          </div>
        </div>
        
      </div>
      <div className="projects-cards">
        <div className="card">
          <div className="image">
            <img src={weatherSrc} alt="" />
          </div>

          <div className="textbox">
            <h2> Weather Application </h2>
            <div className="icons-row">
              <h5>HTML</h5>
              <h5>CSS</h5>
            </div>
            <p>
              A real-time coaching app for students learning to paint. This app
              is my baby, designed and built on my own.
              <a className="demo-link" href="https://vatratabaku.github.io/Search-and-Sort-App/">    View Demo »</a>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={cosmeticSrc} alt="" />
          </div>
          <div className="textbox">
            <h2>Blog Posts App</h2>
            <div className="icons-row">
              <h5>HTML</h5>
              <h5>CSS</h5>
              <h5>JAVASCRIPT</h5>
            </div>
            <p>
              A real-time coaching app for students learning to paint. This app
              is my baby, designed and built on my own.
              <a className="demo-link" href="https://trusting-dijkstra-99b921.netlify.app/">    View Demo »</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
