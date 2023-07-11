import { createContext, useEffect, useState } from "react";
export const ProductosVisitadosContext = createContext();

export function ProductosVisitadosProvider({ children }) {
  const [productosVisitados, setProductosVisitados] = useState([]);

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

  return (
    <ProductosVisitadosContext.Provider
      value={{
        productosVisitados,
        handleProductosVisitados,
      }}
    >
      {children}
    </ProductosVisitadosContext.Provider>
  );
}
