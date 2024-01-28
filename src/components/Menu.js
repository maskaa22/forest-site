import './style.css';
import './style@media.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';

function Menu() {

  const [isOpen, setOpen] = useState();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-overflow-hiden');
    } else if (!isOpen) {
      document.body.classList.remove('body-overflow-hiden');
    }
  }, [isOpen]);

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
          <button className='header__menu-button' onClick={() => setOpen(!isOpen)}><GiHamburgerMenu /></button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
