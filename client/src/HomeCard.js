import React from 'react'

function HomeCard({card}) {
  return (
    <div key={card.id}>
                <h4>card id: {card.id}</h4>
                <h4>card title: {card.title}</h4>
                <h4>card description: {card.description}</h4>
                <h1>card is public? {card.is_public.toString()}</h1>
    </div>
  )
}

export default HomeCard