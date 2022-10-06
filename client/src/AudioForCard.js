import React, { useState, useEffect } from 'react'
import Container from './Container';


function AudioForCard({ card, setAllTracks, allTracks, currentUser, setCurrentUser}) {

  //   useEffect(()=>{
  //   fetch('/me')
  //   .then(r => {
  //     r.json().then(data => {
  //       setCurrentUser(data)
  //     })
  //   })
  // }, [])

  console.log(currentUser)

  return (
    <div>

      <Container allTracks={allTracks} card={card} setAllTracks={setAllTracks} currentUser={currentUser}/>

    </div>
  )
}

export default AudioForCard