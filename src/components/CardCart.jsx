/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import { useCart } from '../Hooks/useCart'
import Toastify from 'toastify-js'
import 'animate.css'
import Swal from 'sweetalert2'

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
    Toastify({
      text: 'Producto eliminado',
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

  const handleRestarToCart = product => {
    if (cart.length <= 1 && product.cantidad === 1) {
      Swal.fire({
        title: '¿Está seguro?',
        text: 'Se eliminará el último producto del carrito',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0c151c',
        cancelButtonColor: '#a9a9a9',
        confirmButtonText: 'Si eliminar',
        iconColor: '#0c151c'
      }).then((result) => {
        if (result.isConfirmed) {
          restartToCart(product)
          Swal.fire({
            text: 'El carrito quedó vacío',
            icon: 'success',
            confirmButtonColor: '#0c151c',
            confirmButtonText: 'OK'

          })
        }
      })
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
