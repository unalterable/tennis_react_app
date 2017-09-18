import React from "react";
import PlayerRow from './player_row';
import ButtonRow from './button_row';
import WinnerRow from './winner_row';

const PLAYER1 = "Player 1";
const PLAYER2 = "Player 2";
const prettyWinner = { player1: PLAYER1, player2: PLAYER2};

export default class TennisGame extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div id="tennis_game" className="container m-5 p-3 text-center border rounded">
        { this.props.ui.blockUI ? null :
          <PlayerRow players={[
            {name: PLAYER1, score: this.props.score.player1},
            {name: PLAYER2, score: this.props.score.player2}]}/> }
        { this.props.score.winner ?
          <WinnerRow winner={prettyWinner[this.props.score.winner]}/> : null}
        { this.props.ui.blockUI ? null :
          <ButtonRow changeScore={this.props.fetchNewScore} score={this.props.score} />}
      </div>
    );
  }
}
