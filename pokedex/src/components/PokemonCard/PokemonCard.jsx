import React from "react";
import './PokemonCard.css';

export default function PokemonCard({ pokemon }) {
  const pokemonType = pokemon.types[0].type.name;
  const image = pokemon.sprites.other.official_artwork.front_default;
  let id = String(pokemon.id).padStart(3, '0');

  const renderPokemonTypes = pokemon.types.map((type) => (
    <div className={`pokemonType ${type.type.name}`}>
      <div className="pokemonTypeTitle">
        <h3>{type.type.name}</h3>
      </div>
    </div>
  ));

  return (
    <div className={`pokemonCard ${pokemonType}`}>
      <div className="cardHeader">
        <div className="cardTitle">
          <h2>{pokemon.name}</h2>
        </div>
        <h2>#{id}</h2>
      </div>
      <div className="cardBody">
        <div className="pokemonTypeContainer">
          {renderPokemonTypes}
        </div>
        <div className="pokemonImage">
          <img src={image} alt="pokemon" />
        </div>
      </div>
    </div>
  )
}