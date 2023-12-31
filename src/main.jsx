import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FilterProvider } from './Context/FilterContext'
import { CartProvider } from './Context/CartContext'
import { ProductosVisitadosProvider } from './Context/ProductsVistedContext'
import { OrdenCompraContexProvider } from './Context/OrdenCompraContex'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
      <CartProvider>
        <ProductosVisitadosProvider>
          <OrdenCompraContexProvider>
          <App />
          </OrdenCompraContexProvider>
        </ProductosVisitadosProvider>
      </CartProvider>
    </FilterProvider>

)
