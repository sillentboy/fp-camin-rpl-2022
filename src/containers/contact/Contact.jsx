import React from 'react'
import './contact.scss'
import logo from "../../assets/logo.svg";
import { RiWhatsappFill, RiPhoneFill, RiFacebookBoxFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact__container section__padding">
        <div className="contact__container-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="contact__container-wrapper">
          <RiWhatsappFill size={45} color='#fff' />
          <p>0823 - 1267 - 7711</p>
        </div>
        <div className="contact__container-wrapper">
          <RiPhoneFill size={45} color='#fff' />
          <p>(021) 889 - 0011</p>
        </div>
        <div className="contact__container-wrapper">
          <RiFacebookBoxFill size={35} color='#fff' />
          <RiTwitterFill size={35} color='#fff' />
          <RiInstagramFill size={35} color='#fff' />
        </div>
      </div>
    </div>
  )
}

export default Contact
