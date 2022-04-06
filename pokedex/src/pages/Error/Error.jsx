import React from "react";
import Error from '../../images/Error.png';
import Layout from "../../components/Layout/Layout";
import './Error.css';

export default function ErrorPage() {
    return (
        <Layout>
            <p>Hi! I'm Snorlax. I'm blocking the path.</p>
            <div className="errorPageImage">
                <img src={Error} alt="error" />
            </div>
            <p>
                Click
                <a href="/"> here </a>
                to go back.
            </p>
        </Layout>
    );
}