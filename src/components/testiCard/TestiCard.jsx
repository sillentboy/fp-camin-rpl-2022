import React from 'react'
import './testiCard.scss'
import { ReactComponent as Quote } from "../../assets/quote.svg";

const TestiCard = ({ text, name, username }) => {
  return (
    <div className="testimonial__container-card">
      <div className="testimonial__container-card__quote">
        <Quote fill="#2EC5CE" height={14} width={16} />
      </div>
      <div className="testimonial__container-card__text">
        <p>{text}</p>
        <h6>{name}</h6>
        <span>{username}</span>
      </div>
    </div>
  )
}

export default TestiCard
