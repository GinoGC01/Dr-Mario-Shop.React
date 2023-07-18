import React from 'react'
import { CardCart } from './CardCart'
import { RemoveCart, CkeckoutBuys, Cart } from './Icons'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useQuantityProductsCart } from '../Hooks/useQuantityProductsCart'

export const CartWhitProduct = ({ cart, clearCart, restartToCart }) => {
  const { quantityProducts } = useQuantityProductsCart({ cart })

  const handleClearCart = () => {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Se eliminarán ${quantityProducts} ${quantityProducts > 1 ? 'productos' : 'producto'} del carrito`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0c151c',
      cancelButtonColor: '#a9a9a9',
      confirmButtonText: 'Si borrar',
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
        <button onClick={handleClearCart}>
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
