import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);
  const randomNb = Math.floor(Math.random() * pokemonList.data.length);
  let i = 0;
  console.log(pokemonList.data[1]);

  useEffect(() => {
    dispatch(GetPokemonList());
  }, [PokemonList]);

  const ShowData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div>
          <h3>Choose a random Pokemon </h3>
          <Link to={`/pokemon/${randomNb}`}>
            <img src="pokeball.png" height="30" alt="pokeball" />
          </Link>
          <h1>Pokédex</h1>
          {pokemonList.data.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <p>
                  #{++i} {pokemon.name}
                </p>
                <Link to={`/pokemon/${i}`}>
                  <img src="pokeball.png" height="30" alt="pokeball" />
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return <div>{ShowData()}</div>;
};

export default PokemonList;
