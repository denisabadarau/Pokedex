import React from "react";
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import Data from '../../data/data.json';
import './Home.css';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const pokemons = Data;

    const renderPokemonCard = pokemons.filter((val) => {
        if (searchTerm === "") {
            return val;
        } else if (val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val;
        }
    }).map((pokemon) => (
        <Grid item key={pokemon.id} xs={12} md={6} lg={4}>
            <a href={`/pokemon/${pokemon.id}`}>
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            </a>
        </Grid>
    ));

    return (
        <div className="Home">
            <div className="homeContainer">
                <div className="homeHeader">
                    <h1>Pokedex</h1>
                    <SearchBar
                        placeholder="Search pokemon name..."
                        handleChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                </div>
                <div className="pokedexContainer">
                    <Grid container>
                        {renderPokemonCard}
                    </Grid>
                </div>
            </div>
        </div>
    );
}