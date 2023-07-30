import React from "react";
import "./Header.css"

function Header(){
    return(
        <div className="title-container">
            <h1 className="main-title">Welcome to the world's <span className="anime-catalog">anime catalog!</span></h1>
        </div>
    );
}

export {Header}
