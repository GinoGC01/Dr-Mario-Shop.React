import { useState, useEffect } from 'react'

export function useTotalCost ({ cart }) {
  const [totalCost, setTotalCost] = useState(0)

  function handleTotalCost () {
    const totalCostCalculated = cart.reduce(
      (acc, producto) => acc + producto.precio,
      0
    )
    setTotalCost(totalCostCalculated)
    return totalCost
  }

  useEffect(() => {
    handleTotalCost()
  }, [cart])

  return { totalCost }
}
