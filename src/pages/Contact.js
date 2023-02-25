import ContactSection from "../components/ContactSection";
import styled from "styled-components";
import { pageAnimation, slider, sliderContainer } from "../animation";
import { motion } from "framer-motion";

const StyledContact = styled(motion.div)`
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

const Contact = () => {
  return (
    <StyledContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
>
      <ContactSection/>
    </StyledContact>
  );
}



export default Contact;