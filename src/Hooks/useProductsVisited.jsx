import { useContext } from "react";
import { ProductosVisitadosContext } from "../Context/ProductsVistedContext";

export function useProductsVisited() {
  const contextproductsVisited = useContext(ProductosVisitadosContext);

  if (contextproductsVisited === undefined) {
    throw new Error(
      "useProductVisited must be used within a ProductVisitedProvider"
    );
  }

  return contextproductsVisited;
}
