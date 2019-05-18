import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/_header.scss';

const Header = () => (
    <div className="headerComponent">
        <Link className="logo" to="/">Game of Drones</Link>
        <Link to='/statistics'>Statistics</Link>
    </div>
);

export default Header;
