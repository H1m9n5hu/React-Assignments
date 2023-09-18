import React from 'react';
import { NavLink } from 'react-router-dom';

const MultiplePageRendering = () => {
  return (
    <>
        <div>
            <nav>
                <NavLink className='about' to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <h1>Hello Everyone, This is our HomePage!</h1>
        </div>
    </>
  )
}

export default MultiplePageRendering;