import React from "react";
import { Link } from "react-router-dom";

const Random = (props) => {
  const randomNb = Math.floor(Math.random() * props.pokemonList.data.length);

  return (
    <div>
      <h3>Choose a random Pokemon </h3>
      <Link to={`/pokemon/${randomNb}`}>
        <img src="pokeball.png" height="30" alt="pokeball" />
      </Link>
    </div>
  );
};

export default Random;
