import React, { useRef } from 'react'
import { useProductsVisited } from '../Hooks/useProductsVisited'
import { useCart } from '../Hooks/useCart'
import CardProduct from './CardProduct'
import { RigthArrow } from './Icons'
import { SliderButtons } from './SliderButtons'

export default function FavoriteProducts() {
  const { productosFavoritos } = useProductsVisited()
  const { addToCart, removeFromCart, cart } = useCart()
  const scrollSection = useRef()

  const checkProductInCart = (product) => {
    const check = cart.some((item) => item.id === product.id)
    return check
  }

  const ckeckProductFavorite = (product) => {
    const checkFavoriteProduct = productosFavoritos.some(
      (item) => item.id === product.id
    )
    return checkFavoriteProduct
  }

  return (
    <>
      {productosFavoritos.length > 0 && (
        <section className='productos-recientes__container'>
          <h2>
            Productos Favoritos <RigthArrow />
          </h2>
          <SliderButtons scrollSection={scrollSection} />
          <ul
            className='container-productos__productos-recientes'
            ref={scrollSection}
          >
            {productosFavoritos
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
              .reverse()}
          </ul>
        </section>
      )}
    </>
  )
}
