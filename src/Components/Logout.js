import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import swal from 'sweetalert';

const Logout = () => {
    
   const history = useHistory();
//    const [tokenKey, setTokenKey] = useState("");

    useEffect(() => {
        // setTokenKey(localStorage.getItem('key'));
        axios.get(["logout",localStorage.getItem('key')].join('/'))
            .then(resp => {
                if (resp.data.status === 200) {
                    swal("Success", resp.data.message, "success")
                    history.push('/');
                    console.log(resp.data);
                    
                }
                console.log(resp.data);

            }).catch(err => {
                console.log(err);
            });
    }, []);

    // const [error, setError] = useState([]);
    // const [nouser, setNouser] = useState([]);
    // const history = useHistory();

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    // const SubmitLogout = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData();


    //     axios.post("Logout", formData)
    //         .then(resp => {
    //             console.log(resp.data);
    //             // if (resp.data.status === 200) {
    //             //     // swal("Success", resp.data.message, "success")
    //             //     history.push('/home');
    //             //     console.log(resp.data);
    //             //     setError([]);
    //             // }
    //             if (resp.data.status === 422) {
    //                 console.log(resp.data);
    //                 setError(resp.data.errors);
    //                 setNouser([]);
    //             }
    //             else if (resp.data.status === 500) {
    //                 setNouser(resp.data);
    //                 console.log(nouser);
    //                 setError([]);

    //             } 
    //             else{
    //                 var tokenGet = resp.data;
    //                 var user = {userId : tokenGet.userid, access_token:tokenGet.token};
    //                 localStorage.setItem('user',JSON.stringify(user));
    //                 console.log(localStorage.getItem('user'));
    //                 history.push('/home');
    //                 setError([]);
    //             }
    //         }).catch(err => {
    //             console.log(err);
    //         });

    // }

    return (
     <></>
    )
}
export default Logout;

















