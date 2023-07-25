/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import { useCart } from '../Hooks/useCart'
import 'animate.css'
import { handleRemoveItemCardCart, popUpRestartToCart } from './Alerts'

export const CardCart = ({ product }) => {
  const { restartToCart, addToCart, cart } = useCart()
  const [cantidadDisponible, setCantidadDisponible] = useState(null)
  function handleQuantity (product) {
    // limite de productos para agregar y restar del carrito
    if (
      product.cantidadDisponible === 1 ||
      product.cantidadDisponible === product.cantidad
    ) {
      setCantidadDisponible(true)
    } else if (product.cantidadDisponible > 1) {
      setCantidadDisponible(false)
      addToCart(product)
    }
  }

  const handleRestartToCart = () => {
    popUpRestartToCart({ restartToCart, product })
  }

  const handleRestarToCart = product => {
    if (cart.length <= 1 && product.cantidad === 1) {
      handleRemoveItemCardCart({ product, restartToCart })
      return
    }
    handleRestartToCart()
  }

  return (
    <li style={{ listStyle: 'none' }} className="card__aside">
      <img src={product.img.image01} alt={product.nombre} />
      <div className="data__aside">
        <div className="text-content__aside">
          <strong className="title-card__aside">{product.nombre}</strong>
          <p className="price__aside"><b>$ {product.precio * product.cantidad}</b></p>
          <p>Talle:<b> {product.talle.talle}</b></p>
          <p>
            cantidad: <b>{product.cantidad}</b>
          </p>
        </div>
        <div className="cantidad">
          <button className="add-product__aside" onClick={() => { handleQuantity(product) }}>
            +
          </button>
          <button
            className="substract-product__aside"
            onClick={() => { handleRestarToCart(product) }}
          >
            -
          </button>
          <p style={{ opacity: 0.5 }}>
            {cantidadDisponible &&
              `Solo hay ${product.cantidadDisponible} disponibles`}
          </p>
        </div>
      </div>
    </li>
  )
}
