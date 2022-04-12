
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Head from "../Head";
import EmployeeHead from "../EmployeeHead";

const CategoryDetail = () => {
    const { name } = useParams();
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    

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
        axios.get(`category/details/${id}/${name}`)
        // axios.get("http://127.0.0.1:8000/api/product/details/"+id+"/"+name)
            .then(resp => {
                console.log(resp.data);
                setDetails(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return ( 

        <>
        {userDashboard}
        
        <div className="container">
            <div className="card">
                <h1>Category details</h1>
                <img src={`http://127.0.0.1:8000/storage/admin_images/${details.image}`} width="180px" height="190px" alt="" />
                <h3>First name:{details.f_name}</h3>
                <h3>Last name:{details.l_name}</h3>
                <h3>Email:{details.email}</h3>
                <h3>Phone:{details.phone}</h3>
                <h3>Date of Birth:{details.dob}</h3>
                <h3>Gender:{details.gender}</h3>
                <h3>Joining Date:{details.joining_date}</h3>
                <h3>Address:{details.address}</h3>
            </div>
        </div>
        </>



    )

}
export default CategoryDetail;