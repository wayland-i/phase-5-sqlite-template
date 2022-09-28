import React, { useState, useEffect } from 'react'
import HomeCard from './HomeCard'

function Home() {


  const [homeCards, setHomeCards] = useState([])
  const [errors, setErrors] = useState(false)


  useEffect(()=>{
    fetch('/cards_home')
    .then(r => {
      if (r.ok){
        r.json().then(data => {
          setHomeCards(data)
        })
      } else {
        r.json().then(data => setErrors(data.errors))
      }
    })
  }, [])

  console.log(homeCards)


  return (
    <div>
        <h1>Home</h1>
        {homeCards.map(card => <HomeCard key={card.id} card={card}/>)}
    </div>
  )
}

export default Home