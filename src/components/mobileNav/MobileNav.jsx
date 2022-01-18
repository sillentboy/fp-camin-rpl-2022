import React from 'react'
import './mobileNav.scss'
import { RiUserStarLine } from 'react-icons/ri'
import { MdRestaurantMenu } from 'react-icons/md';
import { BsAppIndicator } from 'react-icons/bs'

const MobileNav = () => {
  return (
    <div className="mobileNav">
      <MdRestaurantMenu />
      <BsAppIndicator />
      <RiUserStarLine />
    </div>
  )
}

export default MobileNav
