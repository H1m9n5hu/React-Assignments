import React from 'react';
import LoginPage from './LoginPage';

const ProtectedRoute = (prop) => {
    const { Component } = prop;

    return (
        <div>
                {false ? <Component /> : <LoginPage />}
        </div>
    );
}

export default ProtectedRoute;