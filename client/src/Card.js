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


        const date = new Date(`${card.created_at}`)
        const presentDate = date.toDateString()
        const presentTime = date.toTimeString().split(' ')[0]
        let dtFormat = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric'
        });


        const reFormat = dtFormat.format(date)


  
    return (

    
            <div key={card.id} class="container mx-auto flex flex-wrap items-start my-16 justify-center">
                <div class="lg:w-3/4 w-full lg:pr-3">
                    <div class="bg-gray-200 rounded-xl p-6">
                        <h2 class="text-gray-800 leading-relaxed float-right relative">{presentDate}</h2>
                        <h2 class="text-gray-800 leading-relaxed float-left relative">{reFormat}</h2>
                        <CardInfo card={card} setAllCards={setAllCards}/>
                        <button onClick={handleDelete} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">Delete this Card</button>

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
                </div>
            </div>
        )
    }
}

export default Card