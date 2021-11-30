import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import Pokemons from "./components/Pokemons";
import { Header } from "./components/styles/Header.styled";
import { Container } from "./components/styles/Container.styled";
function App() {

  return (
    <Container>
      <Header>
        <img src="logo.png" height="250" alt="logo" />
      </Header>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemons} />
        <Redirect to={"/"} />
      </Switch>
    </Container>
  );
}

export default App;
