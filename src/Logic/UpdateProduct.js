// actualiza el producto y devuelve el arreglo actualizado
export const actualizarProductos = (localstoragekey, Products) => {
  const productosInteresados = JSON.parse(
    localStorage.getItem(localstoragekey)
  )
  const productosActualizados = productosInteresados?.map(
    (productoVisitado) => {
      const productoActualizado = Products.find(
        (productoJson) => productoJson.id === productoVisitado.id
      )
      if (productoActualizado) {
        return {
          ...productoVisitado,
          precio: productoActualizado.precio,
          img: {
            image01: productoActualizado.img.image01,
            image02: productoActualizado.img.image02,
            image03: productoActualizado.img.image03
          }
        }
      }
      return productoVisitado
    }
  )
  return productosActualizados
}
