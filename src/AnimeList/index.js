import React from "react";
import "./AnimeList.css";


function AnimeList({children}){

    return(
            <div className="catalog-container">
                {children}
            </div>

    );
}

export {AnimeList};