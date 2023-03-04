import { About, Description, Hide } from "../styles";
import { motion } from 'framer-motion';
import { titleAnim, fade} from "../animation";
import ProjectCard from "./ProjectCard";


const ProjectSection = ({}) => {
  return (
    <About>
    <Description>
    <motion.div>
        <Hide>
          <motion.h2 variants={titleAnim}>Projects</motion.h2>
        </Hide>
        <Hide>
        <motion.p variants={fade}>
          <br></br>
          <ProjectCard />
        </motion.p>        
      </Hide>
      </motion.div>
    </Description>
  </About>
  )
}

export default ProjectSection;