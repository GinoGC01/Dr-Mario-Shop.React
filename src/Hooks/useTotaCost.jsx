import { useState, useEffect } from 'react'
import { useCart } from './useCart'

export function useTotalCost () {
  const [totalCost, setTotalCost] = useState(0)
  const { cart } = useCart()

  function handleTotalCost () {
    const totalCostCalculated = cart.reduce(
      (acc, producto) => acc + (producto.precio * producto.cantidad),
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
