import React, { useState, useEffect } from 'react';
import { saveScoreToLocalStorage } from './scoreHelpers';

function MathGame({ generateQuestion, checkAnswerFunction, gameName, pseudonym }) {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(generateQuestion());
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);
    
    if (timer <= 0) {
      endGame();
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [timer]);

  function checkAnswer() {
    if (checkAnswerFunction(question, userAnswer)) {
      setScore(prevScore => prevScore + 1);
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect!");
      endGame();
    }

    setUserAnswer("");
    setQuestion(generateQuestion());
  }

  function endGame() {
    saveScoreToLocalStorage(gameName, score, pseudonym);
    setFeedback(`Game over! Your score in ${gameName} is: ${score}`);
  }
  
  return (
    <div className="math-game">
      <h2>{gameName}</h2>
      <div>Question: {question.text}</div>
      <div>
        Your Answer: 
        <input 
          type="text" 
          value={userAnswer} 
          onChange={e => setUserAnswer(e.target.value)}
        />
        <button onClick={checkAnswer}>Submit</button>
      </div>
      <div>Time left: {timer}s</div>
      <div>Score: {score}</div>
      {feedback && <div>{feedback}</div>}
    </div>
  );
}

export default MathGame;
