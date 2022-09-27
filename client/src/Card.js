import { useState } from "react"
import React from 'react'

import './stylesheets/App.css';

function Card({card, currentUser, setAllCards}) {



        // const handleOnClick = (e) => {
        //     console.log(e.target.value)
        //     console.log(card.id)
        //     console.log(card.is_public)
        // }


        //every click state is set and the nthat state is inverted

        const [privacy, setPrivacy] = useState(card.is_public)




        const [formData, SetFormData] = useState({
            id: `${card.id}`,
            is_public: `${privacy}`
        })

        const { id, is_public } = formData

        const handleOnClick = () => {

            setPrivacy(privacy => !privacy)

            const card = {
                id,
                is_public
            }

            console.log(card.is_public)

            fetch(`cards/${card.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(card)
            })
        }

    

    if (card.user_id) {
        fetch('/cards')
        .then(r => r.json())
        .then(data => setAllCards(data))
    } else if (currentUser.id == card.user.id) {
        //users cards array... setState here, lives in App
        //then in App we want to track whether or not those buttons are clicked in Card


  
    return (

    
            <div key={card.id}>
                <hr></hr>
                <h4>card id: {card.id}</h4>
                <h4>card title: {card.title}</h4>
                <h4>card description: {card.description}</h4>
                <form>
                    <label name="privacy">public</label>
                    <label className="switch">
                        <input type="checkbox" name="privacy" onClick={handleOnClick}/>
                        <span className="slider round"></span>
                    </label>
                </form>
                {/* <h4>card's user's id:{card.user.id}</h4> */}
                <button>add track</button> 
            </div>
        )
    }
}

export default Card