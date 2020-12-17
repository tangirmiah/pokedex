import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Chip, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "50vw",

    margin: "0 auto",
  },
  media: {
    height: 340,
    width: "auto",
    backgroundSize: "contain",
  },
}));

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon(response.data);

        setLoading(false);
      });
  }, []);

  const classes = useStyles();

  const makeTypes = () => {
    return pokemon.types.map((type) => {
      console.log(type.type.name);
      let style = {};
      switch (type.type.name) {
        case "normal":
          style = { color: "white", backgroundColor: "#AAB09F" };
          break;
        case "fire":
          style = { color: "white", backgroundColor: "#EA7A3C" };
          break;
        case "bug":
          style = { color: "white", backgroundColor: "#94BC4A" };
          break;
        case "dark":
          style = { color: "white", backgroundColor: "#736C75" };
          break;
        case "dragon":
          style = { color: "white", backgroundColor: "#6A7BAF" };
          break;
        case "electric":
          style = { color: "white", backgroundColor: "#E5C531" };
          break;
        case "fairy":
          style = { color: "white", backgroundColor: "#E397D1" };
          break;
        case "fighting":
          style = { color: "white", backgroundColor: "#CB5F48 " };
          break;
        case "flying":
          style = { color: "white", backgroundColor: "#7DA6DE " };
          break;
        case "ghost":
          style = { color: "white", backgroundColor: "#846AB6" };
          break;
        case "grass":
          style = { color: "white", backgroundColor: "#71C558 " };
          break;
        case "ground":
          style = { color: "white", backgroundColor: "#CC9F4F" };
          break;
        case "ice":
          style = { color: "white", backgroundColor: "#70CBD4" };
          break;
        case "poison":
          style = { color: "white", backgroundColor: "#B468B7" };
          break;
        case "psychic":
          style = { color: "white", backgroundColor: "#E5709B" };
          break;
        case "rock":
          style = { color: "white", backgroundColor: "#B2A061" };
          break;
        case "steel":
          style = { color: "white", backgroundColor: "#89A1B0" };
          break;
        case "water":
          style = { color: "white", backgroundColor: "#539AE2" };
          break;

        default:
          style = { color: "white", backgroundColor: "#AAB09F" };
          break;
      }
      return <Chip label={type.type.name.toUpperCase()} style={style} />;
    });
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardMedia
          className={classes.media}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          title={pokemon.name}
          alt={pokemon.name}
        />
        <CardContent>
          <Typography variant="h3" color="textPrimary" component="p">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>
          {makeTypes()}
        </CardContent>
      </Card>
    </>
  );
};

export default PokemonDetail;
