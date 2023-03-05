import styled from "styled-components";
import ProjectSection from "../components/ProjectSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, slider, sliderContainer } from "../animation";

//Rainbow Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%; 
  width: 100%;
  height: 100vh;
  background: #AFE1AF;
  z-index: 2; /*covers the whole screen*/ 
`;

const StyledProject = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const Project = () => {
  return (
    <>
    <StyledProject
    exit="exit"
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    >
     <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
      </motion.div> 
   <ProjectSection/>
   </StyledProject>
   </>
  );
}

export default Project;