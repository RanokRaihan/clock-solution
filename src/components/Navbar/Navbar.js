import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul className="nav-items">
                <li>
                    <NavLink exact to='/' activeClassName="selected">Clock</NavLink>
                </li>
                <li>
                    <NavLink to='/stopwatch' activeClassName="selected">Stop Watch</NavLink>
                </li>
                <li>
                    <NavLink to='/timer' activeClassName="selected">Timer</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;