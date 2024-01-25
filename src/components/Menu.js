import './style.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Menu() {

  const [isOpen, setOpen] = useState();

  return (
    <div className='header'>
      <div className='container'>
        <div className='flex-center'>
          <ul className={`header__nav ${isOpen ? 'active-open' : ''}`}>
            <li className='header__nav-item'>
              <Link to="about" smooth={true} onClick={() => setOpen(!isOpen)}>About</Link>
            </li>
            <li className='header__nav-item'>
              <Link to="galery" smooth={true} onClick={() => setOpen(!isOpen)}>Galery</Link>
            </li>
            <li className='header__nav-item'>
              <Link to="benefit" smooth={true} onClick={() => setOpen(!isOpen)}>Benefit</Link>
            </li>
            <li className='header__nav-item'>
              <Link to="news" smooth={true} onClick={() => setOpen(!isOpen)}>News</Link>
            </li>
            <li className='header__nav-item'>
              <Link to="contact" smooth={true} onClick={() => setOpen(!isOpen)}>Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
