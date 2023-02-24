import { motion } from 'framer-motion';
import AngelaChoi from '../img/AngelaChoi.jpg';
import { About, Description, Hide, Image } from "../styles";
import { titleAnim, fade, photoAnim } from "../animation";


const AboutSection = () => {
  return (
    <About>
    <Description>
      <motion.div>
        <Hide>
          <motion.h2 variants={titleAnim}>Hi, I'm Angela</motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>
            and I'm a  <span>Software Developer</span>
          </motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>based in Toronto.</motion.h2>
        </Hide>
      </motion.div>
      <motion.p variants={fade}>
      I primarily program in React and Ruby on Rails. Previously, I was a math teacher in New York City. I enjoy the process of creating and building. My interests in software development are accessibility and cybersecurity. I love to use my coding skills to help others.
      </motion.p>
      <motion.button variants={fade}>Let's Connect!</motion.button>
    </Description>
    <Image>
      <motion.img variants={photoAnim} src={AngelaChoi} alt="a female software developer named Angela Choi" />
    </Image>
  </About>
);
};

export default AboutSection;