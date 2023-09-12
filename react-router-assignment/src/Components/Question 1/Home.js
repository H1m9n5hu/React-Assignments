import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
        <nav>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
        <h1>Hello Everyone, This is our HomePage!</h1>
    </div>
  )
}

export default Home;