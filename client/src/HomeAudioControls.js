import React, {useState} from 'react'

function HomeAudioControls({card}) {

    const [playing, setPlaying] = useState(false)

    const [calibrationTwo, setCalibrationTwo] = useState(0)
    const [calibrationThree, setCalibrationThree] = useState(0)
    const [calibrationFour, setCalibrationFour] = useState(0)


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



  return (
    <div>
        <button onClick={playStopClicked} onDoubleClick={restartAll}>
        play/stop//restart
        </button>
        <br></br>
        <label name='two'>calibrate track two</label>
        <input name='two' type='number' placeholder='250' onChange={onChangeCalibrationTwo}></input> <br></br>
        <label name='three'>calibrate track three</label>
        <input name='three' type='number' onChange={onChangeCalibrationThree}></input> <br></br>
        <label name='four'>calibrate track four</label>
        <input name='four' type='number' onChange={onChangeCalibrationFour}></input>
    </div>
  )
}

export default HomeAudioControls