import React from 'react'
import { Card } from '../../components'
import './catalog.scss'
import { catalog01, catalog02, catalog03, catalog04, catalog05 } from './imports'

const Catalog = () => {
  return (
    <div className='catalog'>
      <div className="catalog__container section__padding">
        <div className="catalog__container-groupA">
          <Card headline="ANY DAY OFFERS" desc="KRISPY BURGER" price="Rp. 20,999" img={catalog01} />
          <Card headline="ALA KARTE SPECIAL" desc="KOLONEL YAKINIKU" price="Rp. 35,999" img={catalog02} />
          <Card headline="SPECIAL COMBO BOX" desc="KRISPY BURGER" price="Rp. 55,999" img={catalog03} />
        </div>
        <div className="catalog__container-groupB">
          <Card headline="SPECIAL COMBO DUOS" desc="MAKAN BARENG SAMA SI DIA" price="Rp. 50,999" img={catalog04} />
          <Card headline="SPECIAL COMBO FAMILY" desc="MAKAN BARENG KELUARGA" price="Rp. 190,999" img={catalog05} />
        </div>
      </div>

    </div>
  )
}
export default Catalog
