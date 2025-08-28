import React from "react";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CardsShuffle from "./pages/pickYourCards/cardsShuffle/CardsShuffle.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shuffle" element={<CardsShuffle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

