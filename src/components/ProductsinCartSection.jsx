import React from 'react'
import { useCart } from '../Hooks/useCart'
import { useQuantityProductsCart } from '../Hooks/useQuantityProductsCart'
import { useTotalCost } from '../Hooks/useTotaCost'
import { ProductsInCart } from './ProductsInCart'
import { Link } from 'react-router-dom'
import { Cart, RigthArrow } from '../components/Icons'
import Swal from 'sweetalert2'

export function ProductsinCartSection ({ openForm, formactive, setFormActive }) {
  const { cart, clearCart } = useCart()
  const { quantityProducts } = useQuantityProductsCart({ cart })
  const { totalCost } = useTotalCost({ cart })

  const handleClearCart = () => {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Se eliminarán ${quantityProducts} ${quantityProducts > 1 ? 'productos' : 'producto'} del carrito`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0c151c',
      cancelButtonColor: '#a9a9a9',
      confirmButtonText: 'Si borrar',
      cancelButtonText: 'cancelar',
      iconColor: '#0c151c'
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire({
          text: `${quantityProducts > 1 ? 'Se eliminaron' : 'Se eliminió'} ${quantityProducts} ${quantityProducts > 1 ? 'productos' : 'producto'} del carrito`,
          icon: 'success',
          confirmButtonColor: '#0c151c',
          confirmButtonText: 'OK'

        })
      }
    })
  }
  return (
    <>
      <header className="header__cart-section">
        <Link to="/" className="back-to-home__cart-section">
          <span className="material-symbols-outlined">chevron_left</span>
        </Link>
        <h3>
          Carrito{' '}
          <span>
            <Cart />
          </span>
        </h3>
      </header>
      <ul className="card-conteiner__cart-section animate__animated animate__fadeIn">
        <h4 className="title-prodcuts-cart">
          <RigthArrow /> Productos
        </h4>
        {cart.length > 0
          ? (
          <ProductsInCart cart={cart} setFormActive={setFormActive} />
            )
          : (
          <div>
            <p>No hay productos en el carrito</p>
          </div>
            )}
        {cart.length > 0
          ? (
          <section>
            <div className="data-cart-section">
              <p>
                Gasto total: $ <b>{totalCost}</b>
              </p>
              <p>Total de productos: <b>{quantityProducts}</b> </p>
            </div>
            <div className="buttons__cart-section">
              <button onClick={handleClearCart}>Vaciar Carrito</button>
              <button
                onClick={openForm}
                className={
                  formactive
                    ? 'button-finalizar-compra'
                    : 'animate__animated animate__pulse animate__infinite animate__slow button-finalizar-compra'
                }
                disabled={!!formactive}
              >
                <a href="/Carrito/#ordenDeCompra">Finalizar compra</a>
              </button>
            </div>
          </section>
            )
          : (
          <button>
            <Link to="/">Volver a la tienda</Link>
          </button>
            )}
      </ul>
    </>
  )
}
