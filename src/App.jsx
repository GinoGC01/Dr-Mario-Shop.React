import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartSection from './Pages/CartSection'
import Home from './Pages/Home'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carrito" element={<CartSection />} />
          <Route path="/Carrito/#ordenDeCompra" element={<CartSection />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
