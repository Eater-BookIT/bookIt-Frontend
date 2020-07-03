import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBarRightLoggedin from './NavBarRight-loggedin';
import NavBarRightLoggedOut from './NavBarRight-loggedout';
import authService from '../../Services/AuthService';
const NavBar = () => {
    const user = authService.getCurrentUser();
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="/" className="nav-link">BookIt</NavLink> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink> 
                    </li>
                </ul>
                
                {user === null ? <NavBarRightLoggedOut /> : <NavBarRightLoggedin />}
                
            </div>
        </nav>
    )
}

export default NavBar;
