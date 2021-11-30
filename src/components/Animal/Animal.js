import React from 'react'

import './Animal.css'

export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`}></img>
      <span className="name">{props.name}</span>
      <span>{props.says}</span>
    </div>
  )
}
