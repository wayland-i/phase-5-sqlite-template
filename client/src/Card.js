import { useState } from "react"
import React from 'react'

import './stylesheets/App.css';

function Card({card, currentUser, setAllCards, allCards}) {


        const [formData, SetFormData] = useState({
            id: `${card.id}`,
            is_public: `${card.is_public}`
        })

        const { id, is_public } = formData


            // const card = {
            //     id,
            //     is_public
            // }

        const handleOnClick = (e) => {


            const card = {
                id,
                is_public: `${e.target.checked}`
            }


            fetch(`cards_privacy/${card.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(card)
            })
        }

        const handleDelete = (e) => {
            fetch(`/cards/${card.id}`, {
                method: 'DELETE'
            })
        }

    

    if (card.user_id) {
        fetch('/cards')
        .then(r => r.json())
        .then(data => setAllCards(data))
    } else if (currentUser.id == card.user.id) {

  
    return (

    
            <div key={card.id}>
                <hr></hr>
                <h4>card id: {card.id}</h4>
                <h4>card title: {card.title}</h4>
                <h4>card description: {card.description}</h4>
                <h1>card is public? {card.is_public.toString()}</h1>
                <button onClick={handleDelete}>Delete this Card</button>

                {card.is_public === true ? 
                <form>
                    <h1>ternary works</h1>
                    <label name="privacy">public</label>
                    <label className="switch">
                        <input type="checkbox" name="privacy" defaultChecked="true" onClick={handleOnClick}/>
                        <span className="slider round"></span>
                    </label>
                </form>
                :
                <form>
                    <label name="privacy">public</label>
                    <label className="switch">
                        <input type="checkbox" name="privacy" onClick={handleOnClick}/>
                        <span className="slider round"></span>
                    </label>
                </form>
                }
                {/* <form>
                    <label name="privacy">public</label>
                    <label className="switch">
                        <input type="checkbox" name="privacy" checked="true" onClick={handleOnClick}/>
                        <span className="slider round"></span>
                    </label>
                </form> */}
                {/* <h4>card's user's id:{card.user.id}</h4> */}
                <button>add track</button> 
            </div>
        )
    }
}

export default Card