import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/pokemonActions";
import _ from "lodash";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, [Pokemon]);

  const ShowData = () => {
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
      <h1>{pokemonName}</h1>
      {ShowData()}
    </div>
  );
};

export default Pokemon;
