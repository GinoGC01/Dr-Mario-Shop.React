import React, { createContext, useEffect, useState } from 'react'
import Products from '../mocks/Products-01.json'
export const ProductosVisitadosContext = createContext()

export function ProductosVisitadosProvider({ children }) {
  const [productosVisitados, setProductosVisitados] = useState([])
  const [productosFavoritos, setProductosFavoritos] = useState([])

  const productsVisitedLSkey = 'products-visited-Dr-Mario-IND'
  const productsVisitedLS = localStorage.getItem(productsVisitedLSkey)

  const prductsFavoritesLSKey = 'favorite-products-Dr-Mario-IND'
  const prductsFavoritesLS = localStorage.getItem(prductsFavoritesLSKey)

  const actualizarProductos = (localstorageProducts, localstoragekey) => {
    const ProductosLocalStorage = JSON.parse(localstorageProducts)
    const productosActualizados = ProductosLocalStorage?.map(
      (productoVisitado) => {
        const productoActualizado = Products.find(
          (productoJson) => productoJson.id === productoVisitado.id
        )
        if (productoActualizado) {
          return {
            ...productoVisitado,
            precio: productoActualizado.precio,
            img: {
              image01: productoActualizado.img.image01,
              image02: productoActualizado.img.image02,
              image03: productoActualizado.img.image03
            }
          }
        }
        return productoVisitado
      }
    )

    localStorage.setItem(localstoragekey, JSON.stringify(productosActualizados))
  }

  useEffect(() => {
    // actualizarProductos(productsVisitedLS, productsVisitedLSkey)
    // actualizarProductos(prductsFavoritesLS, prductsFavoritesLSKey)

    const ProductVisitedInitialState = productsVisitedLS || []
    setProductosVisitados(ProductVisitedInitialState)

    const FavoritesProdcutsitialState = prductsFavoritesLS || []
    setProductosFavoritos(FavoritesProdcutsitialState)
  }, [])

  const updateLocalStorage = (state, storage) => {
    localStorage.setItem(storage, JSON.stringify(state))
  }

  function handleProductosVisitados(producto) {
    const { id } = producto
    const productoVisitado = productosVisitados.findIndex(
      (item) => item.id === id
    )

    // actualiza la ux de los ultimos 6 productos vistos
    if (productosVisitados.length > 5) {
      const newState = [...productosVisitados.slice(1)]

      setProductosVisitados(newState)
      updateLocalStorage(newState, 'products-visited-Dr-Mario-IND')
    }
    // no repite el producto
    if (productoVisitado >= 0) return

    const newState = [...productosVisitados, { ...producto }]
    setProductosVisitados(newState)
    updateLocalStorage(newState, 'products-visited-Dr-Mario-IND')
  }

  function AddProductosFavoritos(producto) {
    const { id } = producto
    const productoFavorito = productosFavoritos.findIndex(
      (item) => item.id === id
    )

    if (productoFavorito >= 0) return

    const newState = [...productosFavoritos, { ...producto }]

    setProductosFavoritos(newState)
    updateLocalStorage(newState, 'favorite-products-Dr-Mario-IND')
  }

  function deleteProductosFavoritos(producto) {
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
