import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
    // console.log(namechar)
    const navigate = useNavigate();
    const location = useLocation();
    const namechar = location.state && location.state.namechar;

    const handleEvent = () => {
        localStorage.removeItem("authToken");
        navigate('/login');
    }

    return (
        <>
            <div className="navbar-container">
                <div className="nav-container">
                    <div className="logo">
                        <NavLink to={'/' } className='navlink'>WashSlot</NavLink>
                    </div>
                    <div className="navbar-links">
                        <ul>
                            <NavLink to={'/' } className='navlink1'>Home</NavLink>
                            <NavLink to={'/about'} className='navlink1'>About</NavLink>
                            <div className="signup">
                                {(!localStorage.getItem("authToken")) ?
                                    <>
                                        <NavLink to={'/login'} className='navlink1'>Login</NavLink>
                                    </>
                                    :
                                    <div className='logout-content'>
                                        <NavLink onClick={handleEvent} className='navlink2'>Logout</NavLink>
                                        <h1 className='namechar'>{namechar}</h1>
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
