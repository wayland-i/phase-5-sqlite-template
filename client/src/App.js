import './stylesheets/App.css';
import MicRecorder from 'mic-recorder-to-mp3';
import { useState, useEffect } from 'react';

const Mp3Recorder = new MicRecorder({ bitRate: 512 });


function App() {
  

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


  return (
    <div className="App">
      


    </div>
  );
}

export default App;
