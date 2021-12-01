import React from "react";
import { Link } from "react-router-dom";

const Pokemons = (props) => {
  return (
    <div>
      <h1>Pokédex</h1>
      {props.pokemonList.data.map((pokemon, index) => {
        return (
          <div key={pokemon.name}>
            <p>
              #{++index} {pokemon.name}
            </p>
            <Link to={`/pokemon/${index}`}>
              <img src="pokeball.png" height="30" alt="pokeball" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemons;
