import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { getPokemonList } from "../actions/pokemonActions";
import Random from "./Random";
import Pokemons from "./Pokemons";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  //console.log(pokemonList.data[1]);

  useEffect(() => {
    dispatch(getPokemonList());
  }, [PokemonList]);

  const showData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div>
          <Random pokemonList={pokemonList} />
          <Pokemons pokemonList={pokemonList} />
        </div>
      );
    }
  };

  return <div>{showData()}</div>;
};

export default PokemonList;
