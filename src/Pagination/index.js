import React from "react";
import "./Pagination.css";

function Pagination(){
    return(
        <div className="pagination">
     
            <a href="#" className="page-link">Previous</a>
            <a href="#" className="page-link">Next page</a>

      </div>
    );
}

export {Pagination};