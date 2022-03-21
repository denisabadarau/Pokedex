import React from "react";
import Data from '../../../data/data.json';
import './EvolutionsCard.css';

export default function EvolutionsCard(pokemonType) {
    const renderEvolution = (pokemon) => {
        const id = String(pokemon.id).padStart(3, '0');
        const image = pokemon.sprites.other.official_artwork.front_default;

        return (
            <a href={`/pokemon/${pokemon.id}`}>
                <div className="evolutionContainer">
                    <div className="evolutionContainerHeader">
                        <div className="evolutionName">
                            {pokemon.name}
                        </div>
                        <div className="evolutionId">
                            #{id}
                        </div>
                    </div>
                    <img src={image} alt="pokemon" />
                </div>
            </a>
        );
    }

    return (
        <div className={`containerEvolutionsCard ${pokemonType.pokemonType}`}>
            {renderEvolution(Data[0])}
            {renderEvolution(Data[1])}
            {renderEvolution(Data[2])}
        </div>
    );

}