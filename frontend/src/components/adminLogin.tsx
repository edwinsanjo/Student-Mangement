import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdminLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [viewPassword, setViewPassword] = useState(false);

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (!email) return toast.info("No Email Provided");
        if (!password) return toast.info("No Password Provided");
        let data = {
            email: email,
            password: password
        }
        axios.post("http://localhost:8080/api/login/admin", data)
            .then(response => {
                // if (!response) return
                console.log(response);
                return toast.success("success : " + response)
            })
            .catch(error => {
                console.error('There was an error: ', error);
                return toast.error(error.response.data)
            })
    }

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input required type={viewPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={() => setViewPassword(!viewPassword)}>eye</button>
            <br />
            <button onClick={(e) => onSubmit(e)}>Submit</button>
            <br />
            <button onClick={() => toast.error("Some Error Occured!")}>Toast</button>
        </div >
    )
};