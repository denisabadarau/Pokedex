import React from "react";
import './Layout.css';
import '../../shared/shared.css';

export default function Layout(props) {
    return (
        <div className="Layout">
            <div className="LayoutContainer">
                <div className="LayoutHeader">
                    <a href="/">
                        <h1>Pokedex</h1>
                    </a>
                </div>
                <div className="LayoutContent">
                    {props.children}
                </div>
            </div>
        </div>
    );
}