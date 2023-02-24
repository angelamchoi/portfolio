// Pages
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
// Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';


const AboutMe = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animation="show">
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
    </motion.div>
  );
}

export default AboutMe;