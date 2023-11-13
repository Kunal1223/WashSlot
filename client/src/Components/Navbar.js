import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import { useAuth } from '../SubComponents/AuthenticateContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { namechar: contextNamechar } = useAuth();

    const handleEvent = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem('namechar');
        navigate('/login');
    }

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
                            <div className="signup">
                                {(!localStorage.getItem("authToken")) ?
                                    <>
                                        <NavLink to={'/login'} className='navlink1'>Login</NavLink>
                                    </>
                                    :
                                    <div className='logout-content'>
                                        <NavLink to={'/about'} className='navlink1'>About</NavLink>
                                        <NavLink onClick={handleEvent} className='navlink2'>Logout</NavLink>
                                        <h1 className='namechar'>{contextNamechar}</h1>
                                    </div>
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
