import React from 'react'
import './card.scss'

const Card = ({ headline, desc, price, img }) => {
  return (
    <div className='catalog__card'>
      <div className="catalog__card-text"><h3>{headline}</h3>
        <p>{desc}</p>
        <button type="button"><span>{price}</span></button>
      </div>
      <div className="catalog__card-image">
        <img src={img} alt="card_image" />
      </div>
    </div>
  )
}

export default Card
