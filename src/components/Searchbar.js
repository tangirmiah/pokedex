import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";

import { Grid } from "@material-ui/core";

export const Searchbar = (props) => {
  const [searchItem, setSearchItem] = useState("");

  const searchHandler = (e) => {
    console.log(props.pokemonList.filter((name) => name.name.includes(e)));
    props.setSearchedList(
      props.pokemonList.filter((name) => name.name.includes(e.toLowerCase()))
    );
  };
  return (
    <>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} sm={12} lg={6}>
          <SearchBar
            value={searchItem}
            onChange={(e) => searchHandler(e)}
            onRequestSearch={(e) => searchHandler(e)}
            onCancelSearch={() => {
              props.setSearchedList(props.pokemonList);
            }}
            cancelOnEscape={true}
            placeholder="Search Pokemon..."
          />
        </Grid>
      </Grid>
    </>
  );
};
