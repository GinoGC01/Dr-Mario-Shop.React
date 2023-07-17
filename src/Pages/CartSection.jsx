import React, { useState } from 'react'

import { ProductsinCartSection } from '../components/ProductsinCartSection'
import { OrdenDeCompra } from '../components/OrdenDeCompra'

export default function CartSection () {
  const [formActive, setFormActive] = useState(false)

  const handleOrdenCompra = () => {
    setFormActive(!formActive)
  }

  return (
    <section className='cart-section'>
      <ProductsinCartSection openForm={handleOrdenCompra} formactive={formActive} setFormActive={setFormActive}/>
      {formActive && (
        <OrdenDeCompra handleOrdenCompra={handleOrdenCompra} />
      )}
    </section>
  )
}
