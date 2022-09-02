import React from 'react';
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">ajbooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

//8:51 porjnto dekha hoise.