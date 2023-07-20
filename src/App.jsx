import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartSection from './Pages/CartSection'
import Home from './Pages/Home'
import './App.css'
import PreguntasFrecuentes from './Pages/PreguntasFrecuentes'
import GuiasDeTalles from './Pages/GuiasDeTalles'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carrito" element={<CartSection />} />
          <Route path="/Carrito/#ordenDeCompra" element={<CartSection />} />
          <Route path="/Preguntas-Frecuentes" element={<PreguntasFrecuentes/>} />
          <Route path='/Guia-de-Talles' element={<GuiasDeTalles/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
