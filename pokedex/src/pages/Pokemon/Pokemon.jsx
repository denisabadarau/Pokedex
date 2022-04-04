import React from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from 'react-router-dom';
import MainCard from "../../components/Cards/MainCard/MainCard";
import './Pokemon.css';
import PowersCard from "../../components/Cards/PowersCard/PowersCard";
import EvolutionsCard from "../../components/Cards/EvolutionsCard/EvolutionsCard";
import SpritesCard from "../../components/Cards/SpritesCard/SpritesCard";
import ErrorPage from "../Error/Error";
import usePokemonById from "../../hooks/usePokemonById";
import usePokemonSpeciesById from "../../hooks/usePokemonSpeciesById";
import { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Button, Avatar } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';


const getPokemonByName = (name) => axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

const getPokemonById = (id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

const fetchEvolutionsChain = (chain) => axios.get(chain);

const getEvolutions = async (chain) => {
    const allEvolutions = [];
    const promiseArrayEvolutions = [];
    const base = getPokemonByName(chain?.species?.name);
    promiseArrayEvolutions.push(base);

    for (const evolution of chain?.evolves_to) {
        //2 nivels evolution
        const evolution1 = getPokemonByName(evolution?.species?.name);
        promiseArrayEvolutions.push(evolution1);

        if (evolution.evolves_to.length) {
            //3 nivels evolution
            for (const nextEvolution of evolution.evolves_to) {
                const evolution2 = getPokemonByName(nextEvolution?.species?.name);
                promiseArrayEvolutions.push(evolution2);
            }
        }
    }

    const response = await Promise.all(promiseArrayEvolutions);
    const evolutionsResponses = response.map((el) => el.data);
    const baseEvolution = evolutionsResponses.find((el) => el?.name === chain?.species?.name);

    //create the evolution nivels
    for (const evolution of chain?.evolves_to) {
        const evolution2 = evolutionsResponses.find((el) => el?.name === evolution?.species?.name);
        //2 nivels evolution
        const nivel = [baseEvolution, evolution2];

        if (evolution.evolves_to.length) {
            //3 nivels evololution
            for (const nextEvolution of evolution.evolves_to) {
                const evolution2 = evolutionsResponses.find((el) => el?.name === nextEvolution?.species?.name);
                nivel.push(evolution2);
            }
        }

        allEvolutions.push(nivel);
    }

    return allEvolutions;
}


export default function Pokemon() {
    const pokemonId = Number(useParams().pokemonId);
    const { pokemon } = usePokemonById(pokemonId);
    const { species } = usePokemonSpeciesById(pokemonId);
    const descriptions = species?.flavor_text_entries.filter((el) => el?.language?.name === 'en');
    const [currentDesc, setCurrentDesc] = useState();
    const [evolutions, setEvolutions] = useState([]);
    const [previousPokemon, setPreviousPokemon] = useState();
    const [nextPokemon, setNextPokemon] = useState();

    useEffect(async () => {
        //set the description
        if (species?.flavor_text_entries) {
            setCurrentDesc(descriptions?.[0]?.flavor_text);
        }

        //set the evolution chain
        if (species?.evolution_chain?.url) {
            const chain = await fetchEvolutionsChain(species?.evolution_chain?.url);
            const allEvolutions = await getEvolutions(chain?.data.chain);
            setEvolutions(allEvolutions)
        }
    }, [species]);

    useEffect(async () => {
        if (pokemonId > 1) {
            const prevProkemon = await getPokemonById(pokemonId - 1);
            setPreviousPokemon(prevProkemon.data);
            const nextPoke = await getPokemonById(pokemonId + 1);
            setNextPokemon(nextPoke.data);
        } else {
            const nextPoke = await getPokemonById(pokemonId + 1);
            setNextPokemon(nextPoke.data);
        }
    }, [pokemon])

    function renderPokemon(pokemon) {
        const pokemonType = pokemon.types[0].type.name;
        return (
            <Layout>
                <Stack direction='row' spacing={800}>
                    {previousPokemon &&
                        <a href={`/pokemon/${previousPokemon?.id}`}>
                            <Button leftIcon={<ArrowBackIcon />} colorScheme='teal' variant='ghost' size='lg'>
                                <Suspense fallback={<Spinner size="xs" />}>
                                    <Avatar
                                        bg='#fff7e8'
                                        size='md'
                                        src={previousPokemon?.['sprites']['other']['official-artwork']['front_default']}
                                    />
                                </Suspense>
                            </Button>
                        </a>
                    }
                    <a href={`/pokemon/${nextPokemon?.id}`}>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='ghost' size='lg'>
                            <Suspense fallback={<Spinner size="xs" />}>
                                <Avatar
                                    bg='#fff7e8'
                                    size='md'
                                    src={nextPokemon?.['sprites']['other']['official-artwork']['front_default']} />
                            </Suspense>

                        </Button>
                    </a>
                </Stack>
                <div className="firstContainer">
                    <MainCard pokemon={pokemon} species={species} />
                    <div className="descriptionContainer">
                        <div className="descriptionTitle">
                            Description
                        </div>
                        <label className="selectLabel">Game: </label>
                        <select className="selectDescription" onChange={(ev) => setCurrentDesc(ev.target.value)}>
                            {
                                descriptions?.map((el) => <option value={el?.flavor_text}>{el?.version?.name}</option>)
                            }
                        </select>
                        <div className="currentDescriotionContainer">
                            <p>{currentDesc}</p>
                        </div>
                        <div class="descriptionTitle">Stats</div>
                        <PowersCard pokemon={pokemon} />
                    </div>
                </div>
                <div className="descriptionTitle">Evolutions</div>
                <div className="secondContainer">
                    <EvolutionsCard pokemonType={pokemonType} evolutions={evolutions} />
                </div>
                <div className="descriptionTitle">Sprites</div>
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