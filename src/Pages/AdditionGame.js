import React from 'react';
import MathGame from '../Components/MathGame';

function AdditionGame() {
  const pseudonym = localStorage.getItem('currentPseudonym') || "Anonyme"; 

  function generateAdditionQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return {
      text: `${num1} + ${num2}`,
      correctAnswer: num1 + num2
    };
  }

  function checkAdditionAnswer(question, userAnswer) {
    return question.correctAnswer === parseInt(userAnswer, 10);
  }

  return (
    
      
      <MathGame
        generateQuestion={generateAdditionQuestion}
        checkAnswerFunction={checkAdditionAnswer}
        gameName="Addition Game"
        pseudonym={pseudonym}
      />
  
  );
}

export default AdditionGame;
