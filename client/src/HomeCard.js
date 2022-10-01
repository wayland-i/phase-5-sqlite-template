import React from 'react'

function HomeCard({card}) {
  // console.log(card.user.username)

  return (
    <div key={card.id}>
                {/* <h4>card id: {card.id}</h4>
                <h4>card title: {card.title}</h4>
                <h4>card description: {card.description}</h4>
                <h1>card is public? {card.is_public.toString()}</h1> */}
                <h1>{card.user.username}</h1>
                <h2>{card.created_at}</h2>
                {card.tracks.map(track => <audio src={track.audio_data} controls="controls" />)}
                {/* <button>Play all</button> */}
    </div>
  )
}

export default HomeCard