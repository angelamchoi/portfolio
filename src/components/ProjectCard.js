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
  width: 360px;
  margin-left: 50px;
  `;

const StyledLink = styled.a`
  color: #34c6eb;
  font-size: 14px ;
`;

const ButtonActions = styled.div`
  margin-top: -28px;
  padding-left: 10px;
`;

const StyledDescription = styled.div`
  padding: 3rem 0rem;
  font-size: 1.2rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  margin: 0px;
`;

const StyledTechnologiesUsed = styled.div`
  color: #ccc;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  margin: 0px;
`;

const StyledTechnolgiesUsedMargin = styled.div`
  margin-top: -5px;
`;

const StyledTechnolgiesUsedLessMargin = styled.div`
  margin-bottom: 10px;
`;

const StyledTechnolgiesUsedMorePadding = styled.div`
  margin-bottom: 25px;
`

const CardGameStyledTechnologiesUsed = styled.div`
  padding-bottom: 75px;
  `;

const GameBreakTechnolgiesUsedPadding = styled.div`
  padding-bottom: 65px;
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
        <StyledDescription>
        Matching card game is a browser based game with a multiplication twist. 
        </StyledDescription>
        <StyledTechnologiesUsed>
          <span>Technologies Used:</span> HTML, CSS, JavaScript
        </StyledTechnologiesUsed>
        <CardGameStyledTechnologiesUsed/>
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
        <StyledDescription>
          Plutonotes is a web application that allows you to create notes and post your notes publicly for anyone to see. 
        </StyledDescription>
        <StyledTechnologiesUsed>
        <StyledTechnolgiesUsedMargin>
          <span>Technologies Used:</span> HTML, CSS, JavaScript, Node.js, Express, MongoDB, Mongoose, Materialize CSS, Oauth, Passport
          </StyledTechnolgiesUsedMargin>
        </StyledTechnologiesUsed>
      </CardContent>
      <StyledTechnolgiesUsedMorePadding/>
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
        <StyledDescription>
        gamebreak is a web application that allows you to discover and track your video games. 
        </StyledDescription>
        <StyledTechnologiesUsed>
          <span>Technologies Used:</span> HTML, CSS, Python, PostgreSQL, Materialize CSS, Authentication, AWS S3 Storage
        </StyledTechnologiesUsed>  
        <GameBreakTechnolgiesUsedPadding/>
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
        <StyledDescription>
        quizzify is a web application that allows you to add trivia questions and play trivia games to enhance your trivia gaming skills. 
        </StyledDescription>
        <StyledTechnologiesUsed>
          <StyledTechnolgiesUsedLessMargin>
          <span>Technologies Used:</span> HTML, CSS, React.js, Node.js, Express,Bootstrap, MongoDB, Mongoose, Token-based authentication, AJAX, RESTful routing
          </StyledTechnolgiesUsedLessMargin>
        </StyledTechnologiesUsed>
        <StyledTechnolgiesUsedMorePadding/>
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

