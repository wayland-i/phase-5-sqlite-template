import React from 'react'

function HomeContainer({card}) {
  return (
    <div>
        {card.tracks.map(track => 
            <div className={card.id} class="flex m-2"> 
                <audio src={track.audio_data} controls="controls" />
            </div>)}
    </div>
  )
}

export default HomeContainer