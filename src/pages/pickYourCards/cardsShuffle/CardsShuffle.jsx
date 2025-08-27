import React, { useEffect, useState } from 'react'
import "./CardsShuffle.scss"
import venusBack from "../../../assets/venustarot1.svg"

function CardsShuffle() {
    const [cards, setCards] = useState([]);
    const [shuffled, setShuffled] = useState(false);
    const [cardSelected, setCardSelected] = useState([]);

    useEffect(()=>{
        fetch('https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot')
        .then((res)=>res.json())
        .then((data)=>{
            setCards(data);
        })
        .catch((error)=>console.error("error", error));
    },[]);

    const shuffledCards=()=>{
        setCards([...cards].sort(()=> Math.random() -0.5));
        setShuffled(true);
        setCardSelected([]);
    }

    const handleSelect = (id)=>{
        if(cardSelected.includes(id)){
            setCardSelected(cardSelected.filter((s) => s != id));
        }else if(cardSelected.length < 3){
            setCardSelected([...cardSelected, id]);
        }
    }



  return (
    <div className="card-shuffle-wrapper">
      
      <div className="container">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${shuffled ? "shuffled" : ""} ${
              cardSelected.includes( card.id) ? "selected" : ""
            }`}
            style={{ "--index": index }}
            onClick={() => handleSelect(card.id)}
          >
            <div className="cardBack">
              <img src={venusBack} alt="card back" />
            </div>
          </div>
        ))}
      </div>
      <div className='btn-wrapper'>
      <button onClick={shuffleCards}>Shuffle</button>
      </div>
    </div>
  )
}
export default CardsShuffle