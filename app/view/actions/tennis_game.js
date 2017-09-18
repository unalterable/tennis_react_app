export const NEW_SCORE = 'New Score';

export const newScore = (new_score) => {
  return {
    type: NEW_SCORE,
    payload: {new_score: new_score}
  }
}
