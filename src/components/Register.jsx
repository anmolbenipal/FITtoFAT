import React, { useState } from "react";
import '../Styles.css/register.css';
import { Button } from "react-bootstrap";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="wrap" id="register">
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your Name" />
            <label htmlFor="email">E-mail</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your E-mail" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your Password" id="password" name="password" />
            
        </form>
        <Button variant="secondary" className="btns">Sign In</Button>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account ? Login here.</button>
    </div>
    </div>
    )
}