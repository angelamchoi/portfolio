import { motion } from 'framer-motion';
import { About, Description, Hide } from "../styles";
import { titleAnim, fade} from "../animation";

const AboutSection = () => {
  return (
    <About>
    <Description>
    <motion.div>
        <Hide>
          <motion.h2 variants={titleAnim}>About Me</motion.h2>
        </Hide>
        <Hide>
        <motion.p variants={fade}>
          I primarily program in React and Ruby on Rails. Previously, I was a math teacher in New York City. I enjoy the process of creating and building. My interests in software development are accessibility and cybersecurity. I love to use my coding skills to help others. I am a member and open source contributer to WNB.rb. 
        </motion.p>        
      </Hide>
      </motion.div>
    </Description>
  </About>
);
};

export default AboutSection;
