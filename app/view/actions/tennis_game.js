export const NEW_SCORE = 'New Score';
export const ERROR_FETCHING_SCORE = 'Error Occured While Fetching Score';
export const FETCHING_NEW_SCORE = 'Fetching New Score';

export const newScore = (new_score) => {
  return {
    type: NEW_SCORE,
    payload: {new_score: new_score}
  }
}
export const errorFetchingScore = (err) => {
  return {
    type: ERROR_FETCHING_SCORE
  }
}
export const fetchingNewScore = () => {
  return {
    type: FETCHING_NEW_SCORE
  }
}

export const fetchNewScore = (score, scorer) => (dispatch)=> {
  dispatch(fetchingNewScore());
  let url = `http://localhost:3000/tennis_rules?player1=${score.player1}&player2=${score.player2}${scorer ? `&scorer=${scorer}` : ``}`;
  return fetch(url).then(
    (res)=> res.json(),
    (err)=>{ dispatch(errorFetchingScore(err)) }
  ).then(
    (json)=> { dispatch(newScore(json)) }
  )
}
