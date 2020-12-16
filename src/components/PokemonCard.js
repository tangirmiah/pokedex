import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { AutorenewTwoTone } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
    width: "auto",
    backgroundSize: "contain",
  },
});

const handleClick = (pokeName) => {
  console.log(pokeName);
};

const PokemonCard = (props) => {
  const { id, name, sprite } = props.pokemon;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} onClick={() => handleClick(name)}>
        <CardActionArea>
          <CardMedia className={classes.media} image={sprite} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default PokemonCard;
