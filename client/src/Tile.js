import React from 'react'

function Tile({track, card}) {
    // console.log(`http://localhost:3000${track.audio_data}`)

    // console.log(card.id)
    // console.log(track.card.id)

const cardTracks = []

  

    if (card.id === track.card.id) {
      
      cardTracks.push(`http://localhost:3000${track.audio_data}`)
      console.log(cardTracks)
      return(
        <div className={card.id}>
          <label name='mute'>mute</label>
          <input type='checkbox' name='mute'></input>
          <audio src={`http://localhost:3000${track.audio_data}`} controls="controls"></audio>
        </div>
      )
    } 
}

export default Tile