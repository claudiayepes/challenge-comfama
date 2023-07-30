import React from "react";
import "./Loading.css"

function Loading(){
    return(
        <div className="container-l">
            <div className="loading-container">
                <div className="spinner"></div>
            </div>
        </div>
    )
}

export {Loading};