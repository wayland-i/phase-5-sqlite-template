import React, { useState } from 'react'
import Tile from './Tile'
import AudioControls from './AudioControls';


function Container({allTracks, card, setAllTracks}) {

    const [calibrationTwo, setCalibrationTwo] = useState(0)
    const [calibrationThree, setCalibrationThree] = useState(0)
    const [calibrationFour, setCalibrationFour] = useState(0)

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
        <FileDisplay />
        <AudioControls card={card} setAllTracks={setAllTracks} calibrationTwo={calibrationTwo} calibrationThree={calibrationThree} calibrationFour={calibrationFour}/>
        <label name='two'>calibrate track two</label>
        <input name='two' type='number' placeholder='250' onChange={onChangeCalibrationTwo}></input> <br></br>
        <label name='three'>calibrate track three</label>
        <input name='three' type='number' onChange={onChangeCalibrationThree}></input> <br></br>
        <label name='four'>calibrate track four</label>
        <input name='four' type='number' onChange={onChangeCalibrationFour}></input>
    </div>
  )
}

export default Container