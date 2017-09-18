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
  // changeScore(data, scorer){
  //   let url = `http://localhost:3000/tennis_rules?player1=${data.player1}&player2=${data.player2}`
  //   if(scorer){url = url + `&scorer=${scorer}`};
  //   fetch(url).then(res=>{ res.json().then(json=>{ this.props.newScore(json) }) })
  // }
  render() {
    return (
      <div>
        <Player player={PLAYER1} score={this.props.score.player1} />
        <Player player={PLAYER2} score={this.props.score.player2} />
        { this.props.score.winner ?
          <Winner winner={prettyWinner[this.props.score.winner]}/> : null}
        <ButtonPanel changeScore={this.props.fetchNewScore} score={this.props.score}/>
      </div>
    );
  }
}
