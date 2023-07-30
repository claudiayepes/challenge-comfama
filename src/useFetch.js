import { useState, useEffect } from "react";
import React from "react";
import { context } from "./Context";

export function useFetch(urlApi){
    const {searchValue, 
        setSearchValue,
        currentPage,
        setCurrentPage,
        } = React.useContext(context)
   

    //Estados
    const [data, setData]= React.useState([]);
    
    // const [currentPage, setCurrentPage] = React.useState(1);

    const loadSeriesList = async ()=> {
        fetch(`${urlApi}?q=${searchValue}&page=${currentPage}`)
        .then((response) => {response.json(); console.log(response)})
        .then((data) => {setData(data.data); console.log(data.data)})
    }

    useEffect(()=>{
        loadSeriesList();
    }, [setSearchValue])

    return {data};
}
