import { useState } from 'react'
import coffee from "./coffeeImg.png";
import { Link } from "react-router-dom";
import './Nav.css';

function NavBar({usersSelections}) {
  return (
    <div className="NavBar">
        <nav className='NavElement'>
            <img src={coffee} alt="CoffeeLogo" id="coffeeImg"></img>
            <Link to="/" className="Link" id="LinkHome"> <b>OverFlow </b>  </Link>
            <Link to="/Analysis" className="Link" id="LinkAnalysis"> Analysis </Link>
        </nav>
    </div>
  )
}

export default NavBar;