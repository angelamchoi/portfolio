import { motion } from 'framer-motion';
import styled from 'styled-components';
import AngelaChoi from '../img/AngelaChoi.png';
import { About, Description, Hide, Image } from "../styles";
import { titleAnim, fade, photoAnim } from "../animation";


const ContactList = styled.li`
  list-style: none;
  a {
    color: white;
    text-decoration: none;
  }
  `

const HomeSection = () => {
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
      <br></br>
      <motion.button variants={fade}> 
        <ContactList>
        <a className='email-link'href='mailto:angelamchoi@gmail.com' target='_blank' rel="noreferrer"> Let's Connect! </a>
        </ContactList>
      </motion.button>
    </Description>
    <Image>
      <motion.img variants={photoAnim} src={AngelaChoi} alt="a female software developer named Angela Choi" />
    </Image>
  </About>
);
};

export default HomeSection;

// Framer Motion:
// replace tags with motion tags
// takes props like animate, initial, variants, etc.