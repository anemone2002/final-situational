import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

import logoimg from "../assets/images/images.png";
import menuimg from "../assets/images/menu.png";
import './Header.css';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logoimg} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='/' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='/registration-form'>Registration</Link></li> 
        <li><Link to='/login-form'>Login</Link></li> 
        <li><Link to='/user-profile-form'>Profiles</Link></li> 
      </ul>
      <img src={menuimg} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Header;
