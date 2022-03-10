import React from "react";

export default function PokemonCard({pokemon}) {
  const pokemonType = pokemon.types[0].type.name;
  const image = pokemon.sprites.other.official_artwork.front_default;
  let id = pokemon.id;
  if (id < 10) {
    id = `#00${id}`;
  } else if (id >=10 && id <100) {
    id = `#0${id}`;
  } else {
    id = `#${id}`;
  }

  return(
      <div className={`pokemonCard ${pokemonType}`}>
        <div className="cardHeader">
          <div className="cardTitle">
            <h2>{ pokemon.name }</h2>
          </div>
          <h2>{ id }</h2>
        </div>
        <div className="cardBody">
          <div className="pokemonTypeContainer">
            {pokemon.types.map((type) => (
              <div className={`pokemonType ${type.type.name}`}>
                <div className="pokemonTypeTitle">
                  <h3>{ type.type.name }</h3>
                </div>    
              </div>  
            ))}
          </div>
          <div className="pokemonImage">
            <img src={image} />
          </div>
        </div>
      </div>
    )
}