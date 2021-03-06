import React from "react";
import {connect} from "react-redux";
import { fetchNewScore } from "../actions/tennis_game";
import TennisGame from '../components/tennis_game';

const mapStateToProps = state => {
  return {
    score : state.score,
    ui: state.ui
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
