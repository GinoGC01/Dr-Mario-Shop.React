import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export function useCart() {

    const contextCart = useContext(CartContext)

    if(contextCart === undefined){
        throw new Error ('useCart must be used within a CartProvider')
    }

  return contextCart
}
