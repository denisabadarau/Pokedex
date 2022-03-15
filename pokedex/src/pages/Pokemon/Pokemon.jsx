import React from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from 'react-router-dom';



export default function Pokemon() {
    const pokemonId = useParams().pokemonId;
    return (
        <Layout>
            <p>{`Pokemon ${pokemonId}`}</p>
        </Layout>
    );
}