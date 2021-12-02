import React from "react";
import { Link } from "react-router-dom";

export const Pokemon = ({ pokemon, index }) => {
  return (
    <div key={pokemon.name}>
      <p>
        #{index + 1} {pokemon.name}
      </p>
      <Link to={`/pokemon/${index + 1}`}>
        <img src="pokeball.png" height="30" alt="pokeball" />
      </Link>
    </div>
  );
};

export const Pokemons = ({ pokemonList }) => {
  return (
    <div>
      <h1>Pokédex</h1>
      {pokemonList.data.map((pokemon, index) => {
        return (
          <Pokemon key={index} pokemon={pokemon} index={index}/>
        );
      })}
    </div>
  );
};

export default Pokemons;
