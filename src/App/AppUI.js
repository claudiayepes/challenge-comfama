import React, { useContext } from "react";
import { Header } from "../Header";
import { SearchAnime } from "../SearchAnime";
import { AnimeList } from "../AnimeList";
import { AnimeItem } from "../AnimeItem";
import { useState, useEffect } from "react";
import { context } from "../Context";
import {Loading} from "../Loading";
import { ErrorMessage } from "../ErrorMessage";

function AppUI(){
    const {searchValue, 
        setSearchValue,
        } = React.useContext(context);
 
    //Estados de la data
    const [data, setData]= React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError]  = React.useState(null);
    //Pagina actual
    const [currentPage, setCurrentPage] = React.useState(1);
    //Número de items por página
    const [seriesPerPage, setSeriesPerPage] = React.useState(10);
    //Total de items
    const [total, setTotal] = React.useState(0);
    
    //Consumo del API interna
    const URLAPI = "https://localhost:7205/api/Jikan";
    // const URLAPI = "https://jikan.azurewebsites.net/api/jikan";
    
    const loadSeriesList = async (searchValue, currentPage)=> {
        setLoading(true);
        
        await fetch(`${URLAPI}?q=${searchValue}&page=${currentPage}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data.data); 
            setSeriesPerPage(data.pagination.items.per_page);
            setTotal(data.pagination.items.total);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }

    useEffect(()=>{
         loadSeriesList(searchValue, currentPage);
    }, [currentPage])


    //Función para realizar filtro de búsqueda
    const animeFilter = (searchValue, currentPage)=>{
        loadSeriesList(searchValue, currentPage);
        setCurrentPage(currentPage);
   }

    //Funciones para paginar
    const totalPages = Math.ceil(total/seriesPerPage);
    const onPreviousPage = ()=>{
        setCurrentPage(currentPage - 1);
        console.log(currentPage);
    }

    const onNextPage = ()=>{
        setCurrentPage(currentPage + 1)
        console.log(currentPage);
    }

    return(
        <>
            <Header/>
            <SearchAnime>
                <button className="search-button" onClick={()=>{animeFilter(searchValue, 1);}}>Search</button>   
            </SearchAnime>
            <br/>
            {error && <ErrorMessage/>}
            {loading && <Loading/>}
            <AnimeList>
                
                {data.map((item)=>(
                    <AnimeItem key={item.mal_id}
                    src={item.images.jpg.large_image_url}
                    message={item.message}
                    />
                ))}
                
            </AnimeList>
            <div className="pagination">
                <div className="btn-container">
                    <button className={`previous-button ${currentPage === 1 ? 'blocked-button' : ''}`} onClick={onPreviousPage}>Previous</button>
                        <span className="page-text">Page {currentPage} of {totalPages}</span>
                    <button className={`next-button ${currentPage === totalPages ? 'blocked-button' : ''}`} onClick={onNextPage}>Next page</button>
                </div>
            </div>  
    
            
        </>

    );
}

export {AppUI};