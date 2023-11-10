import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <div className="nav-container">
                    <div className="logo">
                       <NavLink to={'/'} className='navlink'>WashSlot</NavLink>
                    </div>
                    <div className="navbar-links">
                        <ul>
                           <NavLink to={'/'} className='navlink1'>Home</NavLink>
                           <NavLink to={'/about'} className='navlink1'>About</NavLink>
                           <NavLink to={'/login'} className='navlink1'>Login</NavLink>
                           <input type="search" className='search' />
                           <button className='nav-btn'>Search</button>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar