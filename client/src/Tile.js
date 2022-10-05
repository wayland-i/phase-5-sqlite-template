import React, {useState} from 'react'

function Tile({track, card, trackRerender}) {

const cardTracks = []

const handleDeleteTrack = () => {
  console.log(track)

  fetch(`/tracks/${track.id}`, {
    method: 'DELETE'
  })
  console.log(cardTracks)

  trackRerender()
}

  

    if (card.id === track.card.id) {
      
      cardTracks.push(`http://localhost:3000${track.audio_data}`)
      console.log(cardTracks)
      return(
        <div className={card.id}>
          {/* <label name='mute'>mute</label>
          <input type='checkbox' name='mute'></input> */}
          <audio src={`http://localhost:3000${track.audio_data}`} controls="controls"></audio>
          <button onClick={handleDeleteTrack}>X</button>
        </div>
      )
    } 
}

export default Tile