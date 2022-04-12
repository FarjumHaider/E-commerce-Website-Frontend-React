import React from "react";
import { Link } from "react-router-dom";

const EmployeeHead = () => {

    return (
        <div>
            <Link className="button" to="/category/list">All Category</Link>
            <Link className="button" to="/add/category">Add Category</Link>
            <Link className="button" to="/product/list">All Product</Link>
            <Link className="button" to="/add/product">Add Product</Link>
            <Link className="button" to="/customer/list">Customer list</Link>
            <Link className="button" to="/order/list">Order list</Link>
        </div>
    );
};

export default EmployeeHead; 