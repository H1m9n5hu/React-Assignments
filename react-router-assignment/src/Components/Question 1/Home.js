import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
        <nav>
          <NavLink className='dashboard' to="/dashboard">Dashboard</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
        <h1>Hello Everyone, This is our HomePage!</h1>
    </div>
  )
}

export default Home;