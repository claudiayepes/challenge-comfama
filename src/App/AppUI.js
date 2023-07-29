import React from "react";
import { Header } from "../Header";
import { SearchAnime } from "../SearchAnime";
import { AnimeList } from "../AnimeList";

function AppUI(){
    return(
        <>
            <Header/>
            <SearchAnime/>
            <AnimeList/>
        </>

    );
}

export {AppUI};