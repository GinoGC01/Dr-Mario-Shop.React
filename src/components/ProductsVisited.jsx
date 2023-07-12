import React from 'react'
import CardProduct from './CardProduct'
import { useCart } from '../Hooks/useCart'
import { RigthArrow } from './Icons'
import { useProductsVisited } from '../Hooks/useProductsVisited'

export function ProductsVisited () {
  const { addToCart, removeFromCart, cart } = useCart()

  const { productosVisitados, productosFavoritos } = useProductsVisited()

  const checkProductInCart = (product) => {
    const check = cart.some((item) => item.id === product.id)
    return check
  }

  const ckeckProductFavorite = product => {
    const checkFavoriteProduct = productosFavoritos.some((item) => item.id === product.id)
    return checkFavoriteProduct
  }

  return (
    <>
      {productosVisitados.length > 0 && (
        <section className="productos-recientes__container">
          <h2>
            Productos vistos recientemente <RigthArrow />{' '}
          </h2>
          <ul className="container-productos__productos-recientes">
            {productosVisitados
              .map((product) => {
                const isProductInCart = checkProductInCart(product)
                const isFavoriteProduct = ckeckProductFavorite(product)
                return (
                  <CardProduct
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    isProductInCart={isProductInCart}
                    removeFromCart={removeFromCart}
                    isFavoriteProduct={isFavoriteProduct}
                  />
                )
              })
              .reverse()
              .slice(0, 6)}
          </ul>
        </section>
      )}
    </>
  )
}
