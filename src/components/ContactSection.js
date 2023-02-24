import { About } from "../styles";
import styled from "styled-components";

const Contact = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const ContactSection = () => {
  return (
    <Contact>
    <div>
      <div className ="description">
        <h1>Contact Me</h1>
        </div>
    </div>
    </Contact>
  )
}

export default ContactSection;