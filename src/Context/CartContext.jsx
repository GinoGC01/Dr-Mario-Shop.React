import React, { createContext, useState } from 'react'
import { useReduceCart } from '../Hooks/useReduceCart'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart, restartToCart } = useReduceCart()
  const [formActive, setFormActive] = useState(false)

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        restartToCart,
        clearCart,
        formActive,
        setFormActive
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
