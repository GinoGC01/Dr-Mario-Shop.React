import { useState, useEffect, useContext } from 'react'
import { useCart } from './useCart'
import { OrdenId } from '../Logic/IdOrdenCompra'
import { useTotalCost } from './useTotaCost'
import { OrdenCompraContext } from '../Context/OrdenCompraContex'

export function useSendOrdenCompra ({ handleOrdenCompra }) {
  const { cart, clearCart } = useCart()
  const { totalCost } = useTotalCost({ cart })
  const formularioCompra = document.querySelector('#ordenDeCompra')
  const { setSendMail, loading, setLoading, error, setError } = useContext(OrdenCompraContext)

  const [IdOrdenCompra, setIDOrdenCompra] = useState(null)

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const Email = formularioCompra.Email.value
    const Nombre = formularioCompra.Nombre.value
    const Direccion = formularioCompra.Direccion.value
    const Telefono = formularioCompra.Telefono.value
    const Referencias = formularioCompra.Referencias.value

    if (
      (Email === ' ' || Email === null || Email === '') ||
      (Nombre === ' ' || Nombre === null || Nombre === '') ||
      (Telefono === ' ' || Telefono === null || Telefono === '') ||
      (Direccion === ' ' || Direccion === null || Direccion === '') ||
      (Referencias === ' ' || Referencias === null || Referencias === '')
    ) {
      setError('Revise los campos, por favor')
    } else if (!/^[0-9]{10}$/.test(Telefono)) {
      setError('Numero de teléfono inválido')
    } else {
      try {
        setLoading(true)
        setError(null)
        console.log('enviando...')
        const response = await fetch(
          'https://formsubmit.co/ajax/dr.mario.shop@gmail.com',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              Nombre,
              Email,
              Direccion,
              Telefono,
              Referencias
            })
          }
        )

        const data = await response.json()
        handleOrdenCompra()
        clearCart()
        setSendMail(data.success)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
  }

  return ({ IdOrdenCompra, loading, error, ordenProductos, handleSubmit, totalCost })
}
