import React, { useEffect } from "react";
import "./Home.scss";
import HomeForm from "../../components/form/HomeForm";

function Home() { 
  useEffect(() => {
    localStorage.removeItem("currentUserId");
    localStorage.removeItem("currentUserName");
  }, []);

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
