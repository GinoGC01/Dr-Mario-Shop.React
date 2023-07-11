import React from 'react'
import {useCart} from '../Hooks/useCart'
import CardProduct from './CardProduct'


export function Products({products}) {
    
    const {addToCart, cart, removeFromCart} = useCart()

    const checkProductInCart = product => {
      const check = cart.some(item => item.id === product.id)
      return check
    }

  return (
    <ul className='Productos'>
          {products.map(product =>{
           const isProductInCart = checkProductInCart(product)
            return(
              <CardProduct
              key={product.id}
              addToCart={addToCart}
              isProductInCart={isProductInCart}
              product={product}
              removeFromCart={removeFromCart}/>
            )
          })}
    </ul>
  )
}
