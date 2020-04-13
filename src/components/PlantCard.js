import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const PlantCard = ({
  id,
  familyName,
  commonName,
  scintificName,
  about,
  img,
  goToPlantDetatil,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Card className={classes.root} onClick={goToPlantDetatil}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {commonName}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={goToPlantDetatil}>
            Detail
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default PlantCard;
