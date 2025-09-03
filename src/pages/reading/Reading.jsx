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
          axios.get(`https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot/${id}`)
        )
      )
        .then((responses) => {
          setCardsData(responses.map((res) => res.data));
        })
        .catch((err) => console.error(err));
    }
  }, [selectedCards]);

  return (
    <div className="reading-wrapper">
      <h2>Tu lectura</h2>
      {cardsData.length === 0 ? (
        <p>Cargando cartas...</p>
      ) : (
        <>
          <div className="card-result">
            <h3>Pasado</h3>
            <img src={cardsData[0]?.arcaneImage.imageSrc} alt={cardsData[0]?.arcaneName} />
            <p><strong>{cardsData[0]?.arcaneName}</strong></p>
            <img src={cardsData[0]?.goddessImage.imageSrc} alt={cardsData[0]?.goddesName} />
            <p><strong>{cardsData[0]?.arcaneName}</strong></p>
            <p>Diosa: {cardsData[0]?.goddessName}</p>
            <p>{cardsData[0]?.goddessDescription}</p>
          </div>

          <div className="card-result">
            <h3>Presente</h3>
            <img src={cardsData[1]?.goddessImage.imageSrc} alt={cardsData[1]?.arcaneName} />
            <p><strong>{cardsData[1]?.arcaneName}</strong></p>
            <p>Diosa: {cardsData[1]?.goddessName}</p>
            <p>{cardsData[1]?.goddessDescription}</p>
          </div>

          <div className="card-result">
            <h3>Futuro</h3>
            <img src={cardsData[2]?.goddessImage.imageSrc} alt={cardsData[2]?.arcaneName} />
            <p><strong>{cardsData[2]?.arcaneName}</strong></p>
            <p>Diosa: {cardsData[2]?.goddessName}</p>
            <p>{cardsData[2]?.goddessDescription}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Reading;