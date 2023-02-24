import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutMe = () => {
  return (
    <motion.div 
      exit="exit" 
      variants={pageAnimation} 
      initial="hidden" 
      animate="show">
   <AboutSection/>
    </motion.div>
  );
}

export default AboutMe;