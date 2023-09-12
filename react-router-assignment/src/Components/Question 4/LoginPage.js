import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <form>
                <input type='text' placeholder='Enter your email address' />
                <input type='text' placeholder='Enter your password' />
            </form>
            <button type='button'>Login</button>
        </div>
    );
}

export default LoginPage;