import React from 'react'
import Tile from './Tile'

function Container({allTracks, card}) {

    const fileDisplay = () => {
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
        {/* <h1>Container</h1> */}
        {fileDisplay()}
    </div>
  )
}

export default Container