import React from 'react'
import './testimonial.scss'
import { ReactComponent as Quote } from "../../assets/quote.svg";
import { TestiCard } from '../../components'

const Testimonial = () => {
  return (
    <div className='testimonial' id='testimonial'>
      <div className="testimonial__container section__padding">
        <div className="testimonial__container-groupA">
          <div className="testimonial__container-groupA__card">
            <Quote fill="#FA5532A3" fill-opacity="0.3" />
            <h2>Real Stories from Real Customers</h2>
            <p>Get inspired by these stories.</p>
          </div>
          <div className="testimonial__container-groupA__card">
            <TestiCard
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor pellentesque a tempus sit tempor facilisi molestie. Lacus mi gravida bibendum convallis. Felis fusce mi sollicitudin vel adipiscing dictum."
              name="Floyd Miles"
              username="@floydmiles" />

          </div>
        </div>
        <div className="testimonial__container-groupB">
          <div className="testimonial__container-groupB__card">
            <TestiCard
              text="Convallis sapien vitae amet, gravida in neque. Lorem facilisis iaculis varius tristique porttitor ante non."
              name="Jane Cooper"
              username="@janeeec" />
          </div>
          <div className="testimonial__container-groupB__card">
            <TestiCard
              text="Lacus mi gravida bibendum convallis. Felis fusce mi sollicitudin vel adipiscing dictum."
              name="Kristin Watson"
              username="@watsonkrs" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
