import React from 'react'

function Card({ key, title, description, user}) {
  return (
    <div>
        <h1>{key}</h1>
        <h1>{title}</h1>
        <h1>{description}</h1>
        <h1>{user}</h1>
    </div>
  )
}

export default Card