import React from 'react'

function HomeContainer({card}) {
  return (
    <div className={card.id}>
        {card.tracks.map(track => 
            <div class="flex m-2"> 
                <audio src={track.audio_data} controls="controls" />
            </div>
            )}
    </div>
  )
}

export default HomeContainer