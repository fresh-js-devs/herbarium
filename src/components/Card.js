import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 50,
    margin: "auto",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({
  onGoToPostDetail,
  familyName,
  about,
  img,
}) {
  const classes = useStyles();

  return (
    <Card onClick={onGoToPostDetail} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {familyName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {about}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
