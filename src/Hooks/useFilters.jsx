import { useCallback, useContext, useId } from 'react'
import { FilterContext } from '../Context/FilterContext'

export function useFilters () {
  const CATEGORY_ID = useId()
  const PRICE_ID = useId()
  const MARCA_ID = useId()
  const TALLE_ID = useId()

  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = useCallback(
    (products) => {
      return products.filter((product) => {
        return (
          product.precio >= filters.minPrice &&
          (filters.category === 'all' ||
            product.categoria === filters.category) &&
          (filters.marca === 'all' || product.marca === filters.marca) &&
          (filters.talle === 'all' || product.talle.talle === filters.talle)
        )
      })
    },
    [filters]
  )

  return {
    CATEGORY_ID,
    PRICE_ID,
    MARCA_ID,
    TALLE_ID,
    filterProducts,
    filters,
    setFilters
  }
}
