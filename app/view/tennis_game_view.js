import React from "react";
import tennis_rules from '../model/tennis_rules';
import Player from './player_view';
import ButtonPanel from './button_panel';
import Winner from './winner_view';

const PLAYER1 = "Player 1";
const PLAYER2 = "Player 2";
const prettyWinner = { player1: PLAYER1, player2: PLAYER2};

export default class TennisGame extends React.Component {
  constructor(){
    super();
    this.state = { score: tennis_rules.scorePlayer({}) };
  }
  changeScore(data, scorer){
    this.setState({score: tennis_rules.scorePlayer(Object.assign(data, {scorer: scorer}))});
  }
  render() {
    return (
      <div>
        <Player player={PLAYER1} score={this.state.score.player1} />
        <Player player={PLAYER2} score={this.state.score.player2} />
        { this.state.score.winner ?
          <Winner winner={prettyWinner[this.state.score.winner]}/> : null}
        <ButtonPanel changeScore={this.changeScore.bind(this)} score={this.state.score}/>
      </div>
    );
  }
}
