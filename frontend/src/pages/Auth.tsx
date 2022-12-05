import { useState } from "react";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";

export const Auth = () => {
    const [Auth, setAuth] = useState(true)

    return (
        <div>
            <h1>You Can Login Here</h1>
            <button onClick={() => setAuth(true)}>Login</button>
            <button onClick={() => setAuth(false)}>SignUp</button>
            <div>
                {Auth ? (
                    <div>
                        <Login />
                    </div>
                ) : (
                    <Signup />
                )}
            </div>
        </div>
    )
}; 