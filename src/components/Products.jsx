import React from 'react'
import {AddCart, RemoveCart} from '../components/Icons'
import {useCart} from '../Hooks/useCart'

export function Products({products}) {
    
    const {addToCart, cart, removeFromCart} = useCart()

    const checkProductInCart = product => {
      const check = cart.some(item => item.id === product.id)
      return check
    }

  return (
    <ul className='Productos'>
          {products.slice(0,20).map(product =>{
           const isProductInCart = checkProductInCart(product)
            return(
              <li key={product.id} className='Card' style={{listStyle:"none"}}>
                <img src={product.img.image01} alt={product.nombre} className='img__Card' />
                <div className='text__Card'>
                  <strong className='title__Card'>{product.nombre}</strong >
                  <p className='price__Card'>$ {product.precio}</p>
                  <p className='price__Card'>{product.marca}</p>
                  <p className='price__Card'>{product.talle.talle}</p>
                  <button className='button__Card' onClick={()=>{
                    isProductInCart ? removeFromCart(product) : addToCart(product)
                  }}>
                      {isProductInCart ? <RemoveCart/> : <AddCart/>}
                  </button>
                </div>
              </li>
            )
          })}
    </ul>
  )
}
