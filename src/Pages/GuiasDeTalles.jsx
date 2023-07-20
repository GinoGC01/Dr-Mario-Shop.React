import React from 'react'

export default function GuiasDeTalles () {
  return (
    <main className='guia-talles-conteiner'>
        <header className='header__guia-talles-conteiner'>
            <img src="../../../images/isotipo blanco.png" alt="" />
            <h2>Guia de talles</h2>
            <p>Una guía de talles es un documento que proporciona información sobre las medidas corporales correspondientes a diferentes tallas de prendas de vestir, facilitando a los usuarios encontrar la talla adecuada al comprar ropa en línea o en tiendas físicas.</p>
            <p>Todas las medidas corporales son <b>aproximadas en centímetros</b></p>
        </header>
        <section className='section__guia-talles-conteiner'>
            <article className='article-section__guia-talles-conteiner niños-conteiner'>
                <strong>Talles de niños</strong>
                <img src="../../../images/GuiaDeTalles/TABLA DE TALLES NIÑO1.jpg" alt="" />
            </article>
            <article className='article-section__guia-talles-conteiner mujer-conteiner'>
                <strong>Talles de Mujer</strong>
                <img src="../../../images/GuiaDeTalles/GUIA DE TALLES DAMA.jpg" alt="" />
            </article>
            <article className='article-section__guia-talles-conteiner hombre-conteiner'>
                <strong>Talles de Hombre</strong>
                <img src="../../../images/GuiaDeTalles/GUIA DE TALLES HOMBRE.jpg" alt="" />
            </article>
        </section>
    </main>
  )
}
