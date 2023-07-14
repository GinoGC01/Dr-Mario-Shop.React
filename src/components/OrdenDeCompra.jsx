import React, { useEffect, useState } from 'react'
import { useCart } from '../Hooks/useCart'
import { useTotalCost } from '../Hooks/useTotaCost'
import { OrdenId } from '../Logic/IdOrdenCompra'
import { useIDS } from '../Hooks/useIDS'

export function OrdenDeCompra ({ handleOrdenCompra }) {
  const { NAME_ID_FORCOMP, EMAIL_ID_FORCOMP, NUMERO_TEL_ID_FORCOMP, DIRECTION_ID_FORCOMP, INDICACIONES_ID_FORCOMP } = useIDS()
  const { cart, clearCart } = useCart()
  const { totalCost } = useTotalCost({ cart })
  const [IdOrdenCompra, setIDOrdenCompra] = useState(null)

  useEffect(() => {
    setIDOrdenCompra(OrdenId())
  }, [])

  const handleFormSubmit = () => {
    setTimeout(() => handleOrdenCompra(), 2000)
    setTimeout(() => clearCart(), 2000)
  }

  const ordenProductos = cart.map(item => {
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
    const { email, nombre, phone, direction } = Object.fromEntries(
      new FormData(e.target)
    )

    if (email === '' || nombre === '' || direction === '') {
      alert('revise los campos, por favor')
      console.log('no se mando')
      return false
    } else if (!/^[0-9]{10}$/.test(phone)) {
      alert('introduzca un número de teléfono válido')
      console.log('no se mando')
      return false
    }
    console.log('se mandó')
    handleFormSubmit()
    return true
  }

  return (
      <form
      id="ordenDeCompra"
      className="animate__animated animate__bounceIn"
      onSubmit={handleSubmit}
    >
      <header>
        <h2>Orden de compra</h2>
        <strong>{IdOrdenCompra}</strong>
        <p> (se recomienda guardar el ID de la orden de compra por cualquier inconveniente)</p>
      </header>
      <div>
        <input type='hidden' value={`Precio Total de la orden: $${totalCost}`} name='totalCost'/>
        <input type='hidden' value={ordenProductos} name='productos'/>
        <input type='hidden' value={`ID de la compra: ${IdOrdenCompra}`} name='idCompra'/>

        <label htmlFor={NAME_ID_FORCOMP}>Nombre completo</label>
        <input type="text" id={NAME_ID_FORCOMP} required name="nombre"/>
      </div>
      <div>
        <label htmlFor={EMAIL_ID_FORCOMP}>Email</label>
        <input type="email" id={EMAIL_ID_FORCOMP} name="email" required />
      </div>
      <div>
        <label htmlFor={NUMERO_TEL_ID_FORCOMP}>Numero de teléfono</label>
        <input type="number" id={NUMERO_TEL_ID_FORCOMP} name="phone" required pattern="[0-9]{10}"/>
      </div>
      <div>
        <label htmlFor={DIRECTION_ID_FORCOMP}>Dirección (para envio) </label>
        <input type="text" id={DIRECTION_ID_FORCOMP} name="direction" required />
      </div>
      <div>
        <label htmlFor={INDICACIONES_ID_FORCOMP}>Indicaciones (opcional) </label>
        <textarea type="text" id={INDICACIONES_ID_FORCOMP} name="indications" />
      </div>
      <button>Enviar orden de compra</button>
    </form>
  )
}
