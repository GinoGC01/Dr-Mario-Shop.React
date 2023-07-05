import { useId } from "react"
import { RemoveCart, ShoppBag } from './Icons'
import {useCart} from '../Hooks/useCart'
import { CardCart } from "./CardCart"

export function Cart (){

   const MENU_HAMBURGUESA_ID = useId()
   const {cart, clearCart} = useCart()
  
    return(
      <section className='Cart'>
        <input type="checkbox" hidden id={MENU_HAMBURGUESA_ID} className='input-button__Cart'/>
        <label htmlFor={MENU_HAMBURGUESA_ID} className='button__Cart'>
          <ShoppBag/>
        </label>
    
        <aside className='aside__Cart'>
          <h3>Products In cart</h3>
          <ul className='ul__aside'>
            {cart.map((product) =>{
              return(
                <CardCart 
                key={product.id} 
                product={product}/>
              )
            })}
          </ul>
          <button onClick={clearCart} >
            <RemoveCart/>
          </button>
        </aside>
      </section>
    )
  }