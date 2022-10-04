import React from 'react'
import MicRecorder from 'mic-recorder-to-mp3';
import { useEffect, useState } from 'react';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

function AudioControls({card, setAllTracks, calibrationTwo, calibrationThree, calibrationFour}) {


  const [audioData, setAudioData] = useState(null)
  // const [loader, setLoader] = useState([])
  const [dummyState, setDummyState] = useState(false)

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
        console.log("hello")
      })
  }

  // console.log(trackOne.blobURL)
  console.log("audioforcard")


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
  if (cardId.length === 1){
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
  if (cardId.length === 1){
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






  return (
    <div>
        <h1>AudioControls</h1>
        <button onClick={startOne} disabled={trackOne.isRecording}>
        Record
        </button>

        <button onClick={stopOne} disabled={!trackOne.isRecording}>
            Stop
        </button>

        <br></br><br></br>
        {/* <input type='number' placeholder='0' onChange={onChangeCalibration}></input> */}
        <br></br><br></br>

        <button onClick={playAll} >
        play all!
        </button>
        <button onClick={stopAll}>
        stop all!
        </button>
        <button onClick={restartAll}>
        start over!
        </button>
        <button onClick={startOverDub}>
        start overdub!
        </button>
        <button onClick={stopOverDub}>
        stop overdub!
        </button>
    </div>
  )
}

export default AudioControls