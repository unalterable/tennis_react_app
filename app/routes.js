"use strict";
const express = require('express');
const port = 3000;
const tennis_rules = require('./model/tennis_rules');

module.exports = function(middleware){
  const app = express();

  if(middleware){ app.use(middleware) }

  app.use(express.static('build'));

  app.get('/tennis_rules', function(req, res){
    const scores = tennis_rules.cleanScores(req.query);
    res.end(JSON.stringify(tennis_rules.scorePlayer(scores)));
  })

  return app
};
