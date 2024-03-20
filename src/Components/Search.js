import React,{useState}from 'react';
import SearchResults from './SearchResults';
import Header from "./Header"

const Search = () => {
    
    let [searchRecords, setSearchRecords]= useState({});
    let [recordsData,setRecordsData] = useState({});
    const handlecancelSearch =() => {
        setSearchRecords({});
        document.querySelectorAll("input").forEach((input) => {
            input.value = "";
        });
    }
    const handleOnChange = (e) => {
        setSearchRecords({
            ...searchRecords,
            [e.target.name]: e.target.value
        })
    }
   
    const isValid = Object.keys(searchRecords).length;
    const handleSearch = () => {
        let tempStr = localStorage.getItem("LoginJSON");
        let tempObj = JSON.parse(tempStr);
        if(isValid > 0){
            if(tempObj!= null) {
                fetch("http://localhost:8080/search",
                    {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(searchRecords)
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        setRecordsData(data)
                    })
            }
            else {
                setRecordsData([])
            }
        }
        else {
            alert('Please fill all fields');
        }
           
    };
    return (
        <>
        <Header />
        <div className="container">
        <div className='table-wrapper'>

            <h1 className='header'>Search Orderbook Data Here</h1>
            <form className='Form-updated-data'>
                <div className="input-field-data">

                    <div>
                        <label>PO#: </label>
                        <input 
                            
                            type="text" 
                            name="PO" 
                            onChange={(e) =>handleOnChange(e)}
                        />
                    </div>
                    <div>
                        <label>PGM: </label>
                        <input 
                            
                            type="text" 
                            name="PGM" 
                            onChange={(e) =>handleOnChange(e)}
                        />
                    </div>
                    
                    <div>
                    <label  >Opportunity Description: </label>
                    <input
                        
                        type="text"
                        name="Opportunity_Description"
                        onChange={(e) =>handleOnChange(e)}
                    /></div>
                    
                    <div>
                    <label >Project Name: </label>
                    <input
                        
                        type="text"
                        name='Project_Name'
                        onChange={(e) =>handleOnChange(e)}
                    /></div>

                    <div>
                    <label >Dev/IMP/Supp: </label>
                    <input
                        
                        type="text"
                        name='Dev_IMP_Supp'
                        onChange={(e) =>handleOnChange(e)}
                    /></div>

                    <div>
                    <label >Technology: </label>
                    <input
                        
                        type="text"
                        name='Technology'
                        onChange={(e) =>handleOnChange(e)}
                    /></div>
                    
                    <div>
                    <label >Customer Name: </label>
                    <input
                        
                        type="text"
                        name='Customer_Name'
                        onChange={(e) =>handleOnChange(e)}
                    /></div>
                    
                    <div>
                    <label >Project vs Annuity: </label>
                    <input
                        
                        type="text"
                        name='Project_vs_Annuity'
                        onChange={(e) =>handleOnChange(e)}
                    /></div>
                    
                    <div>
                    <label >Account Name: </label>
                    <input 
                        
                         type="text"  
                         name='Account_Name'   
                         onChange={(e) =>handleOnChange(e)}/>
                    </div>
                    
                    <div>
                    <label >PO Availability: </label>
                    <input
                        
                        type="text"
                        name="po_availability" 
                        onChange={(e) =>handleOnChange(e)}
                        /></div>

                    <div>
                    <label>PID: </label>
                    <input 
                        
                        type="number"  
                        name="PID"  
                        onChange={(e) =>handleOnChange(e)} />
                    </div>
                </div>
                <button type="button" onClick={handleSearch} className='update-btn'>Search</button>
                <button type="button" onClick={handlecancelSearch} className='cancel-btn'>Cancel</button>
            </form>
            {recordsData?.length >0? 
                <SearchResults SearchJSON={searchRecords} SearchDisplayRecords={recordsData}/>:""}
            {searchRecords.length !== 0 && recordsData?.length === 0 ?  (<h2 className='data-error'>No Search Results Found</h2>):"" }
           
        </div>

    </div>

    </>


    );
};

export default Search;