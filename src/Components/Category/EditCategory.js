import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Head from "../Head";
import EmployeeHead from "../EmployeeHead";

const EditCategory = () => {
    const history = useHistory();
    const { name } = useParams();
    const { id } = useParams();
    const [cname, setCname] = useState("");

    const [category, setCategory] = useState([]);


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
        axios.get(`edit/category/${id}/${name}`)
            .then(resp => {
                console.log(resp.data);
                setCategory(resp.data);
                setCname(resp.data.name);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    const submitEditCategory = (event) => {
        event.preventDefault();
        
        var obj = {
            "name": cname,
            "id":id
        }

        axios.post("edit/category", obj)
            .then(resp => {
            if(resp.data === 200)
            {
                history.push('/category/list');
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
        <h1>Update Category</h1>
        <form>
            
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        value={cname}
                        // name="cname"
                        onChange={(e)=>setCname(e.target.value)}
                    />
                </div>
        </form>
        <button className="buttonDetails" onClick={submitEditCategory}>Edit</button>
        </div>
        </>

    )

}
export default EditCategory; 