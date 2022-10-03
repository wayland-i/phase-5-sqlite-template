import React, { useState } from 'react'
import Tile from './Tile'
import AudioControls from './AudioControls';


function Container({allTracks, card, setAllTracks}) {

    console.log(card.tracks)

    const FileDisplay = () => {
        return allTracks.map(track => {
            return(
               <Tile 
                key={track.id}
                track={track}
                card={card}
            />
            )
        })
    }
    

  return (
    <div>
        <FileDisplay />
        <AudioControls card={card} setAllTracks={setAllTracks}/>
    </div>
  )
}

export default Container