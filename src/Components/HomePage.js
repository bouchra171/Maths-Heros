import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../img/imag.jpg';
import "../Style/HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <button className="start-button" onClick={() => navigate('/choice')}>
        Commencer
      </button>
    </div>
  );
}

export default HomePage;
