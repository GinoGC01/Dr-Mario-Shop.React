import React from 'react'
import { CardCart } from './CardCart'
import { RemoveCart, CkeckoutBuys, Cart } from './Icons'
import { Link } from 'react-router-dom'
import { useQuantityProductsCart } from '../Hooks/useQuantityProductsCart'
import { handleClearCart } from './Alerts'
import { useCart } from '../Hooks/useCart'

export const CartWhitProduct = () => {
  const { cart, clearCart } = useCart()
  const { quantityProducts } = useQuantityProductsCart({ cart })

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
        <button onClick={() => { handleClearCart({ quantityProducts, clearCart }) }}>
          <RemoveCart />
        </button>
          <Link to="/Carrito/#ordenDeCompra" className="completar-compra-buttons__aside">
            Completar compra
            <CkeckoutBuys />
          </Link>
      </div>
    </section>
  )
}
