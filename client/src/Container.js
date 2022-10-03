import React, { useState } from 'react'
import Tile from './Tile'
import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

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
    
    // const cardId = document.getElementsByClassName(`${card.id}`)

    // const overDub = () => {
    //     if (cardId.length === 1){
    //         const firstTrack = cardId[0].getElementsByTagName('audio')[0]
    //         firstTrack.play()
    //     } else if (cardId.length === 2){
    //         const firstTrack = cardId[0].getElementsByTagName('audio')[0]
    //         const secondTrack = cardId[1].getElementsByTagName('audio')[0]
    //         firstTrack.play()
    //         secondTrack.play()
    //     } else if (cardId.length === 3) {
    //         const firstTrack = cardId[0].getElementsByTagName('audio')[0]
    //         const secondTrack = cardId[1].getElementsByTagName('audio')[0]
    //         const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
    //         firstTrack.play()
    //         secondTrack.play()
    //         thirdTrack.play()
    //     } else if (cardId.length === 4) {
    //         const firstTrack = cardId[0].getElementsByTagName('audio')[0]
    //         const secondTrack = cardId[1].getElementsByTagName('audio')[0]
    //         const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
    //         const fourthTrack = cardId[3].getElementsByTagName('audio')[0]
    //         firstTrack.play()
    //         secondTrack.play()
    //         thirdTrack.play()
    //         fourthTrack.play()
    //     }
    // }




  return (
    <div>
        {/* <button onClick={overDub}>
        overdub!
        </button> */}
        <FileDisplay />
    </div>
  )
}

export default Container