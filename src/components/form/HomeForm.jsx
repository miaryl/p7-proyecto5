import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../App.css";
import "./HomeForm.scss";

function HomeForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const toastShown = useRef(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      if (!toastShown.current) {
        toast.error("Por favor escribe tu nombre para continuar");
        toastShown.current = true;
      }
      return;
    }

    try {
      
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        throw new Error("Error al guardar el nombre");
      }

      const createdUser = await response.json();
      

      toast.success("Nombre guardado con éxito");

      setName("");
      navigate("/shuffle", { state: { userId: createdUser.id } }); 
    } catch (error) {
      console.error(error);
      toast.error("No se pudo guardar el nombre");
    }
  };

  return (
    <div className="home-form-container">
      <form className="home-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre" className="sr-only">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escribe tu nombre"
          className="question-input"
        />
        <button type="submit" className="choose-button">
          Elige las cartas
        </button>
      </form>
    </div>
  );
}

export default HomeForm;