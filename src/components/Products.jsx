/* eslint-disable no-useless-return */
import React from 'react'
import { useCart } from '../Hooks/useCart'
import CardProduct from './CardProduct'
import useCheckProducts from '../Hooks/useCheckProducts'
import { usePagination } from '../Hooks/usePagination'

export function Products ({ products }) {
  const { items, currentPageVisible, totalPages, prevPage, nextPage } =
    usePagination({ products })
  const { addToCart, removeFromCart } = useCart()
  const { checkProductInCart, ckeckProductFavorite } = useCheckProducts()

  const itemsInShop = items.map((product) => {
    const isProductInCart = checkProductInCart(product)
    const isFavoriteProduct = ckeckProductFavorite(product)
    return (
      <CardProduct
        key={product.id}
        addToCart={addToCart}
        isProductInCart={isProductInCart}
        product={product}
        removeFromCart={removeFromCart}
        isFavoriteProduct={isFavoriteProduct}
      />
    )
  })

  return (
    <section className="Section-products">
      <ul className="Productos">{itemsInShop}</ul>
      <div className="pagination-container">
        <p>
          <b>{currentPageVisible} / {totalPages}</b>
        </p>
        <div className='buttons__pagination'>
          <button onClick={prevPage}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={nextPage}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
