import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={'/'}>
        <h1>CaSeS TeCh</h1>
      </Link>
      <ul>
        {/* <li>
          <NavLink to={'/'} className={({ isActive }) => isActive ? "active-link" : undefined}>Inicio</NavLink>
        </li> */}
        <li>
          <NavLink to={'/categoria/iphone'} className={({ isActive }) => isActive ? "active-link" : undefined}>Iphone</NavLink>
        </li>
        <li>
          <NavLink to={'/categoria/samsung'} className={({ isActive }) => isActive ? "active-link" : undefined}>Samsung</NavLink>
        </li>
        <li>
          <NavLink to={'/categoria/motorola'} className={({ isActive }) => isActive ? "active-link" : undefined}>Motorola</NavLink>
        </li>
        <li>
          <NavLink to={'/categoria/otras'} className={({ isActive }) => isActive ? "active-link" : undefined}>Otras</NavLink>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
