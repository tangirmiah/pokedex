import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

export const PokemonGrid = ({ pokemonList, setPokemonList }) => {
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        const { results } = response.data;
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
      });
  }, []);

  const makePokemonList = () => {
    return Object.keys(pokemonList).map((key) => {
      //   console.log(pokemonList[key].name);
      return (
        <Grid item xs={12} sm={3}>
          <h1>{pokemonList[key].name}</h1>
        </Grid>
      );
    });
  };

  return (
    <>
      <Grid container spacing={2}>
        {makePokemonList()}
        {/* {Object.keys(pokemonList).map((key) => {
          console.log(pokemonList[key].name);
          const name = pokemonList[key].name;
          return (
            <Grid item xs={12} sm={3}>
              <h1>{pokemonList[key].name}</h1>
            </Grid>
          );
          //   [pokemonList[key]];
        })} */}
      </Grid>
    </>
  );
};
