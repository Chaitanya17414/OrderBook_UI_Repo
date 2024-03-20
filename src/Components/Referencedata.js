import './../App.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import Pagination from './Pagination';
import Header from "./Header"
import ReferenceTable from './ReferenceTable';


const ReferenceData = () => {

    const navigate = useNavigate();
    const [records, setRecords] = useState([]);
    const [currentPage, setCurrentPage]= useState(1);
    const [recordsPerPage]= useState(10);
    let [clickCount, setClickCount]= useState(1);
    let [headerName, setHeaderName]= useState("");
    let [sortOrder, setSortOrder] = useState("desc");

    useEffect(() => {
         let tempStr = localStorage.getItem("LoginJSON");
    let tempObj = JSON.parse(tempStr);
        if(tempObj !== null) {
            fetch('http://localhost:8080/api/orderbook/data?loginId='+tempObj.loginId)

            .then(response => response.json())

            .then(data => {
                setRecords(data)
                let objValue= JSON.stringify(data)
                localStorage.setItem("OrderbookRecords",objValue);
            })
        } else {
            setRecords([]);
        }
    // eslint-disable-next-line 
    },[]);

    const handleEdit = (data) => {
        let objValue= JSON.stringify(data)
        localStorage.setItem("EditedData",objValue);
        navigate('/updaterecords')
        
    }
    const handleDelete =(id) => {
        fetch("http://localhost:8080/deleteOrderbook/"+id,
            {
                method:'DELETE'
            })
            .then((res) => {
                if (res.ok) {
                  const updatedrecords = records.filter((records) => records.id !== id);
                  setRecords(updatedrecords);
                  alert("Row "+id+" Deleted Successfully")
                }
              })
              .catch((error) => {
                console.error("Error deleting row:", error);
              });

    }   
//Get Current Page 

const indexOfLastOrderBook= currentPage * recordsPerPage;
const indexOfFirstOrderBook= indexOfLastOrderBook - recordsPerPage;

//Get the sliced data to records per page for UI  
const currentOrderBooks= records?.slice(indexOfFirstOrderBook, indexOfLastOrderBook);

//To get the num of pages as per the records shown
const numberOfPages= Math.ceil(records.length/recordsPerPage);

const handlePrevPage =() => {
    if(currentPage >1){
        setCurrentPage(currentPage - 1);
        }   

 }
 const handleNextPage =() => {
    if (currentPage < numberOfPages) {
        setCurrentPage(currentPage + 1);
        }
    
 }
 const handleApiCall = (headerName,sortOrder) => {
    fetch('http://localhost:8080/sorted?columnName='+headerName+'&sortOrder='+sortOrder)
    .then(response => response.json())
    .then(data => {
        setRecords(data)
    })
}

 const handleClicks=(tableHeaderName) => {
     setHeaderName(tableHeaderName)  
     if (headerName === tableHeaderName || headerName === '') {
        if (clickCount%2 !== 0) { 
            setClickCount(clickCount + 1);
            setSortOrder(sortOrder ==="asc" ? sortOrder = "desc" : sortOrder="asc");
        } else if(clickCount%2  === 0)  {
            setClickCount(clickCount - 1);
            setSortOrder(sortOrder ==="desc" ? sortOrder = "asc" : sortOrder="desc");
        }
       
      } else {
        clickCount=1;
        sortOrder="asc"
        setSortOrder(sortOrder)
      }

    handleApiCall(tableHeaderName,sortOrder);
}

    return (
        <div className="container reference-container">
             <Header />
             <div className='dashboard-data'>
                <h1 className='header dashboard-header'>Dashboard</h1>
                <div className='btn-adjustment'>    
                    <Link to="/addnewreferencedata"><button className='btn-upload btn-space'>Add New Row</button></Link>
                    <Link to="/orderbookfileupload"><button className='btn-upload'>Orderbook File Upload Here</button></Link>
                </div>
             </div>
           
        <div className='table-wrapper'>
            <ReferenceTable records={records} handleClicks={handleClicks} currentOrderBooks={currentOrderBooks}
            deleteRow={handleDelete} editRow={handleEdit} sortOrder={sortOrder} headerName={headerName} startIndex={indexOfFirstOrderBook}/>
        </div>
        {records.length > 0 ? (<Pagination currentPage={currentPage} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} numberOfPages={numberOfPages}/>):""}
    </div>
    );

}

 

export default ReferenceData
