import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import PokemonStats from "./PokemonStats";
import { Button, Chip, CircularProgress, Grid } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import AssessmentIcon from "@material-ui/icons/Assessment";
import HeightIcon from "@material-ui/icons/Height";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "50vw",
    margin: "0 auto",
  },
  media: {
    height: 400,
    width: "auto",
    backgroundSize: "contain",
  },
  type: {
    margin: "0 2px",
  },
  infoGrid: {
    marginTop: "3vh",
    padding: "1em",
  },

  infoGridItem: {
    minHeight: "300px",
    maxHeight: "350px",
  },
  descriptionTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  des: {
    marginTop: "2em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "#2196f3",
    borderRadius: "4px",
    padding: "1em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  desInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "0",
    padding: "0",
  },
  listStat: {
    width: "100%",
    maxWidth: 400,
  },
  desCardContent: {
    height: "100%",
    paddingBottom: "1em",
  },
  background: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState("");
  const [pokemonDescription, setPokemonDescription] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [habitatBackground, setHabitatBackground] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const pokeRes = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      setPokemon(pokeRes.data);
      console.log(pokeRes.data);

      const desRes = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokeRes.data.id}/`
      );

      const des = desRes.data.flavor_text_entries[1].flavor_text.replace(
        "\f",
        ""
      );
      setPokemonDescription(des);

      const pokeSpecies = await axios.get(pokeRes.data.species.url);

      switch (pokeSpecies.data.habitat.name) {
        case "cave":
          setHabitatBackground({
            backgroundImage:
              "URL(https://image.freepik.com/free-vector/dark-cave-landscape_1308-16279.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          });

          break;
        case "forest":
          setHabitatBackground({
            backgroundImage:
              "URL(https://t4.ftcdn.net/jpg/02/12/47/49/360_F_212474908_4jkVLthplnKrSZVa5jg2Sob1hCbjobGj.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          });

          break;
        case "grassland":
          setHabitatBackground({
            backgroundImage:
              "URL(https://cdn.gamedevmarket.net/wp-content/uploads/20191203171120/0d0cdf89d2a8244e09229299a50325e9.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          });

          break;
        case "mountain":
          setHabitatBackground({
            backgroundImage:
              "URL(https://cdna.artstation.com/p/assets/images/images/009/253/930/large/ana-vallecillos-mainmenubg.jpg?1517950818)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          });

          break;
        case "rare":
          setHabitatBackground({
            backgroundImage: "URL(https://i.imgur.com/gGDCacv.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          });

          break;
        case "rough-terrain":
          setHabitatBackground({
            backgroundImage:
              "URL(https://cdn.hipwallpaper.com/i/48/98/sr5KBo.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          });

          break;
        case "sea":
          setHabitatBackground({
            backgroundImage:
              "URL(https://cdn.statically.io/img/wallpaperplay.com/walls/full/6/0/4/155105.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          });

          break;
        case "urban":
          setHabitatBackground({
            backgroundImage:
              "URL(https://www.itl.cat/pngfile/big/10-102395_vector-desktop-wallpaper-night-city-urban-cartoon-background.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          });

          break;
        case "waters-edge":
          setHabitatBackground({
            backgroundImage:
              "URL(https://image.freepik.com/free-vector/illustration-waterfall-rocks-night_33099-2386.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          });

          break;

        default:
          break;
      }
      setLoading(false);
    };
    fetchData();
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

  const getNumber = () => {
    if (pokemon.id < 10) return "00" + pokemon.id;
    else if (pokemon.id < 10) return "0" + pokemon.id;
    else return pokemon.id;
  };
  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12}>
          <Button
            disabled={pokemon.id - 1 === 0}
            component={Link}
            to={`/${pokemon.id - 1}`}
            variant="outlined"
            style={{ margin: "2px" }}
            onClick={() => setLoading(true)}
          >
            <NavigateBeforeIcon />
          </Button>
          <Button
            disabled={pokemon.id + 1 === 387}
            component={Link}
            to={`/${pokemon.id + 1}`}
            variant="outlined"
            style={{ margin: "2px" }}
            onClick={() => setLoading(true)}
          >
            <NavigateNextIcon />
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} lg={8}>
          <Card
            variant="outlined"
            style={habitatBackground}
            className={classes.background}
          >
            <Typography variant="h2" style={{ color: "white" }} component="p">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Typography>
            <CardMedia
              className={classes.media}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              title={pokemon.name}
              alt={pokemon.name}
            />
            <CardContent>
              <CardContent>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt=""
                />
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
                  alt=""
                />
              </CardContent>
              {makeTypes()}
              <Grid container spacing={1} className={classes.infoGrid}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={6}
                  className={classes.infoGridItem}
                >
                  <Card
                    className={classes.desCardContent}
                    style={{
                      borderColor: "#2196f3",
                    }}
                    variant="outlined"
                  >
                    <CardContent className={classes.desCardContent}>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.descriptionTitle}
                      >
                        {
                          <InfoIcon
                            style={{
                              color: "#2196f3",
                            }}
                          />
                        }
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        align="left"
                        className={classes.desInfo}
                      >
                        <AddCircleOutlineIcon style={{ color: "#ff9800" }} />
                        {"  "}
                        No: {getNumber()}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        align="left"
                        className={classes.desInfo}
                      >
                        <HeightIcon style={{ color: "#9c27b0" }} /> Height:{" "}
                        {pokemon.height / 10} m
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        align="left"
                        className={classes.desInfo}
                      >
                        <FitnessCenterIcon style={{ color: "#f44336" }} />{" "}
                        Weight: {pokemon.weight / 10} Kg
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        align="center"
                        className={classes.des}
                      >
                        {pokemonDescription}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={6}
                  className={classes.infoGridItem}
                >
                  <Card
                    className={classes.desCardContent}
                    style={{
                      borderColor: "#4caf50",
                    }}
                    variant="outlined"
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.descriptionTitle}
                      >
                        {<AssessmentIcon style={{ color: "#4caf50" }} />}
                      </Typography>

                      <PokemonStats pokemonStat={pokemon.stats} />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default PokemonDetail;
