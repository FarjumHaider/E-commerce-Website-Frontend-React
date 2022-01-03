import React from "react";
import { Link } from "react-router-dom";
const Head = () =>{
    return(
        <div>
            <Link className="button" to="/home">Home</Link>
            <Link className="button" to="/admin/list">All Employess</Link>
            <Link className="button" to="/add/admin">Add Employess</Link>
            <Link className="button" to="/category/list">All Category</Link>
            <Link className="button" to="/add/category">Add Category</Link>
            <Link className="button" to="/product/list">All Product</Link>
            <Link className="button" to="/add/product">Add Product</Link>
            <Link className="button" to="/employee/payment">Payment</Link>
            <Link className="button" to="/salaty/paid/list">Payed list</Link>
            <Link className="logoutBtn" to="/logout">Logout</Link>
        </div>
    )
}
export default Head; 