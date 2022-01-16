import React from 'react'
import './contact.scss'
import logo from "../../assets/logo.svg";
import { IconContext } from "react-icons";
import { RiWhatsappFill, RiPhoneFill, RiFacebookBoxFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact__container section__padding">
        <div className="contact__container-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="contact__container-wrapper">
          <IconContext.Provider value={{ color: "#fff", className: "contact__container-wrapper__icons-A" }}>
            <RiWhatsappFill />
          </IconContext.Provider>
          <p>0823 - 1267 - 7711</p>
        </div>
        <div className="contact__container-wrapper">
          <IconContext.Provider value={{ color: "#fff", className: "contact__container-wrapper__icons-A" }}>
            <RiPhoneFill />
          </IconContext.Provider>
          <p>(021) 889 - 0011</p>
        </div>
        <div className="contact__container-wrapper">
          <IconContext.Provider value={{ color: "#fff", className: "contact__container-wrapper__icons-B" }}>
            <RiFacebookBoxFill />
            <RiTwitterFill />
            <RiInstagramFill />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default Contact
