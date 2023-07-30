import React, { useContext } from "react";
import { Header } from "../Header";
import { SearchAnime } from "../SearchAnime";
import { AnimeList } from "../AnimeList";
import { AnimeItem } from "../AnimeItem";
import { useState, useEffect } from "react";
import { context } from "../Context";

function AppUI(){
    const {searchValue, setSearchValue} = React.useContext(context);


    // const URLAPI2 = "https://localhost:7205/api/Jikan?q=naruto&page=1";
    // const URLAPI = "https://localhost:7205/api/Jikan";
 
    // const [data, setData]= useState([]);
    // useEffect(()=>{
    //     fetch(URLAPI)
    //     .then((response) => response.json())
    //     .then((data) => setData(data.data));
        
    // }, [])

    const URLAPI2 = "https://localhost:7205/api/Jikan?q=naruto&page=1";
    const URLAPI = "https://localhost:7205/api/Jikan";
 
    const [data, setData]= useState([]);
    useEffect(()=>{
        fetch(`${URLAPI}?q=${searchValue}&page=1`)
        .then((response) => response.json())
        .then((data) => setData(data.data));
        
    }, setSearchValue)

      //Estado derivado para filtrar en el array de data
      const animeFilter = data.filter(
        (item) =>{
        const text = item.title.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return text.includes(searchText)
        }
    )

    return(
        <>
            <Header/>
            <SearchAnime/>
            <AnimeList>
                {animeFilter.map((item)=>(
                    <AnimeItem key={item.mal_id}
                    src={item.images.jpg.large_image_url}
                    message={item.message}
                    />
                ))}
                
            </AnimeList>

            {/* <Header/>
            <SearchAnime/>
            <AnimeList>
                {data.map((item)=>(
                    <AnimeItem key={item.mal_id}
                    src={item.images.jpg.large_image_url}
                    message={item.message}
                    />
                ))}
                
            </AnimeList> */}
        </>

    );
}

export {AppUI};