import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../actions/pokemonActions";
import _ from "lodash";
import { PokemonContainer } from "./styles/PokemonContainer.styled";
import { useHistory } from "react-router-dom";

const Pokemons = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);
  let history = useHistory();

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, [Pokemons]);

  const showData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <div>
          <h1>{pokeData.name}</h1>
          <img src={pokeData.sprites.front_default} alt="" />
          <h3>Stats</h3>
          {pokeData.stats.map((pokemon) => {
            return (
              <p key={pokemon.stat.name}>
                {pokemon.stat.name} {pokemon.base_stat}
              </p>
            );
          })}
        </div>
      );
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

export default Pokemons;
