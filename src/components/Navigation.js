import React from "react";
import { NavLink } from 'react-router-dom'; 
import '../styles.css/navbar.css'



const Navigation = () => {

  return (
    <div class="nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Teams</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
    );
  };


export default Navigation;