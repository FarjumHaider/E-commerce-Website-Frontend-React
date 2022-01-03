import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PayingList = () => {

    const [salatyList, setSalaryList] = useState([]);

    useEffect(() => {
        axios.get("salary/payed/list")
        .then(resp => {
            console.log(resp.data);
            setSalaryList(resp.data);
        }).catch(err => {
            console.log(err);
        });
    }, [])




    

    return (
        <div>
            <h1>Payment paid list</h1>

            <table id="tableDesign">
            <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>username</th>
            <th>Phone</th>
            <th>Salary</th>
            <th>Paid</th>
            <th>Due</th>
            <th>Payment Date</th>
            <th></th>
        </tr>
                
                {
                    salatyList.map(a => (
                        <tr >
                            <td>{a.f_name}</td>
                            <td>{a.l_name}</td>
                            <td>{a.uname}</td>
                            <td>{a.phone}</td>
                            <td>{a.salary}</td>
                            <td>{a.paid}</td>
                            <td>{a.due}</td>
                            <td>{a.payment_date}</td>
                            {a.due== 0? <td className="payAlready" >Already paid</td>: <td><Link className="buttonEdit" to={"/paying/due/" + a.id}><p>Pay due</p></Link></td> }
                          {/* if ({a.due} === 0) {
                                 <td  >Already paid</td>
                                
                            }
                            else
                            {
                                <td><Link className="buttonDetails" to={"/admin/details/" + a.id + "/" + a.f_name}><p>Pay</p></Link></td>
                            } */}
                            
  
                            
   
                        </tr>
                    ))
                }
            </table>
        </div>
    )


}
export default PayingList; 