export const getPokemonList = () => {
  return async (dispatch) => {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=151%27`,
      {
        method: "GET",
      }
    );

    const json = await result.json();

    dispatch({
      type: "POKEMON_LIST",
      payload: json,
    });
  };
};

export const getPokemon = (pokemon) => {
  return async (dispatch) => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
      method: "GET",
    });

    const json = await result.json();

    dispatch({
      type: "POKEMON",
      payload: json,
      pokemonName: pokemon,
    });
  };
};
