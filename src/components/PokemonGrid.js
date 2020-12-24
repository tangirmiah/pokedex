import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { CircularProgress } from "@material-ui/core";

export const PokemonGrid = ({
  searchedList,
  setSearchedList,
  setPokemonList,
}) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=386")
      .then((response) => {
        const { results } = response.data;
        //console.log(results);
        const newPokemon = [];
        results.forEach((pokemon, index) => {
          newPokemon[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonList(newPokemon);
        setSearchedList(newPokemon);
        setLoading(false);
      });
  }, []);

  const makesearchedList = () => {
    return Object.keys(searchedList).map((key) => {
      //   console.log(searchedList[key].name);
      return (
        <Grid item xs={12} sm={4} lg={3} key={searchedList[key].id}>
          <PokemonCard pokemon={searchedList[key]} />
        </Grid>
      );
    });
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Grid container spacing={2} justify="center" style={{ margin: "0 2vw" }}>
        {makesearchedList()}
      </Grid>
    </>
  );
};
