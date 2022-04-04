import React from "react";
import './PowersCard.css';

export default function PowersCard({ pokemon }) {
    const pokemonType = pokemon?.types[0]?.type?.name;

    function getColor(power) {
        if (power <= 50) {
            return "rgb(253, 250, 165)";
        } else {
            return "rgb(253, 165, 164)";
        }
    }
    const powerLine = (title, width, number) => (
        <div className="powerLine">
            <div className="powerLineTitle">
                {String(title).replaceAll('-', ' ')}
            </div>
            <div className="powerLineBar" style={{ backgroundColor: getColor(number), width: width }}>
            </div>
            <div className="powerLineNumber">
                {number}
            </div>
        </div>
    );

    return (
        <div className={`containerPowersCard ${pokemonType}`}>
            {
                pokemon.stats.map(el => powerLine(el?.stat?.name, el?.base_stat, el?.base_stat))
            }

        </div>
    );
}