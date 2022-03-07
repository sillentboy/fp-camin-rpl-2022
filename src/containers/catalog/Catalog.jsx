import React from 'react'
import { Card } from '../../components'
import { data } from '../../data'
import './catalog.scss'
import { catalog01 } from './imports'

const Catalog = () => {
  const menu = data;
  return (
    <div className='catalog  section__padding'>
      <div className="catalog__container">
        {menu.slice(0, 5).map(({ name, desc, price, img }) =>
          <Card headline={name} desc={desc} price={price} img={catalog01} />
        )}
      </div>
    </div>
  )
}
export default Catalog
