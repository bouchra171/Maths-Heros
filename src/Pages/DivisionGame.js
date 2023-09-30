import React from 'react';
import MathGame from '../Components/MathGame';

function DivisionGame() {
  const pseudonym = localStorage.getItem('pseudonym') || "Anonyme";

  function generateDivisionQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;  
    const num2 = Math.floor(Math.random() * 9) + 1;   
    return {
      text: `${num1 * num2} ÷ ${num2}`,
      correctAnswer: num1
    };
  }

  function checkDivisionAnswer(question, userAnswer) {
    return question.correctAnswer === parseInt(userAnswer, 10);
  }

  return (
    <MathGame
      generateQuestion={generateDivisionQuestion}
      checkAnswerFunction={checkDivisionAnswer}
      gameName="Division Game"
      pseudonym={pseudonym}
    />
  );
}

export default DivisionGame;
