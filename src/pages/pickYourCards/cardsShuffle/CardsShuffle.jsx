import React, { useEffect, useState } from "react";
import "./CardsShuffle.scss";
import toast from "react-hot-toast";
import { api } from "../../../services/apiCard";
import RandomCards from "../../../components/randomCards/RandomCards";
import ShuffleButton from "../../../components/buttons/shuffleButton/ShuffleButton";
import { useLocation, useNavigate } from "react-router-dom";
import CardsModal from "../../../components/modals/cardsModal/CardsModal";

function CardsShuffle() {
  const [cards, setCards] = useState([]);
  const [shuffled, setShuffled] = useState(false);
  const [cardSelected, setCardSelected] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();
  const [currentUserId, setCurrentUserId] = useState(
    location.state?.userId || null
  );

  const apiTarot = api();
  const navigate = useNavigate();

  useEffect(() => {
    apiTarot.getTarot().then((res) => {
      setCards(res.data);
    });
  }, []);

  useEffect(() => {
    if (cardSelected.length === 3) {
      setTimeout(() => {
        setShowModal(true);
      }, 1300);
      
    }
  }, [cardSelected]);

  useEffect(() => {
    if (!currentUserId) {
      apiTarot
        .getLastUser()
        .then((user) => {
          if (user) setCurrentUserId(user.id);
        })
        .catch((err) => console.error(err));
    }
  }, [currentUserId]);

  const shuffledCards = () => {
    setCards([...cards].sort(() => Math.random() - 0.5));
    setShuffled(true);
    setCardSelected([]);
  };

  const handleSelect = (id) => {
    const idString = String(id);
    if (cardSelected.includes(idString)) {
      setCardSelected(cardSelected.filter((s) => s != idString));
    } else if (cardSelected.length < 3) {
      setCardSelected([...cardSelected, idString]);
    }
  };


const handleResult = ()=>{
  if(!currentUserId){
    toast.error("No existe este usuario");
    return;
  }

    apiTarot.addReading(currentUserId, cardSelected)
      .then(() => {
        setShowModal(false);
        navigate("/reading", { state: { selectedCards: cardSelected } });
      })
      .catch((error) => {
        console.error(error);
        toast.error("No se pudo guardar la lectura");
      });
  };

  const handleModalShuffle = () => {
    setShowModal(false);
    shuffledCards();
  };

  return (
    <>
      <div className="card-shuffle-wrapper">
        <div className={`container ${shuffled ? "shuffled" : ""}`}>
          <h3>Elige 3 cartas: Pasado, presente y futuro</h3>
          <RandomCards
            cards={cards}
            shuffled={shuffled}
            cardSelected={cardSelected}
            onSelect={handleSelect}
          />

          <ShuffleButton onClick={shuffledCards} className="shuffle-btn" />
          <CardsModal
            show={showModal}
            cards={cards}
            cardSelected={cardSelected}
            onShuffle={handleModalShuffle}
            onResult={handleResult}
          />
        </div>
      </div>
    </>
  );
}
export default CardsShuffle;
