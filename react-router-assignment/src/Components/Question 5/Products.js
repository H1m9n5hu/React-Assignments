import React from 'react'
import { NavLink } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <div className="app">
        <NavLink to='/products/dynamic/headphone'>
          <div className="card">
            <h2>Headphone</h2>
          </div>
        </NavLink>
        <NavLink to='/products/dynamic/tablet'>
          <div className="card">
            <h2>Tablet</h2>
          </div>
        </NavLink>
        <NavLink to='/products/dynamic/smartphone'>
          <div className="card">
            <h2>Smartphone</h2>
          </div>
        </NavLink>
      </div>
      <div className="app">
        <NavLink to='/products/dynamic/laptop'>
          <div className="card">
            <h2>Laptop</h2>
          </div>
        </NavLink>
        <NavLink to='/products/dynamic/ipad'>
          <div className="card">
            <h2>Ipad</h2>
          </div>
        </NavLink>
        <NavLink to='/products/dynamic/iphone'>
          <div className="card">
            <h2>Iphone</h2>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default Products