import Products from '../mocks/Products-01.json'
import { actualizarProductos } from '../Logic/UpdateProduct'

const localstoragekeyCART = 'cart-Dr-Mario-Shop'
const cartInital = JSON.parse(localStorage.getItem(localstoragekeyCART)) || []
// actualiza productos
const UpdateProduct = (initalState) => {
  if (initalState?.length > 0) {
    return actualizarProductos(localstoragekeyCART, Products)
  }
  return initalState
}

export const cartInitalState = UpdateProduct(cartInital)

export const updateLocalStorage = (state) => {
  localStorage.setItem('cart-Dr-Mario-Shop', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex((item) => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        if (newState[productInCartIndex].cantidadDisponible <= 1) {
          updateLocalStorage(newState)
          return newState
        } else if (
          newState[productInCartIndex].cantidadDisponible ===
          newState[productInCartIndex].cantidad
        ) {
          updateLocalStorage(newState)

          return newState
        }

        newState[productInCartIndex].cantidad++
        updateLocalStorage(newState)

        return newState
      }

      const newStateadded = [
        // copia el estado
        ...state,
        // copia el objeto
        {
          ...actionPayload,
          cantidad: 1
        }
      ]
      updateLocalStorage(newStateadded)

      return newStateadded
    }

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const newState = state.filter((item) => item.id !== id)
      updateLocalStorage(newState)

      return newState
    }

    case 'RESTART_FROM_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex((item) => item.id === id)

      const newState = [...state]

      if (newState[productInCartIndex].cantidad > 1) {
        const newState = structuredClone(state)
        newState[productInCartIndex].cantidad--
        updateLocalStorage(newState)

        return newState
      }

      if (newState[productInCartIndex].cantidad <= 1) {
        const newState = state.filter((item) => item.id !== id)
        updateLocalStorage(newState)

        return newState
      }
    }
    case 'CLEAR_CART': {
      updateLocalStorage([])
      return []
    }
  }
  return state
}
