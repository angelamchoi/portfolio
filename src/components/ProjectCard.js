import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Grid2 from '@mui/material/Unstable_Grid2';


const StyledProjectCard = styled.div`
  padding-bottom: 25px;
  margin-right: 35px;
  margin-bottom: 35px;
  border: 2px solid #23d997;
  height: 360px;
  width: 360px;
  margin-left: 10px;
  `;

const StyledLink = styled.a`
color: #34c6eb;
font-size: 12px ;
`;

const ButtonActions = styled.div`
margin-top: -28px;
padding-left: 10px;
`;

const StyledTechnologiesUsed = styled.div`
color: #ccc;
font-weight: 400;
font-size: 0.875rem;
line-height: 1.43;
letter-spacing: 0.01071em;
font-family: "Roboto","Helvetica","Arial",sans-serif;
margin: 0px;
padding-bottom: 35px;
`;

const StyledTechnolgiesUsedMargin = styled.div`
margin-top: -25px;
`;

const StyledTechnolgiesUsedLessMargin = styled.div`
margin-top: -20px;
`;

const StyledTechnolgiesUsedMorePadding = styled.div`
padding-bottom: 35px;
`

const StyledTechnolgiesUsedLessPadding = styled.div`
margin-bottom: -15px;
`


const ProjectCard = () => {
  return (
    <>
    <Grid2 container spacing={0.5}>
      <StyledProjectCard>
      <CardMedia
        title="card matching game"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" color="white">
        🃏 Card Game
        </Typography>
        <Typography variant="body2" color="#ccc;">
        Matching card game is a browser based game with a multiplication twist. 
        </Typography>
        <StyledTechnologiesUsed>
          <span>Technologies Used:</span> HTML, CSS, JavaScript
        </StyledTechnologiesUsed>
        <StyledTechnolgiesUsedMorePadding/>
      </CardContent>
        <ButtonActions>
          <Button size="small" a href="https://github.com/angelamchoi/card-game" target="_blank"><StyledLink>💻Code</StyledLink></Button>
          <Button size="small" a href="https://angelamchoi.github.io/card-game/" target="_blank"><StyledLink>🚀Launch</StyledLink></Button>
        </ButtonActions>
    </StyledProjectCard>
    <br></br>
    <StyledProjectCard>
      <CardMedia
        title="plutonotes"
      />
      <CardContent >
        <Typography gutterBottom variant="h4" component="div" color="white">
        📝 Plutonotes
        </Typography>
        <Typography variant="body2" color="#ccc;">
        Plutonotes is a web application that allows you to create notes and post your notes publicly for anyone to see. 
        </Typography>
        <StyledTechnologiesUsed>
        <StyledTechnolgiesUsedMargin>
          <span>Technologies Used:</span> HTML, CSS, JavaScript, Node.js, Express, MongoDB, Mongoose, Materialize CSS, Oauth, Passport
          </StyledTechnolgiesUsedMargin>
        </StyledTechnologiesUsed>
      </CardContent>
      <ButtonActions>
        <Button size="small" a href="https://github.com/angelamchoi/plutonotes" target="_blank"><StyledLink>💻Code</StyledLink></Button>
      </ButtonActions>
    </StyledProjectCard>
    <br></br>
    <StyledProjectCard>
      <CardMedia
        title="gamebreak"
      />
      <CardContent >
        <Typography gutterBottom variant="h4" component="div" color="white">
        🕹️ gamebreak
        </Typography>
        <Typography variant="body2" color="#ccc">
        gamebreak is a web application that allows you to discover and track your video games. 
        </Typography>
        <StyledTechnologiesUsed>
          <span>Technologies Used:</span> HTML, CSS, Python, PostgreSQL, Materialize CSS, Authentication, AWS S3 Storage
        </StyledTechnologiesUsed>    
       </CardContent>
      <ButtonActions>
        <Button size="small" a href="https://github.com/angelamchoi/gamebreak" target="_blank"><StyledLink>💻Code</StyledLink></Button>
      </ButtonActions>
    </StyledProjectCard>
    <br></br>
    <StyledProjectCard>
      <CardMedia
        title="react trivia game"
      />
      <CardContent >
        <Typography gutterBottom variant="h4" component="div" color="white">
        🔮 quizzify
        </Typography>
        <Typography variant="body2" color="#ccc;">
        quizzify is a web application that allows you to add trivia questions and play trivia games to enhance your trivia gaming skills. 
        </Typography>
        <StyledTechnologiesUsed>
          <StyledTechnolgiesUsedLessMargin>
          <span>Technologies Used:</span> HTML, CSS, React.js, Node.js, Express,Bootstrap, MongoDB, Mongoose, Token-based authentication, AJAX, RESTful routing
          </StyledTechnolgiesUsedLessMargin>
        </StyledTechnologiesUsed>
        <StyledTechnolgiesUsedLessPadding/>
      </CardContent>
      <ButtonActions>
        <Button size="small" a href="https://github.com/angelamchoi/react-trivia-game" target="_blank"><StyledLink>💻Code</StyledLink></Button>
      </ButtonActions>
    </StyledProjectCard>
    </Grid2>
    </>
  );
}

export default ProjectCard;

