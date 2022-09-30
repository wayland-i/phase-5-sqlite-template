import React, { useState, useEffect } from 'react'
import MicRecorder from 'mic-recorder-to-mp3';
import Container from './Container';


const Mp3Recorder = new MicRecorder({ bitRate: 128 });

function AudioForCard({ card, setAllTracks, allTracks}) {


  const [audioData, setAudioData] = useState(null)
  const [loader, setLoader] = useState([])
  const [dummyState, setDummyState] = useState(true)
  
  

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
          loader.length = 0
          console.log(loader)
          loader.push(e.data)
        }).catch((e) => console.error(e));
    }
  };

  const stopOne = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        // const blobMade = new Blob(loader, {type: audioType})
        // console.log(blobMade)
        const file = new File(buffer, 'track-one.mp3', {
          type: audioType
        })
        console.log(blob)
        console.log(buffer)
        console.log(loader)
        setAudioData(file)
        console.log(audioData)
        const blobURL = URL.createObjectURL(blob)
        setTrackOne({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
    
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = new FormData()
    formData.append('audio_data', audioData)
    formData.append('card_id', card.id)

    

    fetch('/tracks', {
      method: 'POST',
      body: formData,
    }).then((r) => {
      if (r.ok) {
        fetch('/tracks')
        .then(r => r.json())
        .then(data => setAllTracks(data))
      }
    })
  }


  useEffect(() => {
    fetch('/tracks')
      .then(r => r.json())
      .then(data => setAllTracks(data))
  }, [dummyState])


  const handleClickState = () => {
    return(
      setDummyState(!dummyState)
    )
  }


  return (
    <div>
      
      {/* <h1>Track 1</h1> */}
      <button onClick={startOne} disabled={trackOne.isRecording}>
        Record
      </button>

      <button onClick={stopOne} disabled={!trackOne.isRecording}>
        Stop
      </button>

      <audio src={trackOne.blobURL} controls="controls" />


      <br></br><br></br><br></br><br></br><br></br><br></br>

       {/* { <audio src={URL.createObjectURL(audioData)} controls="controls" />}  */}

       <form onSubmit={handleSubmit}>
        <button type='submit'> submit this audio to the database</button>
        <input type='file' accept='audio/*' onChange={(e) => setAudioData(e.target.files[0])}></input>
      </form>

      {/* <audio src={trackOne.blobURL} controls="controls" /> */}

      <Container allTracks={allTracks}/>

      {/* <button onClick={handleClickState}>Re-render</button> */}

    </div>
  )
}

export default AudioForCard