import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartSection from '../Pages/CartSection'
import Home from '../Pages/Home'

export function BrowserRouterComponent () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carrito" element={<CartSection />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
