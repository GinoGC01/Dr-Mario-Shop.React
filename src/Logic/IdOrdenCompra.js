function generarCaracteres (numero) {
  const caracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
  const caracteresLength = caracteres.length
  let result = ''

  for (let i = 0; i < numero; i++) {
    result += caracteres.charAt(Math.floor(Math.random() * caracteresLength))
  }

  return result
}

export function OrdenId () {
  const numeros = Math.floor(Math.random() * 1000)
  const letras = generarCaracteres(4)

  const Id = numeros + '-' + letras
  const idString = Id.toString()

  return (idString)
}
