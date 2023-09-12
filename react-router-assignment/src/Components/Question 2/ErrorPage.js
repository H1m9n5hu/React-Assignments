import React from 'react';
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
        <h1>Oops! Page Not Found.</h1>
        <NavLink exact to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            Back to Home Page
        </NavLink>
    </div>
  )
}

export default ErrorPage;