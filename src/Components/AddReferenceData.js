import './../App.css'
import React, {useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import Header from "./Header";


const AddReferenceData = () => {

    const navigate = useNavigate();

    const [addRow, setAddrow] = useState({});

    const handleChange = (e) => {
        setAddrow({
            ...addRow,
            [e.target.name]: e.target.value
        })
    }
    const isValid = Object.keys(addRow).length;
    const handleSaveRow = () => {
        if(isValid > 0){
            fetch("http://localhost:8080/addOrderbook",
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(addRow)
            })
            .then((res) => res.json())
            .then((data) => {
                setAddrow(data)
                let objValue = JSON.stringify(data)
                localStorage.setItem("EditedData", objValue);
                navigate("/referencedata")
            })
        }
        else {
            alert('Please fill all fields');
        }
           
    };
    const handlecancelRow = () => {
        navigate('/referencedata')
    }
    return (
        <>
        <Header />
        <div className="container">
            <div className='table-wrapper'>

                <h1 className='header'>Orderbook - Add Reference Data</h1>
                <form className='Form-updated-data' id="Form-updated-data">
                <div className="input-field-data">                      

                        <div>
                            <label>Del IBU: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="del_IBU" 
                            />
                        </div>
                        
                        <div>
                        <label  >Sales IBU: </label>
                        <input
                            type="text"
                            onChange={handleChange}
                            name="sales_IBU"
                        /></div>
                        
                        <div>
                        <label >Sales IBU Head: </label>
                        <input
                            type="text"
                            onChange={handleChange}
                            name='sales_IBU_Head'
                        /></div>

                        <div>
                        <label >Del IBU Head: </label>
                        <input

                            type="text"
                            name='del_IBU_Head'
                            onChange={handleChange}
                        /></div>

                        <div>
                        <label >Opportunity Description: </label>
                        <input
                            type="text"
                            name='opportunity_Description'
                            onChange={handleChange}
                        /></div>
                        
                        <div>
                        <label >Customer Name: </label>
                        <input
                            type="text"
                            name='customer_Name'
                            onChange={handleChange}
                        /></div>
                        
                        <div>
                        <label >OpportunityID: </label>
                        <input
                            type="text"
                            name='opportunity_ID'
                            onChange={handleChange}
                        /></div>
                        
                        <div>
                        <label >PO#: </label>
                        <input type="number" name='po'  onChange={handleChange}/>
                        </div>
                        
                        <div>
                        <label >PO Availability: </label>
                        <input
                            type="text"
                            name="po_Availability"
                        onChange={handleChange} /></div>

                        <div>
                        <label>PID: </label>
                        <input type="number" name="pid" onChange={handleChange} />
                        </div>

                        <div>
                        <label>Project Name: </label>
                        <input
                            type="text"
                            name='project_Name'
                            onChange={handleChange} /></div>

                        <div>
                        <label>TML#: </label>
                        <input type="text"  name='tml' onChange={handleChange} /></div>

                        <div>
                        <label>Account Name: </label>
                        <input

                            type="text"
                            name='account_Name' 
                            onChange={handleChange} /></div>

                        <div>
                        <label>Digital Flag: </label>
                        <input

                            type="text"
                            name='digital_Flag' 
                            onChange={handleChange} /></div>
                        
                        <div>
                            <label> Project vs Annuity: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="project_vs_Annuity" 
                            />
                        </div>
                        <div>
                        <label>Head Wind/Tail Wind: </label>
                        <input

                            type="text"
                            name='headwind_Tailwind'     
                            onChange={handleChange} /></div>
                        
                        <div>
                        <label>Dev/IMP/Supp: </label>
                        <input
                            type="text"
                            name='dev_IMP_Supp'
                            onChange={handleChange} /></div>
                        
                        <div>
                        <label>Technology: </label>
                        <input
                            type="text"
                            name='technology'
                            onChange={handleChange} /></div>
                        
                        <div>
                        <label>Competency: </label>
                        <input
                            type="text"
                            name='competency'
                            onChange={handleChange} /></div>
                        
                        <div>
                        <label>Pillar: </label>
                        <input type="text" name="pillar" onChange={handleChange} /></div>
                        
                        <div>
                        <label>vertical Name: </label>
                        <input
                            type="text"
                            name="vertical_Name"
                            onChange={handleChange} /></div>
                        
                        <div>
                        <label>GE/Non GE: </label>
                        <input
                            type="text"
                            name='ge_NonGE'
                            onChange={handleChange} /></div>

                        <div>
                        <label>Status as Per CASUM:</label>
                        <input
                            type="text"
                            name='status_CASUM'
                        onChange={handleChange} /></div>
                        
                        <div>
                        <label>PM: </label>
                        <input type="text"  name='pm' onChange={handleChange} /> </div>

                        <div>
                        <label>PGM: </label>
                        <input type="text"  name='pgm' onChange={handleChange} /> </div>

                        <div>
                        <label>BRM: </label>
                        <input type="text" name='brm' onChange={handleChange} /> </div>

                        <div>
                        <label>CDM/L2: </label>
                        <input type="text"  name='cdm_L2' onChange={handleChange} /> </div>
                        
                        <div>
                        <label>Business:</label>
                        <input
                            type="text"
                            name='business'
                            onChange={handleChange} /></div>

                        <div>
                        <label>Sub Business: </label>
                        <input
                            type="text"
                            name='sub_business'
                            onChange={handleChange} /></div>


                        <div>
                        <label>Total Contract Amount in USD: </label>
                        
                        <input
                            type="text"
                            name='total_Contract_Amount_in_USD'
                            onChange={handleChange} /></div>
                        
                        <div>
                        <label>PO Currency:</label>
                        <input
                            type="text"
                            name='po_Currency'
                            onChange={handleChange} /></div>

                        <div>
                        <label>End Date: </label>
                        <input
                            type="text"
                            name='end_date'
                            onChange={handleChange} /></div>

                        <div>
                        <label>Unbilled Amount: </label>
                        <input
                            type="text"
                            name='unbilled_Amount'
                            onChange={handleChange} /></div>
                             <div>
                            <label> Apr_23: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="apr_23" 
                            />
                        </div>
                        <div>
                            <label> May_23: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="may_23" 
                            />
                        </div>
                        <div>
                            <label> Jun_23: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="jun_23" 
                            />
                        </div>
                        <div>
                            <label> q1_24_net: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="q1_24_net" 
                            />
                        </div>
                        <div>
                            <label> Jul_23: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="jul_23" 
                            />
                        </div>
                        <div>
                            <label> Aug_23: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="aug_23" 
                            />
                        </div>
                        <div>
                            <label> Sep_23: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="sep_23" 
                            />
                        </div>
                        <div>
                            <label> q2_24_net: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="q2_24_net" 
                            />
                        </div>
                        <div>
                            <label> Oct_23: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="oct_23" 
                            />
                        </div>
                        <div>
                            <label> Nov_23: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="nov_23" 
                            />
                        </div>
                        <div>
                            <label> Dec_23: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="dec_23" 
                            />
                        </div>
                        <div>
                            <label> q3_24_net: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="q3_24_net" 
                            />
                        </div>
                        <div>
                            <label> Jan_24: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="jan_24" 
                            />
                        </div>
                        <div>
                            <label> Feb_24: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="feb_24" 
                            />
                        </div>
                        <div>
                            <label> Mar_24: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="mar_24" 
                            />
                        </div>
                        <div>
                            <label> q4_24_net: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="q4_24_net" 
                            />
                        </div>
                        <div>
                            <label> fy_23_24: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="fy_23_24" 
                            />
                        </div>
                        <div>
                            <label> remarks: </label>
                            <input 
                                type="text" 
                                onChange={handleChange} 
                                name="remarks" 
                            />
                        </div>
                    </div>
                <button type="button" onClick={handleSaveRow} className='update-btn'>Save</button>
                <button type="button" onClick={handlecancelRow} className='cancel-btn'>Cancel</button>
                </form>
            </div>

        </div>

    </>


    );

}


export default AddReferenceData





