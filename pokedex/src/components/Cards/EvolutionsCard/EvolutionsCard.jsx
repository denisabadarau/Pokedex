import React from "react";
import Data from '../../../data/data.json';
import './EvolutionsCard.css';

export default function EvolutionsCard(pokemonType) {
    function RenderEvolution({ pokemon }) {
        let id = String(pokemon.id).padStart(3, '0');
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
            <RenderEvolution pokemon={Data[0]} />
            <RenderEvolution pokemon={Data[1]} />
            <RenderEvolution pokemon={Data[2]} />
        </div>
    );

}