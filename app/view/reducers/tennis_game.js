import { combineReducers } from 'redux'
import { NEW_SCORE } from '../actions/tennis_game'
import tennis_rules from '../../model/tennis_rules'

const scoreReducer = (score = { player1: '0', player2: '0' }, action) => {
  switch (action.type) {
    case NEW_SCORE:
      return action.payload.new_score;
    default:
      return score
  }
}

const reducer = combineReducers({
  score: scoreReducer
})

export default reducer
