import React from 'react';
import venusBack from "../../assets/venustarot1.svg";

function RandomCards({cards, shuffled, cardSelected, onSelect}) {


  return (
    <>
     {cards.map((card, index) => (
        <div
          key={card.id}
          className={`card ${shuffled ? "shuffled" : ""} ${
            cardSelected.includes(card.id) ? "selected" : ""
          }`}
          style={{ "--index": index }}
          onClick={() => onSelect(card.id)}
        >
          <div className="cardBack">
                <img src={venusBack} alt="card back" />
              </div>
        </div>
      ))}
    
    </>
  )
}



export default RandomCards
