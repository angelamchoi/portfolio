import { About, Description, Hide } from "../styles";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { titleAnim, fade} from "../animation";

const ContactList = styled.li`
  list-style: none;
  a {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
  }
  `

const ContactSection = () => {
  return (
    <About>
    <Description>
    <motion.div>
        <Hide>
          <motion.h2 variants={titleAnim}>Contact Me</motion.h2>
        </Hide>
        <Hide>
        <motion.p variants={fade}>
         <ContactList>
          <a className='email-link'href='mailto:angelamchoi@gmail.com' target='_blank' rel="noreferrer"> 📬 angelamchoi@gmail.com </a>
        </ContactList>
         <ContactList>
          <a className='github-link'href='https://github.com/angelamchoi' target='_blank' rel="noreferrer">💻 Github </a>
         </ContactList>
         <ContactList>
          <a className='linkedin-link'href='https://www.linkedin.com/in/angelamchoi/' target='_blank' rel="noreferrer"> LinkedIn </a>
         </ContactList>
        </motion.p>        
      </Hide>
      </motion.div>
    </Description>
  </About>
  )
}

export default ContactSection;