import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Card from './Card'

function UserPage({currentUser, allCards, setAllCards, setAllTracks, allTracks}) {

  const [errors, setErrors] = useState([])
  const history = useHistory()

  const [cardData, setCardData] = useState({
    title: 'new card',
    description: 'description goes here',
    is_public: false,
    user_id: `${currentUser.id}`
  })

  const {title, description, is_public, user_id} = cardData

  
  const handleNewCard = () => {
    const card = {
      title, 
      description,
      is_public, 
      user_id
    }
    
    fetch('/cards', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(card)
    })
    .then(r => {
      if (r.ok) {
        r.json().then( setAllCards([...allCards, card]) )
      } else {
        r.json().then(json => setErrors(json.errors))
      }
    })


  }


  console.log(allCards)

  
  return (
    <div>
        <h1>User Page</h1>
        <h3>{currentUser.username} is the current user</h3>
        <button onClick={handleNewCard}>New Card</button>
        {allCards.map(card => <Card key={card.id} card={card} currentUser={currentUser} setAllCards={setAllCards} allCards={allCards} setAllTracks={setAllTracks} allTracks={allTracks}/>)}
    </div>
  )
}

export default UserPage