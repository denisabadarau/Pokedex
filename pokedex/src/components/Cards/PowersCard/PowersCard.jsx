import React from "react";
import './PowersCard.css';

export default function PowersCard(pokemonType) {
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
        <div className={`containerPowersCard ${pokemonType.pokemonType}`}>
            {powerLine("HP", "95.3846px", "rgb(253, 250, 165)", "124")}
            {powerLine("Attack", "53.0769px", "rgb(253, 250, 165)", "69")}
            {powerLine("Defense", "180.154px", "rgb(171, 254, 163)", "255")}
            {powerLine("Speed", "25.3846px", "rgb(253, 165, 164)", "33")}
            {powerLine("Special Attack", "65.3846px", "rgb(253, 250, 165)", "85")}
            {powerLine("Special Defense", "144.615px", "rgb(171, 254, 163)", "188")}
        </div>
    );
}