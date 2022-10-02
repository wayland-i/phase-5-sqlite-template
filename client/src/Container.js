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


    // const playAll = () => {
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

    // const stopAll = () => {
    //     if (cardId.length === 1){
    //         const firstTrack = cardId[0].getElementsByTagName('audio')[0]
    //         firstTrack.pause()
    //     } else if (cardId.length === 2){
    //         const firstTrack = cardId[0].getElementsByTagName('audio')[0]
    //         const secondTrack = cardId[1].getElementsByTagName('audio')[0]
    //         firstTrack.pause()
    //         secondTrack.pause()
    //     } else if (cardId.length === 3) {
    //         const firstTrack = cardId[0].getElementsByTagName('audio')[0]
    //         const secondTrack = cardId[1].getElementsByTagName('audio')[0]
    //         const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
    //         firstTrack.pause()
    //         secondTrack.pause()
    //         thirdTrack.pause()
    //     } else if (cardId.length === 4) {
    //         const firstTrack = cardId[0].getElementsByTagName('audio')[0]
    //         const secondTrack = cardId[1].getElementsByTagName('audio')[0]
    //         const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
    //         const fourthTrack = cardId[3].getElementsByTagName('audio')[0]
    //         firstTrack.pause()
    //         secondTrack.pause()
    //         thirdTrack.pause()
    //         fourthTrack.pause()
    //     }
    // }

    // const restart = () => {
    //     if (cardId.length === 1){
    //         const firstTrack = cardId[0].getElementsByTagName('audio')[0]
    //         firstTrack.currentTime = 0
    //     } else if (cardId.length === 2){
    //         const firstTrack = cardId[0].getElementsByTagName('audio')[0]
    //         const secondTrack = cardId[1].getElementsByTagName('audio')[0]
    //         firstTrack.currentTime = 0
    //         secondTrack.currentTime = 0
    //     } else if (cardId.length === 3) {
    //         const firstTrack = cardId[0].getElementsByTagName('audio')[0]
    //         const secondTrack = cardId[1].getElementsByTagName('audio')[0]
    //         const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
    //         firstTrack.currentTime = 0
    //         secondTrack.currentTime = 0
    //         thirdTrack.currentTime = 0
    //     } else if (cardId.length === 4) {
    //         const firstTrack = cardId[0].getElementsByTagName('audio')[0]
    //         const secondTrack = cardId[1].getElementsByTagName('audio')[0]
    //         const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
    //         const fourthTrack = cardId[3].getElementsByTagName('audio')[0]
    //         firstTrack.currentTime = 0
    //         secondTrack.currentTime = 0
    //         thirdTrack.currentTime = 0
    //         fourthTrack.currentTime = 0
    //     }
    // }



  return (
    <div>
        {/* <button onClick={overDub}>
        overdub!
        </button> */}
        {/* <button onClick={playAll} >
        play all!
        </button>
        <button onClick={stopAll}>
        stop all!
        </button>
        <button onClick={restart}>
        start over!
        </button> */}
        <FileDisplay />
    </div>
  )
}

export default Container