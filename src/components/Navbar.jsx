import { NavLink, Link } from 'react-router-dom';
import "./css/Navbar.css"
import { useState } from 'react';
import logo from "../assets/logo.png"


function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    console.log(isActive)
  };

    return ( 
        <nav className='navbar'>
        <ul>
          <li>
            <img src={logo} alt="" />
          </li>
          <li>
            <Link className='active-links' onClick={handleClick} to="/">Home</Link>
          </li>
          <li>
            <Link className='active-links'  to="/about" onClick={handleClick}>About</Link>
          </li>
          <li>
            <Link className={isActive ? 'active-links': 'links'} to="/about" onClick={handleClick}>Projects</Link>
          </li>
          <li>
            <Link className={isActive ? 'active-links': 'links'}  to="/contact" onClick={handleClick}>Contact</Link>
          </li>
        </ul>
      </nav>
     );
}

export default Navbar;