import React from "react";
import tennis_rules from '../model/tennis_rules';

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
        <div>Player 1</div>
        <div>{this.state.score.player1}</div>
        <div>Player 2</div>
        <div>{this.state.score.player2}</div>
        <div>{this.state.score.winner && this.state.score.winner + " Won!"}</div>
        <button id="player1Scores" onClick={this.handleClick.bind(this, this.state.score, 'player1')}>Player 1 scored</button>
        <button id="player2Scores" onClick={this.handleClick.bind(this, this.state.score, 'player2')}>Player 2 scored</button>
        <button id="resetGame" onClick={this.handleClick.bind(this, {}, '')}>Reset Game</button>
      </div>
    );
  }
}
