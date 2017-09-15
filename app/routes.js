"use strict";
const express = require('express');
const app = express();
const port = 3000;
const tennis_rules = require('./model/tennis_rules');

app.use(express.static('build'));

app.get('/tennis_rules', function(req, res){
  res.end(JSON.stringify(tennis_rules.scorePlayer(req.query)));
})

module.exports = app;
