import React, { useEffect, useState } from 'react'
import { useCart } from '../Hooks/useCart'
import { useTotalCost } from '../Hooks/useTotaCost'
import { OrdenId } from '../Logic/IdOrdenCompra'
import { useIDS } from '../Hooks/useIDS'

export function OrdenDeCompra ({ handleOrdenCompra }) {
  const {
    NAME_ID_FORCOMP,
    EMAIL_ID_FORCOMP,
    NUMERO_TEL_ID_FORCOMP,
    DIRECTION_ID_FORCOMP,
    INDICACIONES_ID_FORCOMP
  } = useIDS()
  const { cart, clearCart } = useCart()
  const { totalCost } = useTotalCost({ cart })
  const [IdOrdenCompra, setIDOrdenCompra] = useState(null)
  const formularioCompra = document.querySelector('#ordenDeCompra')

  useEffect(() => {
    setIDOrdenCompra(OrdenId())
  }, [])

  const ordenProductos = cart.map((item) => {
    return `Producto N° ${item.id} = 
            (Nombre: ${item.nombre}, 
            Cantidad: ${item.cantidad}, 
            Talle: ${item.talle.talle}, 
            Precio: $${item.precio}, 
            Precio Total: $${item.precio * item.cantidad})
              
            `
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const Email = formularioCompra.Email.value
    const Nombre = formularioCompra.Nombre.value
    const Direccion = formularioCompra.Direccion.value
    const Telefono = formularioCompra.Telefono.value
    const Referencias = formularioCompra.Referencias.value

    if (Email === ' ' || Nombre === ' ' || Direccion === ' ' || Referencias === ' ') {
      alert('revise los campos, por favor')
      return false
    }
    if (!/^[0-9]{10}$/.test(Telefono)) {
      alert('introduzca un número de teléfono válido')
      return false
    }
    handleOrdenCompra()
    clearCart()
    formularioCompra.submit()
    return true
  }

  return (
    <form
      id="ordenDeCompra"
      className="animate__animated animate__bounceIn orden-compra"
      action="https://formsubmit.co/dr.mario.shop@gmail.com"
      method="POST"
    >
      <header className="header__orden-compra">
        <h2>Orden de compra</h2>
        <strong>Código: {IdOrdenCompra}</strong>
        <small>
          <br />
          Se recomienda guardar el <b>CÓDIGO</b> de la orden de compra por cualquier
          inconveniente.
        </small>
      </header>
      <section className='section-input__orden-compra'>
        <div>
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
          <input type="hidden" name="_next" value="http://localhost:5173/Orden-Enviada"/>
        </div>

        <div className="input-container name__orden-compra">
          <label htmlFor={NAME_ID_FORCOMP}>Nombre completo</label>
          <input type="text" id={NAME_ID_FORCOMP} required name="Nombre" placeholder='Introduzca el nombre completo ...'/>
        </div>
        <div className="input-container email__orden-compra">
          <label htmlFor={EMAIL_ID_FORCOMP}>Email</label>
          <input type="email" id={EMAIL_ID_FORCOMP} name="Email" required placeholder='Dirección de EMAIL ...' />
        </div>
        <div className="input-container phone__orden-compra">
          <label htmlFor={NUMERO_TEL_ID_FORCOMP}>Numero de teléfono <small style={{ opacity: '0.5' }}>(sin puntos ni espacios)</small></label>
          <input
            type="number"
            id={NUMERO_TEL_ID_FORCOMP}
            name="Telefono"
            required
            pattern="[0-9]{10}"
            placeholder='1122223333'
          />
        </div>
        <div className="input-container dirección__orden-compra">
          <label htmlFor={DIRECTION_ID_FORCOMP}>Dirección (para envio) </label>
          <input
            type="text"
            id={DIRECTION_ID_FORCOMP}
            name="Direccion"
            required
            placeholder='Av... 1234, entre...'
          />
        </div>
        <div className="input-container dirección-optional__orden-compra">
          <label htmlFor={INDICACIONES_ID_FORCOMP}>
            Indicaciones (opcional){' '}
          </label>
          <textarea
            type="text"
            id={INDICACIONES_ID_FORCOMP}
            name="Referencias"
            placeholder='Casa de color... con rejas...'
            style={{ resize: 'none' }}
          />
        </div>
        <button type='submit' onClick={handleSubmit}>Enviar orden de compra</button>
      </section>
    </form>
  )
}
