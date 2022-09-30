import React from 'react'

function Tile({track, card}) {
    // console.log(`http://localhost:3000${track.audio_data}`)

    // console.log(card.id)
    // console.log(track.card.id)

    if (card.id === track.card.id) {
      return(
        <div>
          <audio src={`http://localhost:3000${track.audio_data}`} controls="controls"></audio>
        </div>
      )
    } 
}

export default Tile