/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import { useCart } from '../Hooks/useCart'
import Toastify from 'toastify-js'
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

  const handleRestartToCart = () => {
    Toastify({
      text: 'Producto eliminado :c',
      duration: 3000,
      close: false,
      gravity: 'top',
      position: 'left',
      stopOnFocus: true,
      style: {
        background: '#202b38',
        fontSize: '.8rem',
        width: '200px',
        boxShadow: '0 0 15px black',
        opacity: '1',
        borderRadius: '10px',
        paddingLeft: '15px'
      },
      onClick: restartToCart(product)
    }).showToast()
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
            handleRestartToCart(product)
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
