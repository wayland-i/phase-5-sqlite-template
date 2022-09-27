import React from 'react'

function Card({card, currentUser, setAllCards}) {

    

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
                <label name='privacy'>make public?</label>
                <input type="checkbox" name='privacy'></input>
                {/* <h4>card's user's id:{card.user.id}</h4> */}
                <button>add track</button> 
            </div>
        )
    }
}

export default Card