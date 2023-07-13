import React, { useState } from 'react'
import { useCart } from '../Hooks/useCart'

export function CardCartSection ({ item }) {
  const { restartToCart, addToCart } = useCart()
  const [quantityDisponible, setQuantityDisponible] = useState(null)

  function handleQuantity (product) {
    // limite de productos para agregar y restar del carrito
    if (
      product.cantidadDisponible === 1 ||
              product.cantidadDisponible === product.cantidad
    ) {
      setQuantityDisponible(true)
    } else if (product.cantidadDisponible > 1) {
      setQuantityDisponible(false)
      addToCart(product)
    }
  }

  return (

          <li key={item.id} className='card__cart-section'>
            <div className='img-card-content__cart-section'>
             <img src={item.img.image01} alt={item.name} />
            </div>
            <div className='data-card__cart-section'>
              <strong>{item.nombre}</strong>
              <p>Precio: <b>$ {item.precio}</b></p>
              <p>Talle: <b>{item.talle.talle}</b></p>
              <p>Marca: <b>{item.marca}</b></p>
              <p>Cantidad: <b>{item.cantidad}</b></p>

              <div className='buttons-card__cart-section'>
                <button onClick={() => { handleQuantity(item) }}> + </button>
                <button onClick={() => { restartToCart(item) }}> - </button>
                <p style={{ opacity: 0.3 }}>{quantityDisponible && `Solo hay ${item.cantidadDisponible} disponibles`}</p>
              </div>
            </div>
          </li>
  )
}
