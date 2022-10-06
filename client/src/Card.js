import { useEffect, useState } from "react"
import React from 'react'
import AudioForCard from "./AudioForCard";
import './stylesheets/App.css';
import CardInfo from "./CardInfo";

function Card({card, currentUser, setAllCards, allCards, setAllTracks, allTracks}) {


    // const [editTitle, setEditTitle] = useState(false)
    // const [editDescription, setEditDescription] = useState(false)

    // console.log(card)

    const [formData, SetFormData] = useState({
        id: `${card.id}`,
        is_public: `${card.is_public}`
    })

    const { id, is_public } = formData


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
        fetch('/cards')
        .then(r => r.json())
        .then(data => setAllCards(data))
    }

    const handleDelete = (e) => {
        fetch(`/cards/${card.id}`, {
            method: 'DELETE'
        }).then(()=>{
        fetch('/cards')
        .then(r => r.json())
        .then(data => setAllCards(data))})
        
    }

    // useEffect(()=>{
    //     fetch('/cards')
    //     .then(r => r.json())
    //     .then(data => setAllCards(data))
    // }, [])


    if (card.user_id) {
        fetch('/cards')
        .then(r => r.json())
        .then(data => setAllCards(data))
    } else if (currentUser.id == card.user.id) {

  
    return (

    
            <div key={card.id} class="container mx-auto flex flex-wrap items-start my-16 ">
                <hr></hr>
                <CardInfo card={card} setAllCards={setAllCards}/>
                <button onClick={handleDelete}>Delete this Card</button>

                {card.is_public === true ? 
                <form>
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
                {/* <label name='one'>calibrate one</label>
                <input name='one' type='number'></input> */}
                <AudioForCard card={card} setAllTracks={setAllTracks} allTracks={allTracks}/>
            </div>
        )
    }
}

export default Card