import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import swal from 'sweetalert';

const PayingDue = () => {
    const history = useHistory();
    const [error, setError] = useState([]);

    const { id } = useParams();

    // const [empList, setEmpList] = useState([]);

    
    const [payDate, setPayDate] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [salary, setSalary] = useState("");
    const [previousPaid, setPreviousPaid] = useState("");
    const [due, setDue] = useState("");
    const [currentPaid, setCurrentPaid] = useState("");


    useEffect(() => {
        axios.get(`salary/paying/due/${id}`)
            .then(resp => {
                console.log(resp.data);
                // setAdmin(resp.data);

                setFname(resp.data.f_name);
                setLname(resp.data.l_name);
                setUsername(resp.data.uname);
                setPhone(resp.data.phone);
                setSalary(resp.data.salary);
                setDue(resp.data.due);
                setPreviousPaid(resp.data.paid);

                // console.log(gender);
            }).catch(err => {
                console.log(err);
            });
    }, []);


    const submitPayingDue = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('payDate', payDate);
        formData.append('fname', fname);
        formData.append('lname', lname);
        formData.append('username', username);
;
        formData.append('phone', phone);

        formData.append('salary', salary);
        formData.append('previousPaid', previousPaid);
        formData.append('due', due);
        formData.append('currentPaid', currentPaid);
        formData.append('id', id);

        axios.post("salary/paying/due", formData)
            .then(resp => {
                if (resp.data.status === 200) {
                    swal("Success", resp.data.message, "success")
                    console.log(resp.data);
                    setError([])
                    history.push('/salaty/paid/list');
;
                }
                else if (resp.data.status === 422) {
                    console.log(resp.data);
                    setError(resp.data.errors);
                }
                console.log(resp.data);
            }).catch(err => {
                console.log(err);
            });

    }

    return (
        <>
            <div className="container">
                
                <form>
                <div className="field">
                        <label>Payment date</label>
                        <input
                            type="date"
                            name="payDate"
                            value={payDate}
                            onChange={(e) => setPayDate(e.target.value)}
                        />
                        <span>{error.payDate}</span>
                    </div>

                    <div className="field">
                        <label>First name</label>
                        <input
                            type="text"
                            name="fname"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                        />
                        <span>{error.fname}</span>
                    </div>

                    <div className="field">
                        <label>Last name</label>
                        <input
                            type="text"
                            name="lname"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                        />
                        <span>{error.lname}</span>
                    </div>

                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <span>{error.username}</span>
                    </div>

                    


                    <div className="field">
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <span>{error.phone}</span>
                    </div>


                    <div className="field">
                        <label>Salary</label>
                        <input
                            type="text"
                            name="salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                        />
                        <span>{error.salary}</span>
                    </div>

                    <div className="field">
                        <label>Paid amount</label>
                        <input
                            type="text"
                            name="previousPaid"
                            value={previousPaid}
                            onChange={(e) => setPreviousPaid(e.target.value)}
                        />
                        <span>{error.previousPaid}</span>
                    </div>
                    <div className="field">
                        <label>Due</label>
                        <input
                            type="text"
                            name="due"
                            value={due}
                            onChange={(e) => setDue(e.target.value)}
                        />
                        <span>{error.amount}</span>
                    </div>

                    <div className="field">
                        <label>Enter amount</label>
                        <input
                            type="text"
                            name="currentPaid"
                            value={currentPaid}
                            onChange={(e) => setCurrentPaid(e.target.value)}
                        />
                        <span>{error.currentPaid}</span>
                    </div>


                </form>
                <button onClick={submitPayingDue}>Pay</button> 
            </div>

        </>

    )

}
export default PayingDue; 