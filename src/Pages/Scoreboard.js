import React, { useState, useEffect } from 'react';
import '../Style/Style.css';
import { getBestScores, getPersonalBest } from '../Components/scoreHelpers';

function Scoreboard() {
  const [bestScores, setBestScores] = useState([]);
  const [personalBest, setPersonalBest] = useState({}); 
  const pseudonym = "JohnDoe"; 

  useEffect(() => {
    const scores = getBestScores();
    const personal = getPersonalBest(pseudonym);
    console.log("Best Scores:", scores);
    setBestScores(scores);
    setPersonalBest(personal); 
  }, []);

  return (
    <div className="container">
      <h1>Meilleurs scores</h1>
      <div className="cards-container">
        {bestScores.map((score, index) => (
          <div className={`score-card ${score.score === personalBest[score.game] ? 'personal-best' : ''}`} key={index}>
            <div className="game-icon">
            <div className="game-icon">
  {score.game === 'Addition' && <i className="fas fa-plus-circle" style={{ fontSize: '50px', color: '#f6d365' }}></i>}
  {score.game === 'Subtraction' && <i className="fas fa-minus-circle" style={{ fontSize: '50px', color: '#FBD4D4' }}></i>}
  {score.game === 'Multiplication' && <i className="fas fa-times-circle" style={{ fontSize: '50px', color: '#FFDEDE' }}></i>}
  {score.game === 'Division' && <i className="fas fa-divide" style={{ fontSize: '50px', color: '#BFD4E7' }}></i>}
</div>


            </div>
            <div className="score-details">
              <h2>{score.game}</h2>
              <p><strong>Pseudonyme:</strong> {score.pseudonym}</p>
              <p><strong>Score:</strong> {score.score}</p>
            </div>
            {score.score >= 100 && <div className="badge">Badge: 100 points</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scoreboard;
