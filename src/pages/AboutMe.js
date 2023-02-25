import styled from "styled-components";
import { pageAnimation, slider, sliderContainer } from "../animation";
import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";

//Color Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%; 
  width: 100%;
  height: 100vh;
  background: #00FFFF;
  z-index: 2; /*covers the whole screen*/ 
`;
const Frame2 = styled(Frame1)`
  background: #1E90FF;
`;
const Frame3 = styled(Frame1)`
  background: #0066b2;
`;
const Frame4 = styled(Frame1)`
  background: #72A0C1;
`;
const Frame5 = styled(Frame1)`
background: #002D62;
`;

const StyledAboutMe = styled(motion.div)`
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

const Home = () => {
  return (
    <StyledAboutMe
      exit="exit" 
      variants={pageAnimation} 
      initial="hidden" 
      animate="show">
        <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        <Frame5 variants={slider}></Frame5>
      </motion.div>
   <AboutSection/>
    </StyledAboutMe>
  );
}

export default Home;