import React, { useEffect, useState } from "react";
import HistoryForm from "../../components/history/HistoryForm";
import './History.scss';
import { api } from "../../services/apiCard";

function History() {
  const [cards, setCards] = useState([]);
  const [readings, setReadings] = useState([]);

  const apiTarot = api();

  useEffect(() => {
    apiTarot.getTarot().then(res => setCards(res.data));

    apiTarot.getAllUsers().then(users => {
      const allReadings = [];

      users.forEach(user => {
        if (user.readings && user.readings.length > 0) {
          user.readings.forEach(reading => {
            allReadings.push({
              ...reading,
              userName: user.name
            });
          });
        }
      });


      const sorted = allReadings
        .sort((a, b) => a.date - b.date).reverse().slice(0,5);
        
      setReadings(sorted);
    });
  }, []);

  if (readings.length === 0) {
    return <p>No hay lecturas guardadas</p>;
  }

  return (
    <div className="historyForm-wrapper">
      {readings.map(reading => (
        <HistoryForm
          key={reading.id + reading.userName}
          userName={reading.userName}
          readingDate={reading.date}
          cards={cards}
          cardSelected={reading.cards}
        />
      ))}
    </div>
  );
}

export default History;
