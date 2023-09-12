import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <nav>
                <NavLink className='profileButton' to="/dashboard/profile">Profile</NavLink>
                <NavLink to="/dashboard/settings">Settings</NavLink>
            </nav>
            <h1>This is our Dashboard!</h1>
        </div>
    );
};

export default Dashboard;