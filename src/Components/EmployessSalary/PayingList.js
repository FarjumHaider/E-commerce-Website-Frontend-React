import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PayingList = () => {

    const [empList, setEmpList] = useState([]);

    useEffect(() => {
        axios.get("employee/salary")
        .then(resp => {
            console.log(resp.data);
            setEmpList(resp.data);
        }).catch(err => {
            console.log(err);
        });
    }, [])




    

    return (
        <div className="container">
            <h1>Payment</h1>

            <table id="tableDesign">
            <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of Birth</th>
            <th>Salary</th>
            <th>Gender</th>
            <th>Joining Date</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
                
                {
                    empList.map(a => (
                        <tr >
                            <td>{a.f_name}</td>
                            <td>{a.l_name}</td>
                            <td>{a.email}</td>
                            <td>{a.phone}</td>
                            <td>{a.dob}</td>
                            <td>{a.salary}</td>
                            <td>{a.gender}</td>
                            <td>{a.joining_date}</td>
                            <td>{a.address}</td>
                            <td><Link className="buttonEdit" to={"/paying/salary/"+a.id }><p>Pay</p></Link></td>
   
                        </tr>
                    ))
                }
            </table>
        </div>
    )


}
export default PayingList; 