import React from 'react';

const Registration = () => {
    return <div id="registration">
        <div class="row">
            Let's start with your name:
        </div>
        <div class="row">
            <label htmlFor="firstname">First Name:</label>
            <input type="text" name="firstname"/>
        </div>
        <div class="row">
            <label htmlFor="surname">Surname:</label>
            <input type="text" name="surname"/>
        </div>
        <div class="row">
            <label htmlFor="dob">Date of birth:</label>
            <input type="date" name="dob"/>
        </div>
        <div class="row">
            <label htmlFor="phone">Phone:</label>
            <input type="text" name="phone"/>
        </div>
        <div class="row">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email"/>
        </div>
        <div class="row">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password"/>
        </div>
        <div class="row">
            <input type="checkbox" name="termsprivacy"/>
            <label htmlFor="termsprivacy">I have read and agreed to the <a href="">terms and conditions</a> and the <a href="">privacy policy</a></label>
        </div>
    </div>;
}

export default Registration;