import axios from "axios";
import { useState, useEffect } from "react";

function usePokemonByName(name) {
    const [pokemon, setPokemon] = useState();
    const [error, setError] = useState();
    const [isPending, setIsPending] = useState(true);
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    const getPokemon = async () => {
        try {
            const response = await axios.get(url);
            setPokemon(response.data);
            setIsPending(false);
        } catch (err) {
            setError(err);
            setIsPending(false);
        }
    }

    useEffect(() => {
        getPokemon();
    }, [url]);

    return { pokemon, error, isPending };
}

export default usePokemonByName;