import React, { useState } from 'react'

import { ProductsinCartSection } from '../components/ProductsinCartSection'
import { OrdenDeCompra } from '../components/OrdenDeCompra'

export default function CartSection () {
  const [formActive, setFormActive] = useState(false)

  const handleOrdenCompra = () => {
    setFormActive(!formActive)
  }

  return (
    <section>
      <ProductsinCartSection openForm={handleOrdenCompra} formactive={formActive}/>
      {formActive && (
        <OrdenDeCompra handleOrdenCompra={handleOrdenCompra} />
      )}
    </section>
  )
}
