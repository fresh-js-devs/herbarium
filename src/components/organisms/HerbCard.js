import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 580,
    marginLeft: 0,
    marginTop: "50px",
  },
  media: {
    height: 140,
  },
  detailsHeading: {
    color: "red",
    fontWeight: "bold",
  },
});

const HerbCard = ({
  id,
  name,
  shortDescription,
  description,
  imgName,
  onGoToHerbDetails,
  isInRoot,
  kingdom,
  family,
}) => {
  const classes = useStyles();

  const shortHerbCard = () => (
    <Card onClick={onGoToHerbDetails} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`../../images/${imgName}`)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {shortDescription}
          </Typography>
          <Typography
            className={classes.detailsHeading}
            variant="body2"
            component="p"
          >
            Click for more details...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  const longHerbCard = () => (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`../../images/${imgName}`)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            Kingdom
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {kingdom}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            Family
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {family}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  return isInRoot ? shortHerbCard() : longHerbCard();
};

export default HerbCard;
