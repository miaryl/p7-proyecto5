import React from 'react'
import ShuffleButton from '../../buttons/shuffleButton/ShuffleButton';
import './CardsModal.scss';

function CardsModal({show, cardSelected, cards, onShuffle, onResult}) {
    if(!show) return null;

  return (
    <div className="modal-overlay">
    <div className="modal">
      <h2>Tus 3 cartas</h2>
      <div className="chosen-cards">
        {cardSelected.map((id) => {
          const card = cards.find((c) => c.id === id);
          return <img key={id} src={card.arcaneImage.imageSrc} alt={card.arcaneName} />;
        })}
      </div>
      <div className='btn-wrapper'>
      <ShuffleButton onClick={onShuffle}/>
      <button onClick={onResult} className='btn-result'>Resultado</button>
      </div>
    </div>
    </div>
  )
}

export default CardsModal