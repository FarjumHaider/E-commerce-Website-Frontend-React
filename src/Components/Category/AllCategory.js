import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Head from "../Head";
import EmployeeHead from "../EmployeeHead"

const AllCategory = () => {

    const [categories, setCategories] = useState([]);

    let userDashboard;
    if (localStorage.getItem('role') === 'Admin') {
        userDashboard = (
            <Head></Head>
        )
    }
    else if (localStorage.getItem('role') === 'Employee') {
        userDashboard = (
            <EmployeeHead></EmployeeHead>
        )
    }


    useEffect(() => {
        AllCategoryList();
    }, [])

    const AllCategoryList = () => {
        axios.get("category/list")
            .then(resp => {
                console.log(resp.data);
                setCategories(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }

   // Delete Category
    const deleteCategory = (id) => {
        axios.get(`category/delete/${id}`)
            .then(resp => {
                    if(resp.data === 'Deleted')
                        {
                            AllCategoryList();
                            console.log(resp.data);
                        }
            }).catch(err => {
                console.log(err);
            });
    }


    return (
        <>
        {userDashboard}
        <div className="container">
             <h1>Category list</h1>

            <table id="tableDesign">
                <tr>
                    <th>Name</th>
                    <th colSpan={2}>Action</th>
                    {/* <th></th> */}
                </tr>

                {
                    categories.map(c => (
                        <tr>
                            <td>{c.name}</td>
                            <td><Link className="buttonEdit" to={"/edit/category/" + c.id + "/" + c.name}><p>Edit</p></Link></td>
                            <td><button className="buttonDelete" onClick={() =>deleteCategory(c.id)} ><p>Delete</p></button></td>   
                        </tr>
                    ))
                }
            </table>
        </div>
        </>

    )


}
export default AllCategory; 