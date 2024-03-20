import './../App.css'
import React from 'react'
import { GoChevronDown,GoChevronUp } from "react-icons/go";
import { BsFillPencilFill,BsFillXOctagonFill } from 'react-icons/bs';



const ReferenceTable = ({records,deleteRow,editRow,handleClicks,sortOrder,headerName,currentOrderBooks,startIndex}) => {
    
    return (
        <div>
             {records.length > 0 ? 
            (<table className='table'>

                <thead>
                    <tr>
                        <th className='thead-id' onClick={() => handleClicks('id')}>ID {
                        headerName  ==="id" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName  ==="id" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th >Del IBU </th>
                        <th >Sales IBU </th>
                        <th >Sales IBU Head </th>
                        <th >Del IBU Head </th>
                        <th onClick={() => handleClicks('Opportunity_Description')}>Opportunity Description 
                        {headerName  ==="Opportunity_Description" && sortOrder  ==="desc" ? <GoChevronDown />:""}{
                        headerName  ==="Opportunity_Description" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th onClick={() => handleClicks('Customer_Name')}>Customer Name 
                        {headerName ==="Customer_Name" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Customer_Name" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th>Opportunity ID</th>
                        <th onClick={() => handleClicks('PO')}>PO#
                        {headerName ==="PO" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="PO" && sortOrder  ==="asc" ? <GoChevronUp />:""}</th>
                        <th>PO Availability</th>
                        <th onClick={() => handleClicks('PID')}>PID
                        {headerName ==="PID" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="PID" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th onClick={() => handleClicks('Project_Name')}>Project Name
                        {headerName ==="Project_Name" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Project_Name" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th>TML#</th>
                        <th onClick={() => handleClicks('Account_Name')}>Account Name
                        {headerName ==="Account_Name" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Account_Name" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th onClick={() => handleClicks('Digital_Flag')}>Digital Flag
                        {headerName ==="Digital_Flag" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Digital_Flag" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th onClick={() => handleClicks('Project_vs_Annuity')}>Project vs Annuity
                        {headerName ==="Project_vs_Annuity" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Project_vs_Annuity" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th onClick={() => handleClicks('Headwind_Tailwind')}>Head Wind/Tail Wind
                        {headerName ==="Headwind_Tailwind" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Headwind_Tailwind" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th onClick={() => handleClicks('Dev_IMP_Supp')}>Dev / IMP / Supp
                        {headerName ==="Dev_IMP_Supp" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Dev_IMP_Supp" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th onClick={() => handleClicks('TechnologstartIndexy')}>Technology
                        {headerName ==="Technology" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Technology" && sortOrder  ==="asc" ? <GoChevronUp />:""}</th>
                        <th onClick={() => handleClicks('Competency')}>Competency
                        {headerName ==="Competency" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Competency" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th onClick={() => handleClicks('Pillar')}>Pillar
                        {headerName ==="Pillar" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Pillar" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th>Vertical Name</th>
                        <th>GE/Non GE</th>
                        <th onClick={() => handleClicks('Status_CASUM')}>Status as per CASUM
                        {headerName ==="Status_CASUM" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Status_CASUM" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th onClick={() => handleClicks('PM')}>PM
                        {headerName ==="PM" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="PM" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th onClick={() => handleClicks('PGM')}>PGM
                        {headerName ==="PGM" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="PGM" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th onClick={() => handleClicks('BRM')}>BRM 
                        {headerName ==="BRM" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="BRM" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th>CDM/L2 </th>
                        <th onClick={() => handleClicks('Business')}>Business
                        {headerName ==="Business" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Business" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th onClick={() => handleClicks('Sub_business')}>Sub business
                        {headerName ==="Sub_business" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Sub_business" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th onClick={() => handleClicks('Total_Contract_Amount_in_USD')}>Total Contract Amount in USD
                        {headerName ==="Total_Contract_Amount_in_USD" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="Total_Contract_Amount_in_USD" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th>PO Curency</th>
                        <th onClick={() => handleClicks('End_date')}>End Date
                        {headerName ==="End_date" && sortOrder  ==="desc" ? <GoChevronDown />:""}
                        {headerName ==="End_date" && sortOrder  ==="asc" ? <GoChevronUp />:""}
                        </th>
                        <th>Unbilled Amount (Excluding POC + JV)</th>
                        <th>Apr-23</th>
                        <th>May-23</th>
                        <th>Jun-23</th>
                        <th>Q1-24_Net</th>
                        <th>Jul-23</th>
                        <th>Aug-23</th>
                        <th>Sept-23</th>
                        <th>Q2-24_Net</th>
                        <th>Oct-23</th>
                        <th>Nov-23</th>
                        <th>Dec-23</th>
                        <th>Q3-24_Net</th>
                        <th>Jan-24</th>
                        <th>Feb-24</th>
                        <th>Mar-24</th>
                        <th>Q4-24_Net</th>
                        <th>FY(23-24)</th>
                        <th>Remarks</th>

                        <th>Edit Action</th>

                        <th>Delete Action</th>

                    </tr> 

                </thead>

                <tbody>
                
                    {currentOrderBooks.map((item,key) => (
                        <tr className='truncate' key={key}>

                            <td className='tdata-id'>{item.id}</td>

                            <td title={item.del_IBU} >{item.del_IBU}</td>

                            <td title={item.sales_IBU} >{item.sales_IBU}</td>

                            <td title={item.sales_IBU_Head} >{item.sales_IBU_Head}</td>

                            <td title={item.del_IBU_Head} >{item.del_IBU_Head}</td>

                            <td title={item.opportunity_Description} >{item.opportunity_Description}</td>

                            <td title={item.customer_Name} >{item.customer_Name}</td>

                            <td title={item.opportunity_ID} >{item.opportunity_ID}</td>

                            <td title={item.po} >{item.po}</td>

                            <td title={item.po_availability} >{item.po_availability}</td>

                            <td title={item.pid} >{item.pid}</td>

                            <td title={item.project_Name} >{item.project_Name}</td>

                            <td title={item.tml} >{item.tml}</td>

                            <td title={item.account_Name} >{item.account_Name}</td>

                            <td title={item.digital_Flag} >{item.digital_Flag}</td>

                            <td title={item.project_vs_Annuity} >{item.project_vs_Annuity}</td>

                            <td title={item.headwind_Tailwind} >{item.headwind_Tailwind}</td>

                            <td title={item.dev_IMP_Supp} >{item.dev_IMP_Supp}</td>

                            <td title={item.technology} >{item.technology}</td>

                            <td title={item.competency} >{item.competency}</td>

                            <td title={item.pillar} >{item.pillar}</td>

                            <td title={item.vertical_Name} >{item.vertical_Name}</td>

                            <td title={item.ge_nonGE} >{item.ge_nonGE}</td>

                            <td title={item.status_CASUM} >{item.status_CASUM}</td>

                            <td title={item.pm} >{item.pm}</td>

                            <td title={item.pgm} >{item.pgm}</td>

                            <td title={item.brm} >{item.brm}</td>

                            <td title={item.cdm_L2} >{item.cdm_L2}</td>

                            <td title={item.business} >{item.business}</td>

                            <td title={item.sub_business} >{item.sub_business}</td>

                            <td title={item.total_Contract_Amount_in_USD} >{item.total_Contract_Amount_in_USD}</td>

                            <td title={item.po_Currency} >{item.po_Currency}</td>

                            <td title={item.end_date} >{item.end_date}</td>

                            <td title={item.unbilled_Amount} >{item.unbilled_Amount}</td>

                            <td title={item.apr_23} >{item.apr_23}</td>

                            <td title={item.may_23} >{item.may_23}</td>

                            <td title={item.jun_23} >{item.jun_23}</td>

                            <td title={item.q1_24_net} >{item.q1_24_net}</td>

                            <td title={item.jul_23} >{item.jul_23}</td>

                            <td title={item.aug_23} >{item.aug_23}</td>

                            <td title={item.sep_23} >{item.sep_23}</td>

                            <td title={item.q2_24_net} >{item.q2_24_net}</td>

                            <td title={item.oct_23} >{item.oct_23}</td>

                            <td title={item.nov_23} >{item.nov_23}</td>

                            <td title={item.dec_23} >{item.dec_23}</td>

                            <td title={item.q3_24_net} >{item.q3_24_net}</td>

                            <td title={item.jan_24} >{item.jan_24}</td>

                            <td title={item.feb_24} >{item.feb_24}</td>

                            <td title={item.mar_24} >{item.mar_24}</td>

                            <td title={item.q4_24_net} >{item.q4_24_net}</td>

                            <td title={item.fy_23_24} >{item.fy_23_24}</td>

                            <td title={item.remarks} >{item.remarks}</td>


                            <td  ><span className='actions' onClick={() => editRow(item)}><BsFillPencilFill /></span></td>
                            <td  ><span className='actions' onClick={() => deleteRow(item.id)}><BsFillXOctagonFill /></span></td>
                        </tr>
                    ))}

                </tbody>
             </table>):(<h2 className='data-error'>No Records Found</h2>)}

        </div>
    );

}

 

export default ReferenceTable

 