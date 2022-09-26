import React from 'react'

function Card({card, currentUser}) {
    

    // console.log("hello")
    // console.log(card.user.id)
    // console.log(currentUser.id)

    if (currentUser.id == card.user.id) {
        // console.log("hello")
    

  
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