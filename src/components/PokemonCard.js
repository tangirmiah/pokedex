import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
    width: "auto",
    backgroundSize: "contain",
  },
  link: {
    textDecoration: "none",
    color: "teal",
  },
});

const PokemonCard = (props) => {
  const { name, sprite } = props.pokemon;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <Link to={`/${name}`} className={classes.link}>
          <CardActionArea>
            <CardMedia className={classes.media} image={sprite} title={name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
};

export default PokemonCard;
