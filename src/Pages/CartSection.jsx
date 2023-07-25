import React, { useContext } from 'react'

import { ProductsinCartSection } from '../components/ProductsinCartSection'
import { OrdenDeCompra } from '../components/OrdenDeCompra'
import { CartContext } from '../Context/CartContext'

export default function CartSection () {
  const { formActive, setFormActive } = useContext(CartContext)

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
