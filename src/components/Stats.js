import React from "react";

export const stats = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.sprites.front_default} alt="" />
      <h3>Stats</h3>
      {props.stats.map((pokemon) => {
        return (
          <p key={pokemon.stat.name}>
            {pokemon.stat.name} {pokemon.base_stat}
          </p>
        );
      })}
    </div>
  );
};
