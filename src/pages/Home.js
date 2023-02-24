import HomeSection from "../components/HomeSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Home = () => {
  return (
    <motion.div 
      exit="exit" 
      variants={pageAnimation} 
      initial="hidden" 
      animate="show">
   <HomeSection/>
    </motion.div>
  );
}

export default Home;