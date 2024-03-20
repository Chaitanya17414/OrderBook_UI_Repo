const Pagination=({currentPage,handlePrevPage,handleNextPage,numberOfPages}) => {

    return ( 
        
        <div className="pagination">
            
            <a href="#" aria-label="Previous" onClick={handlePrevPage} className="prev-arrow">
                <span aria-hidden="true">&laquo;</span>
            </a> 
            <a href="#" className="currentpage-count">{currentPage}/{numberOfPages}</a>
            <a href="#" aria-label="Next" onClick={handleNextPage} className="next-arrow">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </div>
     );
}

export default Pagination;