import React from "react";
import './Error.css';
import Error from '../../images/Error.png';
import '../../shared/shared.css';

export default function ErrorPage() {
    return (
        <div className="ErrorPage">
            <div className="errorPageContainer">
                <div className="errorPageHeader">
                    <a href="/">
                        <h1>Pokedex</h1>
                    </a>
                </div>
                <div className="errorPageContent">
                    <p>Hi! I'm Snorlax. I'm blocking the path.</p>
                    <div className="errorPageImage">
                        <img src={Error} alt="error" />
                    </div>
                    <p>
                        Click
                        <a href="/"> here </a>
                        to go back.
                    </p>
                </div>
            </div>
        </div>
    );
}