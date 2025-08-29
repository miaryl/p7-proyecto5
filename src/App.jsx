import React from "react";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsShuffle from "./pages/pickYourCards/cardsShuffle/CardsShuffle.jsx";
import { Toaster } from "react-hot-toast"; 

function App() {
  return (
    <BrowserRouter>
   
      <Toaster position="top-center" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shuffle" element={<CardsShuffle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;