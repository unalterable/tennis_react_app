import React from "react";
import {connect} from "react-redux";
import { fetchNewScore } from "../actions/tennis_game";
import TennisGame from './tennis_game_view';

const mapStateToProps = state => {
  return {
    score : state.score
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNewScore: (score, scorer) => {
      dispatch( fetchNewScore(score, scorer) ) }
  }
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(TennisGame)

export default Container;
