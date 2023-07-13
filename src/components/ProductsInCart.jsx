import React from 'react'
import { CardCartSection } from './CardCartSection'

export function ProductsInCart ({ cart }) {
  return cart.map((item) => {
    return <CardCartSection item={item} key={item.id} />
  })
}
