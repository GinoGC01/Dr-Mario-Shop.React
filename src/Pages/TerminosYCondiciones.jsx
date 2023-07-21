import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'

export function TerminosYCondiciones () {
  return (
    <>
      <section className="tyc-container" id='terminos-y-condiciones'>
        <header>
          <div className="back-to-home">
            <Link to="/" className="back-to-home__cart-section">
              <span className="material-symbols-outlined">chevron_left</span>
            </Link>
          </div>
          <h1 className="title-tyc">Términos y condiciones</h1>
        </header>
        <ol className="ol-tyc">
          <li className="card-tyc">
            <h3>Uso de Órdendes de compra</h3>
            <p>
              Uso de Órdenes de Compra: Nuestro ecommerce opera mediante el
              sistema de Órdenes de Compra con un <b>NÚMERO DE ORDEN único</b>.
              Al realizar una compra, el cliente acepta que el pago y otros
              detalles se coordinarán a través de nuestros vendedores para
              proteger su seguridad y prevenir fraudes.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Precios de los productos</h3>
            <p>
              Los precios de los productos están sujetos a cambios sin previo
              aviso. Sin embargo, una vez confirmada la orden de compra, el
              precio acordado se mantendrá para el cliente.
            </p>
          </li>

          <li className="card-tyc">
            <h3>Información del Cliente</h3>
            <p>
              Información del Cliente: Al completar una Orden de Compra, el
              cliente debe proporcionar información precisa y actualizada,
              incluidos nombre, dirección, número de contacto y dirección de
              correo electrónico para facilitar el proceso de entrega y
              contacto.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Confirmación de la Orden:</h3>
            <p>
              Confirmación de la Orden: Una vez recibida la Orden de Compra,
              nuestro equipo se pondrá en contacto con el cliente psara
              confirmar la compra, los detalles del pedido y coordinar el método
              de pago y envío.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Métodos de Pago y Seguridad</h3>
            <p>
              Métodos de Pago y Seguridad: Nuestros vendedores ofrecerán
              opciones de pago seguras y confiables, asegurándose de proteger la
              privacidad y los datos financieros del cliente en todo momento.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Cambios y Cancelaciones</h3>
            <p>
              Cambios y Cancelaciones: Los clientes pueden solicitar cambios o
              cancelaciones en su Orden de Compra antes de que el pedido sea
              procesado y enviado. Comuníquese con nuestro equipo de vendedores
              para realizar cualquier modificación.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Envíos y Entregas</h3>
            <p>
              Envíos y Entregas: Nos esforzamos por garantizar entregas
              puntuales y precisas. Sin embargo, no nos responsabilizamos por
              retrasos causados por circunstancias ajenas a nuestro control,
              como problemas logísticos o eventos imprevistos.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Comunicación y Soporte</h3>
            <p>
              Comunicación y Soporte: Nuestro equipo de vendedores está
              disponible para atender cualquier duda o consulta relacionada con
              la Orden de Compra, pagos, envíos u otros aspectos del proceso de
              compra. La comunicación se realizará por medios seguros y
              confidenciales.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Derechos de Propiedad Intelectual</h3>
            <p>
              Derechos de Propiedad Intelectual: Todo el contenido, diseños y
              materiales en nuestro sitio web están protegidos por derechos de
              propiedad intelectual y no deben ser copiados, modificados o
              distribuidos sin autorización previa.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Limitación de Responsabilidad</h3>
            <p>
              Limitación de Responsabilidad: Nos esforzamos por brindar una
              experiencia de compra satisfactoria, pero no podemos garantizar la
              disponibilidad ininterrumpida del sitio web o la ausencia de
              errores. No nos hacemos responsables de daños indirectos o
              incidentales relacionados con el uso de nuestros servicios.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Modificaciones a los Términos</h3>
            <p>
              Modificaciones a los Términos: Nos reservamos el derecho de
              actualizar o modificar estos Términos y Condiciones en cualquier
              momento. Se notificará a los clientes sobre cambios importantes.
              Al continuar utilizando nuestro servicio después de dichas
              modificaciones, se aceptan los nuevos términos.
            </p>
          </li>
        </ol>
        <strong>
          Al realizar una orden de compra, el cliente indica su conformidad con
          estos términos y condiciones. Le recomendamos revisarlos detenidamente
          antes de realizar una compra. Si no está de acuerdo con alguno de los
          puntos mencionados, le solicitamos abstenerse de utilizar nuestro
          sistema de ventas con número de orden único.
        </strong>
      </section>
    <Footer/>
    </>
  )
}
