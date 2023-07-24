import React from 'react'
import '../App.css'

export function ProvinciasForOrdenCompra ({ id }) {
  return (
    <div className="input-container provincia__orden-compra">
      <label htmlFor={id}>Provincia * (para envío) </label>
      <select id={id} name="Provincia" required>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Cordoba">Córdoba</option>
        <option value="Santa Fé">Santa Fé</option>
        <option value="Entre Rios">Entre Ríos</option>
        <option value="Corrientes">Corriente</option>
        <option value="Misiones">Misiones</option>
        <option value="Formosa">Formosa</option>
        <option value="Chaco">Chaco</option>
        <option value="Salta">Salta</option>
        <option value="Jujuy">Jujuy</option>
        <option value="Catamarca">Catamarca</option>
        <option value="La Rioja">La Rioja</option>
        <option value="San Luis">San Luis</option>
        <option value="San Juan">San Juan</option>
        <option value="Santiago del Estero">Santiago del Estero</option>
        <option value="Tucuman">Tucuman</option>
        <option value="Mendoza">Mendoza</option>
        <option value="Neuquén">Neuquén</option>
        <option value="La Pampa">La Pampa</option>
        <option value="Rio Negro">Rio Negro</option>
        <option value="Chubut">Chubut</option>
        <option value="Santa Cruz">Santa Cruz</option>
        <option value="Tierra del Fuego">Tierra del Fuego</option>
      </select>
    </div>
  )
}
