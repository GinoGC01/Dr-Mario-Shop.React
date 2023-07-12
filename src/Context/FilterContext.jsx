import React, { createContext, useState } from 'react'

export const FilterContext = createContext()

export function FilterProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 15000,
    marca: 'all',
    talle: 'all'
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
