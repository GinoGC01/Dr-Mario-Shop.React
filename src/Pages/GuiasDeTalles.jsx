import React from 'react'
import { ArrowDown } from '../components/Icons'
import { Link } from 'react-router-dom'

export default function GuiasDeTalles () {
  return (
    <main className='guia-talles-conteiner'>
        <Link to={'/'} className='back-home'>
            <ArrowDown/>
        </Link>
        <header className='header__guia-talles-conteiner'>
            <img src="../../../images/isotipo blanco.png" alt="" />
            <h2>Guia de talles</h2>
            <p>Una guía de talles es un documento que proporciona información sobre las medidas corporales correspondientes a diferentes tallas de prendas de vestir, facilitando a los usuarios encontrar la talla adecuada al comprar ropa en línea o en tiendas físicas.</p>
            <p>Todas las medidas corporales son <b>aproximadas en centímetros</b></p>
        </header>
        <section className='section__guia-talles-conteiner'>
            <article className='article-section__guia-talles-conteiner niños-conteiner'>
                <strong>Talles de niños</strong>
                <div className='img-conteiner__guia-talles-conteiner'>
                    <img src="../../../images/GuiaDeTalles/TABLA DE TALLES NIÑO1.jpg" alt="tabla de talles de niños" />
                </div>
            </article>
            <article className='article-section__guia-talles-conteiner mujer-conteiner'>
                <strong>Talles de Mujer</strong>
                <div className='img-conteiner__guia-talles-conteiner'>
                    <img src="../../../images/GuiaDeTalles/GUIA DE TALLES DAMA.jpg" alt="tabla de talles de dama" />
                </div>
            </article>
            <article className='article-section__guia-talles-conteiner hombre-conteiner'>
                <strong>Talles de Hombre</strong>
                <div className='img-conteiner__guia-talles-conteiner'>
                    <img src="../../../images/GuiaDeTalles/GUIA DE TALLES HOMBRE.jpg" alt="tabla de talles de hombres" />
                </div>
            </article>
        </section>
    </main>
  )
}
