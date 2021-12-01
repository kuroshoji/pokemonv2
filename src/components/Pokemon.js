import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../actions/pokemonActions";
import _ from "lodash";
import { PokemonContainer } from "./styles/PokemonContainer.styled";
import { useHistory } from "react-router-dom";
import Stats from "./Stats";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);
  const history = useHistory();

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, [pokemonName]);

  const pokeData = pokemonState.data[pokemonName];

  return (
    <div>
      <PokemonContainer>
        <h1>{pokemonName}</h1>
        <div>
          {_.isEmpty(pokemonState.data[pokemonName]) ? null : (
            <Stats pokeData={pokeData} />
          )}
        </div>
      </PokemonContainer>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};

export default Pokemon;
