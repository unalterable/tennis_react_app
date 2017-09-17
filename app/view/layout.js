import React from "react";
import tennis_rules from '../model/tennis_rules';
import Player from './player_view'

const PLAYER1 = "Player 1";
const PLAYER2 = "Player 2";

export default class Layout extends React.Component {
  constructor(){
    super();
    const query = require('querystring').parse(window.location.search.substr(1));
    this.state = {
      score: tennis_rules.scorePlayer(query)
    };
  }
  handleClick(data, scorer){
    this.setState({score: tennis_rules.scorePlayer(Object.assign(data, {scorer: scorer}))});
  }
  render() {
    return (
      <div>
        <Player player={PLAYER1} score={this.state.score.player1} />
        <Player player={PLAYER2} score={this.state.score.player2} />
        <div>{this.state.score.winner && this.state.score.winner + " Won!"}</div>
        <button id="player1Scores" onClick={this.handleClick.bind(this, this.state.score, 'player1')}>Player 1 scored</button>
        <button id="player2Scores" onClick={this.handleClick.bind(this, this.state.score, 'player2')}>Player 2 scored</button>
        <button id="resetGame" onClick={this.handleClick.bind(this, {}, '')}>Reset Game</button>
      </div>
    );
  }
}
