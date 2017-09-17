import React from "react";
import tennis_rules from '../model/tennis_rules';
import Player from './player_view';

const PLAYER1 = "Player 1";
const PLAYER2 = "Player 2";

export default class ButtonPanel extends React.Component {
  handleClick(data, scorer){
    this.props.changeScore(data, scorer);
  }
  render() {
    return (
      <div>
        <button id="player1Scores" onClick={this.handleClick.bind(this, this.props.score, 'player1')}>Player 1 scored</button>
        <button id="player2Scores" onClick={this.handleClick.bind(this, this.props.score, 'player2')}>Player 2 scored</button>
        <button id="resetGame" onClick={this.handleClick.bind(this, {}, '')}>Reset Game</button>
      </div>
    );
  }
}
