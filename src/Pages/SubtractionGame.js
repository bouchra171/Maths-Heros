import React from 'react';
import MathGame from '../Components/MathGame';

function SubtractionGame() {
  const pseudonym = localStorage.getItem('pseudonym') || "Anonyme";

  function generateSubtractionQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return {
      text: `${num1} - ${num2}`,
      correctAnswer: num1 - num2
    };
  }

  function checkSubtractionAnswer(question, userAnswer) {
    return question.correctAnswer === parseInt(userAnswer, 10);
  }

  return (
    <MathGame
      generateQuestion={generateSubtractionQuestion}
      checkAnswerFunction={checkSubtractionAnswer}
      gameName="Subtraction Game"
      pseudonym={pseudonym}
    />
  );
}

export default SubtractionGame;
