import { useCallback, useContext, useId } from 'react'
import { FilterContext } from '../Context/FilterContext'

export function useFilters() {
  const CATEGORY_ID = useId()
  const PRICE_ID = useId()
  const MARCA_ID = useId()
  const TALLE_ID = useId()
  const SEARCH_ID = useId()
  const STOCK_ID = useId()

  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = useCallback(
    (products) => {
      return products.filter((product) => {
        const nameProduct = product.nombre.toLowerCase()
        const marcaProduct = product.marca.toLowerCase()
        const categoryProduct = product.categoria.toLowerCase()

        return (
          product.precio >= filters.minPrice &&
          (filters.category === 'all' ||
            product.categoria === filters.category) &&
          (filters.marca === 'all' || product.marca === filters.marca) &&
          (filters.talle === 'all' || product.talle.talle === filters.talle) &&
          (filters.search === 'all' ||
            nameProduct.includes(filters.search) ||
            marcaProduct.includes(filters.search) ||
            categoryProduct.includes(filters.search))
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
    SEARCH_ID,
    STOCK_ID,
    filterProducts,
    filters,
    setFilters
  }
}
