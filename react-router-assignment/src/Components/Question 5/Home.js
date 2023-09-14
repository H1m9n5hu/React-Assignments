import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <nav>
        <NavLink className='product' to='/products'>Products</NavLink>
      </nav>
      <h1>This is our Home Page!</h1>
    </div>
  )
}

export default Home;