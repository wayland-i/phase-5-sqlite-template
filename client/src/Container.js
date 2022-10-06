import React, { useState, useEffect } from 'react'
import Tile from './Tile'
import AudioControls from './AudioControls';


function Container({allTracks, card, setAllTracks, currentUser}) {

    const [calibrationTwo, setCalibrationTwo] = useState(0)
    const [calibrationThree, setCalibrationThree] = useState(0)
    const [calibrationFour, setCalibrationFour] = useState(0)
    const [calibrate, setCalibrate] = useState(false)

    console.log(currentUser)
    console.log(allTracks)

    const trackRerender = () => {
        fetch('/tracks')
        .then(r => r.json())
        .then(data => setAllTracks(data))
    }

    const FileDisplay = () => {
        return allTracks.map(track => {
            return(
               <Tile
                key={track.id}
                track={track}
                card={card}
                trackRerender={trackRerender}
            />
            )
        })
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
        <FileDisplay trackRerender={trackRerender}/>
        <AudioControls card={card} setAllTracks={setAllTracks} calibrationTwo={calibrationTwo} calibrationThree={calibrationThree} calibrationFour={calibrationFour}/>
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
        </div> : null}
        
        
    </div>
  )
}

export default Container