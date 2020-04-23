import React from 'react';
import './NavLinks.css';
import { NavLink} from 'react-router-dom';


const NavLinks = (props) =>{
    return(
            <ul className="nav-links">
            <li>
                    <NavLink to="/" exact> All Users</NavLink>
                </li>
                <li>
                    <NavLink to="/u1/places" exact> My Places</NavLink>
                </li>
                <li>
                    <NavLink to="/u1/new" exact> Add Places</NavLink>
                </li>
                <li>
                    <NavLink to="/auth" exact> Authenticate</NavLink>
                </li>
            </ul>
    );
}

export default NavLinks;