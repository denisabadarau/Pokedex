import React from "react";
import './SpritesCard.css';

export default function SpritesCard({ pokemon }) {
    const pokemonType = pokemon.types[0].type.name;

    return (
        <div className={`containerSpritesCard ${pokemonType}`}>
            <h1>Sprites</h1>
        </div>
    );
}