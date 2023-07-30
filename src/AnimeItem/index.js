import React from "react";
import "./AnimeItem.css";

function AnimeItem(props){

    return(
        <div className="anime-item">
            <img src={props.src}/>
            <p className="anime-recommendation">{props.message}</p>
        </div>
    );
}

export{AnimeItem};