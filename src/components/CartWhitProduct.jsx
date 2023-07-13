import React from 'react'
import { CardCart } from './CardCart'
import { RemoveCart, CkeckoutBuys } from './Icons'
import { Link } from 'react-router-dom'

export const CartWhitProduct = ({ cart, clearCart }) => {
  return (
    <>
      <h3>Products In cart</h3>
      <ul className="ul__aside">
        {cart.map((product) => {
          return <CardCart key={product.id} product={product} />
        })}
      </ul>
      <div className="buttons__aside">
        <button onClick={clearCart}>
          <RemoveCart />
        </button>
        <button className="completar-compra-buttons__aside">
          <Link to="/Carrito/#ordenDeCompra">
            Completar compra
            <CkeckoutBuys />
          </Link>
        </button>
      </div>
    </>
  )
}
