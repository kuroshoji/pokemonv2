const DefaultState = {
  data: {},
};

const PokemonReducer = (state = DefaultState, action) => {
  if (action.type === "POKEMON") {
    return {
      ...state,
      data: {
        ...state.data,
        [action.pokemonName]: action.payload,
      },
    };
  }
  return state;
};

export default PokemonReducer;
