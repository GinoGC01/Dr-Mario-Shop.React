import Swal from 'sweetalert2'
import Toastify from 'toastify-js'

export const handleClearCart = ({ quantityProducts, clearCart }) => {
  Swal.fire({
    title: '¿Está seguro?',
    text: `Se eliminarán ${quantityProducts} ${quantityProducts > 1 ? 'productos' : 'producto'} del carrito`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#0c151c',
    cancelButtonColor: '#a9a9a9',
    confirmButtonText: 'Si borrar',
    iconColor: '#0c151c'
  }).then((result) => {
    if (result.isConfirmed) {
      clearCart()
      Swal.fire({
        text: `${quantityProducts > 1 ? 'Se eliminaron' : 'Se eliminió'} ${quantityProducts} ${quantityProducts > 1 ? 'productos' : 'producto'} del carrito`,
        icon: 'success',
        confirmButtonColor: '#0c151c',
        confirmButtonText: 'OK'

      })
    }
  })
}

export const handleRemoveItemCartSection = ({ quantityProducts, setFormActive, restartToCart, item }) => {
  Swal.fire({
    title: '¿Está seguro?',
    text: `${quantityProducts > 1 ? 'Se eliminarán' : 'Se eliminará'} ${quantityProducts} ${quantityProducts > 1 ? 'productos' : 'producto'} del carrito`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#0c151c',
    cancelButtonColor: '#a9a9a9',
    confirmButtonText: 'Si eliminar',
    iconColor: '#0c151c'
  }).then((result) => {
    if (result.isConfirmed) {
      setFormActive(false)
      restartToCart(item)
      Swal.fire({
        text: `${quantityProducts > 1 ? 'Se eliminaron' : 'Se eliminió'} ${quantityProducts} ${quantityProducts > 1 ? 'productos' : 'producto'} del carrito`,
        icon: 'success',
        confirmButtonColor: '#0c151c',
        confirmButtonText: 'OK'

      })
    }
  })
}

export const handleRemoveItemCardCart = ({ product, restartToCart }) => {
  Swal.fire({
    title: '¿Está seguro?',
    text: `Se eliminará ${product.cantidad} ${product.cantidad > 1 ? 'productos' : 'producto'} del carrito`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#0c151c',
    cancelButtonColor: '#a9a9a9',
    confirmButtonText: 'Si eliminar',
    iconColor: '#0c151c'
  }).then((result) => {
    if (result.isConfirmed) {
      restartToCart(product)
      Swal.fire({
        text: 'El carrito quedó vacío',
        icon: 'success',
        confirmButtonColor: '#0c151c',
        confirmButtonText: 'OK'

      })
    }
  })
}

export const popUpRestartToCart = ({ restartToCart, product }) => {
  Toastify({
    text: 'Producto eliminado',
    duration: 3000,
    close: false,
    gravity: 'top',
    position: 'left',
    stopOnFocus: true,
    style: {
      background: '#202b38',
      fontSize: '.8rem',
      width: '200px',
      boxShadow: '0 0 15px black',
      opacity: '1',
      borderRadius: '10px',
      paddingLeft: '15px'
    },
    onClick: restartToCart(product)
  }).showToast()
}

export const popUpAddToCart = ({ addToCart, product }) => {
  Toastify({
    text: 'Producto agregado',
    duration: 3000,
    close: false,
    gravity: 'top',
    position: 'left',
    stopOnFocus: true,
    style: {
      background: '#202b38',
      fontSize: '.8rem',
      width: '200px',
      boxShadow: '0 0 15px black',
      opacity: '1',
      borderRadius: '10px'
    },
    onClick: addToCart(product)
  }).showToast()
}

export const popUpRemoveToCart = ({ removeFromCart, product }) => {
  Toastify({
    text: 'Producto eliminado :c',
    duration: 3000,
    close: false,
    gravity: 'top',
    position: 'left',
    stopOnFocus: true,
    style: {
      background: '#202b38',
      fontSize: '.8rem',
      width: '200px',
      boxShadow: '0 0 15px black',
      opacity: '1',
      borderRadius: '10px',
      paddingLeft: '15px'
    },
    onClick: removeFromCart(product)
  }).showToast()
}
