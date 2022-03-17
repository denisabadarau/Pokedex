import React from "react";
import './SpritesCard.css';

export default function SpritesCard({ pokemon }) {
    const pokemonType = pokemon.types[0].type.name;
    const sprites = pokemon.sprites;

    var filterSprites = Object.keys(sprites).reduce((acc, el) => {
        // removing all the sprites where value is null
        if (sprites[el] !== null)
            acc[el] = sprites[el];
        return acc;
    }, {})

    function SpriteContainer({ spriteTitle, spriteImage }) {
        const title = String(spriteTitle).replaceAll('_', ' ');

        return (
            <div className="spriteContainer">
                <div className="cardTitle">
                    {title}
                </div>
                <div className="spriteImage">
                    <img src={spriteImage} alt="sprite" />
                </div>
            </div>
        );

    }

    var pokemonSpritesData = [];
    for (const sprite in filterSprites) {
        if (sprite !== 'other') {
            pokemonSpritesData.push(<SpriteContainer spriteTitle={sprite} spriteImage={filterSprites[sprite]} />)

        }
    }

    return (
        <div className={`containerSpritesCard ${pokemonType}`}>
            <h1>Sprites</h1>
            <div className="sprites">
                {pokemonSpritesData}
            </div>
        </div>
    );
}