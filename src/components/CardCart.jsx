import { useCart } from "../Hooks/useCart"

export const CardCart = ({product}) => {
    const { restartToCart, addToCart} = useCart()


    return(
              <li style={{listStyle:"none"}} className='card__aside'>
                  <img src={product.img.image01} alt={product.name} />
                  <strong>{product.name}</strong>
                  <p>$ {product.precio}</p>
                  <p>cantidad: {product.cantidad}</p>
                  <button className='add-product__aside' onClick={()=>{addToCart(product)}}>+</button>
                  <button className='substract-product__aside' onClick={()=>{restartToCart(product)}}>-</button>
              </li>
    )
    }