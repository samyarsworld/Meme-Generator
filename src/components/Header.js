import React from "react";
import troll from "../shared/troll.png";

export default function Header() {
    return (
        <header className="header">
            <img src={troll} className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Dynamic Program</h4>
        </header>
    )
}