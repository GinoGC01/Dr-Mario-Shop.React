import React, { createContext, useState } from 'react'

export const FilterContext = createContext()

export function FilterProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 8500,
    marca: 'all',
    talle: 'all',
    search: 'all'
  })
  return (
    <FilterContext.Provider value={{
      filters,
      setFilters
    }
    }>
        {children}
    </FilterContext.Provider>
  )
}
