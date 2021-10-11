import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authUser } from '../store';
import { UserProvider } from '../views/context/User';
import AuthenticatedUser from './AuthenticatedUser';

function Navbar({ children }) {
    const { user } = useRecoilValue(authUser);
    return (
        <div>
            <div>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><UserProvider><AuthenticatedUser /></UserProvider></li>
                    <li>{user.name}</li>
                </ul>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Navbar;