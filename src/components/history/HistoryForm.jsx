import React from "react";
import "./HistoryForm.scss";

function HistoryForm({ userName, cards, cardSelected, readingDate }) {
  return (
    <div className="history-item">
      <div className="name-date-wrapper">
        <p>Nombre: {userName}</p>
        <p>{new Date(readingDate).toLocaleString()}</p>
      </div>

      <div className="saved-3cards">
        {cardSelected.map(id => {
          const card = cards.find(c => String(c.id) === String(id));
          if (!card) return null;

          return (
            <div key={id} className="saved-card">
              <img src={card.arcaneImage.imageSrc} alt={card.arcaneName} />
              <p>{card.arcaneDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HistoryForm;
