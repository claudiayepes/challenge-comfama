import React from "react";

const context = React.createContext();

function AnimeProvider({children}){
    
    const [searchValue, setSearchValue] = React.useState('');
  
    return(
        <context.Provider value={{
            searchValue,
            setSearchValue,
            }}>
            {children}
        </context.Provider>
    );
}

export {AnimeProvider, context};