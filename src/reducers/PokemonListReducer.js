const DefaultState = {
  data: [],
};

const PokemonListReducer = (state = DefaultState, action) => {
  if (action.type === "POKEMON_LIST") {
    return {
      ...state,
      data: action.payload.results,
    };
  }
  return state;
};

export default PokemonListReducer;
