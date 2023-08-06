import React from 'react'
import SliderPrincipal from './SliderPrincipal'

function Oferta() {
  return (
    <>
      <span className='oferta'>20%</span>
      <p className='texto__oferta'>
        Oferta de Inaguración <b>$2500</b> en cualquier artículo
      </p>
    </>
  )
}

export default function DrMarioFirstSection() {
  return (
    <section className='Dr-mario-FirstSection'>
      <header className='header__Dr-mario-FirstSection'>
        <h2 className='subtitle__Dr-mario-FirstSection'>Dr. Mario IND</h2>
        <h1 className='title-mario-FirstSection'>
          Buzos y Camperas importadas
        </h1>
        {/* <Oferta /> */}
      </header>
      <SliderPrincipal />
    </section>
  )
}
