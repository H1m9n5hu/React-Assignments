import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    const buttonHandler = () => {
        localStorage.setItem('key', false);
    }
    return (
        <div>
            <nav>
                <NavLink className='homePage' to='/'>Home</NavLink>
                <NavLink className='profileButton' to="/dashboard/profile">Profile</NavLink>
                <NavLink className='settingsButton' to="/dashboard/settings" onClick={buttonHandler}>Settings</NavLink>
                <NavLink to='/'>Logout</NavLink>
            </nav>
            <h1>This is our Dashboard!</h1>
            <h3>Congratulations! you logged in successfully.</h3>
        </div>
    );
};

export default Dashboard;