import React from "react";
import './MainCard.css';

export default function MainCard({ pokemon }) {
    const image = pokemon['sprites']['other']['official-artwork']['front_default'];
    let id = String(pokemon.id).padStart(3, '0');
    const pokemonType = pokemon.types[0].type.name;

    const renderPokemonType = (type) => (
        <div key={type.slot} className={`type ${type.type.name}`}>
            <div className="pokemonTypeTitle">
                {type.type.name}
            </div>
        </div>
    );

    return (
        <div className={`containerMainCard ${pokemonType}`}>
            <div className="headerMainCard">
                <div className="infoHeader">
                    <div className="cardTitle">
                        <h1>{pokemon.name}</h1>
                    </div>
                    <h2>#{id}</h2>
                </div>
                <div className="types">
                    {pokemon.types.map(renderPokemonType)}
                </div>
            </div>
            <div className="pokemonImageCard">
                <img src={image} alt="pokemon" />
            </div>
            <div className="footerMainCard">
                Hello World
            </div>
        </div>
    );
}