import React from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from 'react-router-dom';
import Data from '../../data/data.json';
import MainCard from "../../components/Cards/MainCard/MainCard";
import './Pokemon.css';
import PowersCard from "../../components/Cards/PowersCard/PowersCard";
import EvolutionsCard from "../../components/Cards/EvolutionsCard/EvolutionsCard";
import SpritesCard from "../../components/Cards/SpritesCard/SpritesCard";
import ErrorPage from "../Error/Error";
import usePokemonById from "../../hooks/usePokemonById";


export default function Pokemon() {
    const pokemonId = Number(useParams().pokemonId);
    const { pokemon, error, pendind } = usePokemonById(pokemonId);
    console.log(pokemon);
    //const pokemon = Data.find(el => el.id === pokemonId);

    function renderPokemon(pokemon) {
        const pokemonType = pokemon.types[0].type.name;
        return (
            <Layout>
                <div className="firstContainer">
                    <MainCard pokemon={pokemon} />
                    <div className="descriptionContainer">
                        <h2>Description</h2>
                        <p>The diamond shape crystals on its body exper air as cold as -240 degrees Fahrenheit, surrounding its enemies and encasing them in ice</p>
                        <PowersCard pokemonType={pokemonType} />
                        <EvolutionsCard pokemonType={pokemonType} />
                    </div>
                </div>
                <div className="secondContainer">
                    <SpritesCard pokemon={pokemon} />
                </div>
            </Layout>
        );
    }

    return <div>
        {pokemon && renderPokemon(pokemon)}
        {!!!pokemon && <ErrorPage />}
    </div>
}