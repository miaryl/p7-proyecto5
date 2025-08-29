import React from "react";
import { Link } from "react-router-dom";
import "./HomeForm.scss";

function HomeForm() {
  return (
    <form className="home-form">
      <label htmlFor="nombre" className="sr-only">Nombre</label>
      <input
        id="nombre"
        type="text"
        placeholder="Escribe tu nombre"
        className="question-input"
      />
      <Link to="/shuffle">
        <button type="button" className="choose-button">
          Elige las cartas
        </button>
      </Link>
    </form>
  );
}

export default HomeForm;