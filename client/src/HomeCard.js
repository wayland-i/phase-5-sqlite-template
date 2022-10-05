import React from 'react'
import HomeAudioControls from './HomeAudioControls'
import HomeContainer from './HomeContainer'

function HomeCard({card}) {
  // console.log(card.user.username)

  console.log(card)




  return (
    <div key={card.id}>
                <h1>{card.user.username}</h1>
                <h1>{card.title}</h1>
                <h2>{card.created_at}</h2>
                <HomeContainer card={card}/>
                <HomeAudioControls card={card}/>
                {/* {card.tracks.map(track => 
                  <div className={card.id}> 
                    <audio src={track.audio_data} controls="controls" />
                  </div>)} */}

                {/* <button>Play all</button> */}
    </div>
  )
}

export default HomeCard