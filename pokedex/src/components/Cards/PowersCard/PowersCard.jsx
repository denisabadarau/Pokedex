import React from "react";
import './PowersCard.css';

export default function PowersCard({ pokemon }) {
    const pokemonType = pokemon?.types[0]?.type?.name;
    const powerLine = (title, width, color, number) => (
        <div className="powerLine">
            <div className="powerLineTitle">
                {title}
            </div>
            <div className="powerLineBar" style={{ backgroundColor: color, width: width }}>
            </div>
            <div className="powerLineNumber">
                {number}
            </div>
        </div>
    );

    return (
        <div className={`containerPowersCard ${pokemonType}`}>
            {
                pokemon.stats.map(el => powerLine(el?.stat?.name, el?.base_stat, "rgb(253, 250, 165)", el?.base_stat))
            }

        </div>
    );
}