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

    // put the card id as the div id for all the tracks, then getelementbyid the card/div id number and see if you can access and play all the files from there.

    //first lets try to play one of these audio tracks from the play all button.



    const playAll = () => {
        console.log(card)
        console.log(card.id)
        // console.log(document.getElementsByTagName('audio'))
        const cardId = document.getElementsByClassName(`${card.id}`)
        console.log(cardId[0].getElementsByTagName('audio')[0])
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        console.log(firstTrack)
        firstTrack.play()

        // console.log("hello")
        // console.log(card)
        // console.log(card.tracks)
        // const cardTracks = card.tracks.map(track => {
        //     return(
        //         new Audio(`http://localhost:3000${track.audio_data}`).play()
        //     )
        // })
        // console.log(cardTracks.length)
    }

    const stopAll = () => {
        const cardId = document.getElementsByClassName(`${card.id}`)
        console.log(cardId[0].getElementsByTagName('audio')[0])
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        console.log(firstTrack)
        firstTrack.pause()
    }

    const restart = () => {
        const cardId = document.getElementsByClassName(`${card.id}`)
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        firstTrack.currentTime = 0
    }


    // let sounds = document.getElementsByTagName("audio")
    // console.log(sounds)

    ///lets just try and grab every audio track in Tile.js by its html element name and then play all of them.


  return (
    <div>
        {/* <h1>Container</h1> */}
        <button onClick={playAll} >
        play all!
        </button>
        <button onClick={stopAll}>
        stop all!
        </button>
        <button onClick={restart}>
        start over!
        </button>
        {/* <button onClick={stopAll} >
        stop all!
        </button> */}
        <FileDisplay playAll={playAll}/>
    </div>
  )
}

export default Container