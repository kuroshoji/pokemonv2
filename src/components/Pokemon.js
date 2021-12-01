import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../actions/pokemonActions";
import _ from "lodash";
import { PokemonContainer } from "./styles/PokemonContainer.styled";
import { useHistory } from "react-router-dom";
import { stats } from "./Stats";


const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);
  let history = useHistory();

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, [Pokemon]);

  const showData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return <div>{stats(pokeData)}</div>;
    }
  };

  return (
    <div>
      <PokemonContainer>
        <h1>{pokemonName}</h1>
        {showData()}
      </PokemonContainer>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};

export default Pokemon;
