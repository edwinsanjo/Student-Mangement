import { useState } from "react";
import { LoginStudent } from "../components/LoginStudent";
import { SignupStudent } from "../components/SignupStudent";

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
                        <LoginStudent />
                    </div>
                ) : (
                    <SignupStudent />
                )}
            </div>
        </div>
    )
}; 