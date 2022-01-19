import React from 'react'
import './mobileNav.scss'
import { RiUserStarLine } from 'react-icons/ri'
import { MdRestaurantMenu } from 'react-icons/md';
import { BsAppIndicator } from 'react-icons/bs'

const MobileNav = () => {
  return (
    <div className="mobileNav">
      <a href="#catalog"><MdRestaurantMenu size={30} color='#fff' /></a>
      <a href="#mobile"><BsAppIndicator size={30} color='#fff' /></a>
      <a href="#testimonial"><RiUserStarLine size={30} color='#fff' /></a>
    </div>
  )
}

export default MobileNav
