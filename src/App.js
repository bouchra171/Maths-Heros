import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import ChoicePage from './Pages/ChoicePage';
import AdditionGame from './Pages/AdditionGame';
import SubtractionGame from './Pages/SubtractionGame';
import MultiplicationGame from './Pages/MultiplicationGame';
import DivisionGame from './Pages/DivisionGame';
import Scoreboard from './Pages/Scoreboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/choice" element={<ChoicePage />} />
          <Route path="/addition" element={<AdditionGame />} />
          <Route path="/soustraction" element={<SubtractionGame />} />
          <Route path="/multiplication" element={<MultiplicationGame />} />
          <Route path="/division" element={<DivisionGame />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
