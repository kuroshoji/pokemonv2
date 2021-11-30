import { combineReducers } from "redux";
import pokemonListReducer from "./PokemonListReducer";
import pokemonReducer from "./PokemonReducer";

const rootReducer = combineReducers({
  PokemonList: pokemonListReducer,
  Pokemon: pokemonReducer,
});

export default rootReducer;
