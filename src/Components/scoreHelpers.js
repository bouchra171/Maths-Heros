export function getScoresFromLocalStorage(game) {
  try {
    const scores = JSON.parse(localStorage.getItem(`${game}Scores`));
    if (!Array.isArray(scores)) {
      throw new Error('Invalid scores format');
    }
    return scores || [];
  } catch (error) {
    console.error('Failed to get scores from localStorage:', error);
    return [];
  }
}

export function saveScoreToLocalStorage(game, score, pseudonym) {
  const scoresKey = `${game}Scores`;
  let scores = getScoresFromLocalStorage(game);

  const existingScoreIndex = scores.findIndex(s => s.pseudonym === pseudonym);

  if (existingScoreIndex > -1 && scores[existingScoreIndex].score < score) {
    scores[existingScoreIndex].score = score;
  } else if (existingScoreIndex === -1) {
    scores.push({ pseudonym, score });
  }

  scores.sort((a, b) => b.score - a.score);

  if (scores.length > 5) {
    scores = scores.slice(0, 5);
  }

  localStorage.setItem(scoresKey, JSON.stringify(scores));
}

export function getBestScores() {
  const gameTypes = ['Addition Game', 'Subtraction Game', 'Multiplication Game', 'Division Game'];
  const bestScores = {};

  for (const game of gameTypes) {
    const scores = getScoresFromLocalStorage(game);
    if (scores.length > 0) {
      bestScores[game] = scores[0];
    }
  }

  return Object.values(bestScores);
}

export function getPersonalBest(pseudonym) {
  const gameTypes = ['Addition Game', 'Subtraction Game', 'Multiplication Game', 'Division Game'];
  const personalBests = {};

  for (const game of gameTypes) {
    const scores = getScoresFromLocalStorage(game);
    const personalScore = scores.find(s => s.pseudonym === pseudonym);
    if (personalScore) {
      personalBests[game] = personalScore.score;
    }
  }

  return personalBests;
}
