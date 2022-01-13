import './navbar.scss'
import React from 'react'
import logo from "../../assets/logo.svg";
import { FiUser } from "react-icons/fi"
import { RiShoppingBasket2Line } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__container">
        <div className="navbar__container-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__container-menu">
          <ul>
            <li><a href="#catalog">MENU</a></li>
            <li><a href="#mobile">DOWNLOAD</a></li>
            <li><a href="#testimonial">TESTIMONIAL</a></li>
          </ul>
          <div className="navbar__container-menu__button">
            <div className="navbar__container-menu__button-tile">
              <FiUser size={24} color='#F73D27' />
            </div>
            <div className="navbar__container-menu__button-tile">
              <RiShoppingBasket2Line size={24} color='#F73D27' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
