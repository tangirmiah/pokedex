import SearchBar from "material-ui-search-bar";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  search: {
    maxWidth: "30%",
    margin: "0 auto",
  },
});
export const Searchbar = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <SearchBar
        value={props.searchItem}
        onChange={(e) => props.setSearchItem(e)}
        onRequestSearch={console.log("searched")}
        cancelOnEscape={true}
        placeholder="Search Pokemon"
        className={classes.search}
      />
    </>
  );
};
