import React from "react";

const Stats = (props) => {
  return (
    <div>
      <h1>{props.pokeData.name}</h1>
      <img src={props.pokeData.sprites.front_default} alt="" />
      <h3>Stats</h3>
      {props.pokeData.stats.map((pokemon) => {
        return (
          <p key={pokemon.stat.name}>
            {pokemon.stat.name} {pokemon.base_stat}
          </p>
        );
      })}
    </div>
  );
};

export default Stats;
