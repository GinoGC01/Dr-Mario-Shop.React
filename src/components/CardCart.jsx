/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import { useCart } from '../Hooks/useCart'
import 'animate.css'

export const CardCart = ({ product }) => {
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
    // eslint-disable-next-line react/react-in-jsx-scope
    <li style={{ listStyle: 'none' }} className="card__aside">
      <img src={product.img.image01} alt={product.nombre} />
      <div className="data__aside">
        <div className="text-content__aside">
          <strong className="title-card__aside">{product.nombre}</strong>
          <p className="price__aside">$ {product.precio}</p>
          <p>Talle: {product.talle.talle}</p>
          <p>cantidad: <b>{product.cantidad}</b></p>
        </div>
        <div className="cantidad">
        <button
          className="add-product__aside"
          onClick={() => { handleQuantity(product) }}
        >
          +
        </button>
        <button
          className="substract-product__aside"
          onClick={() => {
            restartToCart(product)
          }}
        >
          -
        </button>
        <p style={{ opacity: 0.5 }}>
          {quantityDisponible &&
            `Solo hay ${product.cantidadDisponible} disponibles`}
        </p>
        </div>
      </div>
    </li>
  )
}
