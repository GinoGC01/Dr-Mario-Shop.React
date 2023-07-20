import React from 'react'
import './Loader.css'

export default function Loader () {
  return (
    <div className='loader-container'>
        <div className='loader-content animate__animated animate__flip animate__infinite animate__slow'>
            <img src="../../../images/isotipo negro.png" alt="Loader Dr. Mario Ind" />
        </div>
    </div>
  )
}
