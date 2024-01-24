
"use client"
import { useLogin } from "@/app/hooks/loginHook";
import "./loginForm.css"
import React ,  { ChangeEvent }  from "react";
import { useRef } from "react";
import { fetchOneDevice } from "@/app/http/authHttp";
import Link from "next/link";
const LoginForm = () => {
    const {setLoginState, loginState} = useLogin()
const form = useRef(null)
    const handleSubmit=()=> {
fetchOneDevice()
    }
    const handleChange =(event: ChangeEvent<HTMLInputElement>): void=> {
   setLoginState((prevLoginState) => ({
    ...prevLoginState,
    [event.target.name]: event.target.value,
}));
    }
    return ( 
        <div className="loginForm">
            <h1 className="loginTitle">Sing in</h1>
            <form action=""
ref={form}
             className="loginFormWrapper">
            <input name="email" onChange={handleChange} type="text" placeholder="type email" className="loginFormEmail" required />
            <input name="password" onChange={handleChange}type="text" placeholder="type password" className="loginFormPassword" required />
            <button
            className="loginFormButton"
             onClick={handleSubmit}
             >Submit</button>
             </form>
<div className="loginFormBackground">
</div>
<h2 className="or">
    <Link
    style={{textDecoration: "none", color: "#fff"}}
    href="/profileLogin">
Or sign up
    </Link>
    </h2>
        </div>
     );
}
export default LoginForm;