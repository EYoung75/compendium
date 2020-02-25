import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
    return (<div className="header">
        <Link to="/" className="header__home" exact ><FaHome/></Link>
        <p>Crafted in Kansas City, MO circa 2020</p>
        <h2>The collected thoughts and work of </h2>
        <h1>Evan Young</h1>
    </div>)
}

export default Header;