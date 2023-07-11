import { useState, useEffect } from "react";

export function useQuantityProductsCart({ cart }) {
  const [quantityProducts, setquantityProducts] = useState(0);

  function handleQuantityProducts() {
    const quantityProductsdone = cart.reduce(
      (acc, producto) => acc + producto.cantidad,
      0
    );
    setquantityProducts(quantityProductsdone);
    return quantityProductsdone;
  }

  useEffect(() => {
    handleQuantityProducts();
  }, [cart]);

  return { quantityProducts };
}
