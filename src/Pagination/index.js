import React from "react";

function Pagination(
//     {
//     seriesPerPage,
//     currentPage,
//     setCurrentPage,
//     total,
//     setTotal,
//     hasNextPage,
//     setHasNextPage,
// }
    ){
    // const totalPages = Math.ceil(total/seriesPerPage);
    // const onPreviousPage = ()=>{
    //     setCurrentPage(currentPage - 1)
    // }
    // const onNextPage = ()=>{
    //     setCurrentPage(currentPage + 1)
    //     if (currentPage >= totalPages){
    //         setHasNextPage(false);
    //     }
    // }

    return(
        <div>
            
        </div>
        // <nav className="pagination is-centered" role="navigation" aria-label="pagination">
        //     <a className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviousPage}>Previous</a>
        //     <a className={`pagination-next ${!hasNextPage ? 'is-disabled' : ''}`} onClick={onNextPage}>Next page</a>
        //     <ul className="pagination-list">
        //         <li><span className="pagination-link is-current">Page {currentPage} of {totalPages}</span></li>
        //     </ul>
        // </nav>
    );
}

export {Pagination};