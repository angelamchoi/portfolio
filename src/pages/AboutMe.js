import styled from "styled-components";
import { pageAnimation } from "../animation";
import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";

//Color Animation

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
      <AboutSection/>
    </StyledAboutMe>
  );
}

export default Home;