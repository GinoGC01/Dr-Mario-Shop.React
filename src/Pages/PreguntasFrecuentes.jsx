import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'

export default function PreguntasFrecuentes () {
  return (
    <>
      <div className="back-to-home">
        <Link to="/" className="back-to-home__cart-section">
          <span className="material-symbols-outlined">chevron_left</span>
        </Link>
      </div>

      <section className="preguntas-frecuentes" id="preguntas-frecuentes">
        <h1>PREGUNTAS FRECUENTES</h1>
        <ul className="preguntas">
          <li className="pregunta">
            <strong>Concepto de Órdenes de Compra</strong>
            <p>
              Definición de Órdenes de Compra: En nuestra plataforma de ventas,
              hemos optado por un enfoque de transacciones que prescinde de
              métodos de pago en línea directos en el sitio web. En su lugar,
              hemos implementado un sistema de Órdenes de Compra, cada una con
              un <strong>número de orden único</strong>. A través de esta
              modalidad, solicitamos ciertos datos al cliente para establecer un
              contacto personalizado y coordinar aspectos como métodos de pago,
              envíos y aclarar cualquier duda a través de nuestros vendedores.
              Este enfoque busca salvaguardar la seguridad de nuestros clientes
              al evitar posibles fraudes o malentendidos, mediante un contacto
              directo y personal.
            </p>
          </li>
          <li className="pregunta">
            <strong>Validez de las Órdenes de Compra</strong>
            <p>
              Validez de las Órdenes: Una vez que una orden de compra es
              procesada, su validez se extiende por 24 horas. Durante este
              período, los clientes pueden concretar la compra y el envío. Cabe
              destacar que la orden de compra se oficializa una vez que ingresa
              al sistema y el cliente es contactado por nuestros vendedores.
            </p>
          </li>
          <li className="pregunta">
            <strong>Opciones de Pago</strong>
            <p>
              Alternativas de Pago: Nuestra oferta abarca diversas formas de
              pago, entre las que se incluyen <strong>Mercado Pago</strong>,{' '}
              <strong>Ualá</strong>, <strong>BruBank</strong>,{' '}
              <strong>Cuenta DNI</strong>, <strong>MODO</strong> y{' '}
              <strong>Transferencias Bancarias</strong>.
            </p>
          </li>
          <li className="pregunta">
            <strong>Recuperación del Número de Orden</strong>
            <p>
              Extravío del Número: En caso de que pierda su número de orden, no
              hay motivo de preocupación, ya que lo conservamos en nuestro
              registro. No obstante, necesitaremos algunos datos adicionales
              para confirmar su identidad antes de proporcionárselo nuevamente.
            </p>
          </li>
          <li className="pregunta">
            <strong>Costo de Envío</strong>
            <p>
              Tarifas de Envío: El costo de envío varía, como es de esperarse,
              debido a diversos factores. No obstante, nuestros agentes de
              ventas, al ponerse en contacto, le informarán el costo exacto del
              envío en caso de que sea posible realizarlo.
            </p>
          </li>
          <li className="pregunta">
            <strong>Procedimiento de Envío</strong>
            <p>
              Procedimiento de Envío: Colaboramos con Correo Argentino para las
              entregas en provincias distantes o áreas no cubiertas por nuestro
              servicio de mensajería local. Para las zonas cercanas a José C.
              Paz, contamos con la opción de mensajería en moto. Los detalles y
              costos de envío serán proporcionados por nuestros vendedores.
            </p>
          </li>
          <li className="pregunta">
            <strong>Destino de Entrega</strong>
            <p>
              Lugares de Recepción: De manera similar a otras empresas de envío,
              los productos pueden ser retirados en la sucursal del correo (en
              el caso de envíos por Correo Argentino) o ser entregados
              directamente en el domicilio. Para envíos por mensajería en moto,
              es posible coordinar un punto de encuentro o la entrega en
              domicilio.
            </p>
          </li>
          <li className="pregunta">
            <strong>Tiempo de Entrega</strong>
            <p>
              Plazos de Entrega: El tiempo necesario para recibir su pedido
              varía según el tipo de envío seleccionado. En general, el período
              de entrega oscila entre 1 y 7 días hábiles luego de que se
              confirma el pago. En el caso de los envíos por mensajería en moto,
              es posible recibir el pedido el mismo día.
            </p>
          </li>
          <li className="pregunta">
            <strong>Política de Cambios</strong>
            <p>
              Cambio de Productos: Si el producto no cumple con sus
              expectativas, dispone de una semana para coordinar un cambio y 15
              días para realizarlo efectivamente. Para envíos a otras
              provincias, será necesario realizar el procedimiento nuevamente
              (en el caso de Correo Argentino). En el caso de mensajería en
              moto, nosotros nos encargamos de coordinar el retiro y la nueva
              entrega. Todos los costos asociados a envíos y cambios corren por
              cuenta del cliente. Es importante resaltar que el producto debe
              devolverse en las mismas condiciones en las que fue entregado.
              Cualquier signo de daño, manchas o alteraciones puede resultar en
              la cancelación del proceso de devolución.
            </p>
          </li>
          <li className="pregunta">
            <strong>Recepción de Productos en Mal Estado</strong>
            <p>
              Productos Dañados: En el caso de recibir un producto en mal
              estado, le instamos a contactarnos a través de cualquier medio
              disponible para que podamos resolver el inconveniente de manera
              oportuna y satisfactoria.
            </p>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  )
}
