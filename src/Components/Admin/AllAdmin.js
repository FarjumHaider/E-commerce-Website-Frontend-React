import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Head from "../Head";

const AllAdmin = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        AllAdminList();
    }, [])

    const AllAdminList = () => {
        axios.get("admin/list")
            .then(resp => {
                console.log(resp.data);
                setProducts(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }

// Delete Admin
    const deleteAdmin = (id) => {
        axios.get(`admin/delete/${id}`)
        // axios.get("http://127.0.0.1:8000/api/product/details/"+id+"/"+name)
            .then(resp => {
                    if(resp.data === 'Deleted')
                        {
                            AllAdminList();
                            console.log(resp.data);
                        }
                console.log(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }
    

    return (
        <>
        <Head></Head>
        <div className="container">
            <h1>Employess list</h1>

            <table id="tableDesign">
                <tr>
                    <th>Image</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Joining Date</th>
                    <th>Address</th>
                    <th colSpan={3}>Action</th>
                </tr>
                
                {
                    products.map(a => (
                        <tr >
                            <td>
                                <img src={`http://127.0.0.1:8000/storage/admin_images/${a.image}`} width="80px" height="90px" alt="" />
                            </td>
                            <td>{a.f_name}</td>
                            <td>{a.l_name}</td>
                            <td>{a.email}</td>
                            <td>{a.phone}</td>
                            <td>{a.dob}</td>
                            <td>{a.gender}</td>
                            <td>{a.joining_date}</td>
                            <td>{a.address}</td>
                            <td><Link className="buttonDetails" to={"/admin/details/" + a.id + "/" + a.f_name}><p>Details</p></Link></td>
                            <td><Link className="buttonEdit" to={"/edit/admin/" + a.id }><p>Edit</p></Link></td>
                            <td><button className="buttonDelete" onClick={() =>deleteAdmin(a.id)} ><p>Delete</p></button></td>   
                        </tr>
                    ))
                }
            </table>
        </div>
        </>
      
    )


}
export default AllAdmin; 