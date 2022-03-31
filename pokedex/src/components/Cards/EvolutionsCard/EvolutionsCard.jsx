import React from "react";
import './EvolutionsCard.css';

export default function EvolutionsCard({ pokemonType, evolutions }) {
    const renderEvolution = (pokemon) => {
        const id = String(pokemon?.id).padStart(3, '0');
        const image = pokemon?.sprites?.other?.['official-artwork']?.front_default;

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

    return evolutions.map((line) => (
        <div className={`containerEvolutionsCard ${pokemonType}`}>
            {
                line.map((el) => renderEvolution(el))
            }
        </div>
    ));

}