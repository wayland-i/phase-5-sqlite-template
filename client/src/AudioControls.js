import React from 'react'
import MicRecorder from 'mic-recorder-to-mp3';
import { useEffect, useState } from 'react';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

function AudioControls({card, setAllTracks, calibrationTwo, calibrationThree, calibrationFour}) {


  const [audioData, setAudioData] = useState(null)
  const [recording, setRecording] = useState(false)
  const [playing, setPlaying] = useState(false)
//   const [dummyState, setDummyState] = useState(false)

    console.log(calibrationTwo)
    console.log(calibrationThree)
    console.log(calibrationFour)
  

  const [trackOne, setTrackOne] = useState(
    {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    })

  // one time check for mic permissions
  useEffect(() => {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        setTrackOne({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        setTrackOne({ isBlocked: true })
      },
    );
  
  }, [])

  const audioType = "audio/mp3; codecs=opus";

  const startOne = (e) => {
    if (trackOne.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          setTrackOne({ isRecording: true });
          // loader.length = 0
          // console.log(loader)
          // loader.push(e.data)
        }).catch((e) => console.error(e));
    }
  };

  const stopOne = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const file = new File(buffer, 'track-one.mp3', {
          type: audioType
        })
        setAudioData(file)
        console.log(file)
        console.log(audioData)
        const blobURL = URL.createObjectURL(blob)
        setTrackOne({ blobURL, isRecording: false })
        console.log("done")
      })
  }

  // console.log(trackOne.blobURL)
  // console.log("audioforcard")


  const formData = new FormData()
  formData.append('audio_data', audioData)
  formData.append('card_id', card.id)
    
        

  useEffect(()=>{
    fetch('/tracks', {
      method: 'POST',
      body: formData,
    })
    .then((r) => {
      if (r.ok) {
        fetch('/tracks')
        .then(r => r.json())
        .then(data => setAllTracks(data))
      }
    })
  }, [audioData])



    //logic for playall, stopall, restartall,
  const cardId = document.getElementsByClassName(`${card.id}`)

  const playAll = () => {
    console.log(cardId);
    if (cardId.length === 1){
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        firstTrack.play()
    } else if (cardId.length === 2){
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        const secondTrack = cardId[1].getElementsByTagName('audio')[0]
        firstTrack.play()
        setTimeout(()=>{secondTrack.play()}, calibrationTwo)
    } else if (cardId.length === 3) {
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        const secondTrack = cardId[1].getElementsByTagName('audio')[0]
        const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
        firstTrack.play()
        setTimeout(()=>{secondTrack.play()}, calibrationTwo)
        setTimeout(()=>{thirdTrack.play()}, calibrationTwo)
    } else if (cardId.length === 4) {
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        const secondTrack = cardId[1].getElementsByTagName('audio')[0]
        const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
        const fourthTrack = cardId[3].getElementsByTagName('audio')[0]
        firstTrack.play()
        setTimeout(()=>{secondTrack.play()}, calibrationTwo)
        setTimeout(()=>{thirdTrack.play()}, calibrationTwo)
        setTimeout(()=>{fourthTrack.play()}, calibrationTwo)
    }
}

const stopAll = () => {
    if (cardId.length === 1){
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        firstTrack.pause()
    } else if (cardId.length === 2){
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        const secondTrack = cardId[1].getElementsByTagName('audio')[0]
        firstTrack.pause()
        secondTrack.pause()
    } else if (cardId.length === 3) {
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        const secondTrack = cardId[1].getElementsByTagName('audio')[0]
        const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
        firstTrack.pause()
        secondTrack.pause()
        thirdTrack.pause()
    } else if (cardId.length === 4) {
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        const secondTrack = cardId[1].getElementsByTagName('audio')[0]
        const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
        const fourthTrack = cardId[3].getElementsByTagName('audio')[0]
        firstTrack.pause()
        secondTrack.pause()
        thirdTrack.pause()
        fourthTrack.pause()
    }
}

const restartAll = () => {
    if (cardId.length === 1){
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        firstTrack.currentTime = 0
    } else if (cardId.length === 2){
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        const secondTrack = cardId[1].getElementsByTagName('audio')[0]
        firstTrack.currentTime = 0
        secondTrack.currentTime = 0
    } else if (cardId.length === 3) {
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        const secondTrack = cardId[1].getElementsByTagName('audio')[0]
        const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
        firstTrack.currentTime = 0
        secondTrack.currentTime = 0
        thirdTrack.currentTime = 0
    } else if (cardId.length === 4) {
        const firstTrack = cardId[0].getElementsByTagName('audio')[0]
        const secondTrack = cardId[1].getElementsByTagName('audio')[0]
        const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
        const fourthTrack = cardId[3].getElementsByTagName('audio')[0]
        firstTrack.currentTime = 0
        secondTrack.currentTime = 0
        thirdTrack.currentTime = 0
        fourthTrack.currentTime = 0
    }
}

