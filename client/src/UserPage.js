import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Card from './Card'

function UserPage({currentUser, allCards, setAllCards, setAllTracks, allTracks, setCurrentUser}) {

  const [errors, setErrors] = useState([])
  const history = useHistory()


  console.log(currentUser)

  //   useEffect(()=>{
  //   fetch('/me')
  //   .then(r => {
  //     r.json().then(data => {
  //       setCurrentUser(data)
  //     })
  //   })
  // }, [])


  const [cardData, setCardData] = useState({
    title: `new card`,
    description: 'description',
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


  // console.log(allCards)

  
  return (
    <div>
        <h1 class="text-2xl font-bold mb-2">{currentUser.username}'s Page</h1>
        <button onClick={handleNewCard} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New Card</button>
        {allCards.map(card => <Card key={card.id} card={card} currentUser={currentUser} setCurrentUser={setCurrentUser} setAllCards={setAllCards} allCards={allCards} setAllTracks={setAllTracks} allTracks={allTracks}/>)}
    </div>
  )
}

export default UserPage