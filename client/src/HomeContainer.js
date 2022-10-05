import React from 'react'

function HomeContainer({card}) {
  return (
    <div>
        {card.tracks.map(track => 
            <div className={card.id}> 
                <audio src={track.audio_data} controls="controls" />
            </div>)}
    </div>
  )
}

export default HomeContainer