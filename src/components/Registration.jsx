import React from 'react';

const Registration = () => {
    return <div>
        Let's start with your name:
        <label htmlFor="firstname">First Name:</label>
        <input type="text" name="firstname"/>
        <label htmlFor="surname">Surname:</label>
        <input type="text" name="surname"/>
        <label htmlFor="dob">Date of birth:</label>
        <input type="date" name="dob"/>
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone"/>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email"/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password"/>
        <label htmlFor="termsprivacy">I have read and agreed to the <a href="">terms and conditions</a> and the <a href="">privacy policy</a></label>
        <input type="checkbox" name="termsprivacy"/>
    </div>;
}

export default Registration;