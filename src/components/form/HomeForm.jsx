import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../App.css";
import "./HomeForm.scss";

function HomeForm() {
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();
  const toastShown = useRef(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      if (!toastShown.current) {
        toast.error("⚠️ Por favor escribe tu nombre para continuar");
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
        body: JSON.stringify({ nombre }),
      });

      if (!response.ok) {
        throw new Error("Error al guardar el nombre");
      }

      toast.success("✅ Nombre guardado con éxito");

      setNombre("");
      navigate("/shuffle"); 
    } catch (error) {
      console.error(error);
      toast.error("❌ No se pudo guardar el nombre");
    }
  };

  return (
    <div className="home-form-container">
      <form className="home-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre" className="sr-only">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
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