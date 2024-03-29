import styled from "styled-components";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { About, Description, Hide } from "../styles";
import { titleAnim, fade } from "../animation";
import LottieAnimation from "./LottieAnimation";

const Link = styled.a`
  list-style: none;
  a {
    font-size: 1.4rem;
    color: white;
    text-decoration: none;
    color: #34c6eb;
    padding-right: 5px;
  }
`;

const SkillsDescription = styled.h3`
  font-size: 2.5rem;
  padding-bottom: 25px;
  padding-top: 15px;
  font-weight: lighter;
  color: #23d997;
`;

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <LottieAnimation />
            <motion.h2 variants={titleAnim}>About Me</motion.h2>
          </Hide>
          <Hide>
            <motion.p variants={fade}>
              I am a Software Developer at
              <Link>
                <a
                  className="bitesite-link"
                  href="https://www.bitesite.ca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  BiteSite.
                </a>
              </Link>
              I primarily program in React and Ruby on Rails. Previously, I was
              a math teacher in New York City. I enjoy the process of creating
              and building. My interests in software development are
              accessibility and cybersecurity. I love to use my coding skills to
              help others.
              <p>
                I am a member and open source contributor to
                <Link>
                  <a
                    className="wnbrb-link"
                    href="https://www.wnb-rb.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    WNB.rb.
                  </a>
                </Link>
              </p>
            </motion.p>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Skills & Tools</motion.h2>
          </Hide>
          <Hide>
            <motion.p variants={fade}>
              <SkillsDescription>Frontend</SkillsDescription>
              <Icon icon="vscode-icons:file-type-html" width="80" />
              <Icon icon="vscode-icons:file-type-css" width="80" />
              <Icon icon="skill-icons:sass" width="80" />
              <Icon icon="skill-icons:tailwindcss-light" width="80" />
              <Icon icon="skill-icons:jquery" width="80" />
              <Icon icon="skill-icons:javascript" width="80" />
              <Icon icon="skill-icons:bootstrap" width="80" />
              <Icon icon="vscode-icons:file-type-reactjs" width="80" />
              <br />
              <br />
              <SkillsDescription>Backend</SkillsDescription>
              <Icon icon="skill-icons:rails" width="80" />
              <Icon icon="logos:ruby" width="70" />
              <Icon icon="logos:postgresql" width="80" />
              <Icon icon="vscode-icons:file-type-rspec" width="80" />
              <Icon icon="logos:nodejs-icon" width="80" />
              <Icon icon="skill-icons:jest" width="80" />
              <Icon icon="skill-icons:expressjs-dark" width="80" />
              <Icon icon="logos:mongodb-icon" width="40" />
              <br />
              <br />
              <SkillsDescription>Tools</SkillsDescription>
              <Icon icon="ri:markdown-line" width="80" />
              <Icon icon="vscode-icons:file-type-vscode" width="80" />
              <Icon icon="logos:figma" width="50" />
              <Icon icon="skill-icons:postman" width="75" />
              <Icon icon="logos:heroku-icon" width="70" />
              <Icon icon="uiw:github" width="80" />
              <Icon icon="logos:redis" width="80" />
            </motion.p>
          </Hide>
        </motion.div>
      </Description>
    </About>
  );
};

export default AboutSection;
