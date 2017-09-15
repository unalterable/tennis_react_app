"use strict";
const express = require('express');
const app = express();
const mustache = require('mustache');
const tennis_rules = require('./app/model/tennis_rules');
const indexView = require('./app/view/index');
const port = 3000;

app.use("/view", express.static(__dirname + '/app/view'));

app.get('/', function(req, res){
  const data = tennis_rules.scorePlayer(req.query);
  res.end(mustache.render(indexView, data));
});

module.exports = app.listen(port);
