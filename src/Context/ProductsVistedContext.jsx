import { createContext, useEffect, useState } from "react";
export const ProductosVisitadosContext = createContext();

export function ProductosVisitadosProvider({ children }) {
  const [productosVisitados, setProductosVisitados] = useState([]);
  const [productosFavoritos, setProductosFavoritos] = useState([])

  useEffect(() => {
    const ProductVisitedInitialState =
      JSON.parse(localStorage.getItem("products-visited-Dr-Mario-IND")) || [];
    setProductosVisitados(ProductVisitedInitialState);
  }, []);


  const updateLocalStorage = (state) => {
    localStorage.setItem(
      "products-visited-Dr-Mario-IND",
      JSON.stringify(state)
    );
  };

  function handleProductosVisitados(producto) {
    const { id } = producto;
    const productoVisitado = productosVisitados.findIndex(
      (item) => item.id === id
    );

    if (productoVisitado >= 0) return;

    const newState = [...productosVisitados, { ...producto }];

    setProductosVisitados(newState);
    updateLocalStorage(newState);
  }

  function AddProductosFavoritos(producto){
    const { id } = producto;
    const productoFavorito = productosFavoritos.findIndex(
      (item) => item.id === id
    );

    if (productoFavorito >= 0) return;

    const newState = [...productosFavoritos, { ...producto }];

    setProductosFavoritos(newState);
    updateLocalStorage(newState);
  }

  function deleteProductosFavoritos(producto){
    const { id } = producto;
    const newState = productosFavoritos.filter((item) => item.id !== id);
    setProductosFavoritos(newState);
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
  );
}
