import React from "react";
import {connect} from "react-redux";
import { newScore } from "../actions/tennis_game";
import TennisGame from './tennis_game_view';

const mapStateToProps = state => {
  return {
    score : state.score
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newScore: (new_score) => {
      dispatch( newScore(new_score) ) }
  }
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(TennisGame)

export default Container;
