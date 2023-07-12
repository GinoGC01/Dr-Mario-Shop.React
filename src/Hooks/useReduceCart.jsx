import { useReducer } from 'react'
import { cartInitalState, cartReducer } from '../Reducers/CartReducer'

export const useReduceCart = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitalState)

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }

  const removeFromCart = (product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })
  }

  const restartToCart = (product) => {
    dispatch({
      type: 'RESTART_FROM_CART',
      payload: product
    })
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART'
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
    restartToCart,
    clearCart
  }
}
