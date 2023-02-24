import styled from "styled-components";
import ProjectSection from "../components/ProjectSection";
// Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const StyledProject = styled(motion.div)`
min-height:100vh;
overflow:hidden;
padding:5rem 10rem;`

const Project = () => {
  return (
    <StyledProject>
      <ProjectSection/>
    </StyledProject>
  );
}

export default Project;