import React, { createContext, useEffect, useState } from 'react'
import Products from '../mocks/Products-01.json'
import { actualizarProductos } from '../Logic/UpdateProduct'
export const ProductosVisitadosContext = createContext()

export function ProductosVisitadosProvider({ children }) {
  const [productosVisitados, setProductosVisitados] = useState([])
  const [productosFavoritos, setProductosFavoritos] = useState([])

  const updateLocalStorage = (state, storage) => {
    localStorage.setItem(storage, JSON.stringify(state))
  }

  const productsVisitedLSkey = 'products-visited-Dr-Mario-IND'
  const productsVisitedLS = localStorage.getItem(productsVisitedLSkey)

  const prductsFavoritesLSKey = 'favorite-products-Dr-Mario-IND'
  const prductsFavoritesLS = localStorage.getItem(prductsFavoritesLSKey)

  // estado productos visitados
  useEffect(() => {
    const ProductVisitedInitialState = JSON.parse(productsVisitedLS) || []
    setProductosVisitados(ProductVisitedInitialState)
    if (ProductVisitedInitialState.length > 0) {
      const newState = actualizarProductos(productsVisitedLSkey, Products)
      setProductosVisitados(newState)
      updateLocalStorage(newState, productsVisitedLSkey)
    }
  }, [])

  // estado productos visitados
  useEffect(() => {
    const FavoritesProdcutsitialState = JSON.parse(prductsFavoritesLS) || []
    setProductosFavoritos(FavoritesProdcutsitialState)
    if (FavoritesProdcutsitialState.length > 0) {
      const newState = actualizarProductos(prductsFavoritesLSKey, Products)
      setProductosFavoritos(newState)
      updateLocalStorage(newState, prductsFavoritesLSKey)
    }
  }, [])

  function handleProductosVisitados(producto) {
    const { id } = producto
    const productoVisitado = productosVisitados.findIndex(
      (item) => item.id === id
    )

    // actualiza la ux de los ultimos 6 productos vistos
    if (productosVisitados.length > 5) {
      const newState = [...productosVisitados.slice(1)]

      setProductosVisitados(newState)
      updateLocalStorage(newState, productsVisitedLSkey)
    }
    // no repite el producto
    if (productoVisitado >= 0) return

    const newState = [...productosVisitados, { ...producto }]
    setProductosVisitados(newState)
    updateLocalStorage(newState, productsVisitedLSkey)
  }

  function AddProductosFavoritos(producto) {
    const { id } = producto
    const productoFavorito = productosFavoritos.findIndex(
      (item) => item.id === id
    )

    if (productoFavorito >= 0) return

    const newState = [...productosFavoritos, { ...producto }]

    setProductosFavoritos(newState)
    updateLocalStorage(newState, prductsFavoritesLSKey)
  }

  function deleteProductosFavoritos(producto) {
    const { id } = producto
    const newState = productosFavoritos.filter((item) => item.id !== id)
    setProductosFavoritos(newState)
    updateLocalStorage(newState, prductsFavoritesLSKey)
  }

  return (
    <ProductosVisitadosContext.Provider
      value={{
        productosVisitados,
        handleProductosVisitados,
        productosFavoritos,
        AddProductosFavoritos,
        deleteProductosFavoritos
      }}
    >
      {children}
    </ProductosVisitadosContext.Provider>
  )
}
