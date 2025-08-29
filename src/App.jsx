import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsShuffle from "./pages/pickYourCards/cardsShuffle/CardsShuffle.jsx";
import { Toaster } from "react-hot-toast"; 

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shuffle" element={<CardsShuffle />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

