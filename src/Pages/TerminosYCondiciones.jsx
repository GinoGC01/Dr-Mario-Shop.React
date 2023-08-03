import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'

export function TerminosYCondiciones () {
  return (
    <>
      <section className="tyc-container" id="terminos-y-condiciones">
        <header>
          <div className="back-to-home">
            <Link to="/" className="back-to-home__cart-section">
              <span className="material-symbols-outlined">chevron_left</span>
            </Link>
          </div>
          <h1 className="title-tyc">Términos y condiciones</h1>
        </header>
        <ol className="ol-tyc">
          <h3>Procedimiento de Órdenes de Compra</h3>
          <p>
            Procedimiento de Órdenes de Compra: Nuestra plataforma de comercio
            electrónico opera a través de un sistema basado en Órdenes de
            Compra, cada una con un <b>número de orden único</b>. Al realizar
            una adquisición, el cliente acepta que tanto el proceso de pago como
            otros aspectos pertinentes serán gestionados por nuestro equipo de
            vendedores, en aras de salvaguardar la seguridad y prevenir
            actividades fraudulentas.
          </p>
          <li className="card-tyc">
            <h3>Política de Precios</h3>
            <p>
              Política de Precios: Los valores asignados a los productos están
              sujetos a posibles modificaciones sin notificación previa. Sin
              embargo, una vez que la orden de compra es confirmada, el precio
              acordado se mantendrá inalterado para el cliente.
            </p>
          </li>

          <li className="card-tyc">
            <h3>Detalles del Cliente</h3>
            <p>
              Detalles del Cliente: Al completar una Orden de Compra, el cliente
              se compromete a proporcionar información precisa y actualizada.
              Esta incluye el nombre, la dirección, el número de contacto y la
              dirección de correo electrónico, elementos esenciales para
              facilitar tanto el proceso de entrega como la comunicación.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Confirmación de la Orden</h3>
            <p>
              Confirmación de la Orden: Una vez que recibimos una Orden de
              Compra, nuestro equipo se comunicará con el cliente para validar
              la transacción, repasar los detalles del pedido y coordinar tanto
              el método de pago como la logística de envío.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Opciones de Pago y Seguridad</h3>
            <p>
              Opciones de Pago y Seguridad: Nuestros vendedores ofrecen
              alternativas de pago seguras y confiables, garantizando en todo
              momento la salvaguarda de la privacidad y los datos financieros
              del cliente.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Solicitudes de Cambio y Cancelación</h3>
            <p>
              Solicitudes de Cambio y Cancelación: Antes de que un pedido sea
              procesado y enviado, los clientes tienen la posibilidad de
              solicitar modificaciones o cancelaciones de su Orden de Compra.
              Les instamos a comunicarse con nuestros vendedores para llevar a
              cabo tales ajustes.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Proceso de Envío y Entrega</h3>
            <p>
              Proceso de Envío y Entrega: Nos esforzamos por garantizar entregas
              precisas y puntuales. No obstante, no nos hacemos responsables por
              retrasos ocasionados por circunstancias ajenas a nuestro control,
              como problemas logísticos o eventos imprevistos.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Canal de Comunicación y Asistencia</h3>
            <p>
              Canal de Comunicación y Asistencia: Nuestro equipo de vendedores
              se encuentra disponible para abordar cualquier duda o consulta
              relacionada con el proceso de compra, ya sea referente a la Orden
              de Compra, los pagos, los envíos u otros aspectos afines. Toda
              comunicación se efectuará de manera confidencial y segura.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Derechos de Propiedad Intelectual</h3>
            <p>
              Derechos de Propiedad Intelectual: Todo el contenido, diseños y
              materiales presentes en nuestro sitio web están protegidos por
              derechos de propiedad intelectual, quedando prohibida su
              reproducción, modificación o distribución sin la debida
              autorización previa.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Limitación de Responsabilidad</h3>
            <p>
              Limitación de Responsabilidad: Si bien trabajamos en pos de
              brindar una experiencia de compra satisfactoria, no podemos
              garantizar la disponibilidad ininterrumpida de nuestro sitio web
              ni asegurar la ausencia absoluta de errores. Declinamos toda
              responsabilidad por daños indirectos o incidentales derivados del
              uso de nuestros servicios.
            </p>
          </li>
          <li className="card-tyc">
            <h3>Modificaciones a los Términos y Condiciones</h3>
            <p>
              Modificaciones a los Términos y Condiciones: Nos reservamos el
              derecho de actualizar o modificar estos Términos y Condiciones en
              cualquier momento. Notificaremos a nuestros clientes acerca de
              cambios sustanciales. La continuidad en el uso de nuestros
              servicios tras dichas modificaciones implicará la aceptación de
              los nuevos términos.
            </p>
          </li>
        </ol>
        <strong>
          Al efectuar una orden de compra, el cliente manifiesta su aceptación y
          conformidad con estos términos y condiciones. Le sugerimos revisar
          detenidamente dichos términos antes de llevar a cabo cualquier compra.
          Si no está de acuerdo con algún aspecto aquí expuesto, le exhortamos a
          abstenerse de utilizar nuestro sistema de ventas basado en números de
          orden únicos.
        </strong>
      </section>
      <Footer />
    </>
  )
}
