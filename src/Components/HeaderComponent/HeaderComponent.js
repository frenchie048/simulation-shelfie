import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from './shelfie_icon.png';

import './headerComponent.css'

function Header() {

    return (
        <div className="page-header">

            <img src={icon} className="logo-icon" />
            <h1>SHELFIE</h1>
            <NavLink exact to='/'><button>Dashboard</button></NavLink>
            <NavLink to='/add'><button>Add Inventory</button></NavLink>

        </div>
    )
}

export default Header;