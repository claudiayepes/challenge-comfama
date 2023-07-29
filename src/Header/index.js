import React from "react";
import "./Header.css"

function Header(){
    return(
        <div className="title-container">
            <h1 className="main-title">Bienvenido al <span className="anime-catalog">catálogo de ánime</span> del mundo</h1>
        </div>
    );
}

export {Header}