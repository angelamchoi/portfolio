import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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
  height: 285px;
  width: 360px;
  margin-left: 10px;
  `;

const ExtraPadding = styled.div`
  padding-bottom: 35px;
  `;

const Padding= styled.div`
  padding-bottom: 20px;
  `;

const StyledLink = styled.a`
color: #34c6eb;
font-size: 12px ;
`;

const ProjectCard = () => {
  return (
    <>
    <Grid2 container spacing={0.5}>
      <StyledProjectCard>
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#1b1b1b"}}>
      <CardMedia
        title="card matching game"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" color="white">
        🃏 Card Matching Game
        </Typography>
        <Typography variant="body1" color="#ccc;">
        Matching card game is a browser based game with a multiplication twist. As a former math teacher, I wanted to build an engaging and purposeful game to inspire students to practice their multiplication facts while having fun.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" a href="https://github.com/angelamchoi/card-game" target="_blank"><StyledLink>💻Code</StyledLink></Button>
        <Button size="small" a href="https://angelamchoi.github.io/card-game/" target="_blank"><StyledLink>🚀Launch</StyledLink></Button>
      </CardActions>
    </Card>
    </StyledProjectCard>

    <br></br>
    <StyledProjectCard>
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#1b1b1b"}}>
      <CardMedia
        title="plutonotes"
      />
      <CardContent >
        <Typography gutterBottom variant="h4" component="div" color="white">
        📝 Plutonotes
        </Typography>
        <Typography variant="body1" color="#ccc;">
        Plutonotes is a web application that allows you to create notes and post your notes publicly for anyone to see. The purpose of the application is to allow students to learn and share their knowledge with the world.
        </Typography>
      </CardContent>
      <Padding></Padding>
      <CardActions>
        <Button size="small" a href="https://github.com/angelamchoi/plutonotes" target="_blank"><StyledLink>💻Code</StyledLink></Button>
      </CardActions>
    </Card>
    </StyledProjectCard>
    <br></br>
    <StyledProjectCard>
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#1b1b1b"}}>
      <CardMedia
        title="gamebreak"
      />
      <CardContent >
        <Typography gutterBottom variant="h4" component="div" color="white">
        🕹️ gamebreak
        </Typography>
        <Typography variant="body1" color="#ccc">
        gamebreak is a web application that allows you to discover and track your video games. This application was created for General Assembly's Software Engineering Immersive (SEI) Program. This was a group project created by Angela Choi and Kelsey Rocco.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" a href="https://github.com/angelamchoi/gamebreak" target="_blank"><StyledLink>💻Code</StyledLink></Button>
      </CardActions>
    </Card>
    </StyledProjectCard>
    <br></br>
    <StyledProjectCard>
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#1b1b1b"}}>
      <CardMedia
        title="react trivia game"
      />
      <CardContent >
        <Typography gutterBottom variant="h4" component="div" color="white">
        🔮 quizzify
        </Typography>
        <Typography variant="body1" color="#ccc;">
        quizzify is a web application that allows you to add trivia questions and play trivia games to enhance your trivia gaming skills. 
        </Typography>
      </CardContent>
      <ExtraPadding></ExtraPadding>
      <CardActions>
        <Button size="small" a href="https://github.com/angelamchoi/react-trivia-game" target="_blank"><StyledLink>💻Code</StyledLink></Button>
      </CardActions>
    </Card>
    </StyledProjectCard>
    </Grid2>
    </>
  );
}

export default ProjectCard;

