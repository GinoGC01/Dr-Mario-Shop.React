import React, { useContext } from 'react'
import { OrdenEnviada } from './OrdenEnviada'
import { OrdenCompraContext } from '../Context/OrdenCompraContex'
import { CartOfCartSection } from './CartOfCartSection'

export function ProductsinCartSection ({ openForm, formactive, setFormActive }) {
  const { sendMail } = useContext(OrdenCompraContext)
  return (
    <>
      {sendMail
        ? (
        <OrdenEnviada />
          )
        : (
        <CartOfCartSection
          formactive={formactive}
          openForm={openForm}
          setFormActive={setFormActive}
        />
          )}
    </>
  )
}
