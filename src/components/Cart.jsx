import React, { useId } from 'react'
import { RemoveCart, ShoppBag } from './Icons'
import { useCart } from '../Hooks/useCart'
import { CardCart } from './CardCart'
import { useQuantityProductsCart } from '../Hooks/useQuantityProductsCart'

const CartWhitProduct = ({ cart, clearCart }) => {
  return (
    <>
      <h3>Products In cart</h3>
      <ul className="ul__aside">
        {cart.map((product) => {
          return <CardCart key={product.id} product={product} />
        })}
      </ul>
      <button onClick={clearCart}>
        <RemoveCart />
      </button>
    </>
  )
}

export function Cart () {
  const MENU_HAMBURGUESA_ID = useId()
  const { cart, clearCart } = useCart()
  const { quantityProducts } = useQuantityProductsCart({ cart })

  return (
    <section className="Cart">
      <input
        type="checkbox"
        hidden
        id={MENU_HAMBURGUESA_ID}
        className="input-button__Cart"
      />
      <label htmlFor={MENU_HAMBURGUESA_ID} className="button__Cart">
        <ShoppBag />
        <span>{quantityProducts}</span>
      </label>

      <aside className={cart.length > 0 ? 'aside__Cart' : 'aside__Cart-0'}>
        {cart.length > 0
          ? (
          <CartWhitProduct cart={cart} clearCart={clearCart} />)
          : <p>no hay productos en el carrito :c</p>
        }
      </aside>
    </section>
  )
}
