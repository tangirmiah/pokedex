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
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon(response.data);
        console.log(pokemon);
      });
  }, []);

  const classes = useStyles();
  return (
    <>
      {/* <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={pokemon.name}
      /> */}
      <Card className={classes.root}>
        <CardHeader title={pokemon.name} />
        <CardMedia
          className={classes.media}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          title={pokemon.name}
          alt={pokemon.name}
        />
        <CardContent>
          <Typography variant="h1" color="textSecondary" component="p">
            {pokemon.name}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default PokemonDetail;
