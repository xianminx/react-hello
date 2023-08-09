import React, { useState } from "react";
/**
 * ### 3. Build a Form with `useState`
 * Create a form with multiple inputs (e.g., name, email, and password) and use the `useState` hook to manage the form state. Include validation and show error messages if necessary.
 */

export default function RxState2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);

    const validateName = (e) => {
        setName(e.target.value);
    }
    
    // validate email format, and if not valid, disable submit button
    const validateEmail = (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValue = e.target.value;
        setEmail(emailValue);
        setIsEmailValid(emailRegex.test(emailValue));
    };
    const validatePassword = (e) => {
        setPassword(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form with email:", email);

    }

    return (
        <div>
            <h2>3. Build a Form with `useState`</h2>
            <p>
                Create a form with multiple inputs (e.g., name, email, and password) 
                and use the `useState` hook to manage the form state. Include validation 
                and show error messages if necessary.
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={validateName} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={validateEmail}/> 
                <label htmlFor="password">Password</label> 
                <input type="password" id="password" name="password" value={password} onChange={validatePassword} />
                <button type="submit" disabled={!isEmailValid}>Submit</button>
            </form>
        </div>
    );
}