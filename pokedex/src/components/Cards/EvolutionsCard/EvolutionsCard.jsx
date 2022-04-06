import React from "react";
import './EvolutionsCard.css';
import TypeCard from "../TypeCard/TypeCard";
import egg from '../../../images/egg.png';
import { Image } from '@chakra-ui/react';

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
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src={image}
                        alt="pokemon"
                        fallbackSrc={egg}
                    />
                    <div className="types">
                        {pokemon.types.map((type) => <TypeCard type={type} />)}
                    </div>
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