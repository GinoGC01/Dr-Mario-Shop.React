import React from 'react'
import { CardCartSection } from './CardCartSection'

export function ProductsInCart ({ cart, setFormActive }) {
  return cart.map((item) => {
    return <CardCartSection item={item} key={item.id} setFormActive={setFormActive} />
  })
}
