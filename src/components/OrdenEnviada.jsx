import React, { useContext } from 'react'
import { Done } from './Icons'
import { Link } from 'react-router-dom'
import { OrdenCompraContext } from '../Context/OrdenCompraContex'

export function OrdenEnviada () {
  const { setSendMail } = useContext(OrdenCompraContext)
  const handlerSendMail = () => {
    setSendMail(false)
  }
  return (
    <main>
      <section className="section-orden-Enviada">
        <span className="Done-icon__orden-Enviada">
          <Done />
          <p>¡Gracias!</p>
        </span>
        <h1>Orden de compra enviada</h1>
        <p>
          A la brevedad nuestro equipo de ventas se comunicará con usted para
          concretar el pedido
        </p>
      </section>
      <Link to="/" className="Home__orden-Enviada" onClick={handlerSendMail}>
        Vovler a la tienda
      </Link>
      <Link
        to="/Preguntas-Frecuentes"
        className="Preguntas-frecuentes__orden-Enviada"
      >
        Preguntas frecuentes
      </Link>
    </main>
  )
}
