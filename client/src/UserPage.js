import React, { useState } from 'react'
import Card from './Card'

function UserPage({currentUser}) {

  const [errors, setErrors] = useState([])
  const [usersCards, setUsersCards] = useState([])

  const [cardData, setCardData] = useState({
    title: 'new card',
    description: 'description goes here',
    user_id: `${currentUser.id}`
  })

  const {title, description, user_id} = cardData
  
  const handleNewCard = () => {
    const card = {
      title, 
      description, 
      user_id
    }
    
    fetch('/cards', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(card)
    })
    .then(r => {
      if (r.ok) {
        r.json().then( setUsersCards([...usersCards, card]) )
      } else {
        r.json().then(json => setErrors(json.errors))
      }
    })
  }

  
  return (
    <div>
        <h1>User Page</h1>
        <h3>{currentUser.username} is the current user</h3>
        <button onClick={handleNewCard}>New Card</button>
        {usersCards.map(card => <Card key={card.id} title={card.title} description={card.description} user={card.user_id}/>)}
    </div>
  )
}

export default UserPage