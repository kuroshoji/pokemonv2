const DefaultState = {
  data: [],
};

const pokemonListReducer = (state = DefaultState, action) => {
  if (action.type === "POKEMON_LIST") {
    return {
      ...state,
      data: action.payload.results,
    };
  }
  return state;
};

export default pokemonListReducer;
