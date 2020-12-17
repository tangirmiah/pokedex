import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Chip, CircularProgress, Grid } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "50vw",

    margin: "0 auto",
  },
  media: {
    height: 340,
    width: "auto",
    backgroundSize: "contain",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12) ",
  },
  type: {
    margin: "0 2px",
  },
  infoGrid: {
    marginTop: "3vh",
    padding: "1em",
  },
  infoGridItem: {},
  descriptionTitle: {
    display: "flex",
    alignItems: "center",
  },
}));

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState("");
  const [pokemonDescription, setPokemonDescription] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon(response.data);

        axios
          .get(`https://pokeapi.co/api/v2/pokemon-species/${response.data.id}/`)
          .then((response) => {
            const des = response.data.flavor_text_entries[
              Math.floor(Math.random() * 10)
            ].flavor_text.replace("\f", "");
            setPokemonDescription(des);
            console.log(unescape(des));
            setLoading(false);
          });
      });
  }, [pokemonName]);

  const classes = useStyles();

  const makeTypes = () => {
    return pokemon.types.map((type) => {
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
      return (
        <Chip
          label={type.type.name.toUpperCase()}
          style={style}
          className={classes.type}
          key={type.slot}
        />
      );
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
          <Grid container spacing={1} className={classes.infoGrid}>
            <Grid item xs={12} sm={6} lg={6} className={classes.infoGridItem}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.descriptionTitle}
                  >
                    {<InfoIcon />} Description:
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {pokemonDescription}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default PokemonDetail;
