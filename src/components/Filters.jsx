import {useFilters} from "../Hooks/useFilters"


export function Filters(){

    const {CATEGORY_ID, PRICE_ID, MARCA_ID, TALLE_ID, setFilters, filters} = useFilters()

    function handleCategory(e){
        const value = e.target.value
        setFilters(prevState =>({
            ... prevState,
            category:value
        }))  
    }

    function handleCPrice(e){
        const value = e.target.value
        setFilters(prevState =>({
            ... prevState,
            minPrice:value
        }))  
    }

    function handleMarca(e){
        const value = e.target.value
        setFilters(prevState =>({
            ... prevState,
            marca:value
        }))  
    }

    function handleTalle(e){
        const value = e.target.value
        setFilters(prevState =>({
            ... prevState,
            talle:value
        }))  
    }
  
    return(
      <header>
        <form>
            <div>
              <label htmlFor={CATEGORY_ID}>Categorias</label>
              <select name={CATEGORY_ID} id={CATEGORY_ID} onChange={handleCategory}>
                <option value="all">Todas</option>
                <option value="buzos">Buzos</option>
                <option value="camperas">Camperas</option>
              </select>
            </div>
  
            <div>
              <label htmlFor={PRICE_ID}>Precio desde:</label>
              <input type="range" name={PRICE_ID} id={PRICE_ID} min={5000} max={25000} onChange={handleCPrice} />
              <span>${filters.minPrice}</span>
            </div>
  
            <div>
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

            <div>
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
  
          </form>
      </header>
      
    )
  }