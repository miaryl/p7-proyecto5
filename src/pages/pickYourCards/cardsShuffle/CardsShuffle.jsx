import React, { useEffect, useState } from "react";
import "./CardsShuffle.scss";
import frameImg from "../../../assets/renaissanceFrame.png";
import { api } from "../../../services/apiCard";
import RandomCards from "../../../components/randomCards/RandomCards";

function CardsShuffle() {
  const [cards, setCards] = useState([]);
  const [shuffled, setShuffled] = useState(false);
  const [cardSelected, setCardSelected] = useState([]);

  const apiTarot = api();

  useEffect(() => {
    apiTarot.getTarot().then((res) => {
      setCards(res.data);
    });
  }, []);

  const shuffledCards = () => {
    setCards([...cards].sort(() => Math.random() - 0.5));
    setShuffled(true);
    setCardSelected([]);
  };

  const handleSelect = (id) => {
    if (cardSelected.includes(id)) {
      setCardSelected(cardSelected.filter((s) => s != id));
    } else if (cardSelected.length < 3) {
      setCardSelected([...cardSelected, id]);
    }
  };

  return (
    <>
      <div className="card-shuffle-wrapper">
      
      <img src={frameImg} alt="frame background" className="frame" />

      <div className={`container ${shuffled ? "shuffled" : ""}`}>
        <p>Elige tres cartas: Pasado, presente y futuro</p>
        <RandomCards
          cards={cards}
          shuffled={shuffled}
          cardSelected={cardSelected}
          onSelect={handleSelect}
        />

        <button onClick={shuffledCards} className="btn-shuffle">
            Shuffle
          </button>
      </div>
    </div>
      
    </>
  );
}
export default CardsShuffle;
