import React from "react";
import './PowersCard.css';

export default function PowersCard(pokemonType) {
    function PowerLine({ title, width, color, number }) {
        return (
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
    }
    return (
        <div className={`containerPowersCard ${pokemonType.pokemonType}`}>
            <PowerLine title="HP" width="95.3846px" color="rgb(253, 250, 165)" number="124" />
            <PowerLine title="Attack" width="53.0769px" color="rgb(253, 250, 165)" number="69" />
            <PowerLine title="Defense" width="180.154px" color="rgb(171, 254, 163)" number="255" />
            <PowerLine title="Speed" width="25.3846px" color="rgb(253, 165, 164)" number="33" />
            <PowerLine title="Special Attack" width="65.3846px" color="rgb(253, 250, 165)" number="85" />
            <PowerLine title="Special Defense" width="144.615px" color="rgb(171, 254, 163)" number="188" />
        </div>
    );
}