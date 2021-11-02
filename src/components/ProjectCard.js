import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ProjectCard = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={props.data.img_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.description}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={props.data.repo} target="_blank" rel="noreferrer">
            <Button size="small">Repo</Button>
          </a>
          <a href={props.data.demo} target="_blank" rel="noreferrer">
            <Button size="small">Demo</Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
