import React from 'react'
import HomeAudioControls from './HomeAudioControls'
import HomeContainer from './HomeContainer'

function HomeCard({card}) {
  // console.log(card.user.username)

  console.log(card)



  const date = new Date(`${card.created_at}`)
  const presentDate = date.toDateString()
  const presentTime = date.toTimeString().split(' ')[0]
  let dtFormat = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric'
  });


  const reFormat = dtFormat.format(date)




  return (
    <div key={card.id} class="container mx-auto flex flex-wrap items-start my-16 justify-center">
      <div class="lg:w-3/4 w-full lg:pr-3">
        <div class="bg-gray-200 rounded-xl p-6">
                <h2 class="text-gray-800 leading-relaxed float-right relative">{presentDate}</h2>
                <h2 class="text-gray-800 leading-relaxed float-left relative">{reFormat}</h2>
                
                <h1 class="text-2xl font-bold mb-2 mt-7">{card.title} by {card.user.username}</h1>
                <HomeContainer card={card}/>
                <HomeAudioControls card={card}/>
                {/* {card.tracks.map(track => 
                  <div className={card.id}> 
                    <audio src={track.audio_data} controls="controls" />
                  </div>)} */}

                {/* <button>Play all</button> */}
                {/* <h1 class="text-2xl float-left">{card.user.username}</h1> */}
          </div>
      </div>
    </div>
  )
}

export default HomeCard