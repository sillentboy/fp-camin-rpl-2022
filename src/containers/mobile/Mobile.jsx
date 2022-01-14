import React from 'react'
import './mobile.scss'
import { mobileImg, appStore, playStore } from './imports'

const Mobile = () => {
  return (
    <div className='mobile' id='mobile'>
      <div className="mobile__container section__padding">
        <img src={mobileImg} alt="mobileImg" />
        <div className="mobile__container-text">
          <h2>Now you can reach us through Mobile App</h2>
          <div className="mobile__container-text__icon">
            {/* <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/id/app/kfcku/id1474915867?itsct=apps_box_promote_link&itscg=30200"><img src={playStore} alt="download on playstore" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.kfc.mobile&hl=in&gl=US"><img src={appStore} alt="download on appstore" /></a> */}
            <img src={appStore} alt="download on appstore" />
            <img src={playStore} alt="download on playstore" />
          </div>
        </div>
      </div >
    </div>
  )
}

export default Mobile
