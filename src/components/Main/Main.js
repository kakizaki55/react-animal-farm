import React from 'react'
import './Main.css'
import farm from '../../background.png'

import Animal from '../Animal/Animal'
import animals from '../../data.js'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${farm})` }}>
      {animals.map((animal) => {
        return <Animal key={animal.name} {...animal} />
      })}
    </main>
  )
}
