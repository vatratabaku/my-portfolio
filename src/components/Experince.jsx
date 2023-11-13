import "./css/experience.css";
import {motion} from 'framer-motion';

function Experience({jobTitle, companyName, desc, date}) {
    return (
        <motion.div initial={{y:0, opacity:0,}} animate={{y:20, opacity: 1}} className="experience-section">
            <h2>{date}</h2>
            <h2 className="company-name">{companyName}</h2>
            <h4>{jobTitle}</h4>
            <h6>{desc}</h6>
        </motion.div>
    );
}

export default Experience;