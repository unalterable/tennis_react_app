const queryString = require('querystring');
const mustache = require('mustache');
const indexView = require('./app/view/index');

const tennis_rules = require('./app/model/tennis_rules');

const query = queryString.parse(window.location.search.substr(1));

import React from "react";
import ReactDom from "react-dom";
import renderHTML from 'react-render-html';

class Layout extends React.Component {
  scoreLink(player1, player2, scorer){
    return function(){
      window.location=`/?player1=${player1}&player2=${player2}&scorer=${scorer}`;
    };
  }
  render() {
    const data = tennis_rules.scorePlayer(query);
    return (
      <div>
        <div>Player 1</div>
        <div>{data.player1}</div>
        <div>Player 2</div>
        <div>{data.player2}</div>
        <div>{data.winner && data.winner + " Won!"}</div>
        <button id="player1Scores" onClick={this.scoreLink(data.player1, data.player2, 'player1')}>Player 1 scored</button>
        <button id="player2Scores" onClick={this.scoreLink(data.player1, data.player2, 'player2')}>Player 2 scored</button>
        <button id="resetGame" onClick={this.scoreLink(data.player1, data.player2, false)}>Reset Game</button>
      </div>
    );
  }
}
const app = document.getElementById('app');

ReactDom.render(<Layout/>, app);
