import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Reading.scss";

function Reading() {
  const location = useLocation();
  const { selectedCards } = location.state || { selectedCards: [] };
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    if (selectedCards.length > 0) {
      Promise.all(
        selectedCards.map((id) =>
          axios.get(
            `https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot/${id}`
          )
        )
      )
        .then((responses) => {
          setCardsData(responses.map((res) => res.data));
        })
        .catch((err) => console.error(err));
    }
  }, [selectedCards]);

  // etiquetas de cada posición
  const labels = ["Pasado", "Presente", "Futuro"];

  return (
    <div className="reading-wrapper">
      {cardsData.map((card, index) => (
        <div className="card-result" key={card.id || index}>
          <div className="card-content">
            {/* Label */}
            <div className="label">
              <h3>{labels[index]}</h3>
            </div>

            {/* Imagen de la carta */}
            <div className="arcane-image">
              <img
                src={card.arcaneImage?.imageSrc}
                alt={card.arcaneName}
              />
            </div>

            {/* Texto de la carta */}
            <div className="arcane-text">
              <h4>{card.arcaneName}</h4>
              <p>{card.arcaneDescription}</p>
            </div>

            {/* Diosa */}
            <div className="goddess">
              <img
                src={card.goddessImage?.imageSrc}
                alt={card.goddessName}
              />
              <h4>{card.goddessName}</h4>
              <p>{card.goddessDescription}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reading;
