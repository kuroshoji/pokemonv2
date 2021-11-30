const DefaultState = {
  data: {},
};

const pokemonReducer = (state = DefaultState, action) => {
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

export default pokemonReducer;
