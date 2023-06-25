import React, { useState } from "react";
import '../Styles.css/register.css';
import { Button } from "react-bootstrap";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="wrap">
        <div className="auth-form-container" id="login">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your E-mail" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your Password" id="password" name="password" />
                
            </form>
            <Button variant="secondary" className="btns">Log In</Button>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account ? Register here.</button>
        </div>
        </div>
    )
}