import React, { useState } from 'react'
import productosIniciales from './mocks/Products-01.json'
import { Filters } from './components/Filters'
import { Products } from './components/Products'
import { Cart } from './components/Cart'
import { useFilters } from './Hooks/useFilters'
import { CartProvider } from './Context/CartContext'
import { ProductosVisitadosProvider } from './Context/ProductsVistedContext'
import { ProductsVisited } from './components/ProductsVisited'
import FavoriteProducts from './components/FavoriteProducts'
import './App.css'

function App () {
  const [products] = useState(productosIniciales)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <ProductosVisitadosProvider>
        <Cart />
        <Filters />
        <FavoriteProducts/>
        <ProductsVisited />
        <Products products={filteredProducts} />
      </ProductosVisitadosProvider>
    </CartProvider>
  )
}

export default App
