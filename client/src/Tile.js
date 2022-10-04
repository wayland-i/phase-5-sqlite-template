import React, {useState} from 'react'

function Tile({track, card}) {

const cardTracks = []

const handleDeleteTrack = () => {
  console.log(track)

  fetch(`/tracks/${track.id}`, {
    method: 'DELETE'
  })
  console.log(cardTracks)

}

  

    if (card.id === track.card.id) {
      
      cardTracks.push(`http://localhost:3000${track.audio_data}`)
      console.log(cardTracks)
      return(
        <div className={card.id}>
          {/* <label name='mute'>mute</label>
          <input type='checkbox' name='mute'></input> */}
          <audio src={`http://localhost:3000${track.audio_data}`} controls="controls"></audio>
          <button onClick={handleDeleteTrack}>delete track</button>
        </div>
      )
    } 
}

export default Tile