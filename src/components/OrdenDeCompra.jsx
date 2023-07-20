import React from 'react'
import { useIDS } from '../Hooks/useIDS'
import { useSendOrdenCompra } from '../Hooks/useSendOrdenCompra'
import { Link } from 'react-router-dom'
import Loader from './Loader'

export function OrdenDeCompra ({ handleOrdenCompra }) {
  const {
    NAME_ID_FORCOMP,
    EMAIL_ID_FORCOMP,
    NUMERO_TEL_ID_FORCOMP,
    DIRECTION_ID_FORCOMP,
    INDICACIONES_ID_FORCOMP
  } = useIDS()

  const { IdOrdenCompra, loading, error, ordenProductos, handleSubmit, totalCost } = useSendOrdenCompra({ handleOrdenCompra })
  const ErrorSend = new Error(error)

  return (
    <>
      {loading
        ? (
        <Loader/>
          )
        : (
        <form
          id="ordenDeCompra"
          className="animate__animated animate__bounceIn orden-compra"
          action="https://formsubmit.co/dr.mario.shop@gmail.com"
          method="POST"
        >
          <header className="header__orden-compra">
            <h2 style={{ color: error ? 'red' : 'white' }}>{error ? 'Orden de compra rechazada' : 'Orden de compra'}</h2>
            <strong>Código: {ErrorSend.message === 'TypeError: Failed to fetch' ? 'XXXXXX' : IdOrdenCompra}</strong>
            <small>
              <br />
              Se recomienda guardar el <b>CÓDIGO</b> de la orden de compra por
              cualquier inconveniente.
            </small>
            <Link to={'/Preguntas-Frecuentes'}><small>¿Qué es una orden de compra?</small></Link>
            <strong style={{ color: 'red' }}>{error && (ErrorSend.message === 'TypeError: Failed to fetch' ? 'Error al enviar la orden, intente de nuevo mas tarde, gracias.' : ErrorSend.message)}</strong>
          </header>
          <section className="section-input__orden-compra">
            <div>
              {/* estilo */}
              <input type="hidden" name="_template" value="table"/>
              <input
                type="hidden"
                value={`Precio Total de la orden: $${totalCost}`}
                name="TotalCost"
              />
              <input type="hidden" value={ordenProductos} name="Productos" />
              <input
                type="hidden"
                value={`ID de la compra: ${IdOrdenCompra}`}
                name="idCompra"
              />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/Orden-Enviada"
              />
              <input type="hidden" name="_template" value="table" />
            </div>

            <div className="input-container name__orden-compra">
              <label htmlFor={NAME_ID_FORCOMP}>Nombre completo *</label>
              <input
                type="text"
                id={NAME_ID_FORCOMP}
                required
                name="Nombre"
                placeholder="Introduzca el nombre completo ..."
              />
            </div>
            <div className="input-container email__orden-compra">
              <label htmlFor={EMAIL_ID_FORCOMP}>Email *</label>
              <input
                type="email"
                id={EMAIL_ID_FORCOMP}
                name="Email"
                required
                placeholder="Dirección de EMAIL ..."
              />
            </div>
            <div className="input-container phone__orden-compra">
              <label htmlFor={NUMERO_TEL_ID_FORCOMP}>
                Numero de teléfono *{' '}
                <small style={{ opacity: '0.5' }}>
                  (sin puntos ni espacios)
                </small>
              </label>
              <input
                type="number"
                id={NUMERO_TEL_ID_FORCOMP}
                name="Telefono"
                required
                pattern="[0-9]{10}"
                placeholder="1122223333"
              />
            </div>
            <div className="input-container dirección__orden-compra">
              <label htmlFor={DIRECTION_ID_FORCOMP}>
                Dirección * (para envío){' '}
              </label>
              <input
                type="text"
                id={DIRECTION_ID_FORCOMP}
                name="Direccion"
                required
                placeholder="Av... 1234, entre..."
              />
            </div>
            <div className="input-container dirección-optional__orden-compra">
              <label htmlFor={INDICACIONES_ID_FORCOMP}>
                Indicaciones * (para envío){' '}
              </label>
              <textarea
                type="text"
                id={INDICACIONES_ID_FORCOMP}
                name="Referencias"
                placeholder="Casa de color... con rejas..."
                style={{ resize: 'none' }}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Enviar orden de compra
            </button>
            <Link className='terminos-condiciones__orden-compra'><small>Términos y condiciones</small></Link>
          </section>
        </form>
          )}
    </>
  )
}
