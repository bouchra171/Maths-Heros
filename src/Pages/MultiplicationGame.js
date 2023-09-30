import React from 'react';
import MathGame from '../Components/MathGame';

function MultiplicationGame() {
  const pseudonym = localStorage.getItem('pseudonym') || "Anonyme";

  function generateMultiplicationQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return {
      text: `${num1} × ${num2}`,
      correctAnswer: num1 * num2
    };
  }

  function checkMultiplicationAnswer(question, userAnswer) {
    return question.correctAnswer === parseInt(userAnswer, 10);
  }

  return (
    <MathGame
      generateQuestion={generateMultiplicationQuestion}
      checkAnswerFunction={checkMultiplicationAnswer}
      gameName="Multiplication Game"
      pseudonym={pseudonym}
    />
  );
}

export default MultiplicationGame;
