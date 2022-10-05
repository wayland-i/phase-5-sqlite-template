import React from 'react'

function HomeCard({card}) {
  // console.log(card.user.username)

  return (
    <div key={card.id}>
                <h1>{card.user.username}</h1>
                <h1>{card.title}</h1>
                <h2>{card.created_at}</h2>
                {card.tracks.map(track => <audio src={track.audio_data} controls="controls" />)}
                {/* <button>Play all</button> */}
    </div>
  )
}

export default HomeCard