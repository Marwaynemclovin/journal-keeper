import React from 'react';
import logo from "../assets/psychlogo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <img src={logo} alt="Psych Book" />
            </div>
            <div className="links">
                <Link className='link'> 
                    <h6>Bookings</h6> 
                </Link>
                <span>
                    Name
                </span>
                <span>
                    Logout
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar