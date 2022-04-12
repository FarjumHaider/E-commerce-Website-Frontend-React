import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import EmployeeHome from "./EmployeeHome";
const Dashboard = () => {
    let Dashboard = '';
    if (localStorage.getItem('role') === 'Admin') {
        Dashboard = (
            <Home></Home>
        )
    }
    else if (localStorage.getItem('role') === 'Employee') {
        Dashboard = (
            <EmployeeHome></EmployeeHome>
        )
    }
    else if (localStorage.getItem('role') === 'Customer') {
    
    }
    else{
    
    }
    return (
        <div>
            {Dashboard}
        </div>
    );
};

export default Dashboard; 