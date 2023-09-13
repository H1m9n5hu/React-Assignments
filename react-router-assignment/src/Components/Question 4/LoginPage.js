import React, { useState } from 'react';
import Dashboard from '../Question 3/Dashboard';

const LoginPage = (prop) => {
    const [flag, setFlag] = useState(false);
    const buttonHandler = () => {
        setFlag(true);
        document.querySelector('.app').style.display = 'none';
    }

    return (
        <>
            {flag && <Dashboard />}
            <div className='app'>
                <h1>Login Page</h1>
                <form>
                    <input type='email' placeholder='Enter your email address' /> <br />
                    <input type='password' placeholder='Enter your password' />
                </form>
                <button type='button' onClick={buttonHandler}>Login</button> 
            </div>
        </> 
    );
}

export default LoginPage;