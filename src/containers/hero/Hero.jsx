import React from 'react'
import { CatalogMenu } from '../../components/'
import './hero.scss'
import heroImage from "../../assets/heroimage.png";

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__container">
        <div className="hero__container-content">
          <h1>JAGONYA AYAM BUCKET</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna id ut velit convallis nec sit felis. Non non sagittis aenean enim tellus erat semper. Enim a eros urna aliquam, tempor, tortor.</p>
          <button type="button">ORDER NOW</button>
        </div>
        <div className="hero__container-image">
          <img src={heroImage} alt="hero" />
        </div>
      </div>
      <CatalogMenu />
    </div>
  )
}

export default Hero
