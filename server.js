"use strict";
const http = require('http');
const url = require('url');
const tennis_rules = require('./src/tennis_rules');

const TEMPLATE = function(vars){
  let winnerString = false;
  if(vars.winner === 'player1'){
    winnerString = 'Player 1 Won!';
  } else if(vars.winner === 'player2'){
    winnerString = 'Player 2 Won!';
  }
  return `<div>Player 1</div><div>${vars.player1}</div>
          <div>Player 2</div><div>${vars.player2}</div>

          <div>${winnerString ? winnerString : ''}</div>

          <button onclick="window.location='/?player1=${vars.player1}&player2=${vars.player2}&scorer=player1';">Player 1 scored</button>
          <button onclick="window.location='/?player1=${vars.player1}&player2=${vars.player2}&scorer=player2';">Player 2 scored</button>

          <button onclick="window.location='/?player1=0&player2=0';">Reset Game</button>`;
};

const SERVER = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  const response = TEMPLATE(tennis_rules.scorePlayer(queryObject));
  res.end(response);
});

module.exports = SERVER;
