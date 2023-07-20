import React from 'react'
import { Link } from 'react-router-dom'

export default function PreguntasFrecuentes () {
  return (
    <>
    <div className='back-to-home'>
        <Link to="/" className="back-to-home__cart-section">
        <span className="material-symbols-outlined">chevron_left</span>
      </Link>
    </div>

      <section className="preguntas-frecuentes">
        <h1>PREGUNTAS FRECUENTES</h1>
        <ul className="preguntas">
        <li className="pregunta">
            <strong>¿Qué es una orden de compra?</strong>
            <p>
              En nuestro sistema de ventas no utilizamos métodos de pago online,
              en la página web. Por eso, creamos un sistema de ventas a travez
              de ordenes de compra con un <strong>NUMERO DE ORDEN</strong>{' '}
              único. En esta orden, solicitamos una serie de datos para ponernos
              en contacto y coordinar métodos de pagos, envios y demás dudas que
              pueda llegar a tener, atravez de nuestros vendedores. La finalidad
              de este método es proteger a nuestros clientes de fraudes y
              estáfas, contactandonos personalmente.
            </p>
          </li>
          <li className="pregunta">
            <strong>¿Qué forma de pago puedo utilizar?</strong>
            <p>
              Disponemos de varias formas de pago, <strong>Mercado pago</strong>
              , <strong>Uala</strong>, <strong>BruBank</strong>,{' '}
              <strong>Cuenta DNI</strong>, <strong>MODO</strong>,{' '}
              <strong>Transferencias Bancarias</strong>.
            </p>
          </li>
          <li className="pregunta">
            <strong>Perdí mi número de orden ¿Qué hago?</strong>
            <p>
              No hay problema. Nosotros nos encargamos de guardarlo por usted.
              Sin embargo, deberemos pedirle que nos brinde algunos datos para
              confirar su identidad.
            </p>
          </li>
          <li className="pregunta">
            <strong>¿Cuál es el costo del envío?</strong>
            <p>
              El costo del envio, como se sabe, puede variar porque depende de
              muchos factores. Sin embargo, nuestros agentes de ventas cuando se
              comuniquen con usted le harán saber el costo del envío en caso de
              poder realizarlo.{' '}
            </p>
          </li>
          <li className="pregunta">
            <strong>¿Cómo se realizan los envíos?</strong>
            <p>
              Nosotros trabajamos con Correo Argentino, para distintas
              provincias o zonas lejos del alcance de la moto-mensajería. Para
              zonas aledañas a José C. Paz, contamos con moto mensajería. De
              igual forma, el coste del envío será informado por nuesttros
              vendedores.
            </p>
          </li>
          <li className="pregunta">
            <strong>¿Donde puedo recibir mi pedido?</strong>
            <p>
              Al igual que en todas las agencias de envío, se pueden retirar en
              la sucursal del correo (en caso de envío por correo Argentino) o
              bien en su domicilio. En caso de envío por moto-mensajería, se
              puede pactar un punto de encuentro, o domicilio.
            </p>
          </li>
          <li className="pregunta">
            <strong>¿Cuánto tardan los envíos?</strong>
            <p>
              El tiempo de entrega depende del tipo de envío seleccionado. En
              general la demora se encuentra entre 1 y 7 días hábiles luego de
              acreditado el pago. En el caso de la moto-mensajería puede ser en
              el mismo día.
            </p>
          </li>
          <li className="pregunta">
            <strong>No me quedó el buzo / campera, ¿Lo puedo cambiar?</strong>
            <p>
              ¡Obviamente! tiene un plazo de cambio de hasta una semana para
              acordar el cambio, y 15 días para realizarlo. Si el envío fue a
              otra provincia, se deberá realizar todo el procedimiento
              nuevamente (Correo Argentino), en caso de ser moto-mensajería de
              igual forma, pero lo coordinamos nosotros. (Nos encargamos que el
              cadete retire el producto y lo traiga nuevamente). Todo estos
              servicios de envios y cambios de prendas se cargan a costa del
              cliente. Cabe aclarar que el producto tiene que estar en las
              mismas condiciones que fué entregado, en caso de estar manchado, o
              tener algun detalle o alteración se cancela la devolución.
            </p>
          </li>
          <li className="pregunta">
            <strong>
              ¿Qué debo hacer si el producto no llega en buen estado?
            </strong>
            <p>
              En ese caso, contactanos por cualquier medio que tengas
              disponible, y lo solucionaremos.
            </p>
          </li>
        </ul>
      </section>
    </>
  )
}
