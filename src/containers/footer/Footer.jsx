import React from 'react'
import './footer.scss'
import footerImage from "../../assets/footer_bg.png";

const Footer = () => {
  return (
    <div className='footer'>
      <img src={footerImage} alt="footer" />
      <div className="footer__container section__padding">
        <div className="footer__container-content">
          <h6>Company</h6>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className="footer__container-content">
          <h6>Support</h6>
          <ul>
            <li>Help centter</li>
            <li>Terms of service</li>
            <li>legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="footer__container-content">
          <h6>Stay up to date</h6>
        </div>
        <div className="footer__container-copyright section__padding">
          <p>© 2021 KFCKU. All rights reserved</p>
          <p>Terms & Conditions | Privacy Policy | Sitemap | Disclaimer</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
