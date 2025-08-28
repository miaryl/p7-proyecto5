import React from "react";
import "./Home.scss";
import frameImg from "../../assets/renaissanceFrame.png";
import { Link } from "react-router-dom";

function Home() { 
  return (
    <div className="home">
      <div className="frame">
        <div className="frame-inner">
          <h1>Bienvenida</h1>
          <h2>Venus del Tarot</h2>

          <label htmlFor="nombre" className="sr-only">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Escribe tu nombre"
            className="question-input"
          />
          <Link to="/shuffle" >
            <button className="choose-button">Elige las cartas</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;