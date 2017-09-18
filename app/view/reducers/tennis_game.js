import { combineReducers } from 'redux'
import { FETCHING_NEW_SCORE, NEW_SCORE } from '../actions/tennis_game'
import tennis_rules from '../../model/tennis_rules'

const scoreReducer = (score = { player1: '0', player2: '0' }, action) => {
  switch (action.type) {
    case NEW_SCORE:
      return action.payload.new_score;
    case FETCHING_NEW_SCORE:

    default:
      return score
  }
}

const uiReducer = (uiState = {blockUI: false}, action) => {
  switch (action.type) {
    case NEW_SCORE:
      return Object.assign({}, uiState, {blockUI: false});
    case FETCHING_NEW_SCORE:
      return Object.assign({}, uiState, {blockUI: true});
    default:
      return uiState;
  }
}

const reducer = combineReducers({
  score: scoreReducer,
  ui: uiReducer
})

export default reducer
