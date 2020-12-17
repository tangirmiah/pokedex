import "./App.css";
import PokemonDetail from "./components/PokemonDetail";
import { Container, Typography } from "@material-ui/core";
import { Searchbar } from "./components/Searchbar";
import { useState } from "react";
import { PokemonGrid } from "./components/PokemonGrid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png
function App() {
  const [pokemonList, setPokemonList] = useState("");
  const [searchedList, setSearchedList] = useState(pokemonList);
  return (
    <Router>
      <div className="App">
        <Container
          maxWidth="xl"
          style={{
            backgroundColor: "#cfe8fc",
            minHeight: "100vh",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography variant="h2" gutterBottom>
            Pokedex
            <img
              src="https://img.icons8.com/color/96/000000/star-pokemon.png"
              alt="logo"
              style={{ maxHeight: "0.8em" }}
            />
          </Typography>
          <Switch>
            <Route exact path="/">
              <Searchbar
                pokemonList={pokemonList}
                searchedList={searchedList}
                setSearchedList={setSearchedList}
              />
              <br />
              <PokemonGrid
                pokemonList={pokemonList}
                setPokemonList={setPokemonList}
                searchedList={searchedList}
                setSearchedList={setSearchedList}
              />
            </Route>
            <Route exact path="/:pokemonName">
              <PokemonDetail />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
