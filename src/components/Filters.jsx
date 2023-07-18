import React, { useState, useRef } from 'react'
import { useFilters } from '../Hooks/useFilters'
import { FiltersIcon, Lupa, RigthArrow } from './Icons'

export function Filters () {
  const {
    CATEGORY_ID,
    PRICE_ID,
    MARCA_ID,
    TALLE_ID,
    SEARCH_ID,
    setFilters,
    filters
  } = useFilters()
  const [filtrarPor, setFiltrarPor] = useState(false)
  const searchFilter = useRef()

  function onSubmit (e) {
    e.preventDefault()
  }

  function handleSearch (e) {
    const value = searchFilter.current.value.toLowerCase()
    if (value === '') {
      setFilters((prevState) => ({
        ...prevState,
        search: 'all'
      }))
    } else {
      setFilters((prevState) => ({
        ...prevState,
        search: value
      }))
    }
  }

  function handleCategory (e) {
    const value = e.target.value
    setFilters((prevState) => ({
      ...prevState,
      category: value
    }))
  }

  function handleCPrice (e) {
    const value = e.target.value
    setFilters((prevState) => ({
      ...prevState,
      minPrice: value
    }))
  }

  function handleMarca (e) {
    const value = e.target.value
    setFilters((prevState) => ({
      ...prevState,
      marca: value
    }))
  }

  function handleTalle (e) {
    const value = e.target.value
    setFilters((prevState) => ({
      ...prevState,
      talle: value
    }))
  }

  function handleFiltersContent () {
    setFiltrarPor(!filtrarPor)
  }

  return (
    <header>
      <h2 className='title-products-section'>
        <RigthArrow/>
        Sección de productos
        </h2>
      <section className="filters-Container">
        <button onClick={handleFiltersContent} className="button-filters">
          <FiltersIcon />
        </button>
        <form className="form__filters" onSubmit={onSubmit}>
          <div
            className={filtrarPor ? 'filters__content-on' : 'filters__content'}
          >
            <div className="category">
              <label htmlFor={CATEGORY_ID}>Categorias</label>
              <select
                name={CATEGORY_ID}
                id={CATEGORY_ID}
                onChange={handleCategory}
              >
                <option value="all">Todas</option>
                <option value="buzos">Buzos</option>
                <option value="camperas">Camperas</option>
              </select>
            </div>

            <div className="price-from">
              <label htmlFor={PRICE_ID}>Precio desde</label>
              <input
                type="range"
                name={PRICE_ID}
                id={PRICE_ID}
                min={8500}
                max={25000}
                onChange={handleCPrice}
                value={filters.minPrice}
              />
              <span>${filters.minPrice}</span>
            </div>

            <div className="merch">
              <label htmlFor={MARCA_ID}>Marca</label>
              <select name={MARCA_ID} id={MARCA_ID} onChange={handleMarca}>
                <option value="all">Todas</option>
                <option value="NIKE">Nike</option>
                <option value="Gildan">Gildan</option>
                <option value="Everlast">Everlast</option>
                <option value="Goodiellow">Goodiellow</option>
                <option value="Truss">Truss</option>
                <option value="GAP">Gap</option>
                <option value="Avengers">Avengers</option>
                <option value="Junk-Food">Junk-Food</option>
              </select>
            </div>

            <div className="talle">
              <label htmlFor={TALLE_ID}>Talles</label>
              <select name={TALLE_ID} id={TALLE_ID} onChange={handleTalle}>
                <option value="all">Todos</option>
                <option value="S">Talle S</option>
                <option value="M">Talle M</option>
                <option value="L">Talle L</option>
                <option value="XL">Talle XL</option>
                <option value="XXL">Talle XXL</option>
              </select>
            </div>
          </div>

          <div className="search-content__filters">
            <input
              type="text"
              ref={searchFilter}
              id={SEARCH_ID}
              onChange={handleSearch}
            />
            <label htmlFor={SEARCH_ID}>
              <Lupa />
            </label>
          </div>
        </form>
      </section>
    </header>
  )
}
