import styled from "styled-components";
import HomeSection from "../components/HomeSection";
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
  background: #fffebf;
  z-index: 2; /*covers the whole screen*/ 
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
const Frame5 = styled(Frame1)`
background: #e5c9f8;
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