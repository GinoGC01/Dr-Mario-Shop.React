import React, { useId } from 'react'
import { ShoppBag } from './Icons'
import { useCart } from '../Hooks/useCart'
import { useQuantityProductsCart } from '../Hooks/useQuantityProductsCart'
import { CartWhitProduct } from './CartWhitProduct'

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
      <label htmlFor={MENU_HAMBURGUESA_ID} className={cart.length > 0 ? 'button__Cart animate__animated animate__bounce animate__infinite animate__slowed' : 'button__Cart animate__animated animate__pulse animate__infinite'}>
        <ShoppBag />
        <span>{quantityProducts}</span>
      </label>

      <aside className={cart.length > 0 ? 'aside__Cart' : 'aside__Cart-0'}>
        {cart.length > 0
          ? (
          <CartWhitProduct cart={cart} clearCart={clearCart} />)
          : <p>No hay productos en el carrito :c</p>
        }
      </aside>
    </section>
  )
}
