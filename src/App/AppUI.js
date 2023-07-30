import React, { useContext } from "react";
import { Header } from "../Header";
import { SearchAnime } from "../SearchAnime";
import { AnimeList } from "../AnimeList";
import { AnimeItem } from "../AnimeItem";
import { useState, useEffect } from "react";
import { context } from "../Context";
import { Pagination } from "../Pagination";
import {Loading} from "../Loading";

function AppUI(){
    const {searchValue, 
        setSearchValue,
        currentPage,
        setCurrentpage,
        } = React.useContext(context);

    // const {data} = useFetch("https://localhost:7205/api/Jikan");

    const URLAPI2 = "https://localhost:7205/api/Jikan?q=naruto&page=1";
    const URLAPI = "https://localhost:7205/api/Jikan";
 
    //Estados
    const [data, setData]= React.useState([]);
    const [loading, setLoading] = React.useState(true);
    // const [currentPage, setCurrentPage] = React.useState(1);

    const loadSeriesList = async (searchValue, currentPage)=> {
        setLoading(true);
        fetch(`${URLAPI}?q=${searchValue}&page=${currentPage}`)
        .then((response) => response.json())
        .then((data) => {setData(data.data); console.log(data.data)})
        .finally(() => setLoading(false));
    }
   
    useEffect(()=>{
   
        loadSeriesList(searchValue, currentPage);
    }, [])


    //Función para realizar filtro de búsqueda
    const animeFilter = (searchValue, currentPage)=>{
        console.log(searchValue);
        loadSeriesList(searchValue, currentPage);
    }

    //Estado derivado para filtrar en el array de data
    // const animeFilter = data.filter(
    // (item) =>{
    // const text = item.title.toLowerCase();
    // const searchText = searchValue.toLowerCase();
    // return text.includes(searchText)
    // })

    return(
        <>
            <Header/>
            <SearchAnime>
                <button class="search-button" onClick={()=>{animeFilter(searchValue, 1);}}>Buscar</button>   
            </SearchAnime>
            {loading && <Loading/>}
            <AnimeList>
                
                {data.map((item)=>(
                    <AnimeItem key={item.mal_id}
                    src={item.images.jpg.large_image_url}
                    message={item.message}
                    />
                ))}
                
            </AnimeList>
            <Pagination  
            />       
            
        </>

    );
}

export {AppUI};