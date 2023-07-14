import { useCart } from './useCart'
import { useProductsVisited } from './useProductsVisited'

export default function useCheckProducts () {
  const { cart } = useCart()
  const { productosFavoritos } = useProductsVisited()

  const checkProductInCart = (product) => {
    const check = cart.some((item) => item.id === product.id)
    return check
  }

  const ckeckProductFavorite = (product) => {
    const checkFavoriteProduct = productosFavoritos.some(
      (item) => item.id === product.id
    )
    return checkFavoriteProduct
  }

  return ({
    checkProductInCart,
    ckeckProductFavorite
  })
}
