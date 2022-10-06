import React, {useState} from 'react'




function CardInfo({card, setAllCards}) {

    const [editTitle, setEditTitle] = useState(false)
    const [titleContent, setTitleContent] = useState(`${card.title}`)
    const [editDescription, setEditDescription] = useState(false)
    const [descriptionContent, setDescriptionContent] = useState(`${card.description}`)
    const [cardInfo, setCardInfo] = useState({
        title: {titleContent},
      })


    const handleEditTitle = () => {
        setEditTitle(true)
    }

    const handleTitleOnChange = (e) => {
        setTitleContent(e.target.value)
    }

    const [titleData, SetTitleData] = useState({
        id: `${card.id}`,
        title: `${card.title}`
    })

    // const { id, title } = titleData


    const handleTitleBlur = () => {

        const { id, title } = titleData

        const card = {
            id,
            title: `${titleContent}`
        }
        
        fetch(`cards_title/${card.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(card)
        })
        fetch('/cards')
        .then(r => r.json())
        .then(data => setAllCards(data))
    

        setEditTitle(false)
    }

    const handleEditDescription = () => {
        setEditDescription(true)
    }

    const handleDescriptionOnChange = (e) => {
        setDescriptionContent(e.target.value)
    }

    const [descriptionData, SetDescriptionData] = useState({
        id: `${card.id}`,
        description: `${card.description}`
    })


    const handleDescriptionBlur = () => {
        
        const { id, description } = descriptionData

        const card = {
            id,
            description: `${descriptionContent}`
        }
        
        fetch(`cards_description/${card.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(card)
        })
        fetch('/cards')
        .then(r => r.json())
        .then(data => setAllCards(data))
    

        setEditDescription(false)
    }
    
    




  return (
    <div class="mt-7">
            {/* <h4>card id: {card.id}</h4> */}
            {editTitle ? 
                <div>
                <input onBlur={handleTitleBlur} onChange={handleTitleOnChange} placeholder="edit title"></input>
                </div> 
                : <h1 onDoubleClick={handleEditTitle} class="text-2xl font-bold mb-2">{titleContent}</h1>}
            {/* {editDescription ?
                <div>
                <input onBlur={handleDescriptionBlur} onChange={handleDescriptionOnChange}></input>
                </div>
                : <h1 onDoubleClick={handleEditDescription}>{descriptionContent}</h1>} */}
            {/* <h2 class="text-gray-800 leading-relaxed">{card.created_at}</h2> */}
    </div>
  )
}

export default CardInfo