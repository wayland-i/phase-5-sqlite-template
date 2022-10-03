import React, { useState, useEffect } from 'react'
import Container from './Container';


function AudioForCard({ card, setAllTracks, allTracks}) {

  return (
    <div>

      <Container allTracks={allTracks} card={card} setAllTracks={setAllTracks}/>

    </div>
  )
}

export default AudioForCard