const startOverDub = () => {
    if (cardId.length === 0){
      startOne()
  } else if (cardId.length === 1){
      const firstTrack = cardId[0].getElementsByTagName('audio')[0]
      startOne()
      firstTrack.play()
    //   setTimeout(startOne(), calibrationOne)
  } else if (cardId.length === 2){
      const firstTrack = cardId[0].getElementsByTagName('audio')[0]
      const secondTrack = cardId[1].getElementsByTagName('audio')[0]
      startOne()
      firstTrack.play()
      setTimeout(()=>{secondTrack.play()}, calibrationTwo)
  } else if (cardId.length === 3) {
      const firstTrack = cardId[0].getElementsByTagName('audio')[0]
      const secondTrack = cardId[1].getElementsByTagName('audio')[0]
      const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
      startOne()
      firstTrack.play()
      setTimeout(()=>{secondTrack.play()}, calibrationTwo)
      setTimeout(()=>{thirdTrack.play()}, calibrationTwo)
  } else if (cardId.length === 4) {
      const firstTrack = cardId[0].getElementsByTagName('audio')[0]
      const secondTrack = cardId[1].getElementsByTagName('audio')[0]
      const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
      const fourthTrack = cardId[3].getElementsByTagName('audio')[0]
      startOne()
      firstTrack.play()
      secondTrack.play()
      thirdTrack.play()
      fourthTrack.play()
  }
}


const stopOverDub = () => {
    if (cardId.length === 0){
        stopOne()
  } else if (cardId.length === 1){
      const firstTrack = cardId[0].getElementsByTagName('audio')[0]
      stopOne()
      firstTrack.pause()
  } else if (cardId.length === 2){
      const firstTrack = cardId[0].getElementsByTagName('audio')[0]
      const secondTrack = cardId[1].getElementsByTagName('audio')[0]
      stopOne()
      firstTrack.pause()
      secondTrack.pause()
  } else if (cardId.length === 3) {
      const firstTrack = cardId[0].getElementsByTagName('audio')[0]
      const secondTrack = cardId[1].getElementsByTagName('audio')[0]
      const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
      stopOne()
      firstTrack.pause()
      secondTrack.pause()
      thirdTrack.pause()
  } else if (cardId.length === 4) {
      const firstTrack = cardId[0].getElementsByTagName('audio')[0]
      const secondTrack = cardId[1].getElementsByTagName('audio')[0]
      const thirdTrack = cardId[2].getElementsByTagName('audio')[0]
      const fourthTrack = cardId[3].getElementsByTagName('audio')[0]
      stopOne()
      firstTrack.pause()
      secondTrack.pause()
      thirdTrack.pause()
      fourthTrack.pause()
  }
}


const recordClicked = () => {
    if (recording === false) {
        startOverDub()
        setRecording(true)
    } else if (recording === true) {
        stopOverDub()
        setRecording(false)
    }
}

const playStopClicked = () => {
    if (playing === false) {
        playAll()
        setPlaying(true)
    } else if (playing === true) {
        stopAll()
        setPlaying(false)
    }
}


  return (
    <div>
        {/* <h1>AudioControls</h1> */}
        {/* <div class="p-4">
          <button onClick={recordClicked} class="bg-red-500 hover:bg-red-400 py-5 px-5 rounded-full"></button>
        </div> */}

        {recording ? 
                <div class="p-4">
                  <button onClick={recordClicked} class="bg-red-500 hover:bg-red-700 py-5 px-5 rounded-full animate-pulse border-red-900 border-2"></button>
                </div>
               : 
                <div class="p-4">
                  <button onClick={recordClicked} class="bg-red-500 hover:bg-red-700 py-5 px-5 rounded-full"></button>
                </div>}
   
        <button onClick={playStopClicked} onDoubleClick={restartAll} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {playing ? 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
        </svg>
        : 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
        }
        </button>
        {/* <button onClick={restartAll}>
        start over!
        </button> */}
        {/* <button onClick={startOverDub}>
        start overdub!
        </button>
        <button onClick={stopOverDub}>
        stop overdub!
        </button>
        <button onClick={recordClicked}>
        overdub!
        </button> */}
    </div>
  )
}

export default AudioControls