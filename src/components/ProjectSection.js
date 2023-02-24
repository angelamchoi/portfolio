import { About } from "../styles";
import styled from "styled-components";

const Project = styled(About)`

`

const ProjectSection = () => {
  return (
    <Project>
    <div>
      <div className ="projects">
        <h1>Projects</h1>
        </div>
    </div>
    </Project>
  )
}

export default ProjectSection;