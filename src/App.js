import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import  Pokemon  from "./components/Pokemon";
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
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </Container>
  );
}

export default App;
