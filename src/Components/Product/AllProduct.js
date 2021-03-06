import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Head from "../Head";
import EmployeeHead from "../EmployeeHead";

const AllProduct = () => {

    const [products, setProducts] = useState([]);

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
        AllProductList();
    }, [])

    const AllProductList = () => {
        axios.get("product/list")
            .then(resp => {
                console.log(resp.data);
                setProducts(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }

    // Delete Product
    const deleteProduct = (id) => {
        axios.get(`product/delete/${id}`)
            .then(resp => {
                if (resp.data === 200) {
                    AllProductList();
                    console.log(resp.data);
                }
                console.log(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }


    return (
        
        <>
            {userDashboard}
            
            <div className="container">
                <h1>All Product</h1>

                <table id="tableDesign">
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>stock date</th>
                        <th colSpan={3}>Action</th>
                    </tr>

                    {
                        products.map(p => (
                            <tr>
                                <td>
                                    <img src={`http://127.0.0.1:8000/storage/product_images/${p.image}`} width="80px" height="90px" alt="" />
                                </td>
                                <td>{p.name}</td>
                                <td>{p.category.name}</td>
                                <td>{p.price}</td>
                                <td>{p.quantity}</td>
                                <td>{p.description}</td>
                                <td>{p.stock_date}</td>
                                <td><Link className="buttonDetails" to={"/product/details/" + p.id + "/" + p.name}><p>Details</p></Link></td>
                                <td><Link className="buttonEdit" to={"/edit/product/" + p.id}><p>Edit</p></Link></td>
                                <td><button className="buttonDelete" onClick={() => deleteProduct(p.id)} ><p>Delete</p></button></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </>

    )


}
export default AllProduct; 