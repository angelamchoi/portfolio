import { About, Description, Hide } from "../styles";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { titleAnim, fade} from "../animation";
import { Icon } from '@iconify/react';

const ContactList = styled.li`
  list-style: none;
  padding: 10px;
  a {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    color: #23d997;
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
          <Icon icon="uiw:github" />
          <a className='github-link'href='https://github.com/angelamchoi' target='_blank' rel="noreferrer"> Github</a> 
         </ContactList>
         <ContactList>
          <Icon icon="line-md:linkedin" />
          <a className='linkedin-link'href='https://www.linkedin.com/in/angelamchoi/' target='_blank' rel="noreferrer"> LinkedIn </a>
         </ContactList>
         <ContactList>
          <Icon icon="uil:twitter-alt" />
          <a className='linkedin-link'href='https://www.twitter.com/AngelamChoi/' target='_blank' rel="noreferrer"> Twitter </a>
         </ContactList>
        </motion.p>        
      </Hide>
      </motion.div>
    </Description>
  </About>
  )
}

export default ContactSection;