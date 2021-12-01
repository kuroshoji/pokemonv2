import React from "react";

const Stats = ({pokeData}) => {
  return (
    <div>
      <h1>{pokeData.name}</h1>
      <img src={pokeData.sprites.front_default} alt="" />
      <h3>Stats</h3>
      {pokeData.stats.map((pokemon) => {
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
