import { useState } from "react";
import { Navigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [viewPassword, setViewPassword] = useState(false);

    function validateEmail(elementValue: string) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(elementValue);
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
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