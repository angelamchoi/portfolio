import styled from "styled-components";
import HomeSection from "../components/HomeSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, slider, sliderContainer } from "../animation";

//Color Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%; 
  width: 100%;
  height: 100vh;
  background: #66CDAA;
  z-index: 2; /*covers the whole screen*/ 
`;
const Frame2 = styled(Frame1)`
  background: #8cc751;
`;
const Frame3 = styled(Frame1)`
  background: #006A4E;
`;
const Frame4 = styled(Frame1)`
  background: #18453B;
`;
const Frame5 = styled(Frame1)`
background: #043927;
`;

const StyledHome = styled(motion.div)`
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
    <StyledHome
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        <Frame5 variants={slider}></Frame5>
      </motion.div>
      <HomeSection/>
    </StyledHome>
  );
}

export default Home;