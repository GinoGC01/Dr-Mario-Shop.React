import React from 'react'
import { RigthArrow } from './Icons'

export function SliderButtons({ scrollSection }) {
  const handleScrollClick = (scrollAmount) => {
    if (scrollSection.current) {
      scrollSection.current.scrollLeft += scrollAmount
    }
  }
  return (
    <>
      <span
        className='show-left'
        onClick={() => {
          handleScrollClick(300)
        }}
      >
        {' '}
        <RigthArrow />
      </span>
      <span
        className='show-rigth'
        onClick={() => {
          handleScrollClick(-300)
        }}
      >
        {' '}
        <RigthArrow />
      </span>
    </>
  )
}
