import React from 'react'
import {useCart} from '../Hooks/useCart'
import CardProduct from './CardProduct'
import { useProductsVisited } from '../Hooks/useProductsVisited'


export function Products({products}) {
    
    const {addToCart, cart, removeFromCart} = useCart()
    const {productosFavoritos} = useProductsVisited()

    const checkProductInCart = product => {
      const check = cart.some(item => item.id === product.id)
      return check
    }

    const ckeckProductFavorite = product => {
      const checkFavoriteProduct = productosFavoritos.some((item) => item.id === product.id);
      return checkFavoriteProduct
  }

  return (
    <ul className='Productos'>
          {products.map(product =>{
           const isProductInCart = checkProductInCart(product)
           const isFavoriteProduct = ckeckProductFavorite(product)
            return(
              <CardProduct
              key={product.id}
              addToCart={addToCart}
              isProductInCart={isProductInCart}
              product={product}
              removeFromCart={removeFromCart}
              isFavoriteProduct={isFavoriteProduct}/>
            )
          })}
    </ul>
  )
}
