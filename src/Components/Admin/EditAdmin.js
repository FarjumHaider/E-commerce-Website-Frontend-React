import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Head from "../Head";

const EditAdmin = () => {
    const history = useHistory();

    const { id } = useParams();

    const [admin, setAdmin] = useState([]);


    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConpassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState("");
    const [pic, setPic] = useState("");

    useEffect(() => {
        axios.get(`edit/admin/${id}`)
            .then(resp => {
                console.log(resp.data);
                setAdmin(resp.data);
                // console.log(admin);
                setFname(resp.data.f_name);
                setLname(resp.data.l_name);
                setUsername(resp.data.uname);
                setPassword(resp.data.password);
                setEmail(resp.data.email);
                setPhone(resp.data.phone);
                setDob(resp.data.dob);
                setGender(resp.data.gender);
                setJoiningDate(resp.data.joining_date);
                setAddress(resp.data.address);
                setPic(resp.data.image);
                console.log(gender);
            }).catch(err => {
                console.log(err);
            });
    }, []);



    const submitEditAdmin = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('fname', fname);
        formData.append('lname', lname);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('dob', dob);
        formData.append('gender', gender);
        formData.append('joiningDate', joiningDate);
        formData.append('address', address);
        formData.append('image', image);
        formData.append('id', id);

        axios.post("edit/admin", formData)
            .then(resp => {
                if (resp.data === 200) {
                    history.push('/admin/list');
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
            <h1>Edit Employess</h1>
                <form>
                    <div className="field">
                        <label>First name</label>
                        <input
                            type="text"
                            name="fname"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <label>Last name</label>
                        <input
                            type="text"
                            name="lname"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <input
                            type="text"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label>Confirm Password</label>
                        <input
                            type="text"
                            name="conpassword"
                            value={conpassword}
                            onChange={(e) => setConpassword(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label>Gender</label>
                        {/* <input
                            type="text"
                            name="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        /> */}
                        <input  
                            type="radio"
                            value="Male"
                            name="gender"
                            checked={gender === 'Male'}
                            onChange={(e) => setGender(e.target.value)}
                        /> Male

                        <input
                            type="radio"
                            value="Female"
                            name="gender"
                            checked={gender === 'Female'}
                            // { ...gender == 'Female' ? 'checked' : ''}
                            onChange={(e) => setGender(e.target.value)}
                        /> Female
                    </div>

                    <div className="field">
                        <label>Joining Date</label>
                        <input
                            type="date"
                            name="joiningDate"
                            value={joiningDate}
                            onChange={(e) => setJoiningDate(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <img src={`http://127.0.0.1:8000/storage/admin_images/${pic}`} width="80px" height="90px" alt="" />
                        <label>Upload image</label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>

                </form>
                <button className="buttonDetails" onClick={submitEditAdmin}>Edit</button> 
            </div>

        </>

    )

}
export default EditAdmin; 