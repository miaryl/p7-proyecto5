import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../App.css";
import "./HomeForm.scss";

function HomeForm() {
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const toastShown = useRef(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const clean = name.trim();
    if (!clean) {
      if (!toastShown.current) {
        toast.error("Por favor escribe tu nombre para continuar");
        toastShown.current = true;
        setTimeout(() => (toastShown.current = false), 1500); 
      }
      return;
    }

    try {
      setSaving(true);

      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: clean }),
      });

      if (!response.ok) throw new Error("Error al guardar el nombre");

      const createdUser = await response.json(); 


      localStorage.setItem("currentUserId", String(createdUser.id));
      localStorage.setItem("currentUserName", createdUser.name);


      toast.success("Nombre guardado con éxito");
      setName("");
      navigate("/shuffle"); 
    } catch (error) {
      console.error(error);
      toast.error("No se pudo guardar el nombre (¿API en :3000?)");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="home-form-container">
      <form className="home-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="sr-only">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escribe tu nombre"
          className="question-input"
          disabled={saving}
          autoComplete="off"
        />
        <button type="submit" className="choose-button" disabled={saving}>
          {saving ? "Guardando..." : "Elige las cartas"}
        </button>
      </form>
    </div>
  );
}

export default HomeForm;
