import axios from "axios";

export const GetPokemonList = () => async (dispatch) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151%27`);

  dispatch({
    type: "POKEMON_LIST",
    payload: res.data,
  });
};

export const GetPokemon = (pokemon) => async (dispatch) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  dispatch({
    type: "POKEMON",
    payload: res.data,
    pokemonName: pokemon,
  });
};
