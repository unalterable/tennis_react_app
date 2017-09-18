import React from "react";
import Player from './player_view';
import ButtonPanel from './button_panel';
import Winner from './winner_view';

const PLAYER1 = "Player 1";
const PLAYER2 = "Player 2";
const prettyWinner = { player1: PLAYER1, player2: PLAYER2};

export default class TennisGame extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        {this.props.ui.blockUI ? null :
          <div id="players_section">
            <Player player={PLAYER1} score={this.props.score.player1} />
            <Player player={PLAYER2} score={this.props.score.player2} />
          </div>}
        { this.props.score.winner ?
          <Winner winner={prettyWinner[this.props.score.winner]}/> : null}
        {this.props.ui.blockUI ? null :
          <ButtonPanel changeScore={this.props.fetchNewScore} score={this.props.score}/> }
      </div>
    );
  }
}
