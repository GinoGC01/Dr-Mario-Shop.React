import React, { useState } from 'react'
import { useCart } from '../Hooks/useCart'
import { useQuantityProductsCart } from '../Hooks/useQuantityProductsCart'
import { handleRemoveItemCartSection } from './Alerts'

export function CardCartSection ({ item, setFormActive }) {
  const { restartToCart, addToCart, cart } = useCart()
  const [quantityDisponible, setQuantityDisponible] = useState(null)
  const { quantityProducts } = useQuantityProductsCart({ cart })

  function handleQuantity (item) {
    // limite de productos para agregar y restar del carrito
    if (
      item.cantidadDisponible === 1 ||
      item.cantidadDisponible === item.cantidad
    ) {
      setQuantityDisponible(true)
    } else if (item.cantidadDisponible > 1) {
      setQuantityDisponible(false)
      addToCart(item)
    }
  }

  const handleRestarToCart = item => {
    if (cart.length === 1 && item.cantidad === 1) {
      handleRemoveItemCartSection(quantityProducts, setFormActive, restartToCart, item)
      return
    }
    restartToCart(item)
  }

  return (

          <li key={item.id} className='card__cart-section'>
            <div className='img-card-content__cart-section'>
             <img src={item.img.image01} alt={item.name} />
            </div>
            <div className='data-card__cart-section'>
              <strong>{item.nombre}</strong>
              <p>Precio: <b>$ {item.precio * item.cantidad}</b></p>
              <p>Talle: <b>{item.talle.talle}</b></p>
              <p>Marca: <b>{item.marca}</b></p>
              <p>Cantidad: <b>{item.cantidad}</b></p>

              <div className='buttons-card__cart-section'>
                <button onClick={() => { handleQuantity(item) }}> + </button>
                <button onClick={() => { handleRestarToCart(item) }}> - </button>
                <p style={{ opacity: 0.3 }}>{quantityDisponible && `Solo hay ${item.cantidadDisponible} disponibles`}</p>
              </div>
            </div>
          </li>
  )
}
