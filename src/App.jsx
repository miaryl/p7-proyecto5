import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import CardsShuffle from "./pages/pickYourCards/cardsShuffle/CardsShuffle.jsx";
import Reading from "./pages/reading/Reading.jsx";
import { Toaster } from "react-hot-toast"; 
import History from "./pages/history/History.jsx";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shuffle" element={<CardsShuffle />} />
        <Route path="/info" element={<Home />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

