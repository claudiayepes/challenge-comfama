import React from "react";

const context = React.createContext();

function AnimeProvider({children}){
    
    const [searchValue, setSearchValue] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
  
    return(
        <context.Provider value={{
            searchValue,
            setSearchValue,
            currentPage,
            setCurrentPage,
            }}>
            {children}
        </context.Provider>
    );
}

export {AnimeProvider, context};