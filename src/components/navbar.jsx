import React, { Component } from 'react';

// Stateless Functional Component

const Navbar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="/#" className="navbar-brand">
                Navbar <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}
 
export default Navbar;