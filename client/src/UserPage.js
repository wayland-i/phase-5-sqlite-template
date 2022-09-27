import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Card from './Card'

function UserPage({currentUser, allCards, setAllCards}) {

  const [errors, setErrors] = useState([])
  const history = useHistory()

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
        r.json().then( setAllCards([...allCards, card]) )
      } else {
        r.json().then(json => setErrors(json.errors))
      }
    })

    // fetch('/cards')
    // .then(r => r.json())
    // .then(data => setUsersCards(data))
  }

  // console.log(currentUser.id)
  // let cardUserIds = usersCards.map(card => card.user.id)
  // console.log(cardUserIds)

  // if (cardUserIds.includes(currentUser.id)) {
  //   console.log("hello")
  // }

  // const [privateCards, setPrivateCards] = useState([])

  // if (usersCards.user.id ==)

  console.log(allCards)

  
  return (
    <div>
        <h1>User Page</h1>
        <h3>{currentUser.username} is the current user</h3>
        <button onClick={handleNewCard}>New Card</button>
        {allCards.map(card => <Card key={card.id} card={card} currentUser={currentUser} setAllCards={setAllCards}/>)}
    </div>
  )
}

export default UserPage