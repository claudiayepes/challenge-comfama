import React from "react";
import "./SearchAnime.css";

function SearchAnime(){
    return(
        <div className="container">
            <input
                placeholder="Enter the anime title"
                className="searchAnime"
            />     
        </div>

    );
}

export {SearchAnime};