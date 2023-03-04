import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ProjectCard = () => {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        title="card matching game"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#23d997">
        🃏Card Matching Game
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Matching card game is a browser based game with a multiplication twist. As a former math teacher, I wanted to build an engaging and purposeful game to inspire students to practice their multiplication facts while having fun.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Technologies Used: HTML, CSS, JavaScript
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" a href="https://github.com/angelamchoi/card-game" target="_blank">💻Code</Button>
        <Button size="small" a href="https://angelamchoi.github.io/card-game/" target="_blank">🚀Launch</Button>
      </CardActions>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        title="plutonotes"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="#23d997">
        📝Plutonotes
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Plutonotes is a web application that allows you to create notes and post your notes publicly for anyone to see. As an online student, I wanted to build an application where students are able to not only keep their notes in one place, but also see how other students are taking their notes. The purpose of the application is to allow students to learn and share their knowledge with the world.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" a href="https://github.com/angelamchoi/plutonotes" target="_blank">💻Code</Button>
      </CardActions>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        title="gamebreak"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="#23d997">
        🕹️gamebreak
        </Typography>
        <Typography variant="body1" color="text.secondary">
        gamebreak is a web application that allows you to discover and track your video games. This application was created for General Assembly's Software Engineering Immersive (SEI) Program. This was a group project created by Angela Choi and Kelsey Rocco.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" a href="https://github.com/angelamchoi/gamebreak" target="_blank">💻Code</Button>
      </CardActions>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        title="react trivia game"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="#23d997">
        🔮quizzify
        </Typography>
        <Typography variant="body1" color="text.secondary">
        quizzify is a web application that allows you to add trivia questions and play trivia games to enhance your trivia gaming skills. I love learning, but if the learning experience is gamified, I will be able to retain the information longer and learn more. I wanted to create an application for people to continue to learn new things while having fun.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" a href="https://github.com/angelamchoi/react-trivia-game" target="_blank">💻Code</Button>
      </CardActions>
    </Card>
    
    </>
  );
}

export default ProjectCard;

