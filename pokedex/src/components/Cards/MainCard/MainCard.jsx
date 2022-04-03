import React from "react";
import TypeCard from "../TypeCard/TypeCard";
import './MainCard.css';

export default function MainCard({ pokemon, species }) {
    const image = pokemon.sprites?.other?.['official-artwork']?.front_default;
    let id = String(pokemon.id).padStart(3, '0');
    const pokemonType = pokemon.types[0].type.name;

    function DetailsContainer({ detailsTitle, detailsContent }) {
        return (
            <div className="detailsContainer">
                <div className="detailsContainerTitle">
                    {detailsTitle}
                </div>
                <div className="detailsContainerContent">
                    {detailsContent}
                </div>
            </div>

        );
    }

    return (
        <div className={`containerMainCard ${pokemonType}`}>
            <div className="headerMainCard">
                <div className="infoHeader">
                    <div className="cardTitle">
                        <h1>{pokemon.name}</h1>
                    </div>
                    <h2>#{id}</h2>
                </div>
                <div className="types">
                    {pokemon.types.map((type) => <TypeCard type={type} />)}

                </div>
            </div>
            <div className="pokemonImageCard">
                <img src={image} alt="pokemon" />
            </div>
            <div className="footerMainCard">
                <DetailsContainer detailsTitle="Weight" detailsContent={`${pokemon.weight / 10} kg`}></DetailsContainer>
                <DetailsContainer detailsTitle="Height" detailsContent={`${pokemon.height / 10} meters`}></DetailsContainer>
                <DetailsContainer detailsTitle="Color" detailsContent={species?.color?.name}></DetailsContainer>
                <DetailsContainer detailsTitle="Habitat" detailsContent={species?.habitat?.name}></DetailsContainer>
                <DetailsContainer detailsTitle="Shape" detailsContent={species?.shape?.name}></DetailsContainer>
            </div>
        </div>
    );
}