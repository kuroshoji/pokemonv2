import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    dispatch(GetPokemonList());
  }, [PokemonList]);

  const ShowData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div>
          <h1>List of Pokemon</h1>
          {pokemonList.data.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <p>{pokemon.name}</p>
                <Link to={`/pokemon/${pokemon.name}`}>
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
