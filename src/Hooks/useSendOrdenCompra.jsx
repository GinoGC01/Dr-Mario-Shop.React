import { useState, useEffect, useContext } from 'react'
import { useCart } from './useCart'
import { OrdenId } from '../Logic/IdOrdenCompra'
import { useTotalCost } from './useTotaCost'
import { OrdenCompraContext } from '../Context/OrdenCompraContex'
import Swal from 'sweetalert2'

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

  const alertOrdenCompra = async (
    Email,
    Nombre,
    Telefono,
    Provincia,
    CodigoPostal,
    Direccion,
    Barrio,
    Referencias,
    idCompra,
    Productos,
    TotalCost
  ) => {
    Swal.fire({
      title: 'Orden de compra',
      text: 'Al enviar la orden de compra acepta los terminos y condiciones',
      confirmButtonColor: '#0c151c',
      confirmButtonText: 'Aceptar',
      iconColor: '#0c151c'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setLoading(true)
          setError(null)
          const response = await fetch(
            'https://formsubmit.co/ajax/dr.mario.shop@gmail.com',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: JSON.stringify({
                Email,
                Nombre,
                Telefono,
                Provincia,
                CodigoPostal,
                Direccion,
                Barrio,
                Referencias,
                idCompra,
                Productos,
                TotalCost
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
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const Email = formularioCompra.Email.value
    const Nombre = formularioCompra.Nombre.value
    const Direccion = formularioCompra.Direccion.value
    const Telefono = formularioCompra.Telefono.value
    const Referencias = formularioCompra.Referencias.value
    const idCompra = formularioCompra.idCompra.value
    const Productos = formularioCompra.Productos.value
    const TotalCost = formularioCompra.TotalCost.value
    const Barrio = formularioCompra.Barrio.value
    const Provincia = formularioCompra.Provincia.value
    const CodigoPostal = formularioCompra.CodigoPostal.value

    if (
      Email === ' ' ||
      Email === null ||
      Email === '' ||
      Nombre === ' ' ||
      Nombre === null ||
      Nombre === '' ||
      Telefono === ' ' ||
      Telefono === null ||
      Telefono === '' ||
      Direccion === ' ' ||
      Direccion === null ||
      Direccion === '' ||
      Referencias === ' ' ||
      Referencias === null ||
      Referencias === '' ||
      Barrio === ' ' ||
      Barrio === null ||
      Barrio === '' ||
      CodigoPostal === ' ' ||
      CodigoPostal === null ||
      CodigoPostal === '' ||
      Provincia === ' ' ||
      Provincia === null ||
      Provincia === ''
    ) {
      if (error !== 'Campo incompleto. Revise los campos, por favor.') {
        setError('Campo incompleto. Revise los campos, por favor.')
      }
    } else if (!/^[0-9]{10}$/.test(Telefono)) {
      if (error !== 'Número de teléfono inválido') {
        setError('Número de teléfono inválido')
      }
    } else {
      alertOrdenCompra(
        Email,
        Nombre,
        Telefono,
        Provincia,
        CodigoPostal,
        Direccion,
        Barrio,
        Referencias,
        idCompra,
        Productos,
        TotalCost
      )
    }
  }

  return {
    IdOrdenCompra,
    loading,
    error,
    ordenProductos,
    handleSubmit,
    totalCost
  }
}
