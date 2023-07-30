import React from "react";
import "./SearchAnime.css";
import { Context, context } from "../Context";

function SearchAnime({children}){
    const {
        searchValue,
        setSearchValue
    } = React.useContext(context);

    return(
        <div className="container">
            <input
                placeholder="Enter the anime title"
                className="searchAnime"
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
            {children}
        </div>

    );
}

export {SearchAnime};