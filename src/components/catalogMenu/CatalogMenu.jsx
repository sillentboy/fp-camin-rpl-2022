import React from 'react'
import './catalogMenu.scss'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { carousel01, carousel02, carousel03, carousel04, carousel05 } from './imports'

const CatalogMenu = () => {
  return (
    <div className='hero__menu'>
      <RiArrowLeftSLine size={48} color='#F73D27' />
      {/* <img src={carousel01} alt="carousel01" />
      <img src={carousel02} alt="carousel02" />
      <img src={carousel03} alt="carousel03" />
      <img src={carousel04} alt="carousel04" />
      <img src={carousel05} alt="carousel05" /> */}
      <RiArrowRightSLine size={48} color='#F73D27' />
    </div>
  )
}

export default CatalogMenu
