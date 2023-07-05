import { createContext} from "react";
import { useReduceCart } from "../Hooks/useReduceCart";

export const CartContext = createContext()

export function CartProvider ({children}){
    const {state, addToCart, removeFromCart, clearCart, restartToCart} = useReduceCart()

    return(
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            restartToCart,
            clearCart

        }}>
            {children}
        </CartContext.Provider>
    )
}