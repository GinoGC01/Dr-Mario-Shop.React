import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartSection from './Pages/CartSection'
import Home from './Pages/Home'
import './App.css'
import OrdenEnviada from './Pages/OrdenEnviada'
import PreguntasFrecuentes from './Pages/PreguntasFrecuentes'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carrito" element={<CartSection />} />
          <Route path="/Carrito/#ordenDeCompra" element={<CartSection />} />
          <Route path="/Orden-Enviada" element={<OrdenEnviada/>} />
          <Route path="/Preguntas-Frecuentes" element={<PreguntasFrecuentes/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
