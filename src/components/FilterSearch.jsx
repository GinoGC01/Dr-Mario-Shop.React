import React from 'react'
import { Lupa } from './Icons'

export default function FilterSearch () {
  return (
    <section>
        <form>
            <label htmlFor="">buscar por nombre, marca...</label>
            <input type="text" />
            <button>
                <Lupa/>
            </button>
        </form>
    </section>
  )
}
