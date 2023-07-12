import React, { createContext, useEffect, useState } from 'react'
export const ProductosVisitadosContext = createContext()

export function ProductosVisitadosProvider ({ children }) {
  const [productosVisitados, setProductosVisitados] = useState([])
  const [productosFavoritos, setProductosFavoritos] = useState([])

  useEffect(() => {
    const ProductVisitedInitialState = JSON.parse(localStorage.getItem('products-visited-Dr-Mario-IND')) || []
    setProductosVisitados(ProductVisitedInitialState)
    const FavoritesProdcutsitialState = JSON.parse(localStorage.getItem('favorite-products-Dr-Mario-IND')) || []
    setProductosFavoritos(FavoritesProdcutsitialState)
  }, [])

  const updateLocalStorage = (state, storage) => {
    localStorage.setItem(
      storage,
      JSON.stringify(state)
    )
  }

  function handleProductosVisitados (producto) {
    const { id } = producto
    const productoVisitado = productosVisitados.findIndex(
      (item) => item.id === id
    )

    if (productoVisitado >= 0) return

    const newState = [...productosVisitados, { ...producto }]

    setProductosVisitados(newState)
    updateLocalStorage(newState, 'products-visited-Dr-Mario-IND')
  }

  function AddProductosFavoritos (producto) {
    const { id } = producto
    const productoFavorito = productosFavoritos.findIndex(
      (item) => item.id === id
    )

    if (productoFavorito >= 0) return

    const newState = [...productosFavoritos, { ...producto }]

    setProductosFavoritos(newState)
    updateLocalStorage(newState, 'favorite-products-Dr-Mario-IND')
  }

  function deleteProductosFavoritos (producto) {
    const { id } = producto
    const newState = productosFavoritos.filter((item) => item.id !== id)
    setProductosFavoritos(newState)
    updateLocalStorage(newState, 'favorite-products-Dr-Mario-IND')
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
