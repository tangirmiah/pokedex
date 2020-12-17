import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  search: {
    maxWidth: "30%",
    margin: "0 auto",
  },
});
export const Searchbar = (props) => {
  const [searchItem, setSearchItem] = useState("");
  const classes = useStyles(props);
  const searchHandler = (e) => {
    console.log(props.pokemonList.filter((name) => name.name.includes(e)));
    props.setSearchedList(
      props.pokemonList.filter((name) => name.name.includes(e))
    );
  };
  return (
    <>
      <SearchBar
        value={searchItem}
        onChange={(e) => searchHandler(e)}
        onCancelSearch={() => {
          props.setSearchedList(props.pokemonList);
        }}
        cancelOnEscape={true}
        placeholder="Search Pokemon"
        className={classes.search}
      />
    </>
  );
};
