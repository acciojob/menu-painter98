import { NavLink } from "react-router-dom";
import React from 'react';

function NavBar(){
    return (
        <nav className="nav-bar">
            <NavLink className='link' to='all' style={{marginRight:'10px'}}>All</NavLink>
            <NavLink className='link' to='breakfast' style={{marginRight:'10px'}}>Breakfast</NavLink>
            <NavLink className='link' to='lunch' style={{marginRight:'10px'}}>Lunch</NavLink>
            <NavLink className='link' to='shakes' style={{marginRight:'10px'}}>Shakes</NavLink>
        </nav>
    )
}
export default NavBar;