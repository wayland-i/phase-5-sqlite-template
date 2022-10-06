import React from 'react'

function About() {
  return (
    <div class="grid h-screen place-items-center m-1">
        {/* <h1 class="text-2xl font-bold mb-2">About</h1> */}
        <h1 class="text-4xl font-bold mt-6">Hello and welcome to DEMO!</h1>
        <br></br>
        <h1 class="text-2xl font-bold mb-2 mt-7">This web application allows you to record audio tracks, listen back to them, and share them publically... all from your web browser!</h1>
        <br></br>
        <div class="flex">
          <img src='/rockStar.jpg' width='400' height='400' alt='picture' class='m-40'></img>
          {/* <h1>Meet the founder: Ian Iversen</h1> */}
          <img src='/armsCrossed.jpg' width='400' height='400' alt='picture' class='m-40'></img>
        </div>
        <div>
          <h1 class="text-4xl font-bold mb-10">Instructions</h1>
          <h1 class="text-2xl font-bold mb-2">Each User can make a DEMO card by navigating to their userpage and clicking the "new card" button.</h1>
          <br></br>
          <h1 class="text-2xl font-bold mb-2">Clicking the record button once will begin a new recording, pressing it again will stop and save that recording.</h1>
          <br></br>
          <h1 class="text-2xl font-bold mb-2">If there are existing recorded tracks in that card, they will play as you record your next track.</h1>
          <br></br>
          <h1 class="text-2xl font-bold mb-2">Press the square play button to listen back to all of your tracks in that card at once, press it again to stop all tracks, and double click it to restart all tracks.</h1>
          <br></br>
          <h1 class="text-2xl font-bold mb-2">If you are happy with your card and would like to share it with the world, go ahead and toggle the "public" switch.</h1>
        </div>
    </div>
  )
}

export default About