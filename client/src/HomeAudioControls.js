import React, {useState} from 'react'

function HomeAudioControls({card}) {

    const [playing, setPlaying] = useState(false)

    const [calibrationTwo, setCalibrationTwo] = useState(0)
    const [calibrationThree, setCalibrationThree] = useState(0)
    const [calibrationFour, setCalibrationFour] = useState(0)
    const [calibrate, setCalibrate] = useState(false)


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

const playStopClicked = () => {
    if (playing === false) {
        playAll()
        setPlaying(true)
    } else if (playing === true) {
        stopAll()
        setPlaying(false)
    }
}


const onChangeCalibrationTwo = (e) => {
    setCalibrationTwo(e.target.value)
}
const onChangeCalibrationThree = (e) => {
    setCalibrationThree(e.target.value)
}
const onChangeCalibrationFour = (e) => {
    setCalibrationFour(e.target.value)
}


const handleCalibrate = () => {
    setCalibrate(calibrate => !calibrate)
}

  return (
    <div>
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
        <br></br>
        <h1 class="text-2xl font-bold mb-2" onClick={handleCalibrate}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
        </h1>
        {calibrate ? <div class="m-2">
            <label name='two'>calibrate track two</label>
            <input name='two' type='number' placeholder='250' onChange={onChangeCalibrationTwo}></input> <br></br>
            <label name='three'>calibrate track three</label>
            <input name='three' type='number' onChange={onChangeCalibrationThree}></input> <br></br>
            <label name='four'>calibrate track four</label>
            <input name='four' type='number' onChange={onChangeCalibrationFour}></input>
        </div>
        : null}
    </div>
  )
}

export default HomeAudioControls