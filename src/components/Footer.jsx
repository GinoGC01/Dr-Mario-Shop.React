import React from 'react'
import { Link } from 'react-router-dom'
import { RigthArrow } from './Icons'

export function Footer () {
  return (
    <footer className="footer-principal">
      <section className="content">
        <article>
        <div className='title-section__footer'>
            <h3>Store </h3>
            <RigthArrow />
          </div>
        </article>
        <Link
          to={'/Terminos-y-condiciones'}
          className="preguntas-frecuentes-home"
        >
          Términos y condiciones
        </Link>
        <article className="links">
          <div className='title-section__footer'>
            <h3>Navegación </h3>
            <RigthArrow />
          </div>
          <ul>
            <li className="link-li">
              <Link to="/#home">Home</Link>
            </li>
            <li className="link-li">
              <Link to="/Preguntas-Frecuentes">Preguntas frecuentes</Link>
            </li>
          </ul>
        </article>
        <article className="contacto">
        <div className='title-section__footer'>
            <h3>Contacto </h3>
            <RigthArrow />
          </div>
          <ul className="ul-general">
            <li>
              <p> • Teléfono: +54 011 4023-0671</p>
            </li>
            <li>
              <p>• Email: dr.mario.shop@gmail.com</p>
            </li>
            <ul className="rrss">
              <li>
                <a href="https://www.facebook.com/Dr.Mario.IND/" target='_BLANK' rel="noreferrer">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://wa.link/kwhsp9" target='_BLANK' rel="noreferrer">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dr.mario_ind/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_BLANK' rel="noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </ul>
        </article>
        <section className="pago">
        <header className='title-section__footer'>
            <h3>Métodos de pago </h3>
            <RigthArrow />
          </header>
          <ul className="metodos-de-pago">
            <li className="metodo">
              <img src="../../images/metodos-pago/brubank.png" alt="brubank" />
            </li>
            <li className="metodo">
              <img
                src="../../images/metodos-pago/cuentaDNI.webp"
                alt="brubank"
              />
            </li>
            <li className="metodo">
              <img
                src="../../images/metodos-pago/MercadoPago.webp"
                alt="brubank"
              />
            </li>
            <li className="metodo">
              <img src="../../images/metodos-pago/Modo.png" alt="brubank" />
            </li>
            <li className="metodo">
              <img
                src="../../images/metodos-pago/transferencia.png"
                alt="brubank"
              />
            </li>
            <li className="metodo">
              <img src="../../images/metodos-pago/Uala.png" alt="brubank" />
            </li>
          </ul>

        </section>
      </section>
      <section className="copy">
        <h4>copyright © | Dr. Mario IND | Todos los derechos reservados</h4>
      </section>
    </footer>
  )
}
