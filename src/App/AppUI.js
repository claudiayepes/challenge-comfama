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
        } = React.useContext(context);
 
    //Estados de la data
    const [data, setData]= React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError]  = React.useState(null);
    //Pagina actual
    const [currentPage, setCurrentPage] = React.useState(1);
    //Número de items por página
    const [seriesPerPage, setSeriesPerPage] = React.useState(25);
    //Total de items
    const [total, setTotal] = React.useState(50);
    //Estado del botón Next de la paginación
    const [hasNextPage, setHasNextPage] = React.useState(true);
    
    //Consumo del API interna
    const URLAPI = "https://localhost:7205/api/Jikan";
    const loadSeriesList = async (searchValue, currentPage)=> {
        setLoading(true);
        fetch(`${URLAPI}?q=${searchValue}&page=${currentPage}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data.data); 
            setSeriesPerPage(data.pagination.items.per_page);
            setTotal(data.pagination.items.total);
            console.log(data.pagination.has_next_page);
        })
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
    //Funciones para paginar
    const totalPages = Math.ceil(total/seriesPerPage);
    const onPreviousPage = ()=>{
        setCurrentPage(currentPage - 1);
        animeFilter(searchValue, currentPage);
    }
    const onNextPage = ()=>{
        alert("hola");
        setCurrentPage(currentPage + 1)
        if (currentPage >= totalPages){
            setHasNextPage(false);
        }
        animeFilter(searchValue, currentPage);
    }

    return(
        <>
            <Header/>
            <SearchAnime>
                <button className="search-button" onClick={()=>{animeFilter(searchValue, 1);}}>Buscar</button>   
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
            {/* <Pagination seriesPerPage={seriesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} 
            total={total}
            setTotal={setTotal}
            hasNextPage={hasNextPage}
            setHasNextPage={setHasNextPage}
            />  */}
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <a className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} 
            onClick={()=>(onPreviousPage())}>Previous</a>

            <a className={`pagination-next ${!hasNextPage ? 'is-disabled' : ''}`} 
            onClick={()=>(onNextPage())}>Next page</a>
            
            <ul className="pagination-list">
                <li><span className="pagination-link is-current">Page {currentPage} of {totalPages}</span></li>
            </ul>
        </nav>      
            
        </>

    );
}

export {AppUI};