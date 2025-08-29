import React from "react";
import "./Home.scss";
import HomeForm from "../../components/form/HomeForm";

function Home() { 
  return (
    <div className="home">
      <div className="frame">
        <div className="frame-inner">
          <h1>Bienvenida</h1>
          <h2>Venus del Tarot</h2>

         
          <HomeForm />
        </div>
      </div>
    </div>
  );
}

export default Home;