import React, {useState} from "react";

import Pagination from 'react-bootstrap/Pagination'

export default function Paginate(props) {
    let [activePage,setActivePage]=useState(1)

    const handlePageChange = (pageNumber)=> {
        console.log ("pageNum",pageNumber)
        setActivePage(pageNumber)
    }
    
    return (
        // <div>
            <Pagination
             activePage={activePage}
             itemsCountPerPage={20}
             totalItemsCount={450}
             pageRangeDisplayed={5}
             onChange= {(pageNumber)=> handlePageChange(pageNumber)}
             itemClass="page-item"
             linkClass="page-link"
            />
            
        // </div>
    )
}





