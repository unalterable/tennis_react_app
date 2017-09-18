import React from "react";

const PLAYER1 = "Player 1";
const PLAYER2 = "Player 2";

export default class ButtonRow extends React.Component {
  handleClick(data, scorer){
    this.props.changeScore(data, scorer);
  }
  render() {
    return (
      <div className="row p-3">
        <div className="col-4">
          <button className="btn btn-primary btn-lg" id="player1Scores" onClick={this.handleClick.bind(this, this.props.score, 'player1')}>Player 1 scored</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success btn-lg" id="player2Scores" onClick={this.handleClick.bind(this, this.props.score, 'player2')}>Player 2 scored</button>
        </div>
        <div className="col-4">
          <button className="btn btn-secondary btn-lg" id="resetGame" onClick={this.handleClick.bind(this, {}, '')}>Reset Game</button>
        </div>
      </div>
    );
  }
}
