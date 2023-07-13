import React, { useState } from 'react'
import { useFilters } from '../Hooks/useFilters'
import { Cart } from '../components/Cart'
import { Filters } from '../components/Filters'
import FavoriteProducts from '../components/FavoriteProducts'
import { ProductsVisited } from '../components/ProductsVisited'
import { Products } from '../components/Products'
import productosIniciales from '../mocks/Products-01.json'

export default function Home () {
  const [products] = useState(productosIniciales)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <main className='animate__animated animate__fadeIn'>
        <Cart />
        <Filters />
        <FavoriteProducts/>
        <ProductsVisited />
        <Products products={filteredProducts} />
    </main>
  )
}
