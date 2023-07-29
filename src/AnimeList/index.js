import React from "react";
import "./AnimeList.css";

function AnimeList(){
    return(
        <div className="catalog-container">
            <div className="anime-item">
                <img src="https://i.pinimg.com/originals/c7/a7/b3/c7a7b33b5e78a5e8d36a5e11bc1a06d4.jpg"/>
                <p class="anime-recommendation">Recomendación del Anime 1</p>
            </div>
            <div className="anime-item">
                <img src="https://i.pinimg.com/originals/c7/a7/b3/c7a7b33b5e78a5e8d36a5e11bc1a06d4.jpg"/>
                <p class="anime-recommendation">Recomendación del Anime 2</p>
            </div>
            <div className="anime-item">
                <img src="https://i.pinimg.com/originals/c7/a7/b3/c7a7b33b5e78a5e8d36a5e11bc1a06d4.jpg"/>
                <p class="anime-recommendation">Recomendación del Anime 3</p>
            </div>
            <div className="anime-item">
                <img src="https://i.pinimg.com/originals/c7/a7/b3/c7a7b33b5e78a5e8d36a5e11bc1a06d4.jpg"/>
                <p class="anime-recommendation">Recomendación del Anime 4</p>
            </div>
            <div className="anime-item">
                <img src="https://i.pinimg.com/originals/c7/a7/b3/c7a7b33b5e78a5e8d36a5e11bc1a06d4.jpg"/>
                <p class="anime-recommendation">Recomendación del Anime 5</p>
            </div>
        </div>
    );
}

export {AnimeList};