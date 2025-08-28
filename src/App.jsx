import Header from './components/header/Header';
import Home from './pages/home/Home';
import './App.css'; 

export default function App() {
  return (
    <>
      <Header />
      <main className="root">
        <Home />
      </main>
    </>
  );
}
