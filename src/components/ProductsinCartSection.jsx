import React from 'react'
import { useCart } from '../Hooks/useCart'
import { useQuantityProductsCart } from '../Hooks/useQuantityProductsCart'
import { useTotalCost } from '../Hooks/useTotaCost'
import { ProductsInCart } from './ProductsInCart'
import { Link } from 'react-router-dom'

export function ProductsinCartSection ({ openForm, formactive }) {
  const { cart, clearCart } = useCart()
  const { quantityProducts } = useQuantityProductsCart({ cart })
  const { totalCost } = useTotalCost({ cart })
  return (
      <ul className="animate__animated animate__fadeIn">
        <header>
          <Link to="/" className="back-to-home__cart-section">
            <span className="material-symbols-outlined">chevron_left</span>
          </Link>
          <h3>Productos en carrito</h3>
        </header>

        {cart.length > 0
          ? (
          <ProductsInCart cart={cart} />
            )
          : (
          <div>
            <p>No hay productos en el carrito</p>
          </div>
            )}
        {cart.length > 0
          ? (
          <section>
            <p>
              Gasto total: $ <b>{totalCost}</b>
            </p>
            <p>Total Productos: {quantityProducts} </p>
            <div>
              <button onClick={clearCart}>Vaciar Carrito</button>
              <button onClick={openForm} className={formactive ? 'button-finalizar-compra' : 'animate__animated animate__pulse animate__infinite animate__slow button-finalizar-compra'} disabled={!!formactive}>
                <a href="/Carrito/#ordenDeCompra" >Finalizar compra</a>
              </button>
            </div>
          </section>
            )
          : (
          <button >
            <Link to="/">Volver a la tienda</Link>
          </button>
            )}
      </ul>
  )
}
