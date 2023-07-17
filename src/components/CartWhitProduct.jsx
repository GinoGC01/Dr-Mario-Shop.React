import React from 'react'
import { CardCart } from './CardCart'
import { RemoveCart, CkeckoutBuys, Cart } from './Icons'
import { Link } from 'react-router-dom'

export const CartWhitProduct = ({ cart, clearCart }) => {
  return (
    <section className='Cart-home'>
      <header className='header__Cart-home'>
        <h3 className='title-cart'>Productos en el carrito <Cart/> </h3>
      </header>
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
    </section>
  )
}